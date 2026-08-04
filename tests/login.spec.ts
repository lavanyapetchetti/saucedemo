import { test } from '../fixtures/pagesFixture';
import users from '../test-data/users.json';

test.describe('Login Tests', () => {
  test('Valid login', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await loginPage.verifyLoginSuccessful();
  });

  test('Locked user login', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);
    await loginPage.verifyLoginFailed();
  });
});
