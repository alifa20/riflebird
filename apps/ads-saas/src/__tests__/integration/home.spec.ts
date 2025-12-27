import { test, expect } from '@playwright/test'

/**
 * Feature: Home Page - Initial Landing
 * Location: src/app/page.tsx
 *
 * Scenarios:
 * - User visits home page and sees PMAX Campaign Manager title
 * - User sees the tagline describing the product
 */
test.describe('Feature: Home Page Landing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display PMAX Campaign Manager title', async ({ page }) => {
    // @step User visits the home page
    // The beforeEach already navigates to /

    // @step User should see the PMAX Campaign Manager title
    await expect(page.locator('h1')).toContainText('PMAX Campaign Manager')
  })

  test('should display the product tagline', async ({ page }) => {
    // @step User visits the home page
    // The beforeEach already navigates to /

    // @step User should see the tagline
    await expect(page.locator('p')).toContainText('AI-powered Google Ads PMAX campaign management')
  })

  test('should have correct page metadata', async ({ page }) => {
    // @step Page should have correct title
    await expect(page).toHaveTitle('PMAX Campaign Manager')
  })
})
