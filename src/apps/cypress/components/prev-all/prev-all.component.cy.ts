To get all previous sibling DOM elements within elements, use the .prevAll() command.

cy.get('.fruits-list').find('.third')
    .prevAll().should('have.length', 2)
