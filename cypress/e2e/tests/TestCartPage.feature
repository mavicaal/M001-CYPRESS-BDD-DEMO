Feature: Adding inventory items to the cart
    Background: Navigate to the Website
        Given User navigates to the "SauceDemo Home Page"
        And  "standard_user" user log in
        And "Inventory Page" is displayed

    Scenario: Car items are added to the cart
        When User add "sauce-labs-backpack" item to the cart
        And User add "sauce-labs-bike-light" item to the cart
        And User clicks the cart logo
        Then Item "sauce-labs-backpack" is displayed
        And Item "sauce-labs-bike-light" is displayed

# Scenario: Car items are removed from the cart page
#     When User add inventory item to the cart
#     And User clicks the cart item
#     And Item added is displayed
#     And User removes item from "Cart Page"
#     Then Item is no longer visible

# Scenario: Car items are removed from the inventory page
#     When User add inventory item to the cart
#     And User clicks the cart item
#     And Item added is displayed
#     And User clicks on continue shopping option
#     And User removes item from "Inventory Page"
#     And User clicks the cart item
#     Then Item is no longer visible
