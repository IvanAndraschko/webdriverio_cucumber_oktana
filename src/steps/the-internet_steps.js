import internetPage from '../pages/the-internet_page.js';
import utilsPage from '../pages/utils_page.js';

Given(/^User goes to the-internet page via URL$/, () => {
    utilsPage.goToURL("http://the-internet.herokuapp.com/");
});

Given(/^A user is on the-internet page$/, () => {
    expect(internetPage.isHeaderTitleDisplayed(), 'Header title is not displayed').to.be.true;
});

When(/^Goes to the login page via URL$/, () => {
    utilsPage.goToURL("http://the-internet.herokuapp.com/login");
});