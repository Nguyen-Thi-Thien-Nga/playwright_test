import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
export class MiniStatementPage extends BasePage {
    constructor(page) {
        super(page);
        this.accountNoInput = page.locator('input[name=accountno]');
        this.submitButton = page.locator('input[type=submit]');
        this.miniStatementLabel = page.locator('p[class=heading3]');
        this.miniStatementClick = page.locator('a[href= "MiniStatementInput.php"]');
        this.miniStatementMsg = page.locator('p[class=heading3]');
    }
    async miniStatementInput(accountID) {
        await this.accountNoInput.fill(accountID);
        await this.submitButton.click();
    }
    async navigateMiniStatement() {
        this.miniStatementClick.click();
    }
    async verifyMiniStatementForm() {
        await expect(this.miniStatementLabel).toContainText('Mini Statement Form');
    }
    async verifyMiniStatementSuccessfully() {
        await expect(this.miniStatementMsg).toContainText('Mini Statement');
    }
}