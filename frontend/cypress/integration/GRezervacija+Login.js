describe("Vaiko vietos rezervacija", () => {
  it("Prisijungimas", () => {
    cy.visit("/login");
    cy.get('[controlid="formEmail"] > .form-control').clear();
    cy.get('[controlid="formEmail"] > .form-control').type("testas@gmail.com");
    cy.get('[controlid="formPassword"] > .form-control').clear();
    cy.get('[controlid="formPassword"] > .form-control').type(
      "testas123{enter}"
    );
    cy.get("#login").click();
  });
  it("Rezervacija", () => {
    cy.get('.mr-auto > [href="/Priemimas"]').click();
    cy.get(":nth-child(1) > .form-row > :nth-child(1) > .form-group > .form-control").clear();
    cy.get(":nth-child(1) > .form-row > :nth-child(1) > .form-group > .form-control").type("Test");
    cy.get(":nth-child(1) > .form-row > :nth-child(2) > .form-group > .form-control").clear();
    cy.get(":nth-child(1) > .form-row > :nth-child(2) > .form-group > .form-control").type("Test");
    cy.get('[controlid="formPhoneNum"] > .form-control').clear();
    cy.get('[controlid="formPhoneNum"] > .form-control').type("865845968");
    cy.get(".col-sm-6 > .form-group > .form-control").clear();
    cy.get(".col-sm-6 > .form-group > .form-control").type("Testukass");
    cy.get(".col-sm-3 > .form-group > .form-control").clear();
    cy.get(".col-sm-3 > .form-group > .form-control").type("3");
    cy.get("#reg").click();
    cy.request({
      method: "post",
      url:
        "https://us-central1-darzelis-ef216.cloudfunctions.net/api/getVaikoDuom",
      headers: {
        Authorization: `Bearer token`,
      },
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
  it("Atsijungimas", () => {
    cy.get(":nth-child(7) > .btn").click();
  });
});
