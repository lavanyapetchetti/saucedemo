import { test, expect } from '../fixtures/pagesFixture';
import checkoutData from '../test-data/checkout.json';
import users from '../test-data/users.json';

test('Complete checkout flow', async ({ loginPage, inventoryPage, checkoutPage, page }) => {
	await loginPage.open();
	await loginPage.login(users.validUser.username, users.validUser.password);

	// Add an item and open cart
	await inventoryPage.addBackpack();
	await page.locator('.shopping_cart_link').click();

	// Proceed to checkout
	await page.locator('[data-test="checkout"]').click();

	// Fill customer details and complete order
	await checkoutPage.enterCustomerDetails(
		checkoutData.customer.firstName,
		checkoutData.customer.lastName,
		checkoutData.customer.zip
	);
	await checkoutPage.continue();
	await checkoutPage.completeOrder();

	await expect(page).toHaveURL(/checkout-complete/);
});
