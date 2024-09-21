import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";
export class DeleteCustomerPage extends BasePage {
  constructor(page) {
    super(page);
    this.customerIdInput = page.locator('input[name="cusid"]');
    this.submitButton = page.locator('input[type="submit"]');
    this.navigateDeleteCustomerMenu = page.locator(
      'a[href="DeleteCustomerInput.php"]',
    );
    this.deleteCustomerForm = page.locator('p.heading3[align="center"]');
  }
  async deleteCustomerId(cusid) {
    await this.customerIdInput.fill(cusid);
    this.page.on("dialog", async (dialog) => {
      if (dialog.message() === "Do you really want to delete this Customer?") {
        await dialog.accept();
      } else if (dialog.message() === "Customer does not Exist!!!") {
        await dialog.accept();
      }
    });
    await this.submitButton.click();
  }
  async verifyDeleteCustomer() {
    await expect(this.deleteCustomerForm).toContainText("Delete Customer Form");
  }
  async navigateDeleteCustomer() {
    await this.navigateDeleteCustomerMenu.click();
  }
}
