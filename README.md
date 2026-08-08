# Playwright TypeScript Automation Framework

[![Playwright Tests](https://github.com/lavanyapetchetti/saucedemo/actions/workflows/playwright.yml/badge.svg)](https://github.com/lavanyapetchetti/saucedemo/actions/workflows/playwright.yml)

## Overview

Enterprise-style UI and API automation framework built using:

- Playwright
- TypeScript
- Page Object Model
- Page Component Model
- Custom Fixtures
- GitHub Actions
- Docker
- Allure Reporting

## Application Under Test

SauceDemo

https://www.saucedemo.com

## Framework Architecture

```
pages/        - Application page objects
components/   - Reusable UI components
fixtures/     - Dependency injection
utils/        - Environment and shared utilities
tests/        - Test scenarios
test-data/    - JSON test data
auth/         - Generated storage state (gitignored)
```

## Installation

Clone repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm ci
```

Install browsers:

```bash
npx playwright install
```

Copy environment file (optional):

```bash
cp .env.example .env
```

### Environment variables

Create a `.env` file with SauceDemo credentials if you want to override defaults:

```bash
BASE_URL=https://www.saucedemo.com
USERNAME=standard_user
PASSWORD=secret_sauce
```

## Running Tests

Run all tests:

```bash
npm test
```

Run CI validation locally:

```bash
npm run ci
```

Run headed:

```bash
npm run test:headed
```

Run smoke:

```bash
npm run test:smoke
```

Run regression:

```bash
npm run test:regression
```

## Reports

HTML Report:

```bash
npm run report
```

Allure Report:

```bash
npm run allure:generate
npm run allure:open
```

## CI/CD

GitHub Actions executes:

- Install dependencies
- Install browsers
- Run `npm run ci`
- Generate the Allure report
- Upload HTML reports
- Upload Allure results
- Upload Allure report
- Upload screenshots

## Design Patterns

Implemented:

- Page Object Model
- Page Component Model
- Fixture Pattern
- Data Driven Testing
- Environment Configuration
- Authenticated vs unauthenticated test projects

## Test Tags

- `@smoke` - Critical path tests (login, add to cart)
- `@regression` - Broader coverage (cart, checkout validation, logout, API sample)

## Quality Checks

```bash
npm run typecheck
npm run lint
npm run format:check
```

## Future Improvements

- Visual testing
- Performance testing
- Parallel cloud execution
- Test management integration
