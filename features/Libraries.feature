Feature: Libraries endpoint
  The libraries endpoint let's you look up libraries by agency, branch, or required information.

  Scenario: Calling the endpoint without parameters
    When "libraries" transform is called with ""
    Then the results keys are: ["statusCode", "data"]
    Then compare to results file "emptyLibrariesRequest"

  Scenario: Calling the endpoint with a list of branch ids
    When "libraries" transform is called with "branchIds=%5B%22760706%22%2C%22714703%22%2C%22714702%22%5D"
    Then the results keys are: ["statusCode", "data"]
    Then compare to results file "threeBranchesRequest"

  Scenario: Calling the endpoint with a list of agencies
    When "libraries" transform is called with "agencyIds=%5B%22760700%22%2C%22714700%22%5D"
    Then the results keys are: ["statusCode", "data"]
    Then compare to results file "twoAgenciesRequest"
