Feature: Login into SauceDemo site with different users
    Background: Navigate to the Website
        Given I navigate to the Website

    Scenario: Success login into the application with standard user
        When "standard_user" user log in
        Then "Inventory Page" is displayed

    Scenario: Success logout into the application with standard user
        When "standard_user" user log in
        And "Inventory Page" is displayed
        And The current user log out
        Then "Login Page" is displayed

    Scenario: Fail login into the application with locked out user
        When "locked_out_user" user log in
        Then "Locked Out Error" is displayed
