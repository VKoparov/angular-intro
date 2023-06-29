To make a TDD assertion about a specified subject, use assert.

    const person = {
    name: 'Joe',
    age: 20,
}
assert.isObject(person, 'value is object')
