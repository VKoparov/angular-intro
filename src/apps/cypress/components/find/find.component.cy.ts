To get descendant DOM elements of the selector, use the .find() command.

cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)
