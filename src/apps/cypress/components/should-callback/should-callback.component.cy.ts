You can write your own complicated checks using .should(cb) function if included assertions are not enough. Pass a function to should() with any number of explicit assertions within it. The callback function will be retried until it passes all your explicit assertions or times out.

cy.get('.assertions-p').find('p')
    .should(($p) => {
        // return an array of texts from all of the p's
        let texts = $p.map((i, el) => // https://on.cypress.io/$
            Cypress.$(el).text())

        // jquery map returns jquery object
        // and .get() convert this to simple array
        texts = texts.get()

        // array should have length of 3
        expect(texts).to.have.length(3)

        // use second argument to expect(...) to provide clear
        // message with each assertion
        expect(texts, 'has expected text in each paragraph').to.deep.eq([
            'Some text from first p',
            'More text from second p',
            'And even more text from third p',
        ])
    })

Assert that element's class includes heading-.

cy.get('.docs-header').find('div')
    // .should(cb) callback function will be retried
    .should(($div) => {
        expect($div).to.have.length(1)

        const className = $div[0].className

        expect(className).to.match(/heading-/)
    })
    // .then(cb) callback is not retried,
    // it either passes or fails
    .then(($div) => {
        expect($div).to.have.text('Introduction')
    })

You can throw any error from the callback function. The callback will be retried, but the assertions will not be shown as nicely in the Command Log UI as Chai assertions.

cy.get('.docs-header').find('div')
    .should(($div) => {
        if ($div.length !== 1) {
            // you can throw your own errors
            throw new Error('Did not find 1 element')
        }

        const className = $div[0].className

        if (!className.match(/heading-/)) {
            throw new Error(`Could not find class "heading-" in ${className}`)
        }
    })

We strongly recommend that your tests are deterministic. But sometimes you might need to match text between two elements, and you do not know what that text should be. Save the value from the first element, then compare it from a should(cb) callback.

    let text
/**
 * Normalizes passed text,
 * useful before comparing text with spaces and different capitalization.
 * @param {string} s Text to normalize
 */
const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

cy.get('.two-elements')
    .find('.first')
    .then(($first) => {
        // save text from the first element
        text = normalizeText($first.text())
    })

cy.get('.two-elements')
    .find('.second')
    .should(($div) => {
        // we can massage text before comparing
        const secondText = normalizeText($div.text())
        expect(secondText, 'second text').to.equal(text)
    })

Remember that Cypress only retries the very last command, if it allows retrying. If you need to perform additional steps before running an assertion, you can use .should(callbackFn) to retry multiple operations.

cy.get('#random-number')
    .should(($div) => {
        // retries getting the element
        // while the "🎁" is converted into NaN
        // and only passes when a number is set
        const n = parseFloat($div.text())
        expect(n).to.be.gte(1).and.be.lte(10)
    })
