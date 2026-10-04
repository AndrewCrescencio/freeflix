import { leadSchema } from '#shared/schemas/lead'
import { getLeadStore } from '#server/utils/lead-store'
import type { H3Event } from 'h3'
import * as v from 'valibot'

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minuto
const RATE_LIMIT_MAX = 5 // 5 requisições por minuto por IP
const ipRequests = new Map<string, number[]>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const requests = ipRequests.get(ip) || []
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW)
  
  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false
  }
  
  recentRequests.push(now)
  ipRequests.set(ip, recentRequests)
  return true
}

function getClientIP(event: H3Event): string {
  return event.node.req.headers['x-forwarded-for'] as string || 
         event.node.req.headers['x-real-ip'] as string || 
         'unknown'
}

export default defineEventHandler(async (event): Promise<{ success: boolean; message: string }> => {
  const ip = getClientIP(event)
  
  if (!checkRateLimit(ip)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Muitas tentativas. Tente novamente em um minuto.'
    })
  }

  const body = await readBody(event)
  
  const result = v.safeParse(leadSchema, body)
  
  if (!result.success) {
    const errors = result.issues.map((issue: v.BaseIssue<unknown>) => `${issue.path?.[0] || 'campo'}: ${issue.message}`).join('; ')
    throw createError({
      statusCode: 400,
      statusMessage: `Dados inválidos: ${errors}`
    })
  }

  const { honeypot, ...leadData } = result.output
  
  if (honeypot) {
    return { success: true, message: 'Obrigado! Você entrou na lista de espera.' }
  }

  const store = getLeadStore()
  return store.save(leadData)
})