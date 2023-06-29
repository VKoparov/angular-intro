To go back or forward in the browser's history, use the cy.go() command.

cy.location('pathname').should('include', 'navigation')

cy.go('back')
cy.location('pathname').should('not.include', 'navigation')

cy.go('forward')
cy.location('pathname').should('include', 'navigation')

// clicking back
cy.go(-1)
cy.location('pathname').should('not.include', 'navigation')

// clicking forward
cy.go(1)
cy.location('pathname').should('include', 'navigation')
