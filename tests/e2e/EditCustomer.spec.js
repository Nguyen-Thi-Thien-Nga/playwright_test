import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EditCustomerPage } from '../pages/EditCustomerPage'; 

test('Edit customer',async ({page})=>{
    const loginPage = new LoginPage(page);
    const editCustomer = new EditCustomerPage(page);
    await page.goto('https://demo.guru99.com/v4/');
    await loginPage.login('mngr589400', 'arYtege');
    await page.locator("//a[@href='addcustomerpage.php']").click();
     
})

