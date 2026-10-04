<script setup lang="ts">
import { siteConfig } from '~/data/site'
import { useAnalytics } from '~/composables/useAnalytics'
import { useAnchorNavigation } from '~/composables/useAnchorNavigation'

const { trackCtaClick } = useAnalytics()
const { scrollToSection } = useAnchorNavigation()

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Catálogo', href: '#catalog' },
  { label: 'Planos', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
]

const handleCtaClick = (location: string) => {
  trackCtaClick(location)
  if (siteConfig.mode === 'waitlist') {
    scrollToSection('#waitlist')
  } else if (siteConfig.appUrl) {
    window.location.href = `${siteConfig.appUrl}/cadastro`
  }
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur-xl bg-default/80 border-b border-default" role="banner">
    <UContainer class="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
      <NuxtLink to="/" class="flex items-center gap-2 shrink-0 focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1" aria-label="FreeFlix - Página inicial">
        <AppLogo class="w-auto h-8 shrink-0" />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-6" role="navigation" aria-label="Navegação principal">
        <ul class="flex items-center gap-1">
          <li v-for="link in navLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="text-sm font-medium text-muted hover:text-default transition-colors px-2 py-1 rounded-md focus-visible:outline-3 outline-primary/25"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="hidden md:flex items-center gap-3">
        <NuxtLink
          v-if="siteConfig.appUrl"
          :to="siteConfig.appUrl + '/entrar'"
          class="text-sm font-medium text-muted hover:text-default transition-colors px-3 py-1.5 rounded-md focus-visible:outline-3 outline-primary/25"
        >
          Entrar
        </NuxtLink>
        
        <UButton
          @click="handleCtaClick('header')"
          size="sm"
          class="shrink-0"
        >
          {{ siteConfig.mode === 'waitlist' ? 'Entrar na lista' : 'Começar grátis' }}
        </UButton>

        <UColorModeButton class="-ms-1" />
      </div>

      <UButton
        v-if="siteConfig.mode === 'waitlist'"
        @click="handleCtaClick('header-mobile')"
        class="md:hidden shrink-0"
        size="sm"
      >
        Entrar na lista
      </UButton>

      <UButton
        v-else-if="siteConfig.appUrl"
        :to="siteConfig.appUrl + '/cadastro'"
        target="_blank"
        class="md:hidden shrink-0"
        size="sm"
      >
        Começar grátis
      </UButton>
    </UContainer>
  </header>
</template>