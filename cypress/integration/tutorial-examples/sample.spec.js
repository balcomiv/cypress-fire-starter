/// <reference types="cypress" />

import Chance from "chance";

const chance = new Chance();

describe("Firestarter", () => {
  //   const email = chance.email();
  //   const password = "ValidPassword123";
  const email = "test-test@gmail.com";
  const password = "123456";

  // This is not a best pracice (anit-pattern)
  before(() => {
    cy.login(email, password);
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  // This is not a best pracice (anit-pattern)
  //   after(() => {
  //     cy.logout();
  //   });

  it("has a title", () => {
    cy.contains("Angular Firestarter");
  });

  it("blocks protected routes", () => {
    // cy.pause(); // This will pause and let you step through each step going forward
    cy.get('[routerlink="/kanban"] > .mat-button-wrapper').click();
    cy.get(".mat-snack-bar-container")
      .children()
      .should("contain", "You must be logged in!");
  });

  it.only("allows user to create notes", () => {
    // Login with custom method
    cy.login(email, password);

    //
    cy.pause();
  });

  it("goes to login screen", () => {
    // Get visible login
    cy.get("a:visible")
      .contains("Login")
      .click();

    cy.contains("Returning user?").click();
  });
});
