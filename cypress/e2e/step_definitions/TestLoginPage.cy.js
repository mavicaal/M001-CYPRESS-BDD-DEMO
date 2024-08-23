import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../helpers/LoginPage.cy";

Given("I navigate to the Website", () => {
  login.enterURL();
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
      return this;
    case "Login Page":
      login.verifyLoginPageIsDisplayed();
      return this;
    case "Locked Out Error":
      login.verifyLockedOutErrorIsDisplayed();
      return this;
    default:
      break;
  }
});
