import loginPage from '../pages/login_page.js';

Then(/^A user is on login page$/, function() {
    expect(loginPage.isHeaderTitleDisplayed(), 'Header title is not displayed').to.be.true;
});

When(/^Tries to log in with the username "([^"]*)" and password "([^"]*)"$/, function(name, pass) {
    loginPage.setUsername(name);
    loginPage.setPassword(pass);
    loginPage.clickLoginButton();
});

Then(/^User gets an error message saying "([^"]*)"$/, function(message) {
    const current_error = loginPage.getErrorMessage();
    expect(current_error).to.equal(message, 'The text on the error message is not correct');
});