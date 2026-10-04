import { test, expect } from '@playwright/test'

test.describe('Lead Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test('shows validation error for empty email', async ({ page }) => {
    await page.locator('#waitlist').scrollIntoViewIfNeeded()
    
    const submitBtn = page.locator('#waitlist button[type="submit"]')
    await submitBtn.click()
    
    await expect(page.locator('text=E-mail é obrigatório')).toBeVisible()
  })

  test('shows validation error for invalid email', async ({ page }) => {
    await page.locator('#waitlist').scrollIntoViewIfNeeded()
    
    await page.fill('input[type="email"]', 'invalid-email')
    await page.check('input[type="checkbox"]')
    
    const submitBtn = page.locator('#waitlist button[type="submit"]')
    await submitBtn.click()
    
    await expect(page.locator('text=E-mail inválido')).toBeVisible()
  })

  test('requires consent checkbox', async ({ page }) => {
    await page.locator('#waitlist').scrollIntoViewIfNeeded()
    
    await page.fill('input[type="email"]', 'test@example.com')
    
    const submitBtn = page.locator('#waitlist button[type="submit"]')
    await expect(submitBtn).toBeDisabled()
    
    await page.check('input[type="checkbox"]')
    await expect(submitBtn).toBeEnabled()
  })

  test('submits successfully with valid data', async ({ page }) => {
    await page.locator('#waitlist').scrollIntoViewIfNeeded()
    
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="text"]', 'Test User')
    await page.check('input[type="checkbox"]')
    
    const submitBtn = page.locator('#waitlist button[type="submit"]')
    await submitBtn.click()
    
    await expect(page.locator('text=Obrigado! Você entrou na lista de espera.')).toBeVisible()
  })

  test('shows loading state during submit', async ({ page }) => {
    await page.locator('#waitlist').scrollIntoViewIfNeeded()
    
    await page.fill('input[type="email"]', 'test@example.com')
    await page.check('input[type="checkbox"]')
    
    const submitBtn = page.locator('#waitlist button[type="submit"]')
    await submitBtn.click()
    
    await expect(submitBtn).toHaveAttribute('disabled', '')
  })

  test('reset works after success', async ({ page }) => {
    await page.locator('#waitlist').scrollIntoViewIfNeeded()
    
    await page.fill('input[type="email"]', 'test@example.com')
    await page.check('input[type="checkbox"]')
    
    const submitBtn = page.locator('#waitlist button[type="submit"]')
    await submitBtn.click()
    
    await expect(page.locator('text=Obrigado! Você entrou na lista de espera.')).toBeVisible()
    
    await expect(page.locator('input[type="email"]')).toHaveValue('')
    await expect(page.locator('input[type="checkbox"]')).not.toBeChecked()
  })
})