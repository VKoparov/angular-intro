To wrap a method in a spy, use the cy.spy() command.

    const obj = {
    foo () {},
}

const spy = cy.spy(obj, 'foo').as('anyArgs')

obj.foo()

expect(spy).to.be.called
cy.spy() retries until the assertions that follow it pass.

    const obj = {
    foo () {},
}

cy.spy(obj, 'foo').as('foo')

setTimeout(() => {
    obj.foo()
}, 500)

setTimeout(() => {
    obj.foo()
}, 2500)

cy.get('@foo').should('have.been.calledTwice')
