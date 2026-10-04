<script setup lang="ts">
import { useLeadForm } from '~/composables/useLeadForm'
import { trackLeadSubmit, trackLeadSuccess, trackLeadError } from '~/composables/useAnalytics'
import { siteConfig } from '~/data/site'

const props = defineProps<{ source: string }>()

const { submit, status, error, message } = useLeadForm()

const formData = reactive({
  email: '',
  name: '',
  consent: false
})

const handleSubmit = async () => {
  trackLeadSubmit()
  
  try {
    await submit({
      email: formData.email,
      name: formData.name,
      consent: formData.consent,
      source: props.source
    })
    trackLeadSuccess()
    formData.email = ''
    formData.name = ''
    formData.consent = false
  } catch {
    trackLeadError(error.value || 'unknown')
  }
}
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <UForm @submit.prevent="handleSubmit" class="space-y-4">
      <UFormField name="name" label="Nome (opcional)">
        <template #default>
          <UInput
            v-model="formData.name"
            type="text"
            placeholder="Seu nome"
            :disabled="status === 'loading'"
            class="w-full"
            aria-describedby="name-hint"
          />
          <span id="name-hint" class="sr-only">Opcional</span>
        </template>
      </UFormField>

      <UFormField name="email" label="E-mail" required>
        <template #default>
          <UInput
            v-model="formData.email"
            type="email"
            placeholder="seu@email.com"
            :disabled="status === 'loading'"
            class="w-full"
            autocomplete="email"
            required
            aria-describedby="email-hint"
          />
          <span id="email-hint" class="sr-only">Obrigatório</span>
        </template>
      </UFormField>

      <UFormField name="consent" label="Consentimento" required>
        <template #default>
          <label class="flex items-start gap-3 cursor-pointer">
            <UCheckbox
              v-model="formData.consent"
              :disabled="status === 'loading'"
              aria-describedby="consent-hint"
            />
            <span class="text-sm text-muted pt-1">
              Concordo em receber e-mails sobre o FreeFlix e aceito a
              <NuxtLink :to="siteConfig.legal.privacyUrl" class="underline hover:text-primary">
                Política de Privacidade
              </NuxtLink>
              .
            </span>
          </label>
          <span id="consent-hint" class="sr-only">Obrigatório</span>
        </template>
      </UFormField>

      <div v-if="status === 'error' && error" class="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm" role="alert" aria-live="polite">
        <i class="i-lucide-alert-circle w-4 h-4 mr-2 inline-block" aria-hidden="true" />
        {{ error }}
      </div>

      <div v-if="status === 'success' && message" class="p-3 bg-success/10 border border-success/20 rounded-lg text-success text-sm" role="status" aria-live="polite">
        <i class="i-lucide-check-circle w-4 h-4 mr-2 inline-block" aria-hidden="true" />
        {{ message }}
      </div>

      <UButton
        type="submit"
        :loading="status === 'loading'"
        class="w-full"
        size="lg"
        :disabled="status === 'loading' || !formData.consent"
      >
        {{ siteConfig.mode === 'waitlist' ? 'Entrar na lista de espera' : 'Começar grátis por 7 dias' }}
      </UButton>
    </UForm>
  </div>
</template>