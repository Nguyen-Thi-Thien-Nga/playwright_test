import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
export class DeleteCustomerPage extends BasePage {
    constructor(page) {
        super(page);
        this.customerIdInput = page.locator('input[name="cusid"]');
        this.submitButton = this.page.locator('input[type="submit"]');

    }
    async deleteCustomerId(cusid) {
        await this.customerIdInput.fill(cusid);
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            if (dialog.message() === 'Do you really want to delete this Customer?') {
                await dialog.accept(); // Chọn "OK" cho alert đầu tiên
            } else if (dialog.message() === 'Customer does not Exist!!!') {
                await dialog.accept(); // Chọn "OK" cho alert thứ hai
            }
        });
        await this.submitButton.click();
    }
    async verifyDeleteCustomer() {
        await expect(this.page.locator('p.heading3[align="center"]')).toContainText("Delete Customer Form");


    }
    async navigateDeleteCustomer() {
        await this.page.locator('a[href="DeleteCustomerInput.php"]').click();

    }

}