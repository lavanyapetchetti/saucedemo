import { test, expect } from '@playwright/test';
import { Environment } from '../utils/Environment';

const authFile = 'auth/storageState.json';

test.describe('Auth setup', () => {
  test('generate storage state', async ({ page }) => {
    await page.goto(Environment.baseUrl);

    await page.locator('[data-test="username"]').fill(Environment.username);
    await page.locator('[data-test="password"]').fill(Environment.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);

    await page.context().storageState({ path: authFile });
  });
});
