import type { Feature } from '~/types'

export const features: Feature[] = [
  {
    icon: 'i-lucide-tv',
    title: 'Catálogo ilimitado',
    description: 'Milhares de filmes e séries, dos clássicos aos lançamentos, sem taxas extras por título.'
  },
  {
    icon: 'i-lucide-download',
    title: 'Assista offline',
    description: 'Baixe seus favoritos no celular ou tablet e assista onde quiser, sem internet.'
  },
  {
    icon: 'i-lucide-users',
    title: 'Perfis para todos',
    description: 'Crie até 6 perfis com recomendações personalizadas, controle parental e histórico próprio.'
  },
  {
    icon: 'i-lucide-smartphone',
    title: 'Em qualquer tela',
    description: 'TV, celular, tablet, computador ou console. Continue de onde parou em qualquer dispositivo.'
  },
  {
    icon: 'i-lucide-volume-2',
    title: 'Áudio imersivo',
    description: 'Som estéreo, 5.1 surround ou Dolby Atmos conforme seu plano e equipamento.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Sem anúncios, nunca',
    description: 'Experiência 100% livre de propagandas. Seu tempo de tela é só seu.'
  }
] satisfies Feature[]