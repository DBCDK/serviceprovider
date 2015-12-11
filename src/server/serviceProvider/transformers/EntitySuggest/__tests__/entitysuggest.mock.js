'use strict';

/**
 * @file
 * Mock objects to be used within the PopSuggest.test.js
 * The objects are stringified response parameter in the responseTransform
 * method in the popsuggest.transform.js
 */

/* eslint-disable */

export const balEntity = {
  responseHeader : {
    q: 'bal',
    args: {
      lt: 'None',
      gl: null
    },
    time: 1
  },
  response: {
    suggestions: [
      {
        suggestion: {
          'væsensnavn': 'Ballerup Bibliotekerne',
          adresse: 'Hovedbiblioteket Banegårdspladsen 1',
          id: '715100',
          postnr: '2750',
          geolokation: {
            lat: 55.7297418,
            lng: 12.3595981
          },
          navn: 'Ballerup Bibliotek',
          bibliotekstype: 'Folkebibliotek',
          by: 'Ballerup'
        }
      },
      {
        suggestion: {
          'væsensnavn': 'Faaborg-Midtfyn Bibliotekerne',
          adresse: 'Egeballe 4 A',
          id: '743003',
          postnr: '5672',
          geolokation: {
            lat: 55.256033,
            lng: 10.235524
          },
          navn: 'Broby Bibliotek',
          bibliotekstype: 'Folkebibliotek',
          by: 'Broby'
        }
      },
      {
        suggestion: {
          'væsensnavn': 'Ballerup Bibliotekerne',
          adresse: 'Måløv Hovedgade 60',
          id: '715102',
          postnr: '2760',
          geolokation: {
            lat: 55.749694,
            lng: 12.319237
          },
          navn: 'Kulturhus Måløv',
          bibliotekstype: 'Folkebibliotek',
          by: 'Måløv'
        }
      },
      {
        suggestion: {
          'væsensnavn': 'Ballerup Bibliotekerne',
          adresse: 'Bybjergvej 8-10',
          id: '715101',
          postnr: '2740',
          geolokation: {
            lat: 55.718655,
            lng: 12.400783
          },
          navn: 'Skovlunde Kulturhus',
          bibliotekstype: 'Folkebibliotek',
          by: 'Skovlunde'
        }
      }
    ],
    numFound: 4
  },
  "params": {
    "service": "entity-suggest",
    "method": "library",
    "qs": {"query": "bal"},
    "url": "http://xp-p02.dbc.dk:8015/entity-suggest"
  }
};
