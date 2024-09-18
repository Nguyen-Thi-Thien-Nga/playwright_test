import { test, expect } from '@playwright/test';
import { EditCustomerPage } from '../pages/EditCustomerPage';

test('Edit customer', async ({ page }) => {

    const editCustomerPage = new EditCustomerPage(page);
    await editCustomerPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
    await editCustomerPage.navigateEditCustomer();
    await editCustomerPage.editCustomer();
    await editCustomerPage.verifyEditCustomer();

})

