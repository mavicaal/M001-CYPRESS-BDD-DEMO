import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import inventory from "../helpers/InventoryPage.cy";

When("User clicks the {string} filter option", (user_type) => {
  inventory.clicksSortOption(user_type);
});

Then("Products items are ordered {string}", () => {
  inventory.accessElementsOfInventoryList();
});
