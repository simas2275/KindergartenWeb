describe('Patvirtinti vaiko rezervacija', () => {
    it('Duomenys', () => {
        cy.visit("/login")
        cy.get('[controlid="formEmail"] > .form-control').clear();
        cy.get('[controlid="formEmail"] > .form-control').type('admin@gmail.com');
        cy.get('[controlid="formPassword"] > .form-control').clear();
        cy.get('[controlid="formPassword"] > .form-control').type('adminvgtu');
        cy.get('#login').click();
        cy.get(':nth-child(7) > .navbar-brand').click();
        cy.get(':nth-child(5) > :nth-child(1) > .col-md-8 > :nth-child(1) > .custom-control > .custom-control-label').click({force: true});
        cy.get('#qyr91y8B3KXrzGnnElZi23BKPh42').check();
        cy.get(':nth-child(5) > :nth-child(1) > .col-md-8 > :nth-child(1) > .custom-control > .custom-control-label').click({force: true});
        cy.get('#qyr91y8B3KXrzGnnElZi23BKPh42').uncheck();
        cy.get(':nth-child(8) > .btn').click();
    })
})        
