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
    await page.goto('https://advisor.forastaging.net/partners/hotels?view_mode=landing&supplierType=hotels')
    await page.pause();
    //search icon
    await page.click('//*[@id="main-container"]/div/div/div[4]/div/div/header/div[3]/form/div[2]/button')
    //destination
    await page.fill('#where', 'New york');
    await page.pause();

    //date
     
     // Click the "When Date" field 
     await page.click('#when'); // Change this selector if needed
     await page.pause();

     // Select a date (For example: Choose April 10, 2025)
     await page.click('text="10"'); // Change this to match the exact calendar structure
     await page.click('text="13"'); // Change this to match the exact calendar structure
    //hotel
    await page.click('text = The Roxy Hotel New York');
    //hotel rate card from the list
    await page.click('text = Roxy Kings Feature 1 King Bed. Wood Floors.');
    //scroll to book
    await page.click('#scrollToBook');
    //continue
    await page.click('text = Continue');
    //client name
   // Wait for the main container
   await page.waitForSelector('//*[@id="main-container"]');
   await page.locator('//*[@id="main-container"]').click();
   // Find the dropdown inside the main container
   const dropdown = await page.locator('//*[@id="headlessui-popover-panel-:r7g:"]'); 
   await page.click('text = Parkavi S');
   // Ensure dropdown is visible before selecting
await dropdown.waitFor({ state: 'visible' });

await dropdown.selectOption({ label: 'Parkavi S' });
    await page.waitForTimeout(2000);
    await page.pause();


});
