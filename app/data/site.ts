export const siteConfig = {
  name: 'FreeFlix',
  tagline: 'Streaming de filmes e séries sem complicação',
  description: 'Assista a milhares de filmes e séries em alta qualidade. Sem anúncios, sem compromisso, cancele quando quiser.',
  url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  appUrl: process.env.NUXT_PUBLIC_APP_URL || '',
  mode: (process.env.NUXT_PUBLIC_CONVERSION_MODE as 'waitlist' | 'signup_redirect') || 'waitlist',
  analyticsDomain: process.env.NUXT_PUBLIC_ANALYTICS_DOMAIN || '',
  social: {
    twitter: '@freeflix',
    github: 'freeflix',
    discord: 'freeflix'
  },
  legal: {
    privacyUrl: '/privacidade',
    termsUrl: '/termos'
  }
} as const

export type SiteConfig = typeof siteConfig