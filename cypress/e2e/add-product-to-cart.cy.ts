import { first } from "cypress/types/lodash";

beforeEach(() => {
  cy.visit("/");
});

describe("add product to cart", () => {
  it("Garantir a navegação até a tela do produto e a função de adicionar um produto ao carrinho", () => {
    cy.get('a[href^="/product"]').first().click();
    cy.url().should("include", "/product");
    cy.get("button").contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("be.visible");
  });
  it("Garantir que não haja duplicação de produto ao ser adicionado ao carrinho", () => {
    cy.get('a[href^="/product"]').first().click();
    cy.get("button").contains("Adicionar ao carrinho").click();
    cy.get("button").contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist");
  });

  it("Garantir que ao pesquisar o produto e clicar no produto navegue a tela do produto e adicione no carrinho", () => {
    cy.get("input[name=q]").type("moletom").parent("form").submit();
    cy.get('a[href^="/product"]').first().click();
    cy.url().should("include", "/product");
    cy.get("button").contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("be.visible");
  });
});
