# Playwright TypeScript Automation Framework

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

pages/
- Application page objects

components/
- Reusable UI components

fixtures/
- Dependency injection

helpers/
- API and utility helpers

tests/
- Test scenarios

## Installation

Clone repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Install browsers:

```bash
npx playwright install
```

## Running Tests

Run all tests:

```bash
npm test
```

Run headed:

```bash
npm run test:headed
```

Run smoke:

```bash
npm run test:smoke
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
- Execute tests
- Upload reports
- Upload screenshots

## Design Patterns

Implemented:

- Page Object Model
- Page Component Model
- Fixture Pattern
- Data Driven Testing
- Environment Configuration

## Future Improvements

- Visual testing
- Performance testing
- Parallel cloud execution
- Test management integration
