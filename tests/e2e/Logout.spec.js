import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Logout successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginStep(process.env.USERNAME, process.env.PASSWORD);
  await loginPage.logout();
  await loginPage.verifyLogout();
});
