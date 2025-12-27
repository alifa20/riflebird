import { test as base } from '@playwright/test'

/**
 * Fixture for authenticated user sessions
 * Can be extended as needed for different user types
 */
export const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    // TODO: Implement authentication flow
    // This could involve:
    // 1. Logging in via OAuth
    // 2. Setting session cookies
    // 3. Storing auth tokens

    await use(page)
  },
})

export { expect } from '@playwright/test'
