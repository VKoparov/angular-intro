To scroll an element into view, use the .scrollintoview() command.

cy.get('#scroll-horizontal button')
    .should('not.be.visible')

// scroll the button into view, as if the user had scrolled
cy.get('#scroll-horizontal button').scrollIntoView()
    .should('be.visible')

cy.get('#scroll-vertical button')
    .should('not.be.visible')

// Cypress handles the scroll direction needed
cy.get('#scroll-vertical button').scrollIntoView()
    .should('be.visible')

cy.get('#scroll-both button')
    .should('not.be.visible')

// Cypress knows to scroll to the right and down
cy.get('#scroll-both button').scrollIntoView()
    .should('be.visible')
