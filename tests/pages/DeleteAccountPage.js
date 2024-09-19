import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
export class DeleteAccountPage extends BasePage {
    constructor(page) {
        super(page);
        this.accountIdInput = page.locator('input[name="accountno"]');
        this.submitButton = this.page.locator('input[type="submit"]');

    }
    async deleteAccountId(aid) {
        await this.accountIdInput.fill(aid);
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            dialog.message() === 'Do you really want to delete this Account?'; {
                await dialog.accept();
            }
        })
        await this.submitButton.click();
    }
    async verifyDeleteAccountForm() {
        await expect(this.page.locator('p.heading3[align="center"]')).toContainText("Delete Account Form");


    }
    async navigateDeleteCustomerForm() {
        await this.page.locator('a[href="deleteAccountInput.php"]').click();
    }

}