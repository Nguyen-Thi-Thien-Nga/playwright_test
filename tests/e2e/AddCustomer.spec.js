import { test, expect } from '@playwright/test';
import { AddCustomerPage } from '../pages/AddCustomerPage';
import { LogoutPage } from '../pages/LogoutPage';

const genders = ['Male', 'Female'];
for (const gender of genders) {
  test(`Add customer with gender ${gender}  successfully`, async ({ page }) => {
    const addCustomerPage = new AddCustomerPage(page);
    await addCustomerPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
    if (gender === 'Male') {
      await addCustomerPage.addCustomerWithGenderMale();

    }
    else {
      await addCustomerPage.addCustomerWithGenderFemale();
    }

    await addCustomerPage.verifyExpectedAddCustomer();
    const logoutPage = new LogoutPage(page);
    await logoutPage.logout();
  })
};
/* test('Add customer with gender Female successfully', async ({ page }) => {
   const loginPage = new LoginPage(page);
   const addCustomerPage = new AddCustomerPage(page);
   await page.goto('/v4');
   await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
   await page.locator('a[href="addcustomerpage.php"]').click();    await addCustomerPage.addCustomerWithFemale();
   await expect( page.locator('p.heading3[align="center"]')).toContainText("Customer Registered Successfully!!!");

 });*/
