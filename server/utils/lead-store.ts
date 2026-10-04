import type { LeadInput, LeadSubmitResponse } from '#shared/schemas/lead'

export interface LeadStore {
  save(lead: LeadInput): Promise<LeadSubmitResponse>
}

export class InMemoryLeadStore implements LeadStore {
  private leads: LeadInput[] = []

  async save(lead: LeadInput): Promise<LeadSubmitResponse> {
    this.leads.push(lead)
    console.log('[LeadStore] Novo lead salvo:', { email: lead.email, source: lead.source })
    return { success: true, message: 'Obrigado! Você entrou na lista de espera.' }
  }

  getAll(): LeadInput[] {
    return [...this.leads]
  }
}

let storeInstance: LeadStore | null = null

export function getLeadStore(): LeadStore {
  if (!storeInstance) {
    storeInstance = new InMemoryLeadStore()
  }
  return storeInstance
}