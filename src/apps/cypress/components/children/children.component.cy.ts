To get children of DOM elements, use the .children() command.

cy.get('.traversal-breadcrumb')
    .children('.active')
    .should('contain', 'Data')
