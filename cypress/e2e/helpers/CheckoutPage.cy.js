class CheckoutPage {
  fillOutInput(input) {
    cy.get('div[data-test="checkout-info-container"]').within(() => {
      cy.loadJson("./cypress/e2e/test_data/data.json").then((data) => {
        if (input == "First Name")
          cy.get('input[data-test="firstName"]').type(data.inputs.firstName);
        else if (input == "Last Name")
          cy.get('input[data-test="lastName"]').type(data.inputs.lastName);
        else if (input == "Postal Code")
          cy.get('input[data-test="postalCode"]').type(data.inputs.postalCode);
      });
      return this;
    });
  }

  clicksCheckoutContinueButton() {
    cy.get('div[data-test="checkout-info-container"]').within(() => {
      cy.get('input[data-test="continue"]').click();
    });
    return this;
  }

  clicksCheckoutSummaryFinishButton() {
    cy.get('div[data-test="checkout-summary-container"]').within(() => {
      cy.get('button[data-test="finish"]').click();
    });
    return this;
  }

  validateErrorMsgForInputs(input) {
    cy.verifyErrorMsgVisibility(`Error: ${input} is required`);
  }

  validateOrderDetailsAreDisplayed(item) {
    cy.get('div[data-test="checkout-summary-container"]').within(() => {
      cy.contains(item)
        .parent()
        .parent()
        .within(() => {
          cy.get('div[data-test="inventory-item-price"]')
            .invoke("text")
            .as("item_text");
        });
      cy.get('div[data-test="subtotal-label"]').invoke("text").as("sub_text");
      cy.get("@item_text").then(($text) => {
        cy.get("@sub_text").should("contain", $text);
      });
      cy.get('div[data-test="payment-info-label"]').should("be.visible");
      cy.get('div[data-test="shipping-info-label"]').should("be.visible");
      cy.get('div[data-test="total-info-label"]').should("be.visible");
    });
  }
}

const checkout = new CheckoutPage();
export default checkout;
