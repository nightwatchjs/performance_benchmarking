describe('BSTD-009 Indian Offers', () => {
  it('Visit bstackdemo, set geolocation to India and view offers', () => {

    cy.visit('https://bstackdemo.com/', {
      onBeforeLoad (win) {
        const latitude = 19.0760;
        const longitude = 72.8777;
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb) => {
          return cb({ coords: { latitude, longitude } });
        });
      },
    })
    .get("#signin")
    .click()
    .get("#react-select-2-input")
    .type("demouser{enter}",{force: true})
    .get("#react-select-3-input")
    .type("testingisfun99{enter}",{force: true})
    .get("#login-btn")
    .click()
    .get("#offers")
    .click()
    .get(".offer")
    .should("have.length",3)
  })
})
