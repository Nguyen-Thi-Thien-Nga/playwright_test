// @ts-check
const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
  await page.goto('https://demo.guru99.com/v4/');
  await page.locator("//input[@name='uid']").fill("mngr589400");
  await page.locator("//input[@name='password']").fill("arYtege");
  await page.locator("//input[@name='btnLogin']").click();
 // await expect( page.locator("//td[text()='Manger Id : mngr589400']")).toContainText("Manger Id : mngr589400");
  await expect( page.locator("marquee.heading3")).toContainText("Welcome To Manager's Page of Guru99 Bank");

});

