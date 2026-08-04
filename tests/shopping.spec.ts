import { test } from '../fixtures/pagesFixture';
import users from '../test-data/users.json';

test('Add product to cart', async ({ loginPage, inventoryPage }) => {
  await loginPage.open();
  await loginPage.login(users.validUser.username, users.validUser.password);
  await inventoryPage.addBackpack();
});
