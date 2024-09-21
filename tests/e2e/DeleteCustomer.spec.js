import { test } from '@playwright/test';
import { DeleteCustomerPage } from '../pages/DeleteCustomerPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';
import { EditCustomerPage } from '../pages/EditCustomerPage';

test('Delete customer successfully', async ({ page }) => {
  const addCustomerPage = new AddCustomerPage(page);
  const editCustomerPage = new EditCustomerPage(page);
  const deleteCustomerPage = new DeleteCustomerPage(page);
  await deleteCustomerPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
  await addCustomerPage.addCustomerWithGenderMale();
  await addCustomerPage.verifyExpectedAddCustomer();
  const currentUrl = page.url();
  const url = new URL(currentUrl);
  const cid = url.searchParams.get('cid');
  await deleteCustomerPage.navigateDeleteCustomer();
  await deleteCustomerPage.deleteCustomerId(cid);
  await deleteCustomerPage.verifyDeleteCustomer();
  await editCustomerPage.navigateEditCustomer();
  await editCustomerPage.editCustomerIdNotExists(cid);
  await editCustomerPage.verifyEditCustomerId();
});
