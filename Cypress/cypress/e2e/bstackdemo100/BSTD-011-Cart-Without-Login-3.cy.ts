describe('BSTD-011 Cart Without Login', () => {
  it('Visit bstackdemo, add to cart, click checkout and validate if sign in page is visible', () => {
    cy.visit('https://bstackdemo.com/')
    .get(".float-cart__content")
    .should('not.be.visible')
    .get(".shelf-item:nth-child(3) > .shelf-item__buy-btn")
    .click()
    .should('be.visible')
    .get(".buy-btn")
    .click()
    .get("#login-btn")
    .should("be.visible")
  })
})
