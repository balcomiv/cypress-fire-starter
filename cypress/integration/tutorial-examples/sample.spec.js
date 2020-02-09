/// <reference types="cypress" />

import Chance from "chance";

const chance = new Chance();

describe("Firestarter", () => {
  //   const email = chance.email();
  //   const password = "ValidPassword123";
  const email = "test-test@gmail.com";
  const password = "123456";

  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

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

  it("signs up a new user", () => {
    cy.get('[routerlink="/login"]:visible').click();

    //  Assert URL
    cy.url().should("include", "/login");

    //  Fill out Form
    cy.get('input[formControlName="email"]').type(email);
    cy.get('input[formControlName="password"]').type(password);
    cy.get('input[formControlName="passwordConfirm"]').type(password);
    cy.get('button[type="submit"]').click();
  });
});
