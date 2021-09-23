describe('Matyti uzregistruotus vizitus', () => {
    it('Duomenys', () => {
        cy.visit("/login")
        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('admin@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('adminvgtu{enter}');
        cy.get('#login').click();
        cy.get(':nth-child(7) > .navbar-brand').click();
        cy.get('[controlid="Vizitai"]').should("exist");
        cy.get(':nth-child(8) > .btn').click();
    })
})
