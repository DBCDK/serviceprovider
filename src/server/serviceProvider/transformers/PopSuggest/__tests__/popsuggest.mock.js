'use strict';

/**
 * @file
 * Mock objects to be used within the PopSuggest.test.js
 * The objects are stringified response parameter in the responseTransform
 * method in the popsuggest.transform.js
 */

/* eslint-disable */

export const harryTitle = {
  "responseHeader": {
    "args": {
      "start": 0,
      "rows": "100",
      "group": "true",
      "group.field": "fedoraPid",
      "group.main": "true",
      "fl": "fedoraPid display.title"
    }
    ,
    "qtime": 190,
    "q": "display.title:harry* and rec.collectionIdentifier:150013-palle",
    "stime": 207,
    "qf": [
      "display.title",
      "rec.collectionIdentifier"
    ],
    "modified_q": "{!boost b=loan.count}display.title:harry* and rec.collectionIdentifier:150013-palle And work.isPrimaryObject:true"
  }
  ,
  "response": {
    "start": 0,
    "numFound": 45,
    "docs": [
      {
        "fedoraPid": "870970-basis:22252852",
        "display.title": [
          "Harry Potter og De Vises Sten"
        ]
      },
      {
        "fedoraPid": "870970-basis:25197879",
        "display.title": [
          "Harry Potter og fangen fra Azkaban"
        ]
      },
      {
        "fedoraPid": "870970-basis:22639862",
        "display.title": [
          "Harry Potter og fangen fra Azkaban"
        ]
      },
      {
        "fedoraPid": "870970-basis:29317003",
        "display.title": [
          "Harry Potter og fangen fra Azkaban"
        ]
      },
      {
        "fedoraPid": "870970-basis:23227932",
        "display.title": [
          "Harry Potter og fangen fra Azkaban"
        ]
      },
      {
        "fedoraPid": "870970-basis:27267912",
        "display.title": [
          "Harry Potter og dødsregalierne"
        ]
      }
    ]
  }
};

export const harryCreator = {
  "responseHeader": {"q": "harry", "args": {"hr": "None", "hl": "None"}, "time": 42},
  "response": {
    "suggestions": [
      {"frequency": 5612, "suggestion": "Harry Nilsson"},
      {"frequency": 3861, "suggestion": "Harry Belafonte"}
    ], "numFound": 589
  },
  "params": {
    "service": "entity-suggest",
    "method": "creator",
    "qs": {"query": "harry"},
    "url": "http://xp-p02.dbc.dk:8015/entity-suggest"
  }
};

export const harrySubject = {
  "responseHeader": {
    "q": "harry",
    "rt_searches": [],
    "args": {"hr": "None", "hl": "None", "rs": 0},
    "time": 2
  },
  "response": {
    "suggestions": [
      {"frequency": 6310, "suggestion": "harry"}, {
      "frequency": 1495, "suggestion": "harry potter"}
    ], "numFound": 32
  },
  "params": {
    "service": "entity-suggest",
    "method": "subject",
    "qs": {"query": "harry"},
    "url": "http://xp-p02.dbc.dk:8015/entity-suggest"
  }
};
