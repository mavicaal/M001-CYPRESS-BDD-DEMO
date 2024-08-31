import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

afterEach(() => {
  cy.clearCookies();
});
