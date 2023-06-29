To chain multiple assertions together, use the .and() command.

cy.get('.assertions-link')
    .should('have.class', 'active')
    .and('have.attr', 'href')
    .and('include', 'cypress.io')
