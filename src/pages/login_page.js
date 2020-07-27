
class LoginPage {

    /* ---------------- WEB ELEMENTS ---------------------- */
    
    //Header Title
    get headerTitle() { return $('.//h2[text()="Login Page"]'); }

    //Username field
    get usernameInput() { return $('#username'); }

    //Password field
    get passwordInput() { return $('#password'); }

    //Login button
    get loginBtn() { return $("button[type='submit']"); }

    //Error message
    get errorMsg() { return $('//div[@class="flash error"]'); }

    /* ---------------- WEB ELEMENTS - END ---------------- */


    /* ---------------- METHODS TO GET AND SET A TEXT ---------------------------- */

    /** Sets a text on the username field **/
    setUsername(username){
        this.usernameInput.waitForDisplayed({ timeout: 3000 });
        this.usernameInput.setValue(username);
    }

    /** Sets a text on the password field **/
    setPassword(username){
        this.passwordInput.waitForDisplayed({ timeout: 3000 });
        this.passwordInput.setValue(username);
    }

    /** Get a text from the error message **/
    getErrorMessage(){
        this.errorMsg.waitForDisplayed({ timeout: 3000 });
        return this.errorMsg.getText().trim().replace(/\r?\n×/,"");
    }

    /* ---------------- METHODS TO GET AND SET A TEXT - END ---------------------- */


    /* ---------------- METHODS TO CLICK ON ELEMENTS ---------------------- */

    /** Clicks on Login button **/
    clickLoginButton(){
        this.loginBtn.waitForDisplayed({ timeout: 3000 });
        this.loginBtn.click();
    }

    /* ---------------- METHODS TO CLICK ON ELEMENTS - END ---------------- */


    /* ---------------- METHODS TO CHECK IF ELEMENTS ARE DISPLAYED ---------------------- */

    /** Returns true if the login button is displayed. False in other case. **/
    isLoginButtonDisplayed(){
        this.loginBtn.waitForDisplayed({ timeout: 3000 });
        return this.loginBtn.isDisplayed();
    }

    /** Returns true if the header title is displayed **/
    isHeaderTitleDisplayed(){
        this.headerTitle.waitForDisplayed({ timeout: 3000 });
        return this.headerTitle.isDisplayed();
    }

    /* ---------------- METHODS TO CHECK IF ELEMENTS ARE DISPLAYED - END ---------------- */

}

export default new LoginPage();