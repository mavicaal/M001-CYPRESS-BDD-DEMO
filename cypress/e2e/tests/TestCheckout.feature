Feature: Checkout inventory items
    Background: Navigate to the Website
        Given User navigates to the "SauceDemo Home Page"
        And  "standard_user" user log in
        And "Inventory Page" is displayed
        And User add "sauce-labs-backpack" item to the cart
        And User clicks the cart logo
        And User clicks the checkout button

    Scenario: Checkout items without fill required firstname
        When User fillout the "last name" field
        And User fillout the "zip code" field
        And User clicks the continue button
        Then "first name" required error is displayed

    Scenario: Checkout items without fill required lastname
        And User fill out the "first name" field
        And User fill out the "zip code" field
        And User clicks the continue button
        Then "last name" required error is displayed

    Scenario: Checkout items without fill required zip code
        And User fill out the "first name" field
        And User fill out the "last name" field
        And User clicks the continue button
        Then "zip code" required error is displayed

    Scenario: Checkout items succesfully display order details
        And User fill out the "first name" field
        And User fill out the "last name" field
        And User fill out the "zip code" field
        And And User clicks the "Continue" checkout button
        Then Order details are displayed

    Scenario: Checkout items are ordered succesfully
        And User fill out the "first name" field
        And User fill out the "last name" field
        And User fill out the "zip code" field
        And User clicks the "Continue" checkout button
        And User clicks the "Finish" checkout button
        Then Success order msg is displayed

