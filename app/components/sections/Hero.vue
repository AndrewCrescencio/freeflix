<script setup lang="ts">
import { siteConfig } from '~/data/site'
import { useAnalytics } from '~/composables/useAnalytics'
import { useAnchorNavigation } from '~/composables/useAnchorNavigation'

const { trackCtaClick } = useAnalytics()
const { scrollToSection } = useAnchorNavigation()

const handlePrimaryCta = () => {
  trackCtaClick('hero-primary')
  if (siteConfig.mode === 'waitlist') {
    scrollToSection('#waitlist')
  } else if (siteConfig.appUrl) {
    window.location.href = `${siteConfig.appUrl}/cadastro`
  }
}

const handleSecondaryCta = () => {
  trackCtaClick('hero-secondary')
  scrollToSection('#features')
}
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-title">
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="/images/hero-bg.jpg"
        alt=""
        class="absolute inset-0 w-full h-full object-cover"
        format="avif"
        widths="640 1024 1280 1920"
        sizes="100vw"
        fetchpriority="high"
        loading="eager"
        placeholder="blur"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/95" />
    </div>

    <UContainer class="relative z-10 py-16 md:py-24 px-4 md:px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h1 id="hero-title" class="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-default mb-6 animate-fade-in-up">
          Streaming de filmes e séries <span class="text-primary">sem complicação</span>
        </h1>
        <p class="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 100ms;">
          Milhares de títulos em alta qualidade. Sem anúncios, sem fidelidade, cancele quando quiser. 
          <strong class="text-default">Entre na lista de espera</strong> e tenha acesso antecipado.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style="animation-delay: 200ms;">
          <UButton
            @click="handlePrimaryCta"
            size="xl"
            class="w-full sm:w-auto min-w-[200px]"
            trailing-icon="i-lucide-arrow-right"
          >
            {{ siteConfig.mode === 'waitlist' ? 'Entrar na lista de espera' : 'Começar grátis por 7 dias' }}
          </UButton>
          <UButton
            @click="handleSecondaryCta"
            size="xl"
            variant="outline"
            color="neutral"
            class="w-full sm:w-auto min-w-[200px]"
          >
            Ver como funciona
          </UButton>
        </div>

        <p class="mt-6 text-sm text-muted/70 animate-fade-in-up" style="animation-delay: 300ms;">
          {{ siteConfig.mode === 'waitlist' 
            ? 'Nenhum cartão de crédito necessário • Cancele a qualquer momento' 
            : 'Teste grátis por 7 dias • Cancele a qualquer momento • Sem anúncios' }}
        </p>
      </div>
    </UContainer>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
      <NuxtLink to="#catalog" class="text-muted hover:text-default transition-colors focus-visible:outline-3 outline-primary/25 rounded-full p-2" aria-label="Rolar para catálogo">
        <i class="i-lucide-chevron-down w-6 h-6" />
      </NuxtLink>
    </div>
  </section>
</template>