<script setup lang="ts">
import Hero from '~/components/sections/Hero.vue'
import FeaturedTitles from '~/components/sections/FeaturedTitles.vue'
import Features from '~/components/sections/Features.vue'
import Pricing from '~/components/sections/Pricing.vue'
import Testimonials from '~/components/sections/Testimonials.vue'
import Faq from '~/components/sections/Faq.vue'
import FinalCta from '~/components/sections/FinalCta.vue'

import { siteConfig } from '~/data/site'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.url}/busca?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        sameAs: [
          `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
          `https://github.com/${siteConfig.social.github}`,
          `https://discord.gg/${siteConfig.social.discord}`
        ]
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-default">
      Pular para o conteúdo principal
    </a>
    
    <Hero />
    <FeaturedTitles />
    <Features />
    <Pricing />
    <Testimonials />
    <Faq />
    <FinalCta />
  </div>
</template>