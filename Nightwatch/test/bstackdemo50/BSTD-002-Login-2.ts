describe('BSTD 002 - Login', function() {
  it('Login and verify the username', function(browser) {
    browser
    .navigateTo("https://www.bstackdemo.com/")
    .click("#signin")
    .sendKeys("#react-select-2-input",["demouser",browser.Keys.ENTER])
    .sendKeys("#react-select-3-input",["testingisfun99",browser.Keys.ENTER])
    .click("#login-btn")
    .assert.textContains("span.username","demouser")
    .assert.urlContains("signin=true")
    .end();
  }); 
});