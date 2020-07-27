class UtilsPage {

  /** Method to navigate to an URL, 
   * https://webdriver.io/docs/api/browser/url.html **/
  goToURL(site){
    browser.url(site);
  }

  /** Method to receive an URL, 
   * https://webdriver.io/docs/api/browser/url.html **/
  getUrl() {
    return browser.getUrl();
  }

}

export default new UtilsPage();