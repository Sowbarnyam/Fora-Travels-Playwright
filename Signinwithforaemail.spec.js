const { test: base , expect } = require('@playwright/test');
const {ForaSigninPage} = require('../e2e/POM/signinwithforaemail')


// Define custom fixture
const customTest = base.extend({
    ForauserData: async ({}, use) => {
        const user = { email: "reenaz3669.fathima3669", password: "Qaoncloud@01", successmessage:"Welcome, reenaz5710!",
             WrongUser: "wrong Username", WrongPass: "Wrong Password", ErrorMessage: "Unable to log in with provided credentials."}
             await use(user);  // Provides user credentials to test cases
    }
});

customTest.describe('Fora Partners page Tests', () => {

    let ForasigninPage;
   
// **Run tests in sequence**
customTest.describe.configure({ timeout: 80000, mode: 'serial' });


    customTest('Fora Sign in with Email', async ({ page, ForauserData }) => {
        ForasigninPage = new ForaSigninPage(page);
        await ForasigninPage.goto();
        await ForasigninPage.login(ForauserData.email, ForauserData.password);
        
 

    })
})
