import type { FaqItem } from '~/types'

export const faq: FaqItem[] = [
  {
    label: 'Como funciona o teste grátis de 7 dias?',
    content: 'Ao assinar qualquer plano, você tem 7 dias grátis para explorar todo o catálogo. Não será cobrado nada durante esse período. Pode cancelar a qualquer momento antes do fim do teste e nada será cobrado.'
  },
  {
    label: 'Posso cancelar quando quiser?',
    content: 'Sim. Não há fidelidade nem multa. O cancelamento é feito em poucos cliques na sua conta e o acesso continua até o fim do período já pago.'
  },
  {
    label: 'Quantos aparelhos posso usar ao mesmo tempo?',
    content: 'Depende do plano: Básico permite 1 tela, Padrão permite 2 telas simultâneas e Premium permite 4 telas ao mesmo tempo.'
  },
  {
    label: 'O catálogo tem legendas e dublagem em português?',
    content: 'Sim. A grande maioria dos títulos oferece áudio original com legendas em português (PT-BR) e dublagem em português. Novos lançamentos chegam com ambas as opções.'
  },
  {
    label: 'Preciso de internet rápida para assistir em 4K?',
    content: 'Recomendamos 25 Mbps ou mais para 4K HDR. Para Full HD, 5 Mbps já basta. O app ajusta a qualidade automaticamente conforme sua conexão.'
  },
  {
    label: 'Como funciona o download para offline?',
    content: 'Nos apps móveis e tablets, você pode baixar títulos incluídos no seu plano. O número de dispositivos com downloads ativos varia conforme o plano (1 a 4).'
  },
  {
    label: 'Vocês têm controle parental?',
    content: 'Sim. Cada perfil pode ter classificação etária (Livre, 10, 12, 14, 16, 18) e PIN de proteção. Crianças só veem conteúdo adequado à idade configurada.'
  },
  {
    label: 'Como entro na lista de espera?',
    content: 'Basta informar seu e-mail no formulário desta página. Você receberá novidades e acesso antecipado quando o serviço for lançado.'
  }
] satisfies FaqItem[]