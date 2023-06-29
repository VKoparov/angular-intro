To set a browser cookie, use the cy.setCookie() command.

cy.getCookies().should('be.empty')

cy.setCookie('foo', 'bar')

// cy.getCookie() yields a cookie object
cy.getCookie('foo').should('have.property', 'value', 'bar')
