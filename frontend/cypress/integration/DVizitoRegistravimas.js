describe("Vizito registravimas", () => {
  it("Priemimo pakrovimas", () => {
    cy.visit("/");
    cy.get('.mr-auto > [href="/Priemimas"]').click();
    cy.get("a > .btn").click();
  });
  it("Formos uzpildymas", () => {
    cy.get('[controlid="formVardas"] > .form-control').clear();
    cy.get('[controlid="formVardas"] > .form-control').type("Test");
    cy.get('[controlid="formPavarde"] > .form-control').clear();
    cy.get('[controlid="formPavarde"] > .form-control').type("Test");
    cy.get('[controlid="formEmail"] > .form-control').clear();
    cy.get('[controlid="formEmail"] > .form-control').type("test@gmail.com");
    cy.get(".react-datepicker__input-container > .form-control").click();
    cy.get(".react-datepicker__day--021").click();
    cy.get(".react-datepicker__time-list > :nth-child(25)").click();
    cy.get(".col-lg-8 > .form-group > .form-control").clear();
    cy.get(".col-lg-8 > .form-group > .form-control").type("865985658");
    cy.get('[controlid="formVaikoDuom"] > .form-control').type("Test").click();
    cy.get("form > .mb-4").click();
    cy.request({
      method: "post",
      url:
        "https://us-central1-darzelis-ef216.cloudfunctions.net/api/postVizitoInfo",
      response: [],
    })
      .then((response) => {
        assert.equal(response.status, 200);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
