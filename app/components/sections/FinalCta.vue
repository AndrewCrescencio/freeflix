<script setup lang="ts">
import { siteConfig } from '~/data/site'
import LeadForm from '~/components/ui/LeadForm.vue'
import { trackCtaClick } from '~/composables/useAnalytics'

const handleCtaClick = () => {
  trackCtaClick('final-cta')
  if (siteConfig.mode === 'waitlist') {
    // LeadForm is already here, no scroll needed
  } else if (siteConfig.appUrl) {
    window.location.href = `${siteConfig.appUrl}/cadastro`
  }
}
</script>

<template>
  <section id="waitlist" class="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden" aria-labelledby="final-cta-title">
    <div class="absolute inset-0 bg-linear-to-r from-cyan-600/20 via-transparent to-blue-700/20" />
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)]" />
    
    <UContainer class="relative">
      <UPageCTA
        :title="siteConfig.mode === 'waitlist' ? 'Pronto para começar?' : 'Comece seu teste grátis hoje'"
        :description="siteConfig.mode === 'waitlist' 
          ? 'Entre na lista de espera e seja um dos primeiros a acessar o FreeFlix. Vamos avisar você assim que lançarmos.'
          : 'Crie sua conta em minutos. 7 dias grátis, cancele quando quiser.'"
        variant="solid"
        class="max-w-2xl mx-auto"
        :links="[
          {
            label: siteConfig.mode === 'waitlist' ? 'Entrar na lista de espera' : 'Começar grátis por 7 dias',
            onClick: handleCtaClick,
            trailingIcon: 'i-lucide-arrow-right',
            size: 'xl',
            class: 'w-full sm:w-auto min-w-[240px]'
          }
        ]"
      >
        <template #default>
          <LeadForm source="final-cta" />
          <p class="text-center text-sm text-muted/70 mt-4">
            Ao continuar, você concorda com nossa
            <NuxtLink :to="siteConfig.legal.privacyUrl" class="underline hover:text-primary">
              Política de Privacidade
            </NuxtLink>
            e
            <NuxtLink :to="siteConfig.legal.termsUrl" class="underline hover:text-primary ml-1">
              Termos de Uso
            </NuxtLink>
            . Sem spam, apenas novidades relevantes.
          </p>
        </template>
      </UPageCTA>
    </UContainer>
  </section>
</template>