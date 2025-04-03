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
    await page.click('text = Deluxe Kings Feature 1 King Bed. Wood Floors.');
    //scroll to book
    await page.click('#scrollToBook');
    //continue
    await page.click('text = Continue');
    //client name
   // Wait for the main container
   await page.locator('//*[@id="main-container"]/div/div[2]/div[1]/div[1]/div/div/div[3]/div[1]/input').click();
   await page.locator('//*[@id="main-container"]/div/div[2]/div[1]/div[1]/div/div/div[3]/div[1]/input').fill('Parkavi S');
   await page.waitForTimeout(2000);
    //await page.locator('//*[@id="headlessui-popover-panel-:r82:"]/div/div[2]/button').click();
 await page.locator('input[placeholder="Select a client"]').click();    
 await page.waitForTimeout(2000);

 await page.locator('label:nth-child(2)').click();
 await page.waitForTimeout(2000);
    await page.pause();
    //add card
    await page.locator('//*[@id="main-container"]/div/div[2]/div[1]/div[1]/div/div[2]/div[1]/div[2]/button/span').click();
    await page.waitForTimeout(3000);
// Fill in the Cardholder Name
await page.fill('input[name="cardHolder"]', 'Parkavi');

// Fill in the Card Number (Adjust selector based on the actual form field)
//await page.fill('input[name="cardNumber"]', '4111 1111 1111 1111'); // Example Visa card

// Fill Expiry Date (MM/YY format)
await page.fill('input[name="expiringDate"]', '12/26');
await page.waitForTimeout(2000);
//cvc
//await page.fill('//*[@id="data"]', '324');

//address
await page.locator("//input[@id='address']").fill('United States of America');
//apt number
await page.locator("//input[@id='address_additional']").fill('234');
await page.waitForTimeout(2000);

//City
await page.locator("//input[@id='city']").fill('Newyork');
//State
await page.locator("//input[@id='state']").fill('US');
//zipcode
await page.locator("//input[@id='postal_code']").fill('600001');
await page.waitForTimeout(2000);

//button save
await page.locator('#btnSubmit').click();
//Payment card
await page.locator('//*[@id="main-container"]/div/div[2]/div[1]/div[1]/div/div[2]/div[2]/div[1]/div/div/label/input').click();
await page.pause();

//trip
await page.locator('//*[@id="main-container"]/div/div[2]/div[1]/div[1]/div/div[3]/div[2]/div[2]/label/input').click();
await page.pause();

//complete booking
await page.locator('//*[@id="main-container"]/div/div[2]/div[2]/div[4]/button').click();
await page.waitForTimeout(5000);
//view booking
await page.locator('//*[@id="main-container"]/div/div/div/div/div/div[12]/div').click();
await page.waitForTimeout(5000);

//clients tab
await page.goto('https://advisor.forastaging.net/clients');
await page.pause();
//search by names
await page.fill('//*[@id="main-container"]/div/div[3]/div/div[1]/div[1]/div/label/input', 'Parkavi S');
//booked name
await page.locator('//*[@id="main-container"]/div/div[3]/div/div[1]/div[4]/a').click();


});
