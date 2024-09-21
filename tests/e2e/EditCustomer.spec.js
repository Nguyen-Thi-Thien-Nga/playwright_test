import { test } from "@playwright/test";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { EditCustomerPage } from "../pages/EditCustomerPage";

test("Edit customer successfully", async ({ page }) => {
  const editCustomerPage = new EditCustomerPage(page);
  const addCustomerPage = new AddCustomerPage(page);
  await editCustomerPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
  await addCustomerPage.addCustomerWithGenderMale();
  await addCustomerPage.verifyExpectedAddCustomer();
  const currentUrl = page.url();
  const url = new URL(currentUrl);
  const cid = url.searchParams.get("cid");
  await editCustomerPage.navigateEditCustomer();
  await editCustomerPage.editCustomerIdExists(cid);
  await editCustomerPage.editCustomer();
  await editCustomerPage.verifyEditCustomerForm();
  await editCustomerPage.editCustomerIdNotExists("000000");
});
