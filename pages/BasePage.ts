import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async waitForVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async waitForURL(url: RegExp) {
    await expect(this.page).toHaveURL(url);
  }
}
