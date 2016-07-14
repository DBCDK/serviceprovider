Feature: SMAUG authentication and authorization system.
  SMAUG handles authentication and authorization of open platform, this feature tests the integration with SMAUG.

  Scenario: No token provokes error
    When a request is dispatched without a token
    Then an error should occur

  Scenario: More than one token provokes error
    When "work" transform is called with "access_token=work"
    Then an error should occur
