<script setup lang="ts">
import { siteConfig } from '~/data/site'
import LeadForm from '~/components/ui/LeadForm.vue'

const currentYear = new Date().getFullYear()

const footerLinks = {
  produto: [
    { label: 'Catálogo', to: '#catalog' },
    { label: 'Planos', to: '#pricing' },
    { label: 'Dispositivos', to: '#features' },
    { label: 'Central de ajuda', to: '#faq' }
  ],
  empresa: [
    { label: 'Sobre nós', to: '#' },
    { label: 'Imprensa', to: '#' },
    { label: 'Carreiras', to: '#' },
    { label: 'Parcerias', to: '#' }
  ],
  legal: [
    { label: 'Privacidade', to: siteConfig.legal.privacyUrl },
    { label: 'Termos de uso', to: siteConfig.legal.termsUrl },
    { label: 'Cookies', to: '#cookies' }
  ],
  social: [
    { label: 'Twitter', href: `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`, icon: 'i-simple-icons-x' },
    { label: 'GitHub', href: `https://github.com/${siteConfig.social.github}`, icon: 'i-simple-icons-github' },
    { label: 'Discord', href: `https://discord.gg/${siteConfig.social.discord}`, icon: 'i-simple-icons-discord' }
  ]
}
</script>

<template>
  <footer class="bg-elevated/50 border-t border-default" role="contentinfo">
    <UContainer class="py-12 md:py-16 px-4 md:px-6">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="flex items-center gap-2 shrink-0 focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1 mb-6" aria-label="FreeFlix - Página inicial">
            <AppLogo class="w-auto h-8 shrink-0" />
          </NuxtLink>
          <p class="text-muted text-sm max-w-xs mb-6">
            Streaming de filmes e séries sem complicação. Sem anúncios, sem compromisso, cancele quando quiser.
          </p>
          <div class="flex items-center gap-4">
            <a
              v-for="social in footerLinks.social"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted hover:text-default transition-colors focus-visible:outline-3 outline-primary/25 rounded-full p-1"
              :aria-label="social.label"
            >
              <i :class="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Produto">
          <h3 class="font-semibold mb-4">Produto</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.produto" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="text-sm text-muted hover:text-default transition-colors focus-visible:outline-3 outline-primary/25 rounded-sm"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <nav aria-label="Empresa">
          <h3 class="font-semibold mb-4">Empresa</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.empresa" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="text-sm text-muted hover:text-default transition-colors focus-visible:outline-3 outline-primary/25 rounded-sm"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h3 class="font-semibold mb-4">Legal</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.legal" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="text-sm text-muted hover:text-default transition-colors focus-visible:outline-3 outline-primary/25 rounded-sm"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div>
          <h3 class="font-semibold mb-4">Receba novidades</h3>
          <p class="text-sm text-muted mb-4">Entre na lista de espera e seja o primeiro a saber quando lançarmos.</p>
          <LeadForm source="footer" />
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-default flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-muted">
          © {{ currentYear }} {{ siteConfig.name }}. Todos os direitos reservados.
        </p>
        <div class="flex items-center gap-4">
          <UColorModeButton size="sm" />
          <select
            class="text-sm bg-default border border-default rounded-md px-3 py-1.5 focus-visible:outline-3 outline-primary/25"
            aria-label="Idioma"
          >
            <option value="pt-BR" selected>Português (BR)</option>
            <option value="en-US">English (US)</option>
          </select>
        </div>
      </div>
    </UContainer>
  </footer>
</template>