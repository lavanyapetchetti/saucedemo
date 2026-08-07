import { test } from '../fixtures/pagesFixture';
import users from '../test-data/users.json';
import errors from '../test-data/errors.json';

test.describe('Login Tests', () => {
  test('Valid login @smoke', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await loginPage.verifyLoginSuccessful();
  });

  test('Locked user login @regression', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);
    await loginPage.verifyLoginFailed(errors.lockedUser);
  });
});
