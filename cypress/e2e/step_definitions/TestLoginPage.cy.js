import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../helpers/LoginPage.cy";

Given("User navigate to the {string}", (website) => {
  switch (website) {
    case "SauceDemo Home Page":
      cy.visit("https://www.saucedemo.com/");
      break;
    case "SauceDemo Inventory Page":
      cy.visit("https://www.saucedemo.com/inventory.html", {
        failOnStatusCode: false,
      });
      break;
    default:
      break;
  }
});

When("{string} user log in", (user_type) => {
  login.enterEmailPassword(user_type, "secret_sauce");
  login.clickLoginButton();
});

When("The current user log out", () => {
  login.clickLogoutOption();
});

Then("{string} is displayed", (element) => {
  switch (element) {
    case "Inventory Page":
      login.verifyInventoryPageIsDisplayed();
      break;
    case "Login Page":
      login.verifyLoginPageIsDisplayed();
      break;
    case "Locked Out Error":
      cy.verifyErrorMsgVisibility(
        "Epic sadface: Sorry, this user has been locked out."
      );
      break;
    case "Bad Credentials Error":
      cy.verifyErrorMsgVisibility(
        "Epic sadface: Username and password do not match any user in this service"
      );
      break;
    case "Log in Access Need Error":
      cy.verifyErrorMsgVisibility(
        "Epic sadface: You can only access '/inventory.html' when you are logged in."
      );
      break;
    default:
      break;
  }
});
