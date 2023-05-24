describe('BSTD-013 Checkout Without Form', function() {
  this.tags = ['five'];

  it('Visit bstackdemo,sign in, add to cart, click checkout, submit without filling form', function(browser) {
      browser
      .navigateTo('https://www.bstackdemo.com')
      .click("#signin")
      .sendKeys("#react-select-2-input",["demouser",browser.Keys.ENTER])
      .sendKeys("#react-select-3-input",["testingisfun99",browser.Keys.ENTER])
      .click("#login-btn")
      .waitForElementNotVisible(".float-cart__content")
      .click(".shelf-item:nth-child(3) > .shelf-item__buy-btn")
      .waitForElementVisible(".float-cart__content")
      .click(".buy-btn")
      .waitForElementVisible(".checkoutHeader-link")
      .click("#checkout-shipping-continue")
      .useXpath()
      .waitForElementNotPresent("//*[text()='Your Order has been successfully placed.']")
      .end()
  }); 
});