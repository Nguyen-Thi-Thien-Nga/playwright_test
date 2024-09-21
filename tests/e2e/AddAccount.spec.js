import { AddAccountPage } from "../pages/AddAccountPage";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { test } from "@playwright/test";

const accountTypes = ["Savings", "Current"];
for (const accountType of accountTypes) {
  test(`Add account with account type ${accountType}  successfully`, async ({
    page,
  }) => {
    const addAccountPage = new AddAccountPage(page);
    const addCustomerPage = new AddCustomerPage(page);
    await addAccountPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
    await addCustomerPage.addCustomerWithGenderMale();
    await addCustomerPage.verifyExpectedAddCustomer();
    const currentUrl = page.url();
    const url = new URL(currentUrl);
    const cid = url.searchParams.get("cid");
    await addAccountPage.navigateNewAccount();
    await addAccountPage.verifyNavigateNewAccount();
    if (accountType === "Savings") {
      await addAccountPage.addAccountTypeSaving(cid);
    } else {
      await addAccountPage.addAccountTypeCurrent(cid);
    }

    await addAccountPage.verifyAddAccountSuccessfully();
    await addAccountPage.logout();
  });
}
