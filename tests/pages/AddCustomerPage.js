import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { BasePage } from "./BasePage";
import { format } from "date-fns";
export class AddCustomerPage extends BasePage {
  constructor(page) {
    super(page);
    this.nameInput = this.page.locator('input[name="name"]');
    this.genderInput = this.page.locator('input[value="f"]');
    this.birthdateInput = this.page.locator('input[name="dob"]');
    this.addressInput = this.page.locator('textarea[name="addr"]');
    this.cityInput = this.page.locator('input[name="city"]');
    this.stateInput = this.page.locator('input[name="state"]');
    this.pinInput = this.page.locator('input[name="pinno"]');
    this.telephoneInput = this.page.locator('input[name="telephoneno"]');
    this.emailInput = this.page.locator('input[name="emailid"]');
    this.passwordInput = this.page.locator('input[name="password"]');
    this.submitButton = this.page.locator('input[type="submit"]');
    this.clickNewCustomer = this.page.locator('a[href="addcustomerpage.php"]');
    this.expectedAddCustomer = page.locator('p.heading3[align="center"]');
  }

  async clickMenuNewCustomer() {
    await this.clickNewCustomer.click();
  }

  async addCustomer() {
    await this.nameInput.fill(
      faker.person.fullName().replace(/[^a-zA-Z0-9]/g, ""),
    );
    await this.birthdateInput.fill(
      format(faker.date.birthdate(), "yyyy-MM-dd"),
    );
    await this.addressInput.fill(
      faker.location.streetAddress().replace(/[^a-zA-Z0-9]/g, ""),
    );
    await this.cityInput.fill(
      faker.location.city().replace(/[^a-zA-Z0-9]/g, ""),
    );
    await this.stateInput.fill(
      faker.location.state().replace(/[^a-zA-Z0-9]/g, ""),
    );
    await this.pinInput.fill(faker.finance.routingNumber());
    await this.telephoneInput.fill(faker.phone.imei().replace(/[^0-9]/g, ""));
    await this.emailInput.fill(faker.internet.email());
    await this.passwordInput.fill(faker.internet.password());
    await this.submitButton.click();
  }

  async addCustomerWithGenderMale() {
    await this.clickMenuNewCustomer();
    await this.addCustomer();
  }

  async addCustomerWithGenderFemale() {
    await this.clickMenuNewCustomer();
    await this.genderInput.click();
    await this.addCustomer();
  }

  async verifyExpectedAddCustomer() {
    await expect(this.expectedAddCustomer).toContainText(
      "Customer Registered Successfully!!!",
    );
  }
}
