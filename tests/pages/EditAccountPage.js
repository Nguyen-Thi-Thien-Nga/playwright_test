import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";
export class EditAccountPage extends BasePage {
  constructor(page) {
    super(page);
    this.accountIdInput = page.locator("input[name=accountno]");
    this.submitButton = page.locator("input[name=AccSubmit]");
    this.navigateEditAccount = page.locator('a[href="editAccount.php"]');
    this.editAccountForm = page.locator("p.heading3");
    this.editAccountMsg = page.locator("p[class=heading3]");
  }

  async navigateEditAccountForm() {
    await this.navigateEditAccount.click();
  }
  async verifyEditAccountForm() {
    await expect(this.editAccountForm).toContainText("Edit Account Form");
  }
  async verifyEditAccountSuccessfully(aid) {
    await this.accountIdInput.fill(aid);
    await this.submitButton.click();
    await expect(this.editAccountMsg).toContainText("Edit Account");
  }
}
