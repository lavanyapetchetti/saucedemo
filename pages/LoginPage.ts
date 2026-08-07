import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Environment } from '../utils/Environment';

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async open() {
    await this.goto(Environment.baseUrl);
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccessful() {
    await this.waitForURL(/inventory/);
  }

  async verifyLoginFailed(expectedMessage?: string) {
    await this.waitForVisible(this.errorMessage);
    if (expectedMessage) {
      await expect(this.errorMessage).toContainText(expectedMessage);
    }
  }

  async verifyOnLoginPage() {
    await this.waitForVisible(this.loginButton);
    await expect(this.page).toHaveURL(/\/$/);
  }
}
