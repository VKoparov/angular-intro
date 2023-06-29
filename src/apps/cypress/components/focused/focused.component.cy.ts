To get the DOM element that has focus, use the cy.focused() command.

cy.get('.misc-form').find('#name').click()
cy.focused().should('have.id', 'name')

cy.get('.misc-form').find('#description').click()
cy.focused().should('have.id', 'description')
