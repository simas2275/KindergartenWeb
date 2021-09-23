describe("Matyt klientu su vaikais duomenis", () => {
  it("Duomenys", () => {
    cy.visit("/login");
    cy.get('[controlid="formEmail"] > .form-control').clear();
    cy.get('[controlid="formEmail"] > .form-control').type("admin@gmail.com");
    cy.get('[controlid="formPassword"] > .form-control').clear();
    cy.get('[controlid="formPassword"] > .form-control').type("adminvgtu");
    cy.get("#login").click();
    cy.get(":nth-child(7) > .navbar-brand").click().wait(5000);
    cy.get('[controlid="TevuVaikuDuom"]').should("exist").wait(1000);
    cy.request({
      method: "get",
      url:
        "https://us-central1-darzelis-ef216.cloudfunctions.net/api/getVaikoRezDuom",
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
  it("Atsijungi", () => {
    cy.get(":nth-child(8) > .btn").click();
  });
});
