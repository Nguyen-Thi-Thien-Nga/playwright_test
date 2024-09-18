import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';

  test('Add customer with gender Male successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addCustomerPage = new AddCustomerPage(page);
    await page.goto('/v4');
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await page.locator('a[href="addcustomerpage.php"]').click();
    await addCustomerPage.addCustomerWithMale();
    //await addCustomerPage.verifyExpectedAddCustomer();
    await expect(page.locator('p.heading3[align="center"]')).toContainText("Customer Registered Successfully!!!");

  });
 /* test('Add customer with gender Female successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addCustomerPage = new AddCustomerPage(page);
    await page.goto('/v4');
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await page.locator('a[href="addcustomerpage.php"]').click();    await addCustomerPage.addCustomerWithFemale();
    await expect( page.locator('p.heading3[align="center"]')).toContainText("Customer Registered Successfully!!!");

  });*/
