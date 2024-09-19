import { test, expect } from '@playwright/test';
import { ChangePasswordPage } from '../pages/ChangePasswordPage';


test('Change Password successfully', async ({ page }) => {
    const changePasswordPage = new ChangePasswordPage(page);
    await changePasswordPage.loginStep(process.env.SECOND_USERNAME, process.env.SECOND_PASSWORD);
    const password = '123456!';
    await changePasswordPage.navigateChangePassword();
    await changePasswordPage.changePassword(process.env.SECOND_PASSWORD, password);
    await changePasswordPage.verifyChangePassword();
    await changePasswordPage.loginStep(process.env.SECOND_USERNAME, password);
    await changePasswordPage.navigateChangePassword();
    await changePasswordPage.changePassword(password, process.env.SECOND_PASSWORD);
    await changePasswordPage.verifyChangePassword();


})

