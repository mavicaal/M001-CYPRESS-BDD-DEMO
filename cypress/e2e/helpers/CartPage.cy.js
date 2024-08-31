class CartPage {
  addItemsToTheCart(item) {
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
  }

  itemsAreDisplayedInCartPage(item) {
    let remove_data_test = `remove-${item}`;
    cy.contains("Your Cart");
    cy.get('div[data-test="cart-contents-container"]').within(() => {
      cy.get(`button[data-test="${remove_data_test}"]`).should("be.visible");
    });
  }
}

const cart = new CartPage();
export default cart;
