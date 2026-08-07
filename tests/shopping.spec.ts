import { test, expect } from '../fixtures/pagesFixture';

test('Add product to cart @smoke', async ({ page, inventoryPage }) => {
  await page.goto('/inventory.html');

  await inventoryPage.addBackpack();
  await inventoryPage.verifyItemAddedToCart();

  const count = await inventoryPage.getCartCount();
  expect(count).toBe('1');
});

test('Add multiple products to cart @regression', async ({
  page,
  inventoryPage,
}) => {
  await page.goto('/inventory.html');

  await inventoryPage.addBackpack();
  await inventoryPage.addBikeLight();

  const count = await inventoryPage.getCartCount();
  expect(count).toBe('2');
});
