describe('BSTD-010 US Offers', function() {
  this.tags = ['three'];

  it('Visit bstackdemo, set geolocation to US and view offers', function(browser) {
      browser
      .setGeolocation({
        latitude: 38.8977,
        longitude: 77.0365,
        accuracy: 100
      })
      .navigateTo('https://www.bstackdemo.com')
      .click("#signin")
      .sendKeys("#react-select-2-input",["demouser",browser.Keys.ENTER])
      .sendKeys("#react-select-3-input",["testingisfun99",browser.Keys.ENTER])
      .click("#login-btn")
      .click("#offers")
      .useXpath()
      .waitForElementVisible("//*[text()='Sorry we do not have any promotional offers in your city.']")
      .end()
  }); 
});