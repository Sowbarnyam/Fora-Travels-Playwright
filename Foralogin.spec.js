import { test, expect } from '@playwright/test';
import { LoginPage } from './POM/Foralogin';

test.describe('Login Test', () => {
    test('should log in successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.goto();
        await page.click('text=Sign in here');

        await loginPage.login('reenaz+user5710@team899982.testinator.com', 'Qaoncloud@01');
    });
});
