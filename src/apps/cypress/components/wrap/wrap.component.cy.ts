To wrap an object, use the cy.wrap() command.

cy.wrap({foo: 'bar'})
    .should('have.property', 'foo')
    .and('include', 'bar')
