import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState(
        'networkidle'
    );

  }

  async click(locator: Locator) {
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async getText(locator: Locator) {
    return await locator.textContent();
  }

  async waitForVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async waitForURL(url: RegExp) {
    await expect(this.page).toHaveURL(url);
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true,
    });
  }
}
