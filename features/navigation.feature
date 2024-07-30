Feature: Navigation to Sales Tab
  Scenario: Accessing the Sales tab from the dashboard
    Given I am logged in and on the dashboard page
    When I click on the "Sales" tab
    Then I should see the sales information
