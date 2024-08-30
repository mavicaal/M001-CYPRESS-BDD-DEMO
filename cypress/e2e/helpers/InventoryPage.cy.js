import { expect } from "chai";

class InventoryPage {
  //Using JQuery and Cypress Wrappers
  inventoryItemsOrderAlphabeticallyBy(direction) {
    const items = [];
    let items_r = [];
    cy.get('[data-test="inventory-list"] [data-test="inventory-item"]')
      .each(($div) => {
        cy.wrap($div).within(() => {
          cy.get(
            '[data-test="inventory-item-description"] div.inventory_item_label a'
          ).then(($divt) => {
            items.push($divt.text());
          });
        });
      })
      .then(() => {
        items_r = [...items];
        if (direction == "Ascending") {
          expect(items).to.deep.equal(items_r.sort().reverse());
        } else if (direction == "Descending") {
          expect(items).to.deep.equal(items_r.sort());
        } else {
          throw new Error("No valid sort type found");
        }
        cy.log(items);
      });
    return this;
  }

  inventoryItemsOrderPriceBy(direction) {
    const items = [];
    let items_r = [];
    cy.get('[data-test="inventory-list"] [data-test="inventory-item"]')
      .each(($div) => {
        cy.wrap($div).within(() => {
          cy.get(
            '[data-test="inventory-item-description"] div.pricebar div'
          ).then(($divt) => {
            let price_f = $divt.text().replace(/[^0-9.-]+/g, "");
            price_f = parseFloat(price_f);
            items.push(price_f);
          });
        });
      })
      .then(() => {
        items_r = [...items];
        if (direction == "Descending") {
          expect(items).to.deep.equal(
            items_r
              .sort(function (a, b) {
                return a - b;
              })
              .reverse()
          );
        } else if (direction == "Ascending") {
          expect(items).to.deep.equal(
            items_r.sort(function (a, b) {
              return a - b;
            })
          );
        } else {
          throw new Error("No valid sort type found");
        }
      });
    return this;
  }

  clicksSortOption(sort_option) {
    switch (sort_option) {
      case "Alphabetically Ascending":
        cy.get('select[data-test="product-sort-container"]').select(
          "Name (Z to A)"
        );
        break;
      case "Alphabetically Descending":
        cy.get('select[data-test="product-sort-container"]').select(
          "Name (A to Z)"
        );
        break;
      case "Price Ascending":
        cy.get('select[data-test="product-sort-container"]').select(
          "Price (low to high)"
        );
        break;
      case "Price Descending":
        cy.get('select[data-test="product-sort-container"]').select(
          "Price (high to low)"
        );
        break;
      default:
        break;
    }
  }
}

const inventory = new InventoryPage();
export default inventory;
