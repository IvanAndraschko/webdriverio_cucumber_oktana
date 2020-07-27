class SecureArePage {
        
    /* ---------------- WEB ELEMENTS ---------------------- */

    //Success message
    get successMsg() { return $('.//*[@id="flash"]'); }

    //Logout button
    get logoutBtn() { return $(".//i[text()=' Logout']"); }

     //Header title
     get headerTitle() { return $('.//h2[text()=" Secure Area"]'); }

    /* ---------------- WEB ELEMENTS - END ---------------- */
    
    /* ---------------- METHODS TO GET AND SET A TEXT ---------------------------- */

    /** Get a text from the Success message **/
    getSuccessMsg(){
        this.successMsg.waitForDisplayed({ timeout: 3000 });
        return this.successMsg.getText().trim().replace(/\r?\n|\r/,"");
    }

    /* ---------------- METHODS TO GET AND SET A TEXT - END ---------------------- */

    /* ---------------- METHODS TO CLICK ON ELEMENTS ---------------------- */

    /** Clicks on Logout button **/
    clickLogoutButton(){
        this.logoutBtn.waitForDisplayed({ timeout: 3000 });
        this.logoutBtn.click();
    }

    /* ---------------- METHODS TO CLICK ON ELEMENTS - END ---------------- */

    /* ---------------- METHODS TO CHECK IF ELEMENTS ARE DISPLAYED ---------------------- */

    /** Returns true if the logout button is displayed. False in other case. **/
    isLogoutButtonDisplayed(){
        this.logoutBtn.waitForDisplayed({ timeout: 3000 });
        return this.logoutBtn.isDisplayed();
    }

    /** Returns true if the header title is displayed **/
    isHeaderTitleDisplayed(){
        this.headerTitle.waitForDisplayed({ timeout: 3000 });
        return this.headerTitle.isDisplayed();
    }

    /* ---------------- METHODS TO CHECK IF ELEMENTS ARE DISPLAYED - END ---------------- */

}

export default new SecureArePage();