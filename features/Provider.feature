Feature: Provider
  The provider is a central component in the open platform, it routes requests and dispatches to transforms and services.

  Scenario: Call to search returns in an envelope
    When "search" transform is called with "q=hest&timings=true"
    Then the results keys are: ["statusCode", "data", "timings"]

  Scenario: Create a unittest from a request
    When "search" transform is called with "q=hest&createTest=ProviderFeatureHestTest"
    Then "../../src/transformers/__tests__/ProviderFeatureHestTest.js" file can be found and deleted

  Scenario: Call to invalid transform produces error
    When "invalidTransform" transform is called with ""
    Then an error should occur

  Scenario: Call through websockets returns in an envelope
    When "search" transform is called via ws with: {"q": "hest"}
    Then the results keys are: ["statusCode", "data"]

  Scenario: Call through ws with error returns in an envelope
    When "search" transform is called via ws with: {}
    Then the results keys are: ["statusCode", "error"]
