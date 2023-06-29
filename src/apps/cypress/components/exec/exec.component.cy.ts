To execute a system command, use the cy.exec() command.

    // execute a system command.
    // so you can take actions necessary for
    // your test outside the scope of Cypress.
    cy.exec('echo Jane Lane')
    .its('stdout').should('contain', 'Jane Lane')

// we can use Cypress.platform string to
// select appropriate command
cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)

if (Cypress.platform === 'win32') {
    cy.exec('print cypress.config.js')
        .its('stderr').should('be.empty')
} else {
    cy.exec('cat cypress.config.js')
        .its('stderr').should('be.empty')

    cy.exec('pwd')
        .its('code').should('eq', 0)
}
