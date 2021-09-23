describe('Koreguoti vaiko maista', () => {
    it('Duomenys', () => {
        cy.visit("/login")

        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('asdasd@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('asdasd');
        cy.get('#login').click();
        cy.get(':nth-child(6) > .navbar-brand').click();
        cy.get('[controlid="VaikoDuomenys"]').should("exist")
        cy.get('form > .form-control').type("Abu vaikai negali valgyti mesos produktu?").click();
        cy.get('.mt-2').click();
        cy.get(':nth-child(7) > .btn').click();
    })
})
