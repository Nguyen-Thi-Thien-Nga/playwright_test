import { test } from '@playwright/test';
import { DepositPage } from '../pages/DepositPage';
import { AddAccountPage } from '../pages/AddAccountPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';

test('Deposit Successfully', async ({ page }) => {
    const depositPage = new DepositPage(page);
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
    await depositPage.navigateDepositForm();
    await depositPage.verifyDepositForm();
    await depositPage.depositInput(aid);
    await depositPage.verifyDepositSuccessfully();


})