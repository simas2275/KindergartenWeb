describe('Prisijungimas', () => {
    it('Prisijungimas', () => {
        cy.visit("/login")
        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('testas@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('testas123{enter}');
        cy.get('#login').click();
    })
    it('Atsijungimas', () => {
        cy.get(':nth-child(6) > .navbar-brand').click();
        cy.get(':nth-child(7) > .btn').click();
    })
})
