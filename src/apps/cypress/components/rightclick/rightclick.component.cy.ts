To right click a DOM element, use the .rightclick() command.

cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
cy.get('.rightclick-action-input-hidden').should('be.visible')
