import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import inventory from "../helpers/InventoryPage.cy";

When("User clicks the {string} filter option", (user_type) => {
  inventory.clicksSortOption(user_type);
});

Then(
  "Products items are ordered by {string} {string}",
  (type_sort, direction) => {
    if (type_sort == "Alphabetically")
      inventory.inventoryItemsOrderAlphabeticallyBy(direction);
    else if (type_sort == "Price")
      inventory.inventoryItemsOrderPriceBy(direction);
  }
);
