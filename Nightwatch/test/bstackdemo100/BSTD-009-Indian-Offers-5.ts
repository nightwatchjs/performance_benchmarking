describe('BSTD-009 Indian Offers', function() {
  this.tags = ['three'];

  it('Visit bstackdemo, set geolocation to India and view offers', function(browser) {
      browser
      .setGeolocation({
          latitude: 19.0760,
          longitude: 72.8777,
          accuracy: 100
        })
      .navigateTo('https://www.bstackdemo.com')
      .click("#signin")
      .sendKeys("#react-select-2-input",["demouser",browser.Keys.ENTER])
      .sendKeys("#react-select-3-input",["testingisfun99",browser.Keys.ENTER])
      .click("#login-btn")
      .click("#offers")
      .assert.elementsCount('.offer',3)
      .end()
  }); 
});