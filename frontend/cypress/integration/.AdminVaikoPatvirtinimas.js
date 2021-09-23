describe('Vaiko vietos patvirtinimas', () => {
    it('Patvirtinti', () => {
        cy.visit("/login")
        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('admin@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('adminvgtu{enter}');
        cy.get('#login').click();
        cy.get(':nth-child(7) > .navbar-brand').click();
        cy.get(':nth-child(2) > :nth-child(1) > .col-md-8 > :nth-child(1) > .custom-control > .custom-control-label').click();
        cy.get('#RHYpfdHXZdPbuqxRWvmrcnOnsvj1').check();
        cy.get(':nth-child(8) > .btn').click();
    })
})
