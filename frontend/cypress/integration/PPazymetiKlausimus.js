describe("Pazymeti klausimus", () => {
  it("Prisijungimas", () => {
    cy.visit("/login");
    cy.get('[controlid="formEmail"] > .form-control').clear();
    cy.get('[controlid="formEmail"] > .form-control').type("admin@gmail.com");
    cy.get('[controlid="formPassword"] > .form-control').clear();
    cy.get('[controlid="formPassword"] > .form-control').type("adminvgtu");
    cy.get("#login").click();
    cy.get(":nth-child(7) > .navbar-brand").click().wait(5000);
  });
  it("Pazymejimas", () => {
    cy.get(
      ":nth-child(3) > .KlausimoBendras > .row > :nth-child(2) > .custom-control > .custom-control-label"
    ).click({ force: true });
    cy.get("#Karolin586\\@gmail\\.com").check().wait(3000);
  });
  it("Atzymejimas", () => {
    cy.get(
      ":nth-child(2) > :nth-child(1) > .row > :nth-child(2) > .jungtukas > .custom-control-label"
    ).click({ force: true });
    cy.get("#Karolin586\\@gmail\\.com").uncheck().wait(3000);
  });
  it("Atsijungimas", () => {
    cy.get(":nth-child(8) > .btn").click();
  });
});
