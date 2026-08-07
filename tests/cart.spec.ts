import { test, expect } from '../fixtures/pagesFixture';
import products from '../test-data/products.json';

test('Cart displays added item before checkout @regression', async ({
  page,
  inventoryPage,
  cartPage,
}) => {
  await page.goto('/inventory.html');

  await inventoryPage.addBackpack();
  await inventoryPage.openCart();

  await cartPage.verifyItemInCart(products.backpack);
  expect(await cartPage.getItemCount()).toBe(1);
});
