import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  private readonly cartIcon: Locator;
  private readonly menuButton: Locator;
  private readonly logoutLink: Locator;

  constructor(private page: Page) {
    this.cartIcon = page.locator('.shopping_cart_link');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}
