import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/FreeFlix/)
  })

  test('has hero section with title', async ({ page }) => {
    const heroTitle = page.locator('#hero h1')
    await expect(heroTitle).toBeVisible()
    await expect(heroTitle).toContainText('Streaming de filmes e séries')
  })

  test('has navigation links', async ({ page }) => {
    const nav = page.locator('nav[aria-label="Navegação principal"]')
    await expect(nav).toBeVisible()
    
    const links = ['Início', 'Catálogo', 'Planos', 'FAQ']
    for (const link of links) {
      await expect(nav.getByRole('link', { name: link })).toBeVisible()
    }
  })

  test('navigation anchors scroll to sections', async ({ page }) => {
    await page.getByRole('link', { name: 'Planos' }).click()
    await expect(page.locator('#pricing')).toBeInViewport()
    
    await page.getByRole('link', { name: 'Catálogo' }).click()
    await expect(page.locator('#catalog')).toBeInViewport()
    
    await page.getByRole('link', { name: 'FAQ' }).click()
    await expect(page.locator('#faq')).toBeInViewport()
  })

  test('has featured titles carousel', async ({ page }) => {
    const carousel = page.locator('#catalog [role="list"]')
    await expect(carousel).toBeVisible()
    
    const cards = carousel.locator('[role="listitem"]')
    await expect(cards.first()).toBeVisible()
  })

  test('has features section with 6 features', async ({ page }) => {
    const features = page.locator('#features')
    await expect(features).toBeVisible()
    
    const featureCards = features.locator('.ui-page-grid .ui-page-card')
    await expect(featureCards).toHaveCount(6)
  })

  test('has pricing section with 3 plans', async ({ page }) => {
    const pricing = page.locator('#pricing')
    await expect(pricing).toBeVisible()
    
    const plans = pricing.locator('[data-testid="pricing-plan"], .ui-pricing-plan')
    await expect(plans).toHaveCount(3)
  })

  test('pricing toggle switches between monthly/annual', async ({ page }) => {
    const toggle = page.locator('#pricing').getByRole('switch')
    await expect(toggle).toBeVisible()
    
    const monthlyText = page.locator('#pricing').getByText('Mensal')
    await expect(monthlyText).toBeVisible()
    
    await toggle.click()
    
    const annualText = page.locator('#pricing').getByText('Anual')
    await expect(annualText).toBeVisible()
  })

  test('has FAQ section with accordion', async ({ page }) => {
    const faq = page.locator('#faq')
    await expect(faq).toBeVisible()
    
    const accordions = faq.locator('.ui-accordion')
    await expect(accordions.first()).toBeVisible()
  })

  test('has final CTA section', async ({ page }) => {
    const cta = page.locator('#waitlist')
    await expect(cta).toBeVisible()
  })

  test('has footer with legal links', async ({ page }) => {
    const footer = page.locator('footer[role="contentinfo"]')
    await expect(footer).toBeVisible()
    
    await expect(footer.getByRole('link', { name: 'Privacidade' })).toBeVisible()
    await expect(footer.getByRole('link', { name: 'Termos de uso' })).toBeVisible()
  })

  test('color mode toggle works', async ({ page }) => {
    const toggle = page.locator('button[aria-label*="cor"], button[aria-label*="color"], .ui-color-mode-button')
    await expect(toggle).toBeVisible()
    
    const html = page.locator('html')
    const initialClass = await html.getAttribute('class')
    
    await toggle.click()
    
    const newClass = await html.getAttribute('class')
    expect(newClass).not.toBe(initialClass)
  })

  test('no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })
    
    await page.reload()
    await page.waitForLoadState('networkidle')
    
    expect(errors).toHaveLength(0)
  })
})