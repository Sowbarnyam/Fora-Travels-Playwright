class ForaSigninPage {
    constructor(page) { //initialize the object
        this.page = page;
        this.signinEmail= this.page.getByRole('button', { name: 'Sign in with your Fora email' })
        this.emailInput = this.page.locator('#identifierId');
        this.nextButton=this.page.getByRole('button', { name: 'Next' })
        this.passwordField = this.page.locator('input[name="Passwd"]')
        this.continueButton = this.page.getByRole('button', { name: 'Continue' })
        
        this.errorMessage = page.locator('.my-1 text-sm text-error');
        this.successMessage = page.locator('.font-medium text-headerFS24 text-primary')

        this.clientsheader = this.page.locator('text=Welcome to')
         }

    async goto() {
        await this.page.goto('https://advisor.forastaging.net/login');
    }

    async login(email, password) {
        await this.signinEmail.click()
        await this.emailInput.waitFor({ state: 'visible' });
        await this.emailInput.fill(email);
        await this.nextButton.click()
        await this.passwordField.fill(password);
        await this.nextButton.click()
        // Save auth state for re-use
  await this.page.context().storageState({ path: 'google-auth.json' });

  // Handle possible OAuth Deny prompt inside a frame
  const frames = this.page.frames();
  const googleFrame = frames.find(f => f.url().includes('accounts.google.com'));

  if (googleFrame) {
    const allowbtn = googleFrame.getByRole('button', { name: 'Allow' });
    try {
      if (await allowbtn.isVisible({ timeout: 3000 })) {
        await allowbtn.click();
      }
    } catch (err) {
      console.warn('Deny button not visible or clickable.');
    }
  }else
{
  // Always click Continue (after Deny or if no frame)
  await this.continueButton.click();
}
}
    async getErrorMessage() {
        return this.errorMessage.innerText();
    }

    async getsuccessMessage() {
        return this.successMessage.innerText();
    }
}
module.exports = { ForaSigninPage};