<script setup lang="ts">
import { features } from '~/data/features'
</script>

<template>
  <section id="features" class="py-16 md:py-24 px-4 md:px-6" aria-labelledby="features-title">
    <UContainer>
      <div class="max-w-2xl mx-auto text-center mb-16">
        <h2 id="features-title" class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Tudo o que você precisa para maratonar
        </h2>
        <p class="text-muted text-lg">
          Recursos pensados para a melhor experiência de streaming, sem complicação.
        </p>
      </div>

      <UPageGrid :columns="{ base: 1, md: 2, lg: 3 }" :features="features" class="gap-6 md:gap-8" />
    </UContainer>
  </section>
</template>