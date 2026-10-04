<script setup lang="ts">
import { siteConfig } from '~/data/site'
import { useHead, useSeoMeta } from '#imports'

const title = 'Termos de Uso — FreeFlix'
const description = 'Termos e condições de uso do serviço de streaming FreeFlix.'

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
        name: 'Termos de Uso',
        description,
        url: `${siteConfig.url}/termos`
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
          Termos de Uso
        </h1>
        <p class="text-muted">
          Última atualização: {{ new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) }}
        </p>
      </header>

      <nav class="mb-8 p-4 bg-elevated/50 rounded-lg border border-default" aria-label="Sumário">
        <h2 class="font-semibold mb-3">Nesta página</h2>
        <ul class="space-y-2">
          <li><a href="#aceitacao" class="text-sm text-primary hover:underline">1. Aceitação dos termos</a></li>
          <li><a href="#servico" class="text-sm text-primary hover:underline">2. Descrição do serviço</a></li>
          <li><a href="#conta" class="text-sm text-primary hover:underline">3. Conta e cadastro</a></li>
          <li><a href="#assinatura" class="text-sm text-primary hover:underline">4. Assinatura e pagamentos</a></li>
          <li><a href="#uso-aceitavel" class="text-sm text-primary hover:underline">5. Uso aceitável</a></li>
          <li><a href="#propriedade" class="text-sm text-primary hover:underline">6. Propriedade intelectual</a></li>
          <li><a href="#cancelamento" class="text-sm text-primary hover:underline">7. Cancelamento e reembolso</a></li>
          <li><a href="#isencao" class="text-sm text-primary hover:underline">8. Isenção de garantias</a></li>
          <li><a href="#limitacao" class="text-sm text-primary hover:underline">9. Limitação de responsabilidade</a></li>
          <li><a href="#alteracoes" class="text-sm text-primary hover:underline">10. Alterações nos termos</a></li>
          <li><a href="#lei" class="text-sm text-primary hover:underline">11. Lei aplicável e foro</a></li>
          <li><a href="#contato" class="text-sm text-primary hover:underline">12. Contato</a></li>
        </ul>
      </nav>

      <article class="prose prose-invert max-w-none space-y-8">
        <section id="aceitacao">
          <h2>1. Aceitação dos termos</h2>
          <p>Ao acessar ou usar o FreeFlix ("Serviço"), você concorda em ficar vinculado a estes Termos de Uso ("Termos"), à nossa <NuxtLink :to="siteConfig.legal.privacyUrl" class="underline hover:text-primary">Política de Privacidade</NuxtLink> e a quaisquer diretrizes adicionais publicadas no Serviço. Se não concordar, não use o Serviço.</p>
        </section>

        <section id="servico">
          <h2>2. Descrição do serviço</h2>
          <p>O FreeFlix é um serviço de streaming de vídeo sob demanda que oferece filmes, séries, documentários e outros conteúdos audiovisuais ("Conteúdo") para visualização pessoal e não comercial via internet em dispositivos compatíveis.</p>
          <p>O catálogo varia por região e pode mudar sem aviso prévio devido a licenciamento.</p>
        </section>

        <section id="conta">
          <h2>3. Conta e cadastro</h2>
          <ul>
            <li>Você deve ter 18 anos ou mais (ou maioridade civil em sua jurisdição) para criar uma conta. Menores de 18 anos só podem usar o Serviço sob supervisão de um responsável legal.</li>
            <li>Você é responsável por manter a confidencialidade das credenciais da sua conta e por todas as atividades que ocorrerem nela.</li>
            <li>Forneça informações precisas, atuais e completas. Atualize-as se houver mudanças.</li>
            <li>Notifique-nos imediatamente se souber de qualquer uso não autorizado da sua conta.</li>
          </ul>
        </section>

        <section id="assinatura">
          <h2>4. Assinatura e pagamentos</h2>
          <ul>
            <li><strong>Planos:</strong> Oferecemos planos mensais e anuais com diferentes recursos (qualidade de vídeo, telas simultâneas, perfis). Detalhes atuais estão na página de Planos.</li>
            <li><strong>Teste grátis:</strong> Novos assinantes elegíveis recebem 7 dias grátis. O cartão não é cobrado durante o teste. Cancelamento antes do fim do teste evita qualquer cobrança.</li>
            <li><strong>Renovação automática:</strong> A assinatura renova automaticamente no fim de cada período, a menos que cancelada.</li>
            <li><strong>Preços:</strong> Podemos alterar preços com aviso prévio de 30 dias. Alterações não afetam o período já pago.</li>
            <li><strong>Pagamento:</strong> Processado por terceiros (Stripe/Pagar.me). Sujeito aos termos deles.</li>
            <li><strong>Comprovantes:</strong> Enviados por e-mail após cada cobrança bem-sucedida.</li>
          </ul>
        </section>

        <section id="uso-aceitavel">
          <h2>5. Uso aceitável</h2>
          <p>Você concorda em <strong>não</strong>:</p>
          <ul>
            <li>Copiar, gravar, distribuir, modificar, exibir publicamente ou criar obras derivadas do Conteúdo.</li>
            <li>Usar robôs, spiders, scrapers ou meios automatizados para acessar o Serviço.</li>
            <li>Contornar controles de acesso, DRM ou restrições geográficas (VPN, proxy, DNS).</li>
            <li>Compartilhar credenciais além do permitido pelo seu plano (perfis são pessoais, não transferíveis).</li>
            <li>Usar o Serviço para fins ilegais, prejudiciais ou que violem direitos de terceiros.</li>
            <li>Interferir na segurança, integridade ou desempenho do Serviço.</li>
          </ul>
          <p>Violações podem resultar em suspensão ou encerramento da conta, sem reembolso.</p>
        </section>

        <section id="propriedade">
          <h2>6. Propriedade intelectual</h2>
          <p>Todo o Conteúdo, software, marcas, logotipos, design e tecnologia do FreeFlix são de nossa propriedade ou licenciados a nós. Protegidos por leis de direitos autorais, marcas registradas e tratados internacionais.</p>
          <p>Estes Termos não concedem a você nenhum direito de propriedade intelectual, exceto a licença limitada, não exclusiva, intransferível e revogável para acessar o Conteúdo para uso pessoal e não comercial conforme seu plano.</p>
        </section>

        <section id="cancelamento">
          <h2>7. Cancelamento e reembolso</h2>
          <ul>
            <li>Você pode cancelar a qualquer momento nas configurações da conta. O acesso continua até o fim do período já pago.</li>
            <li>Não há reembolsos parciais por períodos não utilizados, exceto quando exigido por lei (ex.: CDC art. 49 para compras fora do estabelecimento comercial, dentro de 7 dias).</li>
            <li>Se cancelarmos sua conta por violação destes Termos, não haverá reembolso.</li>
          </ul>
        </section>

        <section id="isencao">
          <h2>8. Isenção de garantias</h2>
          <p>O SERVIÇO É FORNECIDO "COMO ESTÁ" E "CONFORME DISPONÍVEL", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO GARANTIAS DE COMERCIABILIDADE, ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO VIOLAÇÃO. NÃO GARANTIMOS QUE O SERVIÇO SERÁ ININTERRUPTO, LIVRE DE ERROS, SEGURO OU QUE DEFEITOS SERÃO CORRIGIDOS.</p>
        </section>

        <section id="limitacao">
          <h2>9. Limitação de responsabilidade</h2>
          <p>NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, O FREEFLIX NÃO SERÁ RESPONSÁVEL POR DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO LUCROS CESSANTES, PERDA DE DADOS OU INTERRUPÇÃO DE NEGÓCIOS. NOSSA RESPONSABILIDADE TOTAL NÃO EXCEDERÁ O VALOR PAGO POR VOCÊ NOS ÚLTIMOS 12 MESES.</p>
        </section>

        <section id="alteracoes">
          <h2>10. Alterações nos termos</h2>
          <p>Podemos modificar estes Termos a qualquer momento. Alterações materiais serão notificadas com 30 dias de antecedência por e-mail e/ou no Serviço. O uso contínuo após a vigência das alterações constitui aceitação.</p>
        </section>

        <section id="lei">
          <h2>11. Lei aplicável e foro</h2>
          <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de [CIDADE/ESTADO] para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.</p>
        </section>

        <section id="contato">
          <h2>12. Contato</h2>
          <p>Dúvidas sobre estes Termos: <a href="mailto:legal@freeflix.com.br" class="underline hover:text-primary">legal@freeflix.com.br</a></p>
          <p class="text-sm text-muted">
            <strong>TODO(jurídico):</strong> Este texto é um modelo base. Deve ser revisado por advogado especializado em direito digital e consumidor (CDC) antes do lançamento.
          </p>
        </section>
      </article>
    </UContainer>
  </div>
</template>