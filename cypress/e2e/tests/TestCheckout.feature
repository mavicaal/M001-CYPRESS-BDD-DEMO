Feature: Checkout inventory items
    Background: Navigate to the Website
        Given User navigates to the "SauceDemo Home Page"
        And  "standard_user" user log in
        And "Inventory Page" is displayed
        And User add "sauce-labs-backpack" item to the cart
        And User clicks the cart logo
        And User clicks on "Checkout" cart button

    Scenario: Checkout items without fill required firstname
        When User fills out the "Last Name" field
        And User fills out the "Postal Code" field
        And User clicks on "Continue" checkout button
        Then "First Name" required error is displayed

    Scenario: Checkout items without fill required lastname
        And User fills out the "First Name" field
        And User fills out the "Postal Code" field
        And User clicks on "Continue" checkout button
        Then "Last Name" required error is displayed

    Scenario: Checkout items without fill required zip code
        And User fills out the "First Name" field
        And User fills out the "Last Name" field
        And User clicks on "Continue" checkout button
        Then "Postal Code" required error is displayed

    Scenario: Checkout items succesfully display order details
        And User fills out the "First Name" field
        And User fills out the "Last Name" field
        And User fills out the "Postal Code" field
        And User clicks on "Continue" checkout button
        Then Order details are displayed

# Scenario: Checkout items are ordered succesfully
#     And User fills out the "First Name" field
#     And User fills out the "Last Name" field
#     And User fills out the "Postal Code" field
#     And User clicks the "Continue" checkout button
#     And User clicks the "Finish" checkout button
#     Then Success order msg is displayed

