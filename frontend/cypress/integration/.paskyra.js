describe('Pakrauna paskyros puslapi', () => {
    it('Ivedam', () => {
        cy.visit("/login")

        // cy.get('[controlid="formEmail"] > .form-control').clear();
        // cy.get('[controlid="formEmail"] > .form-control').type('asdasd@gmail.com');
        // cy.get('[controlid="formPassword"] > .form-control').clear();
        // cy.get('[controlid="formPassword"] > .form-control').type('asdasd{enter}');
        // cy.get('#login').click();
        // cy.get(':nth-child(6) > .navbar-brand').click();
        // cy.get('[controlid="AtsiliepimoTekstas"] > .form-control').type('Sveiki mano vardas Mantas2').click();
        // cy.get('.mr-3 > .btn').click();
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('asdasd@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('asdasd{enter}');
        cy.get('#login').click();
        cy.get(':nth-child(6) > .navbar-brand').click();
        cy.get(':nth-child(7) > .btn').click();
        /* ==== End Cypress Studio ==== */
    })
})
