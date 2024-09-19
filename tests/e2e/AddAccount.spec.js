import { AddAccountPage } from '../pages/AddAccountPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';
import { LogoutPage } from '../pages/LogoutPage'
import { test } from '@playwright/test';


const accountTypes = ['Savings', 'Current'];
for (const accountType of accountTypes) {
    test(`Add account with account type ${accountType}  successfully`, async ({ page }) => {
        const addAccountPage = new AddAccountPage(page);
        const addCustomerPage = new AddCustomerPage(page);
        await addAccountPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
        await addCustomerPage.addCustomerWithGenderMale();
        await addCustomerPage.verifyExpectedAddCustomer();
        const currentUrl = page.url();
        const url = new URL(currentUrl);
        const accountId = url.searchParams.get('cid');
        console.log(accountId);
        await addAccountPage.navigateNewAccount();
        await addAccountPage.verifyNavigateNewAccount();
        if (accountType === 'Savings') {
            await addAccountPage.addAccountTypeSaving(accountId);

        }
        else {
            await addAccountPage.addAccountTypeCurrent(accountId)

        }

        await addAccountPage.verifyAddAccount();
        const logoutPage = new LogoutPage(page);
        await logoutPage.logout();
    })
};