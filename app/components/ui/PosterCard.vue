<script setup lang="ts">
import type { Title } from '~/types'

interface Props {
  title: Title
}

interface Emits {
  'view-details': [titleId: string]
  'watch-now': [titleId: string]
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <article class="group relative focus-within:z-10" tabindex="0">
    <div class="relative aspect-[2/3] rounded-xl overflow-hidden bg-default/50">
      <NuxtImg
        :src="title.poster"
        :alt="`Pôster de ${title.title} (${title.year})`"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        format="avif"
        widths="200 300 400"
        sizes="160px"
        loading="lazy"
        placeholder="blur"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div class="flex items-center justify-between gap-2">
          <UButton
            size="sm"
            class="flex-1"
            @click="$emit('watch-now', title.id)"
            @keydown.enter.space.prevent="$emit('watch-now', title.id)"
          >
            <template #leadingIcon>
              <i class="i-lucide-play w-4 h-4" />
            </template>
            Assistir
          </UButton>
          <UButton
            size="sm"
            variant="outline"
            color="neutral"
            @click="$emit('view-details', title.id)"
            @keydown.enter.space.prevent="$emit('view-details', title.id)"
            aria-label="Ver detalhes de {{ title.title }}"
          >
            <i class="i-lucide-info w-4 h-4" />
          </UButton>
        </div>
      </div>

      <div class="absolute top-3 right-3 flex gap-1.5">
        <span 
          class="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-500/90 text-amber-950 backdrop-blur-sm"
          aria-label="Nota {{ title.rating }}"
        >
          <i class="i-lucide-star w-3 h-3 mr-1" />
          {{ title.rating }}
        </span>
      </div>
    </div>

    <div class="mt-3 text-left">
      <h3 class="font-medium text-sm truncate" aria-label="{{ title.title }}">{{ title.title }}</h3>
      <div class="flex items-center gap-2 text-xs text-muted mt-1">
        <span>{{ title.year }}</span>
        <span aria-hidden="true">•</span>
        <span>{{ title.genre }}</span>
      </div>
    </div>
  </article>
</template>