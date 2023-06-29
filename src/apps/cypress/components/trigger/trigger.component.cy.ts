To trigger an event on a DOM element, use the .trigger() command.

cy.get('.trigger-input-range')
    .invoke('val', 25)
    .trigger('change')
    .get('input[type=range]').siblings('p')
    .should('have.text', '25')
