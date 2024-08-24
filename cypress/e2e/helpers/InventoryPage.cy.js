import { expect } from "chai";

class InventoryPage {
  //Using JQuery and Cypress Wrappers
  accessElementsOfInventoryList() {
    const items = [];
    let items_r = [];
    cy.get('[data-test="inventory-list"] [data-test="inventory-item"]')
      .each(($div) => {
        cy.wrap($div).within(() => {
          cy.get('[data-test="inventory-item-description"] div a').then(
            ($divt) => {
              items.push($divt.text());
            }
          );
        });
      })
      .then(() => {
        items_r = [...items];
        expect(items).to.deep.equal(items_r.sort().reverse());
        cy.log(items);
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
      default:
        break;
    }
  }
}

const inventory = new InventoryPage();
export default inventory;
