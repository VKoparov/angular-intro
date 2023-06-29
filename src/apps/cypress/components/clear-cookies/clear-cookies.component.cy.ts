To clear browser cookies for the current domain, use the cy.clearCookies() command.

cy.getCookies().should('be.empty')

cy.get('#clearCookies .set-a-cookie').click()

cy.getCookies().should('have.length', 1)

// cy.clearCookies() yields null
cy.clearCookies()

cy.getCookies().should('be.empty')
