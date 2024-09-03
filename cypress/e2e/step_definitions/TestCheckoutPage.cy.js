import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import checkout from "../helpers/CheckoutPage.cy";

When("User fills out the {string} field", (input) => {
  checkout.fillOutInput(input);
});

When("User clicks on {string} checkout button", (button) => {
  if (button == "Continue") checkout.clicksCheckoutContinueButton();
  else if (button == "Finish") checkout.clicksCheckoutSummaryFinishButton();
  else throw Error("No valid button found for checkout page");
});

Then("{string} required error is displayed", (input) => {
  checkout.validateErrorMsgForInputs(input);
});

Then("{string} order details are displayed", (item) => {
  checkout.validateOrderDetailsAreDisplayed(item);
});
