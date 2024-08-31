Feature: Login into SauceDemo site with different users
    Background: Navigate to the Website
        Given User navigates to the "SauceDemo Home Page"

    Scenario: Navigate to the Inventory Page without logged user
        When User navigates to the "SauceDemo Inventory Page"
        Then "Log in Access Need Error" is displayed

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

    Scenario: Fail login into the application with bad credentials
        When "bad_credentials_user" user log in
        Then "Bad Credentials Error" is displayed
