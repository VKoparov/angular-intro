To get DOM elements that match a specific selector, use the .filter() command.

cy.get('.traversal-nav>li')
    .filter('.active').should('contain', 'About')
