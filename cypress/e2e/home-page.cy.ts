describe('Home Page Test', () => {
  it('Should have 16 buttons present', () => {
    cy.visit('/angular')

    const expectedButtonsCount: number = 17;

    cy.get('.btn')
        .then((buttonsCount) => {
          expect(buttonsCount).to.have.length(expectedButtonsCount);
        });
  })
})
