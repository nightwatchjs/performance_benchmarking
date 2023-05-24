describe('BSTD-015 Order Total', function() {
  this.tags = ['five'];

  it('Visit bstackdemo,select 2nd and 5th item and validate order total', function(browser) {
      browser
      .navigateTo('https://www.bstackdemo.com')
      .click("#signin")
      .sendKeys("#react-select-2-input",["demouser",browser.Keys.ENTER])
      .sendKeys("#react-select-3-input",["testingisfun99",browser.Keys.ENTER])
      .click("#login-btn")
      .waitForElementNotVisible(".float-cart__content")
      .click(".shelf-item:nth-child(3) > .shelf-item__buy-btn")
      .click(".shelf-item:nth-child(6) > .shelf-item__buy-btn")
      .waitForElementVisible(".float-cart__content")
      .click(".buy-btn")
      .waitForElementVisible(".checkoutHeader-link")
      .assert.textContains(".cart-priceItem-value > span","1298")
      .end()
  }); 
});