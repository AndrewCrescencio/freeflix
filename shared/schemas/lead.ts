import * as v from 'valibot'

export const leadSchema = v.object({
  email: v.pipe(
    v.string('E-mail é obrigatório'),
    v.email('E-mail inválido'),
    v.maxLength(254, 'E-mail muito longo')
  ),
  name: v.optional(
    v.pipe(
      v.string(),
      v.maxLength(100, 'Nome muito longo'),
      v.check(value => value === '' || value.length >= 1, 'Nome deve ter pelo menos 1 caractere')
    ),
    ''
  ),
  consent: v.pipe(
    v.boolean('Consentimento é obrigatório'),
    v.check(value => value === true, 'Você deve concordar com a política de privacidade')
  ),
  honeypot: v.optional(v.string(), ''),
  source: v.optional(v.string(), 'landing')
})

export type LeadInput = v.InferInput<typeof leadSchema>
export type LeadOutput = v.InferOutput<typeof leadSchema>

export interface LeadSubmitResponse {
  success: boolean
  message: string
}