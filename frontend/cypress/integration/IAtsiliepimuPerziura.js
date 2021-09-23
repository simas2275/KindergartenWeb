describe('Matyti atsiliepima', () => {
    it('Prisijungimas', () => {
        cy.visit("/login")

        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('testas@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('testas111');
        cy.get('#login').click();
    })
    it('Parasytas atsiliepimas', () => {
        cy.get(':nth-child(6) > .navbar-brand').click();
        cy.get('[controlid="ParasytasAtsiliepimas"]').should("exist")
        cy.get(':nth-child(7) > .btn').click();
    })
})
