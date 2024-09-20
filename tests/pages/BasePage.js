import { Page, expect } from "@playwright/test"

export class BasePage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="uid"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('input[name="btnLogin"]');
    this.welcomeLabel = page.locator("marquee.heading3");
    this.logoutButton = page.locator('a[href="Logout.php"]');
    this.expectLogout = page.locator('h2[class=barone]');


  }
  async loginStep(username, password) {
    await this.page.goto('/v4');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await expect(this.welcomeLabel).toContainText("Welcome To Manager's Page of Guru99 Bank");
  }
  async logout() {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.logoutButton.click();
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe('You Have Succesfully Logged Out!!');
    await dialog.accept();
  }

  async verifyLogout() {
    await expect(this.expectLogout).toContainText('Guru99 Bank');

  }
}