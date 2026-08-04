import { test as setup, expect } from '@playwright/test';
import { Environment } from '../utils/Environment';

const authFile = 'auth/storageState.json';

setup('authenticate user', async ({ page }) => {
  await page.goto(Environment.baseUrl);

  await page.locator('[data-test="username"]').fill(Environment.username);
  await page.locator('[data-test="password"]').fill(Environment.password);
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);

  await page.context().storageState({ path: authFile });
});
