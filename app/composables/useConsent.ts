import { ref, onMounted, watch, readonly, shallowRef, type ShallowRef } from 'vue'

const CONSENT_KEY = 'freeflix-consent'

export interface ConsentState {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number | null
}

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: null
}

const consent = shallowRef<ConsentState>(defaultConsent)
const hasDecided = ref(false)
let initialized = false

function loadConsent(): void {
  if (typeof window === 'undefined' || initialized) return
  
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as ConsentState
      consent.value = { ...defaultConsent, ...parsed }
      hasDecided.value = true
    }
  } catch {
    // Ignore parse errors
  }
  initialized = true
}

function saveConsent(): void {
  if (typeof window === 'undefined') return
  
  localStorage.setItem(CONSENT_KEY, JSON.stringify({
    ...consent.value,
    timestamp: Date.now()
  }))
  hasDecided.value = true
}

export function useConsent(): {
  consent: ShallowRef<ConsentState>
  hasDecided: ReturnType<typeof readonly<typeof hasDecided>>
  acceptAll: () => void
  acceptNecessaryOnly: () => void
  updateConsent: (key: keyof Omit<ConsentState, 'timestamp'>, value: boolean) => void
  resetConsent: () => void
} {
  onMounted(() => {
    loadConsent()
  })

  const acceptAll = () => {
    consent.value = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    }
    saveConsent()
  }

  const acceptNecessaryOnly = () => {
    consent.value = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }
    saveConsent()
  }

  const updateConsent = (key: keyof Omit<ConsentState, 'timestamp'>, value: boolean) => {
    if (key === 'necessary') return
    consent.value[key] = value
    consent.value.timestamp = Date.now()
    saveConsent()
  }

  const resetConsent = () => {
    consent.value = defaultConsent
    hasDecided.value = false
    if (typeof window !== 'undefined') {
      localStorage.removeItem(CONSENT_KEY)
    }
  }

  watch(consent, saveConsent, { deep: true })

  return {
    consent: consent as ShallowRef<ConsentState>,
    hasDecided: readonly(hasDecided),
    acceptAll,
    acceptNecessaryOnly,
    updateConsent,
    resetConsent
  }
}