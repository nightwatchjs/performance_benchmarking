describe('BSTD 001 - Title Assertion', function() {
  it('Assert if title matches', function(browser) {
    browser
      .navigateTo('https://bstackdemo.com/')
      .assert.titleEquals("StackDemo")
      .assert.titleContains("Stack");
  }); 
});