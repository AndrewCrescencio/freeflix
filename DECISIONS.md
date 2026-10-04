# Decisões Técnicas — FreeFlix Landing Page

## Decisões Tomadas

### Stack e Arquitetura
| Decisão | Justificativa |
|---|---|
| **Nuxt 4 (app/server/shared)** | Estrutura moderna, SSR/SSG nativo, DX excelente |
| **Nuxt UI v4 + Tailwind v4** | Componentes acessíveis prontos, design system consistente, dark mode nativo |
| **Valibot para validação** | Leve (~1kb), tree-shakable, API similar a Zod, schema compartilhado cliente/servidor |
| **@nuxt/fonts (Inter + Gloock)** | Auto-import, otimização, `font-display: swap` nativo |
| **In-memory LeadStore (dev)** | Zero dependência externa para MVP; adapter pattern permite swap para Resend/Brevo/Supabase |

### Design e UX
| Decisão | Justificativa |
|---|---|
| **Dark mode por padrão** | Estética cinematográfica, menos fadiga visual, preferência de usuários de streaming |
| **Cores: Primary=cyan, Secondary=amber** | Ciano = tecnologia/streaming; Âmbar = destaque/premium/cta; acessíveis em ambos modos |
| **Glassmorphism só header/cards** | Evita problemas de legibilidade e performance excessiva |
| **Animações com `prefers-reduced-motion`** | Acessibilidade obrigatória (WCAG 2.3.3) |
| **Mobile-first, breakpoints padrão** | Cobertura 320px–1440px sem scroll horizontal |

### Conversão e Dados
| Decisão | Justificativa |
|---|---|
| **MODO_CONVERSAO = `waitlist`** | Pré-lançamento MVP; coleta leads sem app real |
| **Lead form: email + nome opcional + consentimento** | Mínimo viável para LGPD; honeypot + rate limit no servidor |
| **Sem depoimentos/números falsos** | `verified: boolean` nos dados; seção some se vazio (CDC/CONAR compliance) |
| **Planos com preços placeholder** | Marcados `// TODO(negócio)` em `plans.ts` |

### Performance
| Decisão | Justificativa |
|---|---|
| **Imagens AVIF/WebP via @nuxt/image** | Formatos modernos, lazy loading, sizes responsivos |
| **Hero image `fetchpriority="high"`** | LCP otimizado |
| **Hidratação preguiçosa seções abaixo da dobra** | Reduz JS inicial |
| **Orçamento JS ≤ 150kB gzip** | Meta Lighthouse Performance ≥ 90 |
| **Prerender rotas estáticas** | `/`, `/privacidade`, `/termos` servidas como HTML estático |

### SEO e Legal
| Decisão | Justificativa |
|---|---|
| **JSON-LD: Organization, WebSite, FAQPage** | Rich snippets, Structured Data |
| **Sitemap/robots automáticos** | `@nuxtjs/sitemap` + `@nuxtjs/robots` |
| **Páginas legais em `/privacidade` e `/termos`** | URLs em pt-BR, SEO-friendly |
| **Cookie consent só se cookies não-essenciais** | LGPD: consentimento apenas para analytics (Plausible sem cookies) |

## Placeholders Pendentes

### TODO(negócio)
- [ ] **Preços finais dos planos** (`app/data/plans.ts`) — Valores atuais são placeholders (R$ 19,90/39,90/59,90)
- [ ] **Modelo de trial** — 7 dias grátis? Cartão upfront? Freemium?
- [ ] **Catálogo real** — Integração com TMDb/JustWatch ou CMS próprio
- [ ] **Métricas de negócio** — Definir KPIs além de leads (CAC, LTV, churn)

### TODO(jurídico)
- [ ] **Revisão Política de Privacidade** (`app/pages/privacidade.vue`) — Texto base precisa revisão advogado LGPD
- [ ] **Revisão Termos de Uso** (`app/pages/termos.vue`) — CDC, Marco Civil, cláusulas de arbitragem
- [ ] **Contratos de licenciamento conteúdo** — Posters, trailers, marcas
- [ ] **DPO nomeado** — Contato em `privacidade@freeflix.com.br` / `dpo@freeflix.com.br`
- [ ] **Política de cookies detalhada** — Se usar mais que Plausible

### TODO(assets)
- [ ] **Posters licenciados** — Substituir 6 placeholders SVG por arte real (400x600, AVIF < 50KB)
- [ ] **Hero background** — Imagem cinematográfica licenciada (1920x1080, AVIF < 200KB)
- [ ] **OG image** — 1200x630 final com branding aprovado
- [ ] **Favicon/App icons** — Gerar PNG 192/512 do SVG atual
- [ ] **Documentar origem de cada asset** em `public/images/CREDITS.md`

### TODO(tech)
- [ ] **Adapter LeadStore produção** — Implementar `ResendLeadStore` / `BrevoLeadStore` / `SupabaseLeadStore`
- [ ] **Rate limit distribuído** — Redis/Upstash se múltiplas instâncias
- [ ] **Monitoramento erros** — Sentry (DSN em `.env`)
- [ ] **i18n real** — Estrutura pronta em `site.ts`, mas não implementado
- [ ] **PWA** — Service worker, offline fallback, install prompt

## Riscos Conhecidos

| Risco | Impacto | Probabilidade | Mitigação |
|---|---|---|---|
| **Assets não licenciados em produção** | Legal/Reputacional | Alta | Checklist `TODO(assets)` + CI block se placeholder detectado |
| **LeadStore in-memory perde dados** | Perda de leads | Média (dev) | Apenas dev; produção usa adapter persistente |
| **Rate limit por IP falha atrás de proxy** | Abuso/spam | Baixa | Header `x-forwarded-for` lido; validar com infra |
| **Plausible bloqueado por adblockers** | Métricas incompletas | Média | Plausible proxy ou self-host; fallback server-side |
| **Fontes Google Fonts bloqueadas (China/Irã)** | Layout quebrado | Baixa | `@nuxt/fonts` baixa local; fallback `system-ui` |
| **Nuxt UI v4 breaking changes** | Manutenção | Baixa | Pin versions; testes e2e cobrem componentes críticos |
| **LGPD multas por consentimento inadequado** | Financeiro/Legal | Média | Revisão jurídica obrigatória antes do launch |

## Decisões Reversíveis (Podem Mudar)

1. **Provedor de e-mail** — Interface `LeadStore` permite trocar sem tocar componentes
2. **Analytics** — `useAnalytics` abstrai provedor; Plausible → Umami/PostHog = 1 arquivo
3. **Hospedagem** — Output `.output/public` funciona em Vercel/CF/Netlify/Node
4. **Modo conversão** — `waitlist` ↔ `signup_redirect` via env var
5. **Idiomas** — Estrutura `site.ts` preparada para i18n futuro

## Comandos de Validação

```bash
# Quality gate completo
pnpm lint && pnpm typecheck && pnpm test && pnpm build

# Lighthouse local (precisa build + serve)
pnpm build && npx serve -s .output/public -l 3000 &
npx lhci autorun

# Verificar placeholders em produção
grep -r "TODO(negócio)\|TODO(jurídico)\|TODO(assets)" app/ public/
```

---

*Atualizado: 2026-10-03 | Próxima revisão: antes do launch*