import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { HeaderComponent } from '../components/HeaderComponent';

export class InventoryPage extends BasePage {
  readonly backpack: Locator;
  readonly bikeLight: Locator;
  private readonly header: HeaderComponent;

  constructor(page: Page) {
    super(page);

    this.backpack = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.bikeLight = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]',
    );
    this.header = new HeaderComponent(page);
  }

  async addBackpack() {
    await this.backpack.click();
  }

  async addBikeLight() {
    await this.bikeLight.click();
  }

  async openCart() {
    await this.header.openCart();
  }

  async logout() {
    await this.header.logout();
  }

  async verifyItemAddedToCart() {
    await expect(this.page.locator('.shopping_cart_badge')).toBeVisible();
  }

  async getCartCount() {
    return this.page.locator('.shopping_cart_badge').textContent();
  }
}
