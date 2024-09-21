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
    this.editCustomerLabel = this.page.locator('p[class=heading3]');
    this.editCustomerForm = this.page.locator('p[class=heading3]');
    this.navigateEditCustomerForm = page.locator('a[href="EditCustomer.php"]');
  }
  async navigateEditCustomer() {
    await this.navigateEditCustomerForm.click();
  }
  async verifyEditCustomerForm() {
    await expect(this.editCustomerLabel).toContainText('Edit Customer Form');
  }
  async editCustomerIdExists(cusid) {
    await this.customerIdInput.fill(cusid);
    await this.submitButton.click();
  }
  async verifyEditCustomerId() {
    await expect(this.editCustomerLabel).toContainText('Edit Customer');
  }

  async editCustomerIdNotExists(cusid) {
    await this.customerIdInput.fill(cusid);
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.submitButton.click();
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe('You are not authorize to edit this customer!!');
    await dialog.accept();
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
    await dialog.accept();
  }
}
