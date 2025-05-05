const { test, expect, devices } = require('@playwright/test');
const path = require('path');

// Use the device descriptor for Pixel 5
const pixel5 = devices['Pixel 5'];

test.use({ ...pixel5 });

test('Upload image file in Fora Advisor Portal - Mobile View (Pixel 5)', async ({ browser }) => {
    const context = await browser.newContext(pixel5); // Use mobile context
    const page = await context.newPage();

    // Go to login page
    await page.goto('https://advisor.forastaging.net/');
    await expect(page).toHaveTitle(/Advisor/);

    // Login
    await page.click('text=Sign in here');
    await page.fill('#username', 'reenaz+user5710@team899982.testinator.com');
    await page.fill('#password', 'Qaoncloud@01');
    await page.click("//button[normalize-space()='Sign in']");

    // Wait for navigation and title validation
    await page.waitForNavigation();
    await expect(page).toHaveTitle('Login - Fora Advisor Portal');

    // Navigate to manage flow
    await page.locator("//button[@class='justify-center flex items-center disabled:cursor-default focus-visible:outline-selected focus-visible:outline focus-visible:outline-1 text-main bg-transparent hover:bg-main/[.06] disabled:text-disabled disabled:hover:bg-main/[0] disabled:bg-transparent h-12 min-w-12 rounded-[10px] desktop:hidden']").click();
    await page.mouse.wheel(0, 5000);
    await page.locator("//button[3]//*[name()='svg']").click();
    await page.pause();
    await page.locator("//span[normalize-space()='Trips']").click();
    // Create trip
    await page.locator("#main-container > div > div:nth-child(2) > div > div > div > a").click();

    // Wait for 'Add Files' button and click
    const addFilesBtn = page.locator("//button[normalize-space()='+ Upload an image']");
    await addFilesBtn.waitFor({ state: 'visible' });
    await expect(addFilesBtn).toBeEnabled();
    await addFilesBtn.click();
    await page.pause();

    // Wait for 'browse files' button and click
    const browseBtn = page.locator("//button[normalize-space()='browse files']");
    await browseBtn.waitFor({ state: 'visible' });
    await expect(browseBtn).toBeEnabled();
    await browseBtn.click();
    await page.pause();

    // Upload image using input[type="file"]
    const imagePath = path.resolve('C:\\Users\\DCKLP-101\\Pictures\\Screenshots\\Client screen.png');
    await page.setInputFiles('input[type="file"]', imagePath);

    // Click 'Upload 1 file' button
    const uploadBtn = page.locator("//button[normalize-space()='Upload 1 file']");
    await uploadBtn.waitFor({ state: 'visible' });
    await expect(uploadBtn).toBeEnabled();
    await uploadBtn.click();

    await page.pause(); // Optional: use this to inspect in headed mode
});
