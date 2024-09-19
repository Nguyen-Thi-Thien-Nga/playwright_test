import { DeleteAccountPage } from "../pages/DeleteAccountPage";
import { AddAccountPage } from "../pages/AddAccountPage";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { test, expect } from '@playwright/test';

test('Delete Account Successfully', async ({ page }) => {
    const addAccountPage = new AddAccountPage(page);
    const addCustomerPage = new AddCustomerPage(page);
    const deleteAccountPage = new DeleteAccountPage(page)
    await addAccountPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
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
    await deleteAccountPage.navigateDeleteCustomerForm();
    await deleteAccountPage.verifyDeleteAccountForm();
    await deleteAccountPage.deleteAccountId(aid)
})