To get a browser cookie, use the cy.getCookie() command.

cy.get('#getCookie .set-a-cookie').click()

// cy.getCookie() yields a cookie object
cy.getCookie('token').should('have.property', 'value', '123ABC')
