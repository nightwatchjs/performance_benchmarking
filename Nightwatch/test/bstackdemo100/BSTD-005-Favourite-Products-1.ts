describe('BSTD 005 - Favourite Products', function() {
  it("select Samsung using xpath selector, favourite 2nd and 5th items, check count in favourites", function (browser) {
    browser
    .navigateTo("https://www.bstackdemo.com/")
    .click("#signin")
    .sendKeys("#react-select-2-input",["demouser",browser.Keys.ENTER])
    .sendKeys("#react-select-3-input",["testingisfun99",browser.Keys.ENTER])
    .click("#login-btn")
    .useXpath()
    .click("//*[text()='Samsung']")
    .useCss()
    .assert.elementsCount(".shelf-item",7)
    .click(".shelf-item:nth-child(3) > .shelf-stopper > button > span > svg")
    .click(".shelf-item:nth-child(6) > .shelf-stopper > button > span > svg")
    .click("#favourites")
    .assert.elementsCount(".shelf-item",2)
    .end();
    });
});