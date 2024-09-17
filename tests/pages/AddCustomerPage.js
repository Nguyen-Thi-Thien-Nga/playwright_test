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
      async addcus(fullname,birthdate,address,city,state,pin,telephone,email,password) {
        await this.nameInput.fill(fullname);
        await this.genderInput.click();
        await this.birthdateInput.fill(birthdate);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.pinInput.fill(pin);
        await this.telephoneInput.fill(telephone);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
      }
}