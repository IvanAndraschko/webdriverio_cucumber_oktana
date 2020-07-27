import internetPage from '../pages/the-internet_page.js';
import utilsPage from '../pages/utils_page.js';
import {assert} from "chai";
import { Given, When } from 'cucumber';

Given(/^User goes to the-internet page via URL$/, () => {
    utilsPage.goToURL("http://the-internet.herokuapp.com/");
});

Given(/^A user is on the-internet page$/, () => {
    assert.isTrue(internetPage.isHeaderTitleDisplayed(), 'Header title is not displayed');
});

When(/^Goes to the login page via URL$/, () => {
    utilsPage.goToURL("http://the-internet.herokuapp.com/login");
});