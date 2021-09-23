describe('Registracija', () => {
    it('Registracija', () => {
        cy.visit("/login")
        cy.get('.Registracija').click();
        cy.get('.modal-body > form > [controlid="formEmail"] > .form-control').clear();
        cy.get('.modal-body > form > [controlid="formEmail"] > .form-control').type('testas@gmail.com');
        cy.get('[controlid="formName"] > .form-control').clear();
        cy.get('[controlid="formName"] > .form-control').type('Testas');
        cy.get('[controlid="formPassword1"] > .form-control').clear();
        cy.get('[controlid="formPassword1"] > .form-control').type('testas123');
        cy.get('[controlid="formPassword2"] > .form-control').clear();
        cy.get('[controlid="formPassword2"] > .form-control').type('testas123{enter}').wait(4000);
    })
    it('Atsijungimas', () => {
        cy.get(':nth-child(7) > .btn').click();
    })
})
