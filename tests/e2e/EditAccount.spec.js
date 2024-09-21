import { EditAccountPage } from '../pages/EditAccountPage';
import { AddAccountPage } from '../pages/AddAccountPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';
import { test } from '@playwright/test';

test('Edit Account Successfully', async ({ page }) => {
  const addAccountPage = new AddAccountPage(page);
  const addCustomerPage = new AddCustomerPage(page);
  const editAccountPage = new EditAccountPage(page);
  await editAccountPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
  await addCustomerPage.addCustomerWithGenderMale();
  await addCustomerPage.verifyExpectedAddCustomer();
  const currentUrl = page.url();
  const url = new URL(currentUrl);
  const cid = url.searchParams.get('cid');
  await addAccountPage.navigateNewAccount();
  await addAccountPage.verifyNavigateNewAccount();
  await addAccountPage.addAccountTypeSaving(cid);
  await addAccountPage.verifyAddAccountSuccessfully();
  const currentUrlAccount = page.url();
  const urlAccount = new URL(currentUrlAccount);
  const aid = urlAccount.searchParams.get('aid');
  await editAccountPage.navigateEditAccountForm();
  await editAccountPage.verifyEditAccountForm();
  await editAccountPage.verifyEditAccountSuccessfully(aid);
});
