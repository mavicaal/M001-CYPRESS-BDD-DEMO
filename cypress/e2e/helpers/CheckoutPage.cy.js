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

  validateOrderDetailsAreDisplayed() {}
}

const checkout = new CheckoutPage();
export default checkout;
