import loginPage from '../pages/login_page.js';
import {assert} from "chai";
import { Then, When } from 'cucumber';

Then(/^A user is on login page$/, function() {
    assert.isTrue(loginPage.isHeaderTitleDisplayed(), 'Header title is not displayed');
});

When(/^Tries to log in with the username "([^"]*)" and password "([^"]*)"$/, function(name, pass) {
    loginPage.setUsername(name);
    loginPage.setPassword(pass);
    loginPage.clickLoginButton();
});

Then(/^User gets an error message saying "([^"]*)"$/, function(message) {
    const current_error = loginPage.getErrorMessage();
    assert.notStrictEqual(current_error, message, 'The text on the error message is not correct');
});