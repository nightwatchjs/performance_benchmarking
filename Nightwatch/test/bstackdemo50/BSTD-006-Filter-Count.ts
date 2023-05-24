describe('BSTD 006 - Filter Count', function() {
  it("Select different vendors and verify counts", function (browser) {
    browser
    .navigateTo("https://www.bstackdemo.com/")
    .useXpath()
    .click("//*[text()='Apple']")
    .useCss()
    .assert.elementsCount(".shelf-item",9)
    .useXpath()
    .click("//*[text()='Apple']")
    .click("//*[text()='Samsung']")
    .useCss()
    .assert.elementsCount(".shelf-item",7)
    .useXpath()
    .click("//*[text()='Samsung']")
    .click("//*[text()='Google']")
    .useCss()
    .assert.elementsCount(".shelf-item",3)
    .useXpath()
    .click("//*[text()='Google']")
    .click("//*[text()='OnePlus']")
    .useCss()
    .assert.elementsCount(".shelf-item",6)
    .end();
    });
});