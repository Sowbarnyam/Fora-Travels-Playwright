import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
    }

    async goto() {
        await this.page.goto('https://advisor.forastaging.net/login?from=/settings');

    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    
}
