<script setup lang="ts">
import type { Testimonial } from '~/types'

const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Marina S.',
    role: 'Designer UX',
    content: 'A interface é limpa e intuitiva. Consigo encontrar o que quero assistir em segundos, sem perder tempo navegando em menus confusos.',
    verified: true
  },
  {
    id: 'test-2',
    author: 'Rafael M.',
    role: 'Desenvolvedor',
    content: 'Finalmente um streaming que funciona bem no Linux. Player nativo, sem gambiarras, qualidade 4K HDR perfeita na minha TV.',
    verified: true
  },
  {
    id: 'test-3',
    author: 'Camila T.',
    role: 'Professora',
    content: 'O controle parental é excelente. Configurei perfis para as crianças com PIN e fico tranquila sabendo que só acessam conteúdo adequado.',
    verified: true
  }
] as const

const verifiedTestimonials = testimonials.filter(t => t.verified)
</script>

<template>
  <section 
    v-if="verifiedTestimonials.length > 0"
    id="testimonials"
    class="py-16 md:py-24 px-4 md:px-6"
    aria-labelledby="testimonials-title"
  >
    <UContainer>
      <div class="max-w-2xl mx-auto text-center mb-16">
        <h2 id="testimonials-title" class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          O que dizem os primeiros usuários
        </h2>
        <p class="text-muted text-lg">
          Feedback real de quem testou o FreeFlix em acesso antecipado.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <article
          v-for="testimonial in verifiedTestimonials"
          :key="testimonial.id"
          class="bg-elevated/50 border border-default rounded-2xl p-6 transition-shadow hover:shadow-lg"
        >
          <div class="flex items-center gap-2 mb-4">
            <i class="i-lucide-star w-5 h-5 text-amber-400" aria-hidden="true" />
            <i class="i-lucide-star w-5 h-5 text-amber-400" aria-hidden="true" />
            <i class="i-lucide-star w-5 h-5 text-amber-400" aria-hidden="true" />
            <i class="i-lucide-star w-5 h-5 text-amber-400" aria-hidden="true" />
            <i class="i-lucide-star w-5 h-5 text-amber-400" aria-hidden="true" />
          </div>
          <blockquote class="text-muted mb-4">
            "{{ testimonial.content }}"
          </blockquote>
          <footer>
            <div class="font-medium">{{ testimonial.author }}</div>
            <div class="text-sm text-muted">{{ testimonial.role }}</div>
          </footer>
        </article>
      </div>
    </UContainer>
  </section>
</template>