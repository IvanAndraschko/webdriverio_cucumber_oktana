/** The chai expect function was set as global in the wdio.conf.js file.
 * Otherwise you can import the function in this way and use it 
 * import {expect} from "chai"; 
 * **/

import secureAreaPage from '../pages/secure-area_page.js';

Then(/^A user is on Secure Area page$/, () => {
    expect(secureAreaPage.isHeaderTitleDisplayed(), 'Header title is not displayed').to.be.true;
    expect(secureAreaPage.isLogoutButtonDisplayed(), 'Logout button is not displayed').to.be.true;
});

Then(/^User gets a success message saying "([^"]*)"$/, (message) => {
    const current_success = secureAreaPage.getSuccessMsg();
    expect(current_success).to.equal(message, 'The text on the success message is not correct');
});