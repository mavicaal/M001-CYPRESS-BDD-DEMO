Feature: Users interaction with inventory page
    Background: Navigate to the Website
        Given User navigate to the "SauceDemo Home Page"
        And  "standard_user" user log in

    Scenario: User can sort the products by name alphabeticaly ascending
        When User clicks the "alphabeticaly ascending" option
        Then Products items are ordered "alphabeticaly ascending"

    Scenario: User can sort the products by name alphabeticaly descending
        When User clicks the "alphabeticaly descending" option
        Then Products items are ordered "alphabeticaly descending"

    Scenario: User can sort the products by price ascending
        When User clicks the "price ascending" option
        Then Products items are ordered "price ascending"

    Scenario: User can sort the products by price descending
        When User clicks the "price descending" option
        Then Products items are ordered "price descending"

