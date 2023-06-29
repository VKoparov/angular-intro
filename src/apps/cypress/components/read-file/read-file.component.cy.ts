To read a file's content, use the cy.readFile() command.

// You can read a file and yield its contents
// The filePath is relative to your project's root.
cy.readFile('cypress.config.js').then((json) => {
    expect(json).to.be.an('object')
})
