describe("Rasyti atsiliepima", () => {
  it("Prisijungimo langas", () => {
    cy.visit("/login");
  });
  it("Prisijungimas", () => {
    cy.get('[controlid="formEmail"] > .form-control').clear();
    cy.get('[controlid="formEmail"] > .form-control').type("testas@gmail.com");
    cy.get('[controlid="formPassword"] > .form-control').clear();
    cy.get('[controlid="formPassword"] > .form-control').type("testas111");
    cy.get("#login").click();
  });
  it("Rasyti atsiliepima", () => {
    cy.get(":nth-child(6) > .navbar-brand").click();
    cy.get('[controlid="AtsiliepimoTekstas"] > .form-control')
      .type("Testuojame atsiliepimus")
      .click();
    cy.get('[controlid="AtsiliepimoVardas"] > .form-control').click();
    cy.get(".mr-3 > .btn").click();
    cy.request({
      method: "post",
      url:
        "https://us-central1-darzelis-ef216.cloudfunctions.net/api/atsliepimoPost",
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
