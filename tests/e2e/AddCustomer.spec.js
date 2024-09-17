import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);
    return `${randomString}@yopmail.com`;
  }
  const randomEmail = generateRandomEmail();

  test('Add customer successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addCustomer = new AddCustomerPage(page);
    await page.goto('https://demo.guru99.com/v4/');
    await loginPage.login('mngr589400', 'arYtege');
    await page.locator("//a[@href='addcustomerpage.php']").click();

    await addCustomer.addcus('NgaNTT','1994-02-02','168LTT','Da Nang','Viet Nam','123456789','0973670330',randomEmail,'Abcd1234@');
    await expect( page.locator('p.heading3[align="center"]')).toContainText("Customer Registered Successfully!!!");

  });


