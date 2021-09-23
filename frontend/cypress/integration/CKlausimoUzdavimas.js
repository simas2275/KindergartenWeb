describe('Klausimo uzdavimas', () => {
    it('Klausimas', () => {
        cy.visit("/")
        cy.get('.mr-auto > [href="/Priemimas"]').click();
        cy.get('textarea.form-control').type("Ar dirbate savaitgaliais? TEST").click();
        cy.get('input.form-control').clear();
        cy.get('input.form-control').type('testas@gmail.com');
        cy.get('.mt-2').click();
        cy.get('[controlid="Sekmingas pranesimas"]');
    })
})
