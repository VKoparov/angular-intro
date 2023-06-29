To get the properties on the current subject, use the .its() command.

cy.get('.connectors-its-ul>li')
    // calls the 'length' property returning that value
    .its('length')
    .should('be.gt', 2)
