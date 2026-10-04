<script setup lang="ts">
import { useAnalytics } from '~/composables/useAnalytics'

const { trackCtaClick } = useAnalytics()

const handleHomeClick = () => {
  trackCtaClick('404-home')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 md:px-6">
    <UContainer>
      <div class="max-w-md mx-auto text-center py-16">
        <div class="text-9xl font-display font-bold text-primary/20 mb-4" aria-hidden="true">404</div>
        <h1 class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Página não encontrada
        </h1>
        <p class="text-muted text-lg mb-8">
          Desculpe, não conseguimos encontrar a página que você procura. Ela pode ter sido movida ou não existir.
        </p>
        <UButton @click="handleHomeClick" trailing-icon="i-lucide-arrow-right" size="lg">
          Voltar para a página inicial
        </UButton>
      </div>
    </UContainer>
  </div>
</template>