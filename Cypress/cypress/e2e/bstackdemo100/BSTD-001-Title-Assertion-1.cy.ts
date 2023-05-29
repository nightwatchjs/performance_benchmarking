describe('BSTD 001 - Title Assertion', () => {
  it('Assert if title matches', () => {
    cy.visit('https://bstackdemo.com/')
      .title()
      .should('eq',"StackDemo")
      .should('include','Stack')
  })
})
