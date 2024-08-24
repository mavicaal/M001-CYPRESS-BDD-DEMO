class LoginPage {
  enterEmailPassword(username, password) {
    cy.get('input[id="user-name"]').clear().type(username);
    cy.get('input[id="password"]').clear().type(password);
    return this;
  }

  clickLoginButton() {
    cy.get('input[id="login-button"]').click();
    return this;
  }

  verifyInventoryPageIsDisplayed() {
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    cy.get('[data-test="secondary-header"]').within(() => {
      cy.contains("Products");
    });
    return this;
  }

  clickLogoutOption() {
    cy.get('button[id="react-burger-menu-btn"]').click();
    cy.contains("Logout").click();
    return this;
  }

  verifyLoginPageIsDisplayed() {
    cy.get('[data-test="login-container"]').should("be.visible");
    return this;
  }
}

const login = new LoginPage();
export default login;
