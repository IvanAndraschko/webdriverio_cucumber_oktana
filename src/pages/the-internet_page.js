
class TheInternetPage {

    /* ---------------- WEB ELEMENTS ---------------------- */

    //Header title
    get headerTitle() { return $('.//h1[text()="Welcome to the-internet"]'); }

    /* ---------------- WEB ELEMENTS - END ---------------- */

    /* ---------------- METHODS TO CHECK IF ELEMENTS ARE DISPLAYED ---------------------- */

    /** Returns true if the header title is displayed **/
    isHeaderTitleDisplayed(){
        this.headerTitle.waitForDisplayed({ timeout: 3000 });
        return this.headerTitle.isDisplayed();
    }

    /* ---------------- METHODS TO CHECK IF ELEMENTS ARE DISPLAYED - END ---------------- */

}

export default new TheInternetPage();