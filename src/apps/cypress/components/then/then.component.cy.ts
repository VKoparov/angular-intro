To invoke a callback function with the current subject, use the .then() command.

cy.get('.connectors-list>li').then(function($lis){
    expect($lis).to.have.length(3)
    expect($lis.eq(0)).to.contain('Walk the dog')
    expect($lis.eq(1)).to.contain('Feed the cat')
    expect($lis.eq(2)).to.contain('Write JavaScript')
})

If the callback function returns a value, it is yielded to the next callback, just like in a Promise callback.

cy.wrap(1)
    .then((num) => {
        expect(num).to.equal(1)

        return 2
    })
    .then((num) => {
        expect(num).to.equal(2)
    })
But unlike a Promise, if undefined is returned, then the original value passed into the .then(cb) is yielded to the next callback.

cy.wrap(1)
    .then((num) => {
        expect(num).to.equal(1)
        // note that nothing is returned from this callback
    })
    .then((num) => {
        // this callback receives the original unchanged value 1
        expect(num).to.equal(1)
    })
If there are Cypress commands in the .then(cb) callback, then the value yielded by the last command will be passed to the next callback.

cy.wrap(1)
    .then((num) => {
        expect(num).to.equal(1)
        // note how we run a Cypress command
        // the result yielded by this Cypress command
        // will be passed to the second ".then"
        cy.wrap(2)
    })
    .then((num) => {
        // this callback receives the value yielded by "cy.wrap(2)"
        expect(num).to.equal(2)
    })
