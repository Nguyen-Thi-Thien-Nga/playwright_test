import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EditCustomerPage } from '../pages/EditCustomerPage'; 

test('Edit customer',async ({page})=>{
    const loginPage = new LoginPage(page);
    const editCustomer = new EditCustomerPage(page);
    await page.goto('/v4');
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await page.locator('a[href="EditCustomer.php"]').click();
    await addCustomerPage.editCustomer();
   // await expect( page.locator('p.heading3[align="center"]')).toContainText("Customer Registered Successfully!!!");
     
})

