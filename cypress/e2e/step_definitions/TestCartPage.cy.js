import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import cart from "../helpers/CartPage.cy";

When("User add {string} item to the cart", (item) => {
  cart.addItemsToTheCart(item);
});

When("User clicks the cart logo", () => {
  cart.clicksCartLogo();
});

Then("Item {string} is displayed", (item) => {
  cart.itemsAreDisplayedInCartPage(item);
});
