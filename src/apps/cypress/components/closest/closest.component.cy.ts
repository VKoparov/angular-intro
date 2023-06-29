To get the closest ancestor DOM element, use the .closest() command.

cy.get('.traversal-badge')
    .closest('ul')
    .should('have.class', 'list-group')
