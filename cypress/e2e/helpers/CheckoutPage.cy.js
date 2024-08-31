class CheckoutPage {
  fillOutInput(input) {
    cy.get('div["data-test="checkout-info-container"]').within(() => {
      cy.loadJson("../test_data/data.json").then((data) => {
        if (input == "First Name")
          cy.get('input[data-test="firstName"]').type(data.inputs.firstName);
      });
    });
  }
}

const checkout = new CheckoutPage();
export default checkout;
