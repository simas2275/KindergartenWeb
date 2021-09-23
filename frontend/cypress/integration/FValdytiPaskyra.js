describe('Valdyti paskyra', () => {
    it('Prisijungimas', () => {
        cy.visit("/login")
        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('testas@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('testas123{enter}');
        cy.get('#login').click();
    })
    it('Slaptazodzio pakeitimas', () => {
        cy.get(':nth-child(6) > .navbar-brand').click();
        cy.get('#password > .form-control').clear();
        cy.get('#password > .form-control').type('testas111');
        cy.get('#password-confirm > .form-control').clear();
        cy.get('#password-confirm > .form-control').type('testas111');
        cy.get('.w-100').click();
    })
    it('Atsijungimas', () => {
        cy.get(':nth-child(7) > .btn').click();
    })
})
