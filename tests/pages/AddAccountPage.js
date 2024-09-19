import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
export class AddAccountPage extends BasePage {
    constructor(page) {
        super(page);
        this.customerIdInput = page.locator('input[name=cusid]');
        this.savingSelect = page.selectOption('select[name="selaccount"]', 'Savings');
        this.currentSelect = page.selectOption('select[name="selaccount"]', 'Current');
        this.inidepositInput = page.locator('input[name=inideposit]');
        this.submitButton = page.locator('input[type="submit"]');
        this.newAccountMenu = page.locator('a[href="addAccount.php"]');
        this.addAccountSuccessfullyMsg = page.locator('p.heading3[align="center"]');
        this.addAccountForm = page.locator('p.heading3');

    }
    async navigateNewAccount() {
        await this.newAccountMenu.click();
    }
    async addAccountTypeSaving(cusId) {
        await this.customerIdInput.fill(cusId);
        await this.savingSelect;
        await this.inidepositInput.fill('900');
        await this.submitButton.click();

    }
    async addAccountTypeCurrent(cusId) {
        await this.customerIdInput.fill(cusId);
        await this.currentSelect;
        await this.inidepositInput.fill('501');
        await this.submitButton.click();
    }
    async verifyAddAccountSuccessfully() {
        await expect(this.addAccountSuccessfullyMsg).toContainText("Account Generated Successfully!!!");

    }
    async verifyNavigateNewAccount() {
        await expect(this.addAccountForm).toContainText("Add new account form");

    }

}