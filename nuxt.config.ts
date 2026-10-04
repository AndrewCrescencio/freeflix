// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/fonts'
  ],
  css: ['~/assets/css/main.css'],
  colorMode: { preference: 'dark', fallback: 'dark' },
  runtimeConfig: {
    leadsProviderKey: '',
    public: {
      siteUrl: 'http://localhost:3000',
      appUrl: '',
      analyticsDomain: ''
    }
  },
  site: { url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000', name: 'FreeFlix' },
  image: { format: ['avif', 'webp'] },
  experimental: { defaults: { nuxtLink: { prefetchOn: { interaction: true } } } },
  typescript: { strict: true },
  routeRules: {
    '/': { prerender: true },
    '/privacidade': { prerender: true },
    '/termos': { prerender: true }
  },
  sitemap: {
    defaults: { changefreq: 'weekly', priority: 0.7 }
  },
  robots: {
    // @ts-expect-error - rules is valid for @nuxtjs/robots
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/sitemap.xml`
  }
})