const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I enter valid username and password', async () => {
    await LoginPage.username.setValue('validUsername');
    await LoginPage.password.setValue('validPassword');
});

When('I click on the login button', async () => {
    await LoginPage.loginButton.click();
});

Then('I should be redirected to the dashboard', async () => {
    await expect(DashboardPage.dashboard).toBeDisplayed();
});
