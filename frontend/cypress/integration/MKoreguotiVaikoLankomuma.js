describe('Koreguoti vaiko lankomuma', () => {
    it('Duomenys', () => {
        cy.visit("/login")
        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('asdasd@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('asdasd');
        cy.get('#login').click();
        cy.get(':nth-child(6) > .navbar-brand').click();
        cy.get('[controlid="VaikoDuomenys"]').should("exist")
        cy.get(':nth-child(2) > .row > :nth-child(2) > :nth-child(1) > :nth-child(1) > .switch > .switch-group > .switch-off').click();
        cy.get(':nth-child(2) > .row > :nth-child(2) > :nth-child(1) > :nth-child(1) > .switch > .switch-group > .switch-on').click();
        cy.get(':nth-child(2) > .row > :nth-child(4) > :nth-child(1) > :nth-child(1) > .switch > .switch-group > .switch-on').click();
        cy.get(':nth-child(2) > .row > :nth-child(4) > :nth-child(1) > :nth-child(1) > .switch > .switch-group > .switch-off').click();
        cy.get(':nth-child(7) > .btn').click();
    })
})
