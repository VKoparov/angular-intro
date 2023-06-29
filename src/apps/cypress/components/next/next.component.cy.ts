To get the next sibling DOM element within elements, use the .next() command.

cy.get('.traversal-ul')
    .contains('apples').next().should('contain', 'oranges')
