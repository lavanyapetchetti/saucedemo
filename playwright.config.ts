import { defineConfig, devices } from '@playwright/test';
import { Environment } from './utils/Environment';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,

  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['allure-playwright'],
  ],

  use: {
    baseURL: Environment.baseUrl,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.spec\.ts/,
    },
    {
      name: 'chromium',
      testMatch: /^(?!.*(?:login|auth\.setup|api)\.spec\.ts$).*\.spec\.ts$/,
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth/storageState.json',
      },
    },
    {
      name: 'chromium-login',
      testMatch: /login\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'chromium-api',
      testMatch: /api\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
