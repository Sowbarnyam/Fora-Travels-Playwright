const { test, expect } = require('@playwright/test');
const path = require('path');

test('Signup in Fora Advisor Portal', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Go to login page
   
    await page.goto('https://advisor.forastaging.net/register/o5fy4mu8j5bu');
    await page.locator("text=Subscribe").click();
    //email confirmation
    await page.locator('//*[@id="__next"]/div/div/div/div[2]/div[2]/div[1]/div[2]/div[3]/button').click();
    //required message
    await page.locator('//div[@class="p-6 md:p-8 border-t border-stroke"]//button[@id="agree"]').click();

    //personal information
    await page.locator("//div[@class=' css-1wy0on6']").click();
    await page.locator('text=United States of America').click(); 

    //address
    await page.locator("//input[@id='address']").click();
    await page.locator("//input[@id='address']").fill('F Admiralty Dr W Middletown,RI 02842');
    await page.locator("//input[@id='address_additional']").click();
    await page.locator("//input[@id='address_additional']").fill('1 Apt');
    await page.locator("//input[@id='city']").click();
    await page.locator("//input[@id='city']").fill('Middletown');
    await page.locator("//input[@id='state']").click();
    await page.locator("//input[@id='state']").fill('RI');
    await page.locator("//input[@id='postal_code']").click();
    await page.locator("//input[@id='postal_code']").fill('600000');
    await page.locator("//input[@id='phoneInput']").click();
    await page.locator("//input[@id='phoneInput']").fill('18888888888');
    await page.locator("//input[@id='is_entity_account']").click();
    await page.locator("//input[@id='entity_name']").click();
    await page.locator("//input[@id='entity_name']").fill('Q');
    await page.locator("//input[@id='entity_advisor_title']").click();
    await page.locator("//input[@id='entity_advisor_title']").fill('Q');
    await page.locator("//input[@id='new_password']").click();
    await page.locator("//input[@id='new_password']").fill('Qaoncloud@01');
    await page.locator("//input[@id='confirm_password']").click();
    await page.locator("//input[@id='confirm_password']").fill('Qaoncloud@01');
    await page.pause();
    //continue
    await page.locator('//div[@class="p-6 md:p-8 border-t border-stroke"]//button[@id="agree"]').click();
    await page.waitForTimeout(2000);

    //advisor agreement
    await page.locator("//input[@id='compensation_terms_agree']").click();
    await page.locator("//input[@id='terms_conditions_agree']").click();
    await page.locator('//div[@class="p-6 md:p-8 border-t border-stroke"]//button[@id="agree"]').click();
    await page.waitForTimeout(2000);

    //payment
    // Fill iframe credit card info
    //check required message
await page.locator("//button[normalize-space()='Create your account']").click();

  const frame = await page.frameLocator('iframe[title="Secure payment input frame"]');
  await frame.locator('[placeholder="1234 1234 1234 1234"]').fill('4000 0025 0000 3155');
  await frame.locator('[placeholder="MM / YY"]').fill('12/30');
  await frame.locator('[placeholder="CVC"]').fill('123');
  await page.pause();
  await page.waitForTimeout(5000);

 await page.locator("//button[normalize-space()='Create your account']").click();
 await page.waitForTimeout(5000);
//complete
// Wait for the Complete button and click it inside the same iframe
const completeButton = frame.locator('button:has-text("Complete")');

await completeButton.scrollIntoViewIfNeeded();
await expect(completeButton).toBeEnabled({ timeout: 5000 });
await completeButton.click({ force: true });

});
