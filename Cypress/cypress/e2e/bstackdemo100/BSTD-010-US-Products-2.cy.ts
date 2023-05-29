describe('BSTD-010 US Offers', () => {
  it('Visit bstackdemo, set geolocation to US and view offers', () => {

    cy.visit('https://bstackdemo.com/', {
      onBeforeLoad (win) {
        const latitude = 38.8977;
        const longitude = 77.0365;
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
    .get("div")
    .contains("Sorry we do not have any promotional offers in your city.")
    .should("be.visible")
  })
})
