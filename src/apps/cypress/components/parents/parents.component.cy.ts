To get parents DOM element of elements, use the .parents() command.

cy.get('.traversal-cite')
    .parents().should('match', 'blockquote')
