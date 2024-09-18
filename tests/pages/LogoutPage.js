import { expect } from "@playwright/test";
export class LogoutPage {
    constructor(page) {
        this.page = page;
        this.logoutButton = page.locator('a[href="Logout.php"]');
    }

    async logout() {
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.logoutButton.click();
        const dialog = await dialogPromise;
        //expect(dialog.message()).toBe('You Have Succesfully Logged Out!!'); 
        await dialog.accept();
    }

    async verifyLogout() {
        await expect(this.page).toHaveURL('https://demo.guru99.com/v4/index.php');

    }
}

