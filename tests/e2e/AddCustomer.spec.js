import { test } from '@playwright/test';
import { AddCustomerPage } from '../pages/AddCustomerPage';

const genders = ['Male', 'Female'];
for (const gender of genders) {
  test(`Add customer with gender ${gender}  successfully`, async ({ page }) => {
    const addCustomerPage = new AddCustomerPage(page);
    await addCustomerPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
    if (gender === 'Male') {
      await addCustomerPage.addCustomerWithGenderMale();
    } else {
      await addCustomerPage.addCustomerWithGenderFemale();
    }

    await addCustomerPage.verifyExpectedAddCustomer();
    await addCustomerPage.logout();
  });
}
