import {assert} from "chai";
import secureAreaPage from '../pages/secure-area_page.js';
import { Then } from 'cucumber';

Then(/^A user is on Secure Area page$/, () => {
    assert.isTrue(secureAreaPage.isHeaderTitleDisplayed(), 'Header title is not displayed');
    assert.isTrue(secureAreaPage.isLogoutButtonDisplayed(), 'Logout button is not displayed');
});

Then(/^User gets a success message saying "([^"]*)"$/, (message) => {
    const current_success = secureAreaPage.getSuccessMsg();
    assert.notStrictEqual(current_success, message, 'The text on the success message is not correct');
});