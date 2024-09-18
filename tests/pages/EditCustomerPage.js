import { BasePage } from './BasePage';
import { expect } from '@playwright/test'
export class EditCustomerPage {
    constructor(page) {
        super(page);
        this.idInput = page.locator('input[name="cusid"]');
        this.submitButton = page.locator('input[type="submit"]');
    }
    async editCustomer(cusid) {
        await this.idInput.fill(cusid);
        await this.submitButton.click()
    }
    async navigateEditCustomer() {
        await page.locator('a[href="EditCustomer.php"]').click();

    }
    async verifyEditCustomer() {
        await expect(page.locator('p.heading3[align="center"]')).toContainText("Customer Registered Successfully!!!");

    }
}