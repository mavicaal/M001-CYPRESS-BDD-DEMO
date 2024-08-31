Feature: Users interaction with inventory page
    Background: Navigate to the Website
        Given User navigates to the "SauceDemo Home Page"
        And  "standard_user" user log in

    Scenario: User can sort the products by name alphabeticaly ascending
        When User clicks the "Alphabetically Ascending" filter option
        Then Products items are ordered by "Alphabetically" "Ascending"

    Scenario: User can sort the products by name alphabeticaly descending
        When User clicks the "Alphabetically Descending" filter option
        Then Products items are ordered by "Alphabetically" "Descending"

    Scenario: User can sort the products by price ascending
        When User clicks the "Price Ascending" filter option
        Then Products items are ordered by "Price" "Ascending"

    Scenario: User can sort the products by price descending
        When User clicks the "Price Descending" filter option
        Then Products items are ordered by "Price" "Descending"

