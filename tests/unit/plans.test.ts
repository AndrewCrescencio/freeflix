import { describe, it, expect } from 'vitest'
import { plans, formatPrice, getAnnualDiscount } from '~/data/plans'

describe('Plans Data', () => {
  it('has three plans', () => {
    expect(plans).toHaveLength(3)
  })

  it('all plans have required fields', () => {
    plans.forEach(plan => {
      expect(plan.id).toBeTypeOf('string')
      expect(plan.name).toBeTypeOf('string')
      expect(plan.monthlyPrice).toBeTypeOf('number')
      expect(plan.annualPrice).toBeTypeOf('number')
      expect(plan.features).toBeInstanceOf(Array)
      expect(plan.ctaText).toBeTypeOf('string')
      expect(plan.monthlyPrice).toBeGreaterThan(0)
      expect(plan.annualPrice).toBeGreaterThan(0)
    })
  })

  it('standard plan is recommended', () => {
    const standard = plans.find(p => p.id === 'standard')
    expect(standard?.recommended).toBe(true)
  })

  it('basic and premium are not recommended', () => {
    const basic = plans.find(p => p.id === 'basic')
    const premium = plans.find(p => p.id === 'premium')
    expect(basic?.recommended).toBeFalsy()
    expect(premium?.recommended).toBeFalsy()
  })
})

describe('Price Formatting', () => {
  it('formats BRL correctly', () => {
    // Intl.NumberFormat uses NBSP between currency and amount
    const nbsp = '\u00A0'
    expect(formatPrice(1990)).toBe(`R$${nbsp}19,90`)
    expect(formatPrice(3990)).toBe(`R$${nbsp}39,90`)
    expect(formatPrice(5990)).toBe(`R$${nbsp}59,90`)
    expect(formatPrice(19900)).toBe(`R$${nbsp}199,00`)
    expect(formatPrice(39900)).toBe(`R$${nbsp}399,00`)
    expect(formatPrice(59900)).toBe(`R$${nbsp}599,00`)
  })

  it('handles zero', () => {
    const nbsp = '\u00A0'
    expect(formatPrice(0)).toBe(`R$${nbsp}0,00`)
  })
})

describe('Annual Discount Calculation', () => {
  it('calculates ~17% discount for standard pricing', () => {
    const discount = getAnnualDiscount(3990, 39900)
    expect(discount).toBe(17)
  })

  it('calculates correctly for other plans', () => {
    expect(getAnnualDiscount(1990, 19900)).toBe(17)
    expect(getAnnualDiscount(5990, 59900)).toBe(17)
  })

  it('returns 0 for no discount', () => {
    expect(getAnnualDiscount(1000, 12000)).toBe(0)
  })
})