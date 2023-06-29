To get all browser cookies, use the cy.getAllCookies() command.

cy.getAllCookies().should('be.empty')

cy.setCookie('key', 'value')
cy.setCookie('key', 'value', { domain: 'example.com' })

// cy.getAllCookies() yields an array of cookies
cy.getAllCookies().should('have.length', 2).should((cookies) => {
    // each cookie has these properties
    expect(cookies[0]).to.have.property('name', 'key')
    expect(cookies[0]).to.have.property('value', 'value')
    expect(cookies[0]).to.have.property('httpOnly', false)
    expect(cookies[0]).to.have.property('secure', false)
    expect(cookies[0]).to.have.property('domain')
    expect(cookies[0]).to.have.property('path')

    expect(cookies[1]).to.have.property('name', 'key')
    expect(cookies[1]).to.have.property('value', 'value')
    expect(cookies[1]).to.have.property('httpOnly', false)
    expect(cookies[1]).to.have.property('secure', false)
    expect(cookies[1]).to.have.property('domain', 'example.com')
    expect(cookies[1]).to.have.property('path')
})
