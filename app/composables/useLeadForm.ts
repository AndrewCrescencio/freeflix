import type { LeadInput, LeadSubmitResponse } from '#shared/schemas/lead'
import { ref } from 'vue'

export interface UseLeadFormReturn {
  submit: (data: LeadInput) => Promise<LeadSubmitResponse>
  status: Ref<'idle' | 'loading' | 'success' | 'error'>
  error: Ref<string | null>
  message: Ref<string | null>
  reset: () => void
}

export function useLeadForm(): UseLeadFormReturn {
  const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
  const error = ref<string | null>(null)
  const message = ref<string | null>(null)

  const submit = async (data: LeadInput): Promise<LeadSubmitResponse> => {
    status.value = 'loading'
    error.value = null
    message.value = null

    try {
      const response = await $fetch<LeadSubmitResponse>('/api/leads', {
        method: 'POST',
        body: data
      })
      
      status.value = 'success'
      message.value = response.message
      return response
    } catch (err: unknown) {
      status.value = 'error'
      error.value = (err as { data?: { statusMessage?: string } }).data?.statusMessage || 'Erro ao enviar. Tente novamente.'
      throw err
    }
  }

  const reset = () => {
    status.value = 'idle'
    error.value = null
    message.value = null
  }

  return { submit, status, error, message, reset }
}