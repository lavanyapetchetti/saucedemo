import { defineConfig, devices } from '@playwright/test';
import { Environment } from './utils/Environment';

export default defineConfig({

  testDir: './tests',

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

      testMatch: /.*auth\.setup\.spec\.ts/
    },

    {
      name: 'chromium',

      dependencies: [
        'setup'
      ],

      use: {
        ...devices['Desktop Chrome'],

        storageState: 'auth/storageState.json'
      }
    }

  ]

});
