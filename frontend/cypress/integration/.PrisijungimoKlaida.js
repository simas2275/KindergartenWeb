describe('Prisijungimo klaidos pranesimas', () => {
    it('Pranesimas', () => {
        cy.visit("/login")
        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('asdasd@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('asdasdd');
        cy.get('button[type=submit]').click();
        cy.get('[controlid="Klaidos pranesimas"]');
    })
})
