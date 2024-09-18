import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';


test('Logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);
    await loginPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
    await logoutPage.logout();
    await logoutPage.verifyLogout();

})

