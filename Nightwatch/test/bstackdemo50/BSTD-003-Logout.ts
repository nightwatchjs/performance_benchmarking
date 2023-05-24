describe('BSTD 003 - Logout', function() {
  this.tags = ['one'];
  
  it('Login, verify the username, logout & verify the URL', function(browser) {
    browser
    .navigateTo("https://www.bstackdemo.com/")
    .click("#signin")
    .sendKeys("#react-select-2-input",["demouser",browser.Keys.ENTER])
    .sendKeys("#react-select-3-input",["testingisfun99",browser.Keys.ENTER])
    .click("#login-btn")
    .assert.textContains("span.username","demouser")
    .assert.urlContains("signin=true")
    .click("#logout")
    .assert.urlEquals("https://www.bstackdemo.com/")
    .end();
  }); 
});