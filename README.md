# FreeFlix — Landing Page MVP

Landing page de produção para o FreeFlix, serviço de streaming de filmes e séries. Construída com Nuxt 4, Vue 3, TypeScript, Nuxt UI v4 e Tailwind CSS v4.

## Stack

- **Framework:** Nuxt 4 (app/, server/, shared/)
- **UI:** Nuxt UI v4 + Tailwind CSS v4
- **Imagens:** @nuxt/image (AVIF/WebP)
- **Fonts:** @nuxt/fonts (Inter + Gloock)
- **Validação:** Valibot (schema compartilhado cliente/servidor)
- **SEO:** @nuxt/schema-org, @nuxtjs/sitemap, @nuxtjs/robots
- **Testes:** Vitest (unidade), Playwright (e2e + a11y)
- **Qualidade:** ESLint + TypeScript strict
- **Deploy:** Vercel (preview + production)

## Setup

```bash
pnpm install
cp .env.example .env  # Configure variáveis
pnpm dev
```

## Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|---|---|---|
| `NUXT_PUBLIC_SITE_URL` | Sim | URL do site (ex: https://freeflix.com.br) |
| `NUXT_PUBLIC_APP_URL` | Não | URL do app real (para signup_redirect) |
| `NUXT_PUBLIC_CONVERSION_MODE` | Não | `waitlist` (default) ou `signup_redirect` |
| `NUXT_PUBLIC_ANALYTICS_DOMAIN` | Não | Domínio Plausible (ex: freeflix.com.br) |
| `NUXT_LEADS_PROVIDER_KEY` | Não | Chave do provedor de e-mail (Resend/Brevo/Supabase) |

## Scripts

```bash
# Desenvolvimento
pnpm dev

# Build produção
pnpm build
pnpm preview

# Qualidade
pnpm lint
pnpm typecheck

# Testes
pnpm test:unit      # Vitest
pnpm test:e2e       # Playwright
pnpm test:a11y      # Axe-core
pnpm test           # Todos os testes
```

## Estrutura do Projeto

```
app/
├── components/
│   ├── layout/        # AppHeader, AppFooter, CookieConsent
│   ├── sections/      # Hero, FeaturedTitles, Features, Pricing, Testimonials, Faq, FinalCta
│   └── ui/            # LeadForm, PosterCard
├── composables/       # useLeadForm, useAnalytics, useConsent, useAnchorNavigation
├── data/              # site.ts, plans.ts, features.ts, faq.ts, titles.ts
├── layouts/default.vue
├── pages/             # index.vue, privacidade.vue, termos.vue, [...slug].vue
├── types/index.ts
├── app.vue
└── app.config.ts

server/
├── api/leads.post.ts  # Endpoint de captura de leads
└── utils/lead-store.ts # Interface LeadStore (in-memory default)

shared/schemas/lead.ts # Schema Valibot compartilhado
```

## Edição de Conteúdo

Todo conteúdo vive em `app/data/*.ts` (tipado com `satisfies`):

- **Planos/preços:** `app/data/plans.ts` — `monthlyPrice`/`annualPrice` em centavos
- **Features:** `app/data/features.ts`
- **FAQ:** `app/data/faq.ts`
- **Títulos em destaque:** `app/data/titles.ts` — `verified: true` para exibir
- **Config do site:** `app/data/site.ts`

## Testes

### Unitários (Vitest)
```bash
pnpm test:unit
```
- Schema do lead (`tests/unit/lead-schema.test.ts`)
- Cálculo de preços (`tests/unit/plans.test.ts`)
- Filtro `verified` (`tests/unit/verified-filter.test.ts`)

### E2E (Playwright)
```bash
pnpm test:e2e
```
- Home page carrega, navegação, formulário (`tests/e2e/home.spec.ts`)
- Lead form validação e envio (`tests/e2e/lead-form.spec.ts`)
- Acessibilidade axe (`tests/e2y/a11y.spec.ts`)

### Acessibilidade
```bash
pnpm test:a11y
```
- Zero violações critical/serious no axe
- Navegação por teclado completa
- Contraste WCAG AA

## Performance (Metas Lighthouse Mobile)

| Métrica | Meta |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| JS inicial (gzip) | ≤ 150 kB |

## Deploy

### Vercel (Recomendado)
1. Conecte o repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático em push para `main`
4. Preview deployments em PRs

### Cloudflare Pages / Netlify
- Build command: `pnpm build`
- Output directory: `.output/public`
- Node version: 22

### Variáveis de Produção (Vercel)
```
NUXT_PUBLIC_SITE_URL=https://freeflix.com.br
NUXT_PUBLIC_APP_URL=https://app.freeflix.com.br
NUXT_PUBLIC_CONVERSION_MODE=waitlist
NUXT_PUBLIC_ANALYTICS_DOMAIN=freeflix.com.br
NUXT_LEADS_PROVIDER_KEY=re_xxxxxxxxxxxx
```

## Checklist Pré-Lançamento

- [ ] `pnpm lint` ✓
- [ ] `pnpm typecheck` ✓
- [ ] `pnpm test` ✓
- [ ] `pnpm build` ✓
- [ ] Lighthouse mobile ≥ metas
- [ ] Layout validado: 320, 375, 768, 1024, 1440px
- [ ] Zero dados/depoimentos falsos exibidos
- [ ] Assets têm origem/licença documentada (`public/images/CREDITS.md`)
- [ ] Formulário lead funciona ponta-a-ponta (sucesso, erro, rate limit)
- [ ] Analytics disparam e respeitam consentimento
- [ ] axe sem violações critical/serious
- [ ] Navegação completa por teclado
- [ ] Textos legais revisados por jurídico (TODO(jurídico))

## Decisões e Pendências

Veja `DECISIONS.md` para decisões técnicas, placeholders (`TODO(negócio)`, `TODO(jurídico)`, `TODO(assets)`) e riscos conhecidos.

## Licença

MIT — Veja `LICENSE` para detalhes.