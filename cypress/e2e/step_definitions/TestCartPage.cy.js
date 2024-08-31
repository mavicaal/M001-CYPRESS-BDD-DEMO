import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import cart from "../helpers/CartPage.cy";

When("User add {string} item to the cart", (item) => {
  cart.addItemToTheCart(item);
});

When("User clicks the cart logo", () => {
  cart.clicksCartLogo();
});

When("User clicks on {string} cart button", () => {
  cart.clicksContinueShoppingOption();
});

When("User removes {string} item from {string}", (item, page) => {
  cart.removeItemInSpecificPage(item, page);
});

Then("Item {string} {string} displayed", (item, visibility) => {
  cart.IsItemDisplayedInCartPage(item, visibility);
});

Then("Item {string} is no longer visible in Cart Page", (item) => {
  cart.itemIsNotDisplayedInCartPage(item);
});
