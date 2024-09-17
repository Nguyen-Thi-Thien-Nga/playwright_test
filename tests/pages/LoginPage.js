export class  LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('input[name="uid"]');
      this.passwordInput = page.locator('input[name="password"]');
      this.submitButton = page.locator('input[name="btnLogin"]');
    }
    async gotoLoginPage(page) { 
      await this.page.goto('https://demo.guru99.com/v4/');
  }
    async login(username, password) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.submitButton.click();
    }
  }
  