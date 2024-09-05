# M001-CYPRESS-BDD-DEMO

This a demonstration of my skills in cypress framework

# STEPS TO INITIALZIE THE PROJECT

1. Install nodejs and the npm package
2. Install Cypress to the latest stable version
   ´npm install cypress@13.11.0´
3. Install Cucumber package
   ´npm install save-dev cypress-cucumber-preprocessor´
4. Run all the tests with the following command: ´npx cypress run --browser chrome --headless´
5. Run all the tests with the cypress UI displayed command: ´npx cypress run --browser chrome --headed´
6. Run a specific spec: ´npx cypress run --spec "cypress\e2e\tests\TestLoginPage.feature" --browser chrome --headed ´

# NOTES

1.  chromeWebSecurity: false, param was added in cypress.config.js to avoid error related chrome pop up when running tests
