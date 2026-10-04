import { siteConfig } from '~/data/site'
import { onMounted } from 'vue'

export interface AnalyticsEvent {
  name: string
  params: Record<string, unknown>
}

let analyticsLoaded = false
let consentGiven = false

function loadAnalytics(): void {
  if (analyticsLoaded || typeof window === 'undefined') return
  
  const domain = siteConfig.analyticsDomain || ''
  if (!domain) return

  if (!consentGiven) return

  const script = document.createElement('script')
  script.defer = true
  script.dataset.domain = domain
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
  
  analyticsLoaded = true
}

function track(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return
  
  if (!consentGiven && event.name !== 'consent_given') {
    return
  }

  if (window.plausible) {
    window.plausible(event.name, { props: event.params })
  }

  if (import.meta.dev) {
    console.log('[Analytics]', event.name, event.params)
  }
}

export function setConsent(given: boolean): void {
  consentGiven = given
  if (given) {
    loadAnalytics()
    track({ name: 'consent_given', params: {} })
  }
}

export function trackCtaClick(location: string): void {
  track({ name: 'cta_click', params: { location } })
}

export function trackLeadSubmit(): void {
  track({ name: 'lead_submit', params: {} })
}

export function trackLeadSuccess(): void {
  track({ name: 'lead_success', params: {} })
}

export function trackLeadError(error: string): void {
  track({ name: 'lead_error', params: { error } })
}

export function trackPlanSelect(planId: string, billing: 'monthly' | 'annual'): void {
  track({ name: 'plan_select', params: { plan_id: planId, billing } })
}

export function trackBillingToggle(billing: 'monthly' | 'annual'): void {
  track({ name: 'billing_toggle', params: { billing } })
}

export function useAnalytics() {
  onMounted(() => {
    loadAnalytics()
  })

  return {
    track,
    trackCtaClick,
    trackLeadSubmit,
    trackLeadSuccess,
    trackLeadError,
    trackPlanSelect,
    trackBillingToggle,
    setConsent
  }
}

declare global {
  interface Window {
    plausible: (eventName: string, options?: { props: Record<string, unknown> }) => void
  }
}