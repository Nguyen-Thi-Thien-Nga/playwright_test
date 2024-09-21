import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { format } from "date-fns";
import { faker } from "@faker-js/faker";

export class CustomizedStatementPage extends BasePage {
  constructor(page) {
    super(page);
    this.accountNoInput = page.locator("input[name=accountno]");
    this.fromDateInput = this.page.locator('input[name="fdate"]');
    this.toDateInput = this.page.locator('input[name="tdate"]');
    this.minimumTransactionValueInput = this.page.locator(
      'input[name="amountlowerlimit"]',
    );
    this.numberOfTransactionInput = this.page.locator(
      'input[name="numtransaction"]',
    );
    this.submitButton = page.locator("input[type=submit]");
    this.customizedStatementLabel = page.locator("p[class=heading3]");
    this.customizedStatementClick = page.locator(
      'a[href= "CustomisedStatementInput.php"]',
    );
    this.customizedStatementMsg = page.locator("p[class=heading3]");
  }
  async navigateCustomisedStatement() {
    await this.customizedStatementClick.click();
  }
  async verifyCustomisedStatementForm() {
    await expect(this.customizedStatementLabel).toContainText(
      "Customized Statement Form",
    );
  }
  async customisedStatementInput(aid) {
    await this.accountNoInput.fill(aid);
    await this.fromDateInput.fill(format(faker.date.past(), "yyyy-MM-dd"));
    await this.toDateInput.fill(format(faker.date.future(), "yyyy-MM-dd"));
    await this.minimumTransactionValueInput.fill(faker.string.numeric(2));
    await this.numberOfTransactionInput.fill(faker.string.numeric(5));
    await this.customizedStatementClick.click();
  }
  async verifyCustomisedStatementSuccessfully() {
    await expect(this.customizedStatementMsg).toContainText(
      "Customized Statement",
    );
  }
}
