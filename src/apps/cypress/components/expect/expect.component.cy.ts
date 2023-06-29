To make a BDD assertion about a specified subject, use expect.

expect(true).to.be.true
const o = { foo: 'bar' }
expect(o).to.equal(o)
expect(o).to.deep.equal({ foo: 'bar' })
// matching text using regular expression
expect('FooBar').to.match(/bar$/i)
