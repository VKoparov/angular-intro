To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.

cy.get('.foods-list').find('#nuts')
    .prevUntil('#veggies').should('have.length', 3)
