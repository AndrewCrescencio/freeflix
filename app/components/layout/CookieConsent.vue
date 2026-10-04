<script setup lang="ts">
import { useConsent } from '~/composables/useConsent'
import { useAnalytics } from '~/composables/useAnalytics'

const { consent, hasDecided, acceptAll, acceptNecessaryOnly } = useConsent()
const { setConsent } = useAnalytics()

const showBanner = computed(() => !hasDecided.value && (consent.value.analytics || consent.value.marketing))

const handleAcceptAll = () => {
  acceptAll()
  setConsent(true)
}

const handleAcceptNecessary = () => {
  acceptNecessaryOnly()
  setConsent(false)
}
</script>

<template>
  <UModal v-model:open="showBanner" :ui="{ content: 'max-w-md' }" class="fixed bottom-4 right-4 z-50" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
    <template #header>
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 id="cookie-title" class="font-semibold">Preferências de cookies</h3>
          <p id="cookie-desc" class="text-sm text-muted mt-1">
            Usamos cookies essenciais para o funcionamento do site. Com seu consentimento, usamos cookies de analytics para melhorar a experiência.
          </p>
        </div>
      </div>
    </template>
    
    <template #body>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium">Cookies essenciais</p>
            <p class="text-sm text-muted">Necessários para o funcionamento do site. Não podem ser desativados.</p>
          </div>
          <input type="checkbox" checked disabled class="sr-only" />
        </div>
        
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium">Cookies de analytics</p>
            <p class="text-sm text-muted">Nos ajudam a entender como os visitantes usam o site (Plausible, sem dados pessoais).</p>
          </div>
          <UButton
            variant="outline"
            size="sm"
            @click="() => consent.analytics = !consent.analytics"
            :pressed="consent.analytics"
            aria-pressed="consent.analytics"
          >
            {{ consent.analytics ? 'Ativado' : 'Desativado' }}
          </UButton>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex w-full gap-3">
        <UButton
          @click="handleAcceptNecessary"
          variant="subtle"
          color="neutral"
          class="flex-1"
        >
          Apenas essenciais
        </UButton>
        <UButton
          @click="handleAcceptAll"
          class="flex-1"
        >
          Aceitar todos
        </UButton>
      </div>
    </template>
  </UModal>
</template>