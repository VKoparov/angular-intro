To clear all data in sessionStorage for all origins, use the cy.clearAllSessionStorage() command.

cy.get('.ls-btn').click()

// clearAllSessionStorage() yields null
cy.clearAllSessionStorage().should(() => {
    expect(sessionStorage.getItem('prop4')).to.be.null
    expect(sessionStorage.getItem('prop5')).to.be.null
    expect(sessionStorage.getItem('prop6')).to.be.null
})
