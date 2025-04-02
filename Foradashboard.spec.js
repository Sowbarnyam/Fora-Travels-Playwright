const { test, expect } = require('@playwright/test');

test('Dashboard', async ({ browser }) => {
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
    await page.click('button[type="submit"]');

   // Wait for navigation after login (if necessary)
  await page.waitForNavigation();

  // Verify the title of the page after login
  const title = await page.title();
  expect(title).toBe('Login - Fora Advisor Portal');
    //Book
    await page.click('//*[@id="__next"]');
    await page.pause();
    //destination
    //await page.fill('#where', 'New york');
    //date
    //await page.fill('#when', 'April 7 and April 9');

    // Close the original page
    //await page.close();
});
