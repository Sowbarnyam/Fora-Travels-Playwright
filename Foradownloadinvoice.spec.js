const { test, expect } = require('@playwright/test');
test('Download invoice', async ({ browser }) => {
    const page = await browser.newPage();

    // Navigate to the website
    await page.goto('https://advisor.forastaging.net/');

    // Assertion: Check if the page title contains "Advisor"
    await expect(page).toHaveTitle(/Advisor/);  // Update with the correct title if needed

    // Click on the 'Sign In' button
    await page.click('text=Sign in here');

    // Fill in login credentials
    await page.fill('#username', 'reenaz+user5710@team899982.testinator.com');
    await page.fill('#password', 'Qaoncloud@01');

    // Submit login form
    await page.click("//button[normalize-space()='Sign in']");

   // Wait for navigation after login (if necessary)
  await page.waitForNavigation();

  // Verify the title of the page after login
  const title = await page.title();
  expect(title).toBe('Login - Fora Advisor Portal');
  //profile image
  await page.locator("//img[@alt='Your Profile image']").click();
  await page.pause();
  //scrolling
  await page.mouse.wheel(0, 5000); 
  //go to billing portal
  await page.locator('//*[@id="main-container"]/div/div/div[2]/div/div[7]/div[2]/a/a').click();
  await page.pause();
//invoice
await page.locator('//*[@id="customer_portal_page_body"]/div[1]/div/div/div[1]/div/div/div/div[2]/div/div/div[2]/div/div[2]/div/div/div[4]/div/div[2]/div/a');
const newPage = await browser.newPage();
await newPage.goto('https://invoice.stripe.com/i/acct_1LNoD5JRL8dIVi1Z/test_YWNjdF8xTE5vRDVKUkw4ZElWaTFaLF9SWWp0dDVoVzFLczNRbVk4bUwxa1dVU3hNckhUMVM3LDEzNjQ0ODI2NA0200izQ2IAuE?s=il&locale=en-US');
await page.waitForTimeout(5000);

await newPage.locator("//tbody//tr//button[1]").click();

await page.waitForTimeout(12000);





});
