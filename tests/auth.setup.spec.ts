import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Environment } from '../utils/Environment';

const authFile = 'auth/storageState.json';

test.describe('Auth setup', () => {
  test('generate storage state', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(Environment.username, Environment.password);
    await loginPage.verifyLoginSuccessful();

    await page.context().storageState({ path: authFile });
  });
});
