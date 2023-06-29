To clear on a DOM element, use the .clear() command.

cy.get('.action-clear').type('Clear this text')
    .should('have.value', 'Clear this text')
    .clear()
    .should('have.value', '')
