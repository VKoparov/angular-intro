To invoke a function on a current subject, use the .invoke() command.

cy.get('.connectors-div').should('be.hidden')
    // call the jquery method 'show' on the 'div.container'
    .invoke('show')
    .should('be.visible')
