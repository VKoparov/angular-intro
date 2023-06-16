describe('Home Page Test', () => {
  it('Should have 16 buttons present', () => {
    cy.visit('/home')

    const expectedButtonsCount: number = 16;

    cy.get('.btn')
        .then((buttonsCount) => {
          expect(buttonsCount).to.have.length(expectedButtonsCount);
        });
  })
})
