import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
export class BalanceEnquiryPage extends BasePage {
  constructor(page) {
    super(page);
    this.accountIdInput = page.locator('input[name="accountno"]');
    this.submitButton = this.page.locator('input[type="submit"]');
    this.navigateBalance = page.locator('a[href="BalEnqInput.php"]');
    this.balanceEnquiryForm = page.locator('p.heading3[align="center"]');
    this.expectedBalance = page.locator('p[class=heading3]');
  }
  async BalanceEnquiryInput(aid) {
    await this.accountIdInput.fill(aid);
    await this.submitButton.click();
  }
  async verifyBalanceEnquiryForm() {
    await expect(this.balanceEnquiryForm).toContainText('Balance Enquiry Form');
  }
  async navigateBalanceEnquiryForm() {
    await this.navigateBalance.click();
  }
  async verifyDepositSuccessfully() {
    await expect(this.expectedBalance).toContainText('Balance Enquiry');
  }
}
