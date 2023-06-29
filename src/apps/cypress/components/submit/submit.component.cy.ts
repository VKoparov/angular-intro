To submit a form, use the cy.submit() command.

cy.get('.action-form')
    .find('[type="text"]').type('HALFOFF')
cy.get('.action-form').submit()
    .next().should('contain', 'Your form has been submitted!')
