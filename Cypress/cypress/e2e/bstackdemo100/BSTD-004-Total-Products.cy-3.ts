describe('BSTD 004 - Total Products', () => {
  it('Count number of all products in the store', () => {
    cy.visit('https://bstackdemo.com/')
      .get(".shelf-item")
      .should('have.length',25)
  })
})
