describe('Slaptazodzio atkurimas', () => {
    it('Duomenys', () => {
        cy.visit("/login")
        cy.get('.nav-link').click();
        cy.get('.modal-body > form > .form-group > .form-control').clear();
        cy.get('.modal-body > form > .form-group > .form-control').type('liulis123@gmail.com{enter}');
        cy.get('.SendButton').click();
    })
})
