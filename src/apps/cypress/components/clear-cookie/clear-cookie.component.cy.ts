To clear a browser cookie, use the cy.clearCookie() command.

cy.getCookie('token').should('be.null')

cy.get('#clearCookie .set-a-cookie').click()

cy.getCookie('token').should('have.property', 'value', '123ABC')

// cy.clearCookies() yields null
cy.clearCookie('token').should('be.null')

cy.getCookie('token').should('be.null')
