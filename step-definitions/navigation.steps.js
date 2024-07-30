const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../pageobjects/dashboard.page');

Given('I am logged in and on the dashboard page', async () => {
    await DashboardPage.open();
    // Assume the user is already logged in
});

When('I click on the "Sales" tab', async () => {
    await DashboardPage.salesTab.click();
});

Then('I should see the sales information', async () => {
    await expect(DashboardPage.salesInfo).toBeDisplayed();
});
