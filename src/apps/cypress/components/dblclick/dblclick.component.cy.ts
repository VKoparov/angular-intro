To double click a DOM element, use the .dblclick() command.

cy.get('.action-div').dblclick().should('not.be.visible')
cy.get('.action-input-hidden').should('be.visible')
