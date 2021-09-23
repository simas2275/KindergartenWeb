describe('Istrinti atsiliepima', () => {
    it('Duomenys', () => {
        cy.visit("/login")

        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('testas@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('testas111');
        cy.get('#login').click();
        cy.get(':nth-child(6) > .navbar-brand').click();
        cy.get('[controlid="IstrinimoMygtukas"]').click();
        cy.get(':nth-child(7) > .btn').click();
    })
})