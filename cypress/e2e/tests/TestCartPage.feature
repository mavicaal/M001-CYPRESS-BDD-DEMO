Feature: Adding inventory items to the cart
    Background: Navigate to the Website
        Given User navigate to the "SauceDemo Home Page"
        And  "standard_user" user log in
        And "Inventory Page" is displayed

    Scenario: Car items are added to the cart
        When User add inventory item to the cart
        And User clicks the cart item
        Then Item added is displayed

    Scenario: Car items are removed from the cart page
        When User add inventory item to the cart
        And User clicks the cart item
        And Item added is displayed
        And User removes item from "Cart Page"
        Then Item is no longer visible

    Scenario: Car items are removed from the inventory page
        When User add inventory item to the cart
        And User clicks the cart item
        And Item added is displayed
        And User clicks on continue shopping option
        And User removes item from "Inventory Page"
        And User clicks the cart item
        Then Item is no longer visible
