To get parent DOM element of elements, use the .parent() command.

cy.get('.traversal-mark')
    .parent().should('contain', 'Morbi leo risus')
