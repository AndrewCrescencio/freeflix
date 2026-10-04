import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility', () => {
  const pages = ['/', '/privacidade', '/termos']

  for (const pagePath of pages) {
    test(`${pagePath} has no critical/serious violations`, async ({ page }) => {
      await page.goto(pagePath)
      await page.waitForLoadState('networkidle')

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
        .analyze()

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical'
      )
      const seriousViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'serious'
      )

      if (criticalViolations.length > 0) {
        console.log('Critical violations:', JSON.stringify(criticalViolations, null, 2))
      }
      if (seriousViolations.length > 0) {
        console.log('Serious violations:', JSON.stringify(seriousViolations, null, 2))
      }

      expect(criticalViolations).toHaveLength(0)
      expect(seriousViolations).toHaveLength(0)
    })
  }

  test('keyboard navigation works on home page', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Tab through focusable elements
    const focusableSelectors = [
      'header a',
      'header button',
      '#hero button',
      '#catalog [role="listitem"]',
      '#features a, #features button',
      '#pricing button',
      '#pricing [role="switch"]',
      '#faq .ui-accordion-trigger',
      '#waitlist input',
      '#waitlist button',
      'footer a',
      'footer button'
    ]

    for (const selector of focusableSelectors) {
      const element = page.locator(selector).first()
      if (await element.isVisible()) {
        await element.focus()
        await expect(element).toBeFocused()
      }
    }
  })

  test('accordion keyboard navigation', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const accordionTrigger = page.locator('#faq .ui-accordion-trigger').first()
    await accordionTrigger.focus()
    await expect(accordionTrigger).toBeFocused()

    await page.keyboard.press('Enter')
    await expect(page.locator('#faq .ui-accordion-content').first()).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(page.locator('#faq .ui-accordion-content').first()).toBeHidden()
  })

  test('carousel keyboard navigation', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const firstCard = page.locator('#catalog [role="listitem"]').first()
    await firstCard.focus()
    await expect(firstCard).toBeFocused()

    await page.keyboard.press('ArrowRight')
    const secondCard = page.locator('#catalog [role="listitem"]').nth(1)
    await expect(secondCard).toBeFocused()

    await page.keyboard.press('ArrowLeft')
    await expect(firstCard).toBeFocused()
  })

  test('skip link works', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const skipLink = page.locator('a[href="#main-content"]')
    await skipLink.focus()
    await expect(skipLink).toBeFocused()

    await page.keyboard.press('Enter')
    await expect(page.locator('#main-content')).toBeFocused()
  })

  test('images have alt attributes', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const images = page.locator('img')
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).not.toBeNull()
    }
  })

  test('buttons have accessible names', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const buttons = page.locator('button:visible')
    const count = await buttons.count()

    for (let i = 0; i < count; i++) {
      const btn = buttons.nth(i)
      const ariaLabel = await btn.getAttribute('aria-label')
      const text = await btn.textContent()
      
      expect(ariaLabel || text?.trim()).toBeTruthy()
    }
  })

  test('color contrast', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa', 'cat.color'])
      .analyze()

    const colorViolations = accessibilityScanResults.violations.filter(
      v => v.id === 'color-contrast'
    )

    if (colorViolations.length > 0) {
      console.log('Color contrast violations:', JSON.stringify(colorViolations, null, 2))
    }

    expect(colorViolations).toHaveLength(0)
  })
})