import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { Environment } from '../utils/Environment';

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: any) {
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
    await this.fill(this.username, username);
    await this.fill(this.password, password);
    await this.click(this.loginButton);
  }

  async verifyLoginSuccessful() {
    await this.waitForURL(/inventory/);
  }

  async verifyLoginFailed() {
    await this.waitForVisible(this.errorMessage);
  }
}
