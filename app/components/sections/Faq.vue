<script setup lang="ts">
import { faq } from '~/data/faq'
import { useHead } from '#imports'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(item => ({
          '@type': 'Question',
          name: item.label,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.content
          }
        }))
      })
    }
  ]
})
</script>

<template>
  <section id="faq" class="py-16 md:py-24 px-4 md:px-6 bg-elevated/30" aria-labelledby="faq-title">
    <UContainer>
      <div class="max-w-2xl mx-auto text-center mb-12">
        <h2 id="faq-title" class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Perguntas frequentes
        </h2>
        <p class="text-muted text-lg">
          Tem dúvidas? Aqui estão as respostas para as perguntas mais comuns.
        </p>
      </div>

      <UAccordion
        v-for="item in faq"
        :key="item.label"
        :value="item.label"
        class="w-full max-w-3xl mx-auto"
        :ui="{ content: 'prose prose-invert max-w-none text-muted' }"
      >
        <template #label>
          <span class="font-medium text-default">{{ item.label }}</span>
        </template>
        <template #content>
          <div class="pt-2">{{ item.content }}</div>
        </template>
      </UAccordion>
    </UContainer>
  </section>
</template>