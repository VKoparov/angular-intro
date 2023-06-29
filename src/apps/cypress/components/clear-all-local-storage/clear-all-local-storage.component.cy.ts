To clear all data in localStorage for all origins, use the cy.clearAllLocalStorage() command.

cy.get('.ls-btn').click()

// clearAllLocalStorage() yields null
cy.clearAllLocalStorage().should(() => {
    expect(sessionStorage.getItem('prop1')).to.be.null
    expect(sessionStorage.getItem('prop2')).to.be.null
    expect(sessionStorage.getItem('prop3')).to.be.null
})
