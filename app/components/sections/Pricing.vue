<script setup lang="ts">
import { plans, formatPrice, getAnnualDiscount } from '~/data/plans'
import { ref, computed } from 'vue'
import { trackPlanSelect, trackBillingToggle } from '~/composables/useAnalytics'

const billing = ref<'monthly' | 'annual'>('monthly')

const formattedPlans = computed(() => plans.map(plan => ({
  ...plan,
  price: billing.value === 'monthly' ? plan.monthlyPrice : plan.annualPrice,
  period: billing.value === 'monthly' ? 'mês' : 'ano',
  discount: billing.value === 'annual' ? getAnnualDiscount(plan.monthlyPrice, plan.annualPrice) : 0
})))

const handlePlanSelect = (planId: string) => {
  trackPlanSelect(planId, billing.value)
}

const toggleBilling = () => {
  billing.value = billing.value === 'monthly' ? 'annual' : 'monthly'
  trackBillingToggle(billing.value)
}
</script>

<template>
  <section id="pricing" class="py-16 md:py-24 px-4 md:px-6 bg-elevated/30" aria-labelledby="pricing-title">
    <UContainer>
      <div class="max-w-2xl mx-auto text-center mb-12">
        <h2 id="pricing-title" class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Planos simples e transparentes
        </h2>
        <p class="text-muted text-lg mb-8">
          Escolha o plano ideal para você. Todos incluem teste grátis de 7 dias e podem ser cancelados a qualquer momento.
        </p>

        <div class="flex items-center justify-center gap-4">
          <span 
            :class="['text-sm font-medium transition-colors', billing === 'monthly' ? 'text-default' : 'text-muted']"
          >
            Mensal
          </span>
          <USwitch
            v-model="billing"
            @update:modelValue="toggleBilling"
            aria-label="Alternar entre cobrança mensal e anual"
          />
          <span 
            :class="['text-sm font-medium transition-colors', billing === 'annual' ? 'text-default' : 'text-muted']"
          >
            Anual
            <span v-if="billing === 'annual'" class="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-amber-500/20 text-amber-400">
              Até 17% OFF
            </span>
          </span>
        </div>
      </div>

      <UPricingPlans class="w-full">
        <UPricingPlan
          v-for="plan in formattedPlans"
          :key="plan.id"
          :name="plan.name"
          :description="plan.description"
          :price="formatPrice(plan.price)"
          :period="plan.period"
          :features="plan.features"
          :recommended="plan.recommended"
          :ui="{
            root: 'relative',
            badge: plan.recommended ? 'bg-primary text-primary-inverted' : 'bg-neutral'
          }"
          class="relative"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-semibold text-lg">{{ plan.name }}</h3>
                <p class="text-sm text-muted mt-1">{{ plan.description }}</p>
              </div>
              <div v-if="plan.recommended" class="ml-4">
                <span class="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                  Recomendado
                </span>
              </div>
            </div>
          </template>
          
          <template #action>
            <UButton
              @click="handlePlanSelect(plan.id)"
              class="w-full"
              :color="plan.recommended ? 'primary' : 'neutral'"
              :variant="plan.recommended ? 'solid' : 'outline'"
            >
              {{ plan.ctaText }}
            </UButton>
          </template>

          <template #discount v-if="plan.discount > 0">
            <div class="mt-4 pt-4 border-t border-default flex items-center justify-center gap-2 text-sm text-muted">
              <i class="i-lucide-percent w-4 h-4 text-amber-400" />
              <span>Economize {{ plan.discount }}% no plano anual</span>
            </div>
          </template>
        </UPricingPlan>
      </UPricingPlans>

      <p class="text-center text-sm text-muted mt-8">
        Todos os preços em BRL. Impostos incluídos. <NuxtLink to="#faq" class="text-primary hover:underline">Ver FAQ</NuxtLink>
      </p>
    </UContainer>
  </section>
</template>