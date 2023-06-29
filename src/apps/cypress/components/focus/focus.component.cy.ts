To focus on a DOM element, use the .focus() command.

cy.get('.action-focus').focus()
    .should('have.class', 'focus')
    .prev().should('have.attr', 'style', 'color: orange;')
