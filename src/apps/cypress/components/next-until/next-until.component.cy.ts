To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.

cy.get('#veggies')
    .nextUntil('#nuts').should('have.length', 3)
