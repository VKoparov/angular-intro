To query for the button, use the cy.get() command.

cy.get('#query-btn').should('contain', 'Button')

cy.get('.query-btn').should('contain', 'Button')

cy.get('#querying .well>button:first').should('contain', 'Button')
//              ↲
// Use CSS selectors just like jQuery
To find elements by data attribute, query using the attribute selector.

cy.get('[data-test-id="test-example"]').should('have.class', 'example')
Div with data-test-id
    cy.get() yields a jQuery object, you can get its attribute by invoking the .attr() method.

cy.get('[data-test-id="test-example"]')
    .invoke('attr', 'data-test-id')
    .should('equal', 'test-example')

// or you can get an element's CSS property
cy.get('[data-test-id="test-example"]')
    .invoke('css', 'position')
    .should('equal', 'static')
Alternatively, chain assertions directly to the cy.get() call. See assertions documentation.

cy.get('[data-test-id="test-example"]')
    .should('have.attr', 'data-test-id', 'test-example')
    .and('have.css', 'position', 'static')
