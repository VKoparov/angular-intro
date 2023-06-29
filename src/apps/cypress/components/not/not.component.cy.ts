To remove DOM element(s) from the set of elements, use the .not() command.

cy.get('.traversal-disabled .btn')
    .not('[disabled]').should('not.contain', 'Disabled')
