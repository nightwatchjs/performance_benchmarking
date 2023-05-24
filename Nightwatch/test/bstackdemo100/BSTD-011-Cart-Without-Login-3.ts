describe('BSTD-011 Cart Without Login', function() {
  it('Visit bstackdemo, add to cart, click checkout and validate if sign in page is visible', function(browser) {
      browser
      .navigateTo('https://www.bstackdemo.com')
      .waitForElementNotVisible(".float-cart__content")
      .click(".shelf-item:nth-child(3) > .shelf-item__buy-btn")
      .waitForElementVisible(".float-cart__content")
      .click(".buy-btn")
      .waitForElementVisible("#login-btn")
      .end()
  }); 
});