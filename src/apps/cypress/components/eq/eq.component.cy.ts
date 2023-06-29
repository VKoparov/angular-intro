To get a DOM element at a specific index, use the .eq() command.

cy.get('.traversal-list>li')
    .eq(1).should('contain', 'siamese')
