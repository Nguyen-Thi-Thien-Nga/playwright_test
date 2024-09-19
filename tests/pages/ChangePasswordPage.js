import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
export class ChangePasswordPage extends BasePage {
    constructor(page) {
        super(page);
        this.oldPasswordInput = page.locator('input[name=oldpassword]');
        this.newPasswordInput = page.locator('input[name=newpassword]');
        this.confirmPasswordInput = page.locator('input[name=confirmpassword]');
        this.submitButton = page.locator('input[type="submit"]');
        this.changePasswordMenu = page.locator('a[href="PasswordInput.php"]');
        this.addAccountSuccessfullyMsg = page.locator('p.heading3[align="center"]');
        this.changePasswordForm = page.locator('p.heading3');

    }
    async navigateChangePassword() {
        await this.changePasswordMenu.click();
    }
    async changePassword(oldPassword, newPassword) {
        await this.oldPasswordInput.fill(oldPassword);
        await this.newPasswordInput.fill(newPassword);
        await this.confirmPasswordInput.fill(newPassword);
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.submitButton.click();
        const dialog = await dialogPromise;
        expect(dialog.message()).toBe('Password is Changed');
        await dialog.accept();
    }


    async verifyChangePassword() {
        await expect(this.page).toHaveURL('https://demo.guru99.com/v4/index.php');

    }


}