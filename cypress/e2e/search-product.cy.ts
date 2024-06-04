describe("search product", () => {
  it("Garantir a busca dos produtos", () => {
    cy.visit("/");
    cy.get("input[name=q]").type("moletom").parent("form").submit();
    cy.url().should("include", "/search?q=moletom");
    cy.contains("Resultados para: moletom").should("be.visible");
  });

  it("Garantir o retorno a página inicial quando a página não tiver valor no campo de busca", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/search");
    cy.location("pathname").should("equal", "/");
  });
});
