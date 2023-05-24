describe('BSTD 008 - Sort', function() {
  this.tags = ['three'];


  it("Sort high to low & low to high and validate products", function (browser) {
    browser
    .navigateTo("https://www.bstackdemo.com/")
    .click("select option[value=highestprice]")
    .assert.textEquals(".shelf-item:nth-child(2) > .shelf-item__title","Galaxy S20 Ultra")
    .assert.textEquals(".shelf-item:nth-child(2) > .shelf-item__price > .val > b","1399")
    .click("select option[value=lowestprice]")
    .assert.textEquals(".shelf-item:nth-child(2) > .shelf-item__title","Pixel 2")
    .assert.textEquals(".shelf-item:nth-child(2) > .shelf-item__price > .val > b","399")
    .end();
    });
});