import type { PricingPlan } from '~/types'

export const plans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Básico',
    description: 'Ideal para quem assiste sozinho',
    monthlyPrice: 1990, // R$ 19,90 em centavos
    annualPrice: 19900, // R$ 199,00/ano (17% desconto)
    features: [
      'Streaming em HD (720p)',
      '1 tela por vez',
      'Acesso ao catálogo completo',
      'Perfis personalizados',
      'Download para offline (1 dispositivo)'
    ],
    ctaText: 'Começar grátis por 7 dias'
  },
  {
    id: 'standard',
    name: 'Padrão',
    description: 'O mais popular para casais',
    monthlyPrice: 3990, // R$ 39,90
    annualPrice: 39900, // R$ 399,00/ano (17% desconto)
    features: [
      'Streaming em Full HD (1080p)',
      '2 telas simultâneas',
      'Acesso ao catálogo completo',
      'Até 4 perfis',
      'Download para offline (2 dispositivos)',
      'Áudio 5.1 surround'
    ],
    recommended: true,
    ctaText: 'Começar grátis por 7 dias'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Para a família toda',
    monthlyPrice: 5990, // R$ 59,90
    annualPrice: 59900, // R$ 599,00/ano (17% desconto)
    features: [
      'Streaming em 4K HDR (UHD)',
      '4 telas simultâneas',
      'Acesso ao catálogo completo',
      'Até 6 perfis',
      'Download para offline (4 dispositivos)',
      'Áudio Dolby Atmos',
      'HDR10 e Dolby Vision'
    ],
    ctaText: 'Começar grátis por 7 dias'
  }
] satisfies PricingPlan[]

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(cents / 100)
}

export function getAnnualDiscount(monthly: number, annual: number): number {
  const annualEquivalent = monthly * 12
  return Math.round(((annualEquivalent - annual) / annualEquivalent) * 100)
}