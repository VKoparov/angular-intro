To get browser cookies for the current domain, use the cy.getCookies() command.

cy.getCookies().should('be.empty')

cy.get('#getCookies .set-a-cookie').click()

// cy.getCookies() yields an array of cookies
cy.getCookies().should('have.length', 1).should((cookies) => {

    // each cookie has these properties
    expect(cookies[0]).to.have.property('name', 'token')
    expect(cookies[0]).to.have.property('value', '123ABC')
    expect(cookies[0]).to.have.property('httpOnly', false)
    expect(cookies[0]).to.have.property('secure', false)
    expect(cookies[0]).to.have.property('domain')
    expect(cookies[0]).to.have.property('path')
})
