// @ts-check
const { test, expect } = require('@playwright/test');

function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${randomString}@yopmail.com`;
}

// constant values
const name = 'NgaNTT';
const randomEmail = generateRandomEmail();

async function login(page) {
  await page.goto('https://demo.guru99.com/v4/');
  await page.locator("//input[@name='uid']").fill("mngr589400");
  await page.locator("//input[@name='password']").fill("arYtege");
  await page.locator("//input[@name='btnLogin']").click();
  await expect( page.locator("marquee.heading3")).toContainText("Welcome To Manager's Page of Guru99 Bank");
}

async function inputCustomer(page) {
  await page.locator("//a[@href='addcustomerpage.php']").click();
  await expect( page.locator("//p[text()='Add New Customer']")).toContainText("Add New Customer");
  await page.locator("//input[@name='name']").fill(name);
  await page.locator("//input[@value='f']").click();
  await page.locator("//input[@name='dob']").fill("1994-02-02");
  await page.locator("//textarea[@name='addr']").fill("168 LTT");
  await page.locator("//input[@name='city']").fill("New York");
  await page.locator("//input[@name='state']").fill("New York");
  await page.locator("//input[@name='pinno']").fill("123456789");
  await page.locator("//input[@name='telephoneno']").fill("973670330");
  await page.locator("//input[@name='emailid']").fill(randomEmail);
  await page.locator("//input[@name='password']").fill("Abcd1234@");
  await page.locator("//input[@type='submit']").click();
}

async function expectCustomerValue(page) {
  await expect( page.locator("//p[@class='heading3' and @align='center']")).toContainText("Customer Registered Successfully!!!");
  await expect(page.getByRole('cell', { name: name, exact: true })).not.toBeEmpty();
}

test('HappyPathAddCustomer', async ({ page }) => {
  await login(page);
  await inputCustomer(page);
  await expectCustomerValue(page);
});
