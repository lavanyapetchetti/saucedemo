import eslint from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const ignoredPaths = [
  'node_modules/',
  'reports/',
  'allure-results/',
  'allure-report/',
  'playwright-report/',
  'test-results/',
  'screenshots/',
  'auth/storageState.json',
];

export default [
  {
    ignores: ignoredPaths,
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ignoredPaths,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ignoredPaths,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
];
