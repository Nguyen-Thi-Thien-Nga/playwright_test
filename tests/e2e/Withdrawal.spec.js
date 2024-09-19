import { test } from '@playwright/test';
import { WithdrawalPage } from '../pages/WithdrawalPage';
import { AddAccountPage } from '../pages/AddAccountPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';

test('Withdrawal Successfully', async ({ page }) => {
    const withdrawalPage = new WithdrawalPage(page);
    const addAccountPage = new AddAccountPage(page);
    const addCustomerPage = new AddCustomerPage(page);
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
    console.log(aid);
    await withdrawalPage.navigateWithdrawalForm();
    await withdrawalPage.verifyWithdrawalForm();
    await withdrawalPage.withdrawalInput(aid);
    await withdrawalPage.verifyWithdrawalSuccessfully();


})