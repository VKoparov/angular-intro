To get all of the next sibling DOM elements within elements, use the .nextAll() command.

cy.get('.traversal-next-all')
    .contains('oranges')
    .nextAll().should('have.length', 3)
