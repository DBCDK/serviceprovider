'use strict';

/*
 * Mock for work.test.js
 */

const forceMajureMockWork = {
  general: {
    title: 'Force majeure',
    creators: [{
      value: 'Sarah Townsend',
      search_link: '/search?phrase.creator=Sarah%20Townsend'
    }],
    actors: [{
      value: 'Eddie Izzard',
      search_link: '/search?phrase.creator=Eddie%20Izzard'
    }],
    description: [
      'Live-optagelse',
      'Produktion: Ella Communications (Storbritannieb), 2013',
      'Af indholdet: 6 deleted scenes ; The news from yesterday with Eddie Izzard ; Trivia track ; Bleep track'
    ],
    subjects: [{
      value: 'satire',
      search_link: '/search?phrase.subject=satire'
    }, {
      value: 'stand-up',
      search_link: '/search?phrase.subject=stand-up'
    }],
    dk5s: [{
      value: [
        '77.56'
      ],
      search_link: '/search?dkcclterm.dk=77.56',
      text: [
        'Revykunst'
      ]
    }],
    audience: {
      age: [],
      pegi: [],
      medieraad: [
        'Mærkning: Tilladt for alle'
      ]
    },
    languages: [
      'Engelsk'
    ]
  },
  specific: [{
    type: 'Dvd',
    accessType: 'physical',
    title: 'Force majeure',
    creator: 'Sarah Townsend',
    identifiers: [
      '870970-basis:50822311'
    ],
    dates: [
      '2013'
    ],
    order: '/order?ids=870970-basis:50822311&creator=Sarah%20Townsend&title=Force%20majeure&type=Dvd'
  }],
  publications: [{
    identifier: '870970-basis:50822311',
    types: [
      'Dvd'
    ],
    dates: [
      '2013'
    ],
    publishers: [
      'Universal Sony Pictures Home Entertainment Nordic'
    ],
    extents: [
      '86 min.'
    ],
    isbns: [],
    links: []
  }]
};

export default forceMajureMockWork;
