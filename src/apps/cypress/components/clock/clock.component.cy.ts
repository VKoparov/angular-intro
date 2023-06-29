To control time in the browser, use the cy.clock() command.

// create the date in UTC so its always the same
// no matter what local timezone the browser is running in
    const now = new Date(Date.UTC(2017, 2, 14)).getTime()

cy.clock(now)
cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
cy.get('#clock-div').click()
    .should('have.text', '1489449600')
