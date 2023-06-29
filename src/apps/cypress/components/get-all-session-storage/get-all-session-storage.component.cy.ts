To get all data in sessionStorage for all origins, use the cy.getAllSessionStorage() command.

cy.get('.ls-btn').click()

// getAllSessionStorage() yields a map of origins to sessionStorage values
cy.getAllSessionStorage().should((storageMap) => {
    expect(storageMap).to.deep.equal({
        // other origins will also be present if sessionStorage is set on them
        'https://example.cypress.io': {
            'prop4': 'cyan',
            'prop5': 'yellow',
            'prop6': 'black',
        },
    })
})
