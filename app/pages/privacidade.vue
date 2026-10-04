<script setup lang="ts">
import { siteConfig } from '~/data/site'
import { useHead, useSeoMeta } from '#imports'

const title = 'Política de Privacidade — FreeFlix'
const description = 'Saiba como coletamos, usamos e protegemos seus dados pessoais no FreeFlix.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/og-default.png'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Política de Privacidade',
        description,
        url: `${siteConfig.url}/privacidade`
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen py-16 md:py-24 px-4 md:px-6">
    <UContainer class="max-w-3xl">
      <header class="mb-12">
        <h1 class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Política de Privacidade
        </h1>
        <p class="text-muted">
          Última atualização: {{ new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) }}
        </p>
      </header>

      <nav class="mb-8 p-4 bg-elevated/50 rounded-lg border border-default" aria-label="Sumário">
        <h2 class="font-semibold mb-3">Nesta página</h2>
        <ul class="space-y-2">
          <li><a href="#dados-coletados" class="text-sm text-primary hover:underline">1. Dados que coletamos</a></li>
          <li><a href="#uso-dados" class="text-sm text-primary hover:underline">2. Como usamos seus dados</a></li>
          <li><a href="#compartilhamento" class="text-sm text-primary hover:underline">3. Compartilhamento de dados</a></li>
          <li><a href="#cookies" class="text-sm text-primary hover:underline">4. Cookies e tecnologias similares</a></li>
          <li><a href="#direitos" class="text-sm text-primary hover:underline">5. Seus direitos (LGPD)</a></li>
          <li><a href="#seguranca" class="text-sm text-primary hover:underline">6. Segurança</a></li>
          <li><a href="#retencao" class="text-sm text-primary hover:underline">7. Retenção de dados</a></li>
          <li><a href="#alteracoes" class="text-sm text-primary hover:underline">8. Alterações nesta política</a></li>
          <li><a href="#contato" class="text-sm text-primary hover:underline">9. Contato</a></li>
        </ul>
      </nav>

      <article class="prose prose-invert max-w-none space-y-8">
        <section id="dados-coletados">
          <h2>1. Dados que coletamos</h2>
          <p>Coletamos apenas os dados necessários para fornecer nossos serviços:</p>
          <ul>
            <li><strong>Dados de cadastro:</strong> Nome, e-mail, senha (hash), data de nascimento (para classificação etária).</li>
            <li><strong>Dados de uso:</strong> Histórico de visualização, preferências, configurações de perfil, dispositivos utilizados.</li>
            <li><strong>Dados técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional, logs de acesso (para segurança e prevenção de fraude).</li>
            <li><strong>Dados de pagamento:</strong> Processados por nosso provedor de pagamentos (Stripe/Pagar.me). Não armazenamos números de cartão.</li>
            <li><strong>Lista de espera:</strong> E-mail e nome (opcional) fornecidos voluntariamente na landing page.</li>
          </ul>
        </section>

        <section id="uso-dados">
          <h2>2. Como usamos seus dados</h2>
          <ul>
            <li>Fornecer, manter e melhorar o serviço de streaming.</li>
            <li>Personalizar recomendações e experiência do usuário.</li>
            <li>Processar pagamentos e gerenciar assinaturas.</li>
            <li>Enviar comunicações transacionais (confirmações, faturas, avisos de segurança).</li>
            <li>Enviar comunicações de marketing (apenas com consentimento prévio).</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
            <li>Prevenir fraude, abuso e atividades ilegais.</li>
          </ul>
        </section>

        <section id="compartilhamento">
          <h2>3. Compartilhamento de dados</h2>
          <p><strong>Não vendemos seus dados pessoais.</strong> Compartilhamos apenas nas seguintes situações:</p>
          <ul>
            <li><strong>Provedores de serviço:</strong> Hospedagem (Vercel/Cloudflare), pagamentos (Stripe/Pagar.me), e-mail (Resend/Brevo), analytics (Plausible). Todos com contratos de processamento de dados (DPA).</li>
            <li><strong>Obrigação legal:</strong> Quando exigido por lei, ordem judicial ou autoridade competente.</li>
            <li><strong>Proteção de direitos:</strong> Para proteger nossos direitos, propriedade ou segurança, ou a de terceiros.</li>
          </ul>
        </section>

        <section id="cookies">
          <h2>4. Cookies e tecnologias similares</h2>
          <p>Usamos cookies essenciais para o funcionamento do site (sessão, preferências, segurança).</p>
          <p>Com seu consentimento, usamos:</p>
          <ul>
            <li><strong>Analytics (Plausible):</strong> Métricas agregadas, sem dados pessoais, sem cookies persistentes.</li>
          </ul>
          <p>Você pode gerenciar suas preferências a qualquer momento no banner de cookies ou nas configurações do navegador.</p>
        </section>

        <section id="direitos">
          <h2>5. Seus direitos (LGPD - Lei 13.709/2018)</h2>
          <p>Você tem direito a:</p>
          <ul>
            <li>Confirmação da existência de tratamento.</li>
            <li>Acesso aos dados.</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade.</li>
            <li>Portabilidade dos dados a outro fornecedor.</li>
            <li>Eliminação dos dados tratados com consentimento (exceto nas hipóteses do art. 16 da LGPD).</li>
            <li>Informação sobre compartilhamento.</li>
            <li>Revogação do consentimento.</li>
            <li>Oposição ao tratamento baseado em legítimo interesse.</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato pelo e-mail <a href="mailto:privacidade@freeflix.com.br" class="underline hover:text-primary">privacidade@freeflix.com.br</a>.</p>
        </section>

        <section id="seguranca">
          <h2>6. Segurança</h2>
          <p>Implementamos medidas técnicas e organizacionais adequadas:</p>
          <ul>
            <li>Criptografia em trânsito (TLS 1.2+) e em repouso (AES-256).</li>
            <li>Autenticação de dois fatores (2FA) opcional.</li>
            <li>Monitoramento de acesso suspeito e rate limiting.</li>
            <li>Backups criptografados e testados regularmente.</li>
            <li>Treinamento contínuo da equipe em segurança da informação.</li>
          </ul>
        </section>

        <section id="retencao">
          <h2>7. Retenção de dados</h2>
          <ul>
            <li>Dados de conta: enquanto a conta estiver ativa + 12 meses após exclusão (para obrigações legais).</li>
            <li>Dados de uso/anonymizados: agregados indefinidamente para melhoria do serviço.</li>
            <li>Logs de segurança: 12 meses.</li>
            <li>Lista de espera: até revogação do consentimento ou 24 meses sem interação.</li>
          </ul>
        </section>

        <section id="alteracoes">
          <h2>8. Alterações nesta política</h2>
          <p>Podemos atualizar esta política periodicamente. Alterações significativas serão comunicadas por e-mail e/ou aviso no app com 30 dias de antecedência.</p>
        </section>

        <section id="contato">
          <h2>9. Contato</h2>
          <p>Encarregado de Proteção de Dados (DPO): <a href="mailto:dpo@freeflix.com.br" class="underline hover:text-primary">dpo@freeflix.com.br</a></p>
          <p>Endereço: [ENDEREÇO DA EMPRESA] — CNPJ: [CNPJ]</p>
          <p class="text-sm text-muted">
            <strong>TODO(jurídico):</strong> Este texto é um modelo base. Deve ser revisado por advogado especializado em LGPD antes do lançamento.
          </p>
        </section>
      </article>
    </UContainer>
  </div>
</template>