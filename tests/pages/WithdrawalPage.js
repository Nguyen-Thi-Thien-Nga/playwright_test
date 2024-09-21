import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { faker } from '@faker-js/faker';
export class WithdrawalPage extends BasePage {
  constructor(page) {
    super(page);
    this.accountNoInput = page.locator('input[name=accountno]');
    this.amountInput = page.locator('input[name=ammount]');
    this.descriptionInput = page.locator('input[name=desc]');
    this.submitButton = page.locator('input[type=submit]');
    this.withdrawalMenu = page.locator('a[href="WithdrawalInput.php"]');
    this.expectedWithdrawal = page.locator('p[class=heading3]');
    this.withdrawalForm = page.locator('p.heading3');
  }
  async navigateWithdrawalForm() {
    this.withdrawalMenu.click();
  }
  async verifyWithdrawalForm() {}
  async withdrawalInput(aid) {
    await this.accountNoInput.fill(aid);
    await this.amountInput.fill(faker.number.binary());
    await this.descriptionInput.fill(faker.food.dish());
    await this.submitButton.click();
  }
  async verifyWithdrawalSuccessfully() {
    await expect(this.expectedWithdrawal).toContainText('Transaction details of Withdrawal for Account');
  }

  async verifyNavigateWithdrawlal() {
    await expect(this.withdrawalForm).toContainText('Amount Withdrawal Form');
  }
}
