To uncheck a checkbox or radio, use the .uncheck() command.

    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    cy.get('.action-check [type="checkbox"]')
    .not('[disabled]')
    .uncheck().should('not.be.checked')

// .uncheck() accepts a value argument
cy.get('.action-check [type="checkbox"]')
    .check('checkbox1')
    .uncheck('checkbox1').should('not.be.checked')

// .uncheck() accepts an array of values
cy.get('.action-check [type="checkbox"]')
    .check(['checkbox1', 'checkbox3'])
    .uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')

// Ignore error checking prior to unchecking
cy.get('.action-check [disabled]')
    .uncheck({ force: true }).should('not.be.checked')
