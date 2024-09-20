import { test } from '@playwright/test';
import { CustomizedStatementPage } from '../pages/CustomizedStatementPage';
import { AddAccountPage } from '../pages/AddAccountPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';


test('Customized Statement Successfully', async ({ page }) => {
    const customizedStatementPage = new CustomizedStatementPage(page);
    const addAccountPage = new AddAccountPage(page);
    const addCustomerPage = new AddCustomerPage(page);
    await customizedStatementPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
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
    await customizedStatementPage.navigateCustomisedStatement();
    await customizedStatementPage.verifyCustomisedStatementForm();
    await customizedStatementPage.customisedStatementInput(aid);
    await customizedStatementPage.verifyCustomisedStatementSuccessfully();


})