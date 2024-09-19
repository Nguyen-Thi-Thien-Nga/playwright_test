import { Page, expect } from "@playwright/test"

export class BasePage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="uid"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('input[name="btnLogin"]');
  }
  async loginStep(username, password) {
    await this.page.goto('/v4');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await expect(this.page.locator("marquee.heading3")).toContainText("Welcome To Manager's Page of Guru99 Bank");
  }
}