To visit a remote page, use the cy.visit() command.

cy.visit('https://example.cypress.io/commands/navigation', {
    timeout: 50000, // increase total time for the visit to resolve
    onBeforeLoad: function(contentWindow){
        // contentWindow is the remote page's window object
    },
    onLoad: function(contentWindow){
        // contentWindow is the remote page's window object
    }
})
