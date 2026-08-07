import { test } from '../fixtures/pagesFixture';

test('Logout returns to login page @regression', async ({
  page,
  inventoryPage,
  loginPage,
}) => {
  await page.goto('/inventory.html');

  await inventoryPage.logout();

  await loginPage.verifyOnLoginPage();
});
