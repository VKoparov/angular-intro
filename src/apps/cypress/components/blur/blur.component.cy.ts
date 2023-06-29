To blur on a DOM element, use the .blur() command.

cy.get('.action-blur').type('About to blur').blur()
    .should('have.class', 'error')
    .prev().should('have.attr', 'style', 'color: red;')
