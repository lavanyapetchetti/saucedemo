import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  private cartIcon: Locator;

  constructor(private page: Page) {
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async cartCount() {
    return await this.page.locator('.shopping_cart_badge').textContent();
  }
}
