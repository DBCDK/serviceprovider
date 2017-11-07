Feature: Work endpoint
  The work endpoint delivers details on bibliographic materials

  Scenario: Get a single work from a PID
    When "work" transform is called with form: {"pids": ["870970-basis:28290853"]}
    Then the results keys are: ["statusCode", "data"]
    Then compare to results file "doedsspillet"

  Scenario: Get empty object when invalid PID is supplied
    When "work" transform is called with form: {"pids": ["870970-null:bobby"]}
    Then the results keys are: ["statusCode", "data"]
    Then compare to results file "invalidBobbyPid"

  Scenario: Get work with empty pids array
    When "work" transform is called with form: {"pids": []}
    Then the results keys are: ["statusCode", "error"]
    Then compare to results file "emptyPids"

  Scenario: Get work with invalid PID and valid fields
    When "work" transform is called with form: {"pids":["870970-basis:28448717"],"fields":["title","dcTitle","coverUrlFull","collection"]}
    Then the results keys are: ["statusCode", "data"]
    Then compare to results file "workInvalidPidValidFields"
