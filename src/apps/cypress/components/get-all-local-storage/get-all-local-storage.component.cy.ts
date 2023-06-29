To get all data in localStorage for all origins, use the cy.getAllLocalStorage() command.

cy.get('.ls-btn').click()

// getAllLocalStorage() yields a map of origins to localStorage values
cy.getAllLocalStorage().should((storageMap) => {
    expect(storageMap).to.deep.equal({
        // other origins will also be present if localStorage is set on them
        'https://example.cypress.io': {
            'prop1': 'red',
            'prop2': 'blue',
            'prop3': 'magenta',
        },
    })
})
