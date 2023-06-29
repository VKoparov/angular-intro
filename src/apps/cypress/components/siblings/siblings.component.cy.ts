To get all sibling DOM elements of elements, use the .siblings() command.

cy.get('.traversal-pills .active')
    .siblings().should('have.length', 2)
