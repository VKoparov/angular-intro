To get the document object, use the cy.document() command.

cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
