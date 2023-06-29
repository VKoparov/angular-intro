To spread an array as individual arguments to a callback function, use the .spread() command.

    const arr = ['foo', 'bar', 'baz']

cy.wrap(arr).spread(function(foo, bar, baz){
    expect(foo).to.eq('foo')
    expect(bar).to.eq('bar')
    expect(baz).to.eq('baz')
})
