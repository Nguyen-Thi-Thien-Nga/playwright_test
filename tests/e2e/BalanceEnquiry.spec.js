import { test } from "@playwright/test";
import { BalanceEnquiryPage } from "../pages/BalanceEnquiryPage";
import { AddAccountPage } from "../pages/AddAccountPage";
import { AddCustomerPage } from "../pages/AddCustomerPage";

test("Balance Enquiry Successfully", async ({ page }) => {
  const balanceEnquiryPage = new BalanceEnquiryPage(page);
  const addAccountPage = new AddAccountPage(page);
  const addCustomerPage = new AddCustomerPage(page);
  await balanceEnquiryPage.loginStep(
    process.env.USERNAME,
    process.env.PASSWORD,
  );
  await addCustomerPage.addCustomerWithGenderMale();
  await addCustomerPage.verifyExpectedAddCustomer();
  const currentUrl = page.url();
  const url = new URL(currentUrl);
  const cid = url.searchParams.get("cid");
  await addAccountPage.navigateNewAccount();
  await addAccountPage.verifyNavigateNewAccount();
  await addAccountPage.addAccountTypeSaving(cid);
  await addAccountPage.verifyAddAccountSuccessfully();
  const currentUrlAccount = page.url();
  const urlAccount = new URL(currentUrlAccount);
  const aid = urlAccount.searchParams.get("aid");
  await balanceEnquiryPage.navigateBalanceEnquiryForm();
  await balanceEnquiryPage.verifyBalanceEnquiryForm();
  await balanceEnquiryPage.BalanceEnquiryInput(aid);
  await balanceEnquiryPage.verifyDepositSuccessfully();
});
