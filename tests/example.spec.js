// @ts-check
const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
  await page.goto('https://demo.guru99.com/v4/');
  await page.locator("//input[@name='uid']").fill("mngr589400");
  await page.locator("//input[@name='password']").fill("arYtege");
  await page.locator("//input[@name='btnLogin']").click();
  await expect( page.locator("//td[text()='Manger Id : mngr589400']")).toContainText("Manger Id : mngr589400");
});

/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/

