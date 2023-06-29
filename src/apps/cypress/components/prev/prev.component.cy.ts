To get the previous sibling DOM element within elements, use the .prev() command.

cy.get('.birds').find('.active')
    .prev().should('contain', 'Lorikeets')
