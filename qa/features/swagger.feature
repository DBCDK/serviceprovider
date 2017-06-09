Feature: swagger
  This feature describes the API through a swagger file, it is auto-generated.

  Scenario: Call swagger.json
    When the swagger.json file is downloaded
    Then the result contains "availability"
     And the result contains "order"
