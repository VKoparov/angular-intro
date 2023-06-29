To get the last DOM element within elements, use the .last() command.

cy.get('.traversal-buttons .btn')
    .last().should('contain', 'Submit')
