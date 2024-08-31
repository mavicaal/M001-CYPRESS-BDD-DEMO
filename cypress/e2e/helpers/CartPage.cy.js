class CartPage {
  addItemToTheCart(item) {
    let data_test = `add-to-cart-${item}`;
    let remove_data_test = `remove-${item}`;
    cy.get(`button[data-test="${data_test}"]`).click();
    cy.get(`button[data-test="${remove_data_test}"]`).should(
      "contain.text",
      "Remove"
    );
    return this;
  }

  clicksCartLogo() {
    cy.get('a[data-test="shopping-cart-link"]').click();
    return this;
  }

  IsItemDisplayedInCartPage(item, visibility) {
    let remove_data_test = `remove-${item}`;
    cy.contains("Your Cart");
    cy.get('div[data-test="cart-contents-container"]').within(() => {
      if (visibility == "is")
        cy.get(`button[data-test="${remove_data_test}"]`).should("be.visible");
      else if (visibility == "is not") {
        cy.get(`button[data-test="${remove_data_test}"]`).should("not.exist");
      }
    });
    return this;
  }

  itemIsNotDisplayedInCartPage(item) {
    let remove_data_test = `remove-${item}`;
    cy.get('div[data-test="cart-contents-container"]').within(() => {
      cy.get(`button[data-test="${remove_data_test}"]`).should("not.exist");
    });
    return this;
  }

  removeItemInSpecificPage(item, page) {
    let remove_data_test = `remove-${item}`;
    if (page == "Cart Page") {
      cy.get('div[data-test="cart-contents-container"]').within(() => {
        cy.get(`button[data-test="${remove_data_test}"]`).click();
      });
    } else if (page == "Inventory Page") {
      cy.get('div[data-test="inventory-container"]').within(() => {
        let data_test = `add-to-cart-${item}`;
        cy.get(`button[data-test="${remove_data_test}"]`).click();
        cy.get(`button[data-test="${data_test}"]`).should("be.visible");
      });
    }
    return this;
  }

  clicksContinueShoppingOption() {
    cy.get('div[data-test="cart-contents-container"]').within(() => {
      cy.get('button[data-test="continue-shopping"]').click();
    });
    return this;
  }
}

const cart = new CartPage();
export default cart;
