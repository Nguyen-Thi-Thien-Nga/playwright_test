import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


  test('Login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://demo.guru99.com/v4/');
    await loginPage.login('mngr589400', 'arYtege');
    await expect( page.locator("marquee.heading3")).toContainText("Welcome To Manager's Page of Guru99 Bank");

  });


