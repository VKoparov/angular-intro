To get parents DOM element of elements until other element, use the .parentsUntil() command.

cy.get('.clothes-nav')
    .find('.active')
    .parentsUntil('.clothes-nav')
    .should('have.length', 2)
