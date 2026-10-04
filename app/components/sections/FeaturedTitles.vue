<script setup lang="ts">
import { getVerifiedTitles } from '~/data/titles'
import { trackCtaClick } from '~/composables/useAnalytics'
import PosterCard from '~/components/ui/PosterCard.vue'

const verifiedTitles = getVerifiedTitles()

const handleViewDetails = (titleId: string) => {
  trackCtaClick(`catalog-card-${titleId}`)
}

const handleWatchNow = (titleId: string) => {
  trackCtaClick(`catalog-watch-${titleId}`)
}
</script>

<template>
  <section id="catalog" class="py-16 md:py-24 px-4 md:px-6 bg-elevated/30" aria-labelledby="catalog-title">
    <UContainer>
      <div class="max-w-2xl mx-auto text-center mb-12">
        <h2 id="catalog-title" class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Em destaque no catálogo
        </h2>
        <p class="text-muted text-lg">
          Uma seleção do que você vai encontrar. O catálogo completo tem milhares de títulos.
        </p>
      </div>

      <div class="relative" role="region" aria-label="Catálogo em destaque">
        <div 
          class="flex gap-4 overflow-x-auto scroll-snap-x snap-mandatory pb-8 -mx-4 md:mx-6 px-4 md:px-6"
          role="list"
        >
          <PosterCard
            v-for="title in verifiedTitles"
            :key="title.id"
            :title="title"
            @view-details="handleViewDetails"
            @watch-now="handleWatchNow"
            class="shrink-0 snap-start w-40 md:w-48"
            role="listitem"
          />
        </div>

        <div class="flex justify-center gap-2 mt-6" role="tablist" aria-label="Navegação do carrossel">
          <button
            v-for="(title, index) in verifiedTitles"
            :key="title.id"
            class="w-2 h-2 rounded-full bg-default/50 hover:bg-primary transition-colors focus-visible:outline-3 outline-primary/25"
            :class="{ 'bg-primary': index === 0 }"
            :aria-label="`Ir para ${title.title}`"
            :aria-selected="index === 0"
            role="tab"
            @click="() => {}"
          />
        </div>
      </div>

      <div class="text-center mt-8">
        <UButton
          variant="subtle"
          color="neutral"
          @click="trackCtaClick('catalog-view-all')"
        >
          Ver todo o catálogo
          <template #trailingIcon>
            <i class="i-lucide-arrow-right" />
          </template>
        </UButton>
      </div>
    </UContainer>
  </section>
</template>