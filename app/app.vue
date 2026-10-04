<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0891b2', media: '(prefers-color-scheme: dark)' },
    { name: 'theme-color', content: '#06b6d4', media: '(prefers-color-scheme: light)' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  htmlAttrs: {
    lang: 'pt-BR'
  }
})

const title = 'FreeFlix — Streaming de filmes e séries sem complicação'
const description = 'Assista a milhares de filmes e séries em alta qualidade. Sem anúncios, sem compromisso, cancele quando quiser. Entre na lista de espera.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-default.png',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/og-default.png'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>