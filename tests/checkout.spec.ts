import { test } from '../fixtures/pagesFixture';
import checkoutData from '../test-data/checkout.json';
import errors from '../test-data/errors.json';

test('Complete checkout flow @regression', async ({
  page,
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  await page.goto('/inventory.html');

  await inventoryPage.addBackpack();
  await inventoryPage.openCart();
  await cartPage.proceedToCheckout();

  await checkoutPage.enterCustomerDetails(
    checkoutData.customer.firstName,
    checkoutData.customer.lastName,
    checkoutData.customer.zip,
  );
  await checkoutPage.continue();
  await checkoutPage.completeOrder();

  await checkoutPage.verifyOrderComplete();
});

test('Checkout validation for empty customer details @regression', async ({
  page,
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  await page.goto('/inventory.html');

  await inventoryPage.addBackpack();
  await inventoryPage.openCart();
  await cartPage.proceedToCheckout();

  await checkoutPage.continue();
  await checkoutPage.verifyValidationError(errors.checkoutFirstNameRequired);
});
