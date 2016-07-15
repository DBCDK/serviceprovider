Feature: Recommend
  This feature describes the recommend endpoint which provides recommendations based on likes and pids

  Scenario: Request recommendations without parameters
    When "recommend" transform is called with form: {}
    Then the results keys are: ["statusCode", "data"]
    Then compare to results file "emptyRecommendRequest"

  Scenario: Request recommendations from recommender that doesn't exist
    When "recommend" transform is called with form: {"recommender": "horseRecommender"}
    Then the results keys are: ["statusCode", "error"]
    Then compare to results file "nonExistingRecommenderRequest"
    