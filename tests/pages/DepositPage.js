import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { faker } from "@faker-js/faker";
export class DepositPage extends BasePage {
    constructor(page) {
        super(page);
        this.accountNoInput = page.locator('input[name=accountno]');
        this.amountInput = page.locator('input[name=ammount]');
        this.descriptionInput = page.locator('input[name=desc]');
        this.submitButton = page.locator('input[type=submit]');
        this.depositMenu = page.locator('a[href="DepositInput.php"]');
        this.expectedDeposit = page.locator('p[class=heading3]');
        this.depositForm = page.locator('p.heading3');
    }
    async navigateDepositForm() {
        this.depositMenu.click();
    }
    async verifyDepositForm() {

    }
    async depositInput(aid) {
        await this.accountNoInput.fill(aid);
        await this.amountInput.fill(faker.number.binary());
        await this.descriptionInput.fill(faker.food.dish());
        await this.submitButton.click();
    }
    async verifyDepositSuccessfully() {
        await expect(this.expectedDeposit).toContainText('Transaction details of Deposit for Account');
    }

    async verifyNavigateDeposit() {
        await expect(this.depositForm).toContainText("Amount Deposit Form");

    }
}
