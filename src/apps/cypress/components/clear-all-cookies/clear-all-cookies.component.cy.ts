To clear all browser cookies, use the cy.clearAllCookies() command.

cy.getAllCookies().should('be.empty')

cy.setCookie('key', 'value')
cy.setCookie('key', 'value', { domain: 'example.com' })

cy.getAllCookies().should('have.length', 1)

// cy.clearAllCookies() yields null
cy.clearAllCookies()

cy.getAllCookies().should('be.empty')
