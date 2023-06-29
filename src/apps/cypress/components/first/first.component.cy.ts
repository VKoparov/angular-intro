To get the first DOM element within elements, use the .first() command.

cy.get('.traversal-table td')
    .first().should('contain', '1')
