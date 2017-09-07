Feature: Searching for cucumbers
  As an internet user
  In order to find out more about cucumbers
  I want to be able to search for information about cucumbers
  

  Scenario Outline: Search For Cucumber.js in <site>
    Given I am on "<site>"
    When I search for "cucumber.js" on "<site>"
    Then I should see some results

  Examples:
    | site       |
    | Google     |
    | Yahoo      |
    | DuckDuckGo |