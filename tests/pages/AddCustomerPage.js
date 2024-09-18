import { faker } from '@faker-js/faker'

export class AddCustomerPage {

    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('input[name="name"]');
        this.genderInput = page.locator('input[value="f"]');
        this.birthdateInput = page.locator('input[name="dob"]');
        this.addressInput = page.locator('textarea[name="addr"]');
        this.cityInput = page.locator('input[name="city"]');
        this.stateInput = page.locator('input[name="state"]');
        this.pinInput = page.locator('input[name="pinno"]');
        this.telephoneInput = page.locator('input[name="telephoneno"]');
        this.emailInput = page.locator('input[name="emailid"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.submitButton = page.locator('input[type="submit"]');
      }

      async addCustomerWithMale() {
        await this.nameInput.fill(faker.person.fullName({ firstName: 'Nga' }));
        const dob = faker.date.birthdate();
       // await this.birthdateInput.fill(`${dob.getFullYear()}-${dob.getMonth()}-${dob.getDate()}`);
        await this.birthdateInput.fill('1994-12-14');
        await this.addressInput.fill(faker.location.streetAddress());
        await this.cityInput.fill(faker.location.city());
        await this.stateInput.fill(faker.location.state());
        await this.pinInput.fill(faker.finance.routingNumber());
        await this.telephoneInput.fill(faker.finance.routingNumber());
        await this.emailInput.fill(faker.internet.email());
        await this.passwordInput.fill(faker.internet.password());
        await this.submitButton.click();

      }
      async addCustomerWithFemale() {
        await this.nameInput.fill(faker.person.fullName());
        await this.genderInput.click();
        const dob = faker.date.birthdate();
       // await this.birthdateInput.fill(`${dob.getFullYear()}-${dob.getMonth()}-${dob.getDate()}`);
        await this.birthdateInput.fill('1994-12-14');
        await this.addressInput.fill(faker.location.streetAddress());
        await this.cityInput.fill(faker.location.city());
        await this.stateInput.fill(faker.location.state());
        await this.pinInput.fill(faker.finance.routingNumber());
        await this.telephoneInput.fill(faker.finance.routingNumber());
        await this.emailInput.fill(faker.internet.email());
        await this.passwordInput.fill(faker.internet.password());
        await this.submitButton.click();
      }
      async verifyExpectedAddCustomer(){
        await expect(page.locator('p.heading3[align="center"]')).toContainText("Customer Registered Successfully!!!");

      }
}