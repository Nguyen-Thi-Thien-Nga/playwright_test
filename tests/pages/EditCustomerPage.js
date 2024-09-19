import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
export class EditCustomerPage extends BasePage {
    constructor(page) {
        super(page);
        this.customerIdInput = page.locator('input[name="cusid"]');
        this.addressInput = this.page.locator('textarea[name="addr"]');
        this.cityInput = this.page.locator('input[name="city"]');
        this.stateInput = this.page.locator('input[name="state"]');
        this.pinInput = this.page.locator('input[name="pinno"]');
        this.telephoneInput = this.page.locator('input[name="telephoneno"]');
        this.emailInput = this.page.locator('input[name="emailid"]');
        this.submitButton = this.page.locator('input[type="submit"]');
    }
    async editCustomerIdExists(cusid) {
        await this.customerIdInput.fill(cusid);
        await this.submitButton.click()
        await expect(this.page.locator('p[class=heading3]')).toContainText("Edit Customer");

    }
    async navigateEditCustomer() {
        await this.page.locator('a[href="EditCustomer.php"]').click();

    }

    async editCustomerIdNotExists(cusid) {
        await this.customerIdInput.fill(cusid);
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        await this.submitButton.click()

    }
    async editCustomer() {
        await this.addressInput.fill(faker.location.streetAddress().replace(/[^a-zA-Z0-9]/g, ''));
        await this.cityInput.fill(faker.location.city());
        await this.stateInput.fill(faker.location.state());
        await this.pinInput.fill(faker.finance.routingNumber());
        await this.telephoneInput.fill(faker.phone.imei().replace(/[^0-9]/g, ''));
        await this.emailInput.fill(faker.internet.email());
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.submitButton.click();
        const dialog = await dialogPromise;
        expect(dialog.message()).toBe('No Changes made to Customer records');
        await dialog.accept();
    }
    async verifyEditCustomer() {
        await expect(this.page).toHaveURL('https://demo.guru99.com/v4/manager/EditCustomer.php');
    }

}