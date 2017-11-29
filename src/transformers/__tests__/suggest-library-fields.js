/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: suggest {"q":"herlev","type":"library","limit":3,"fields":["agencyName","postalAddress","branchId","postalCode","geolocation","agencyType","city"]}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.0_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.5/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommendurls: {
      default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
      popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1'
    },
    communityservice: 'http://localhost:4010/v1'
  },
  communityservice: {
    id: 1
  },
  search: {
    agency: '775100',
    profile: 'opac',
    collectionidentifiers:
      'rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog'
  },
  netpunkt: {
    user: 'XXXXX',
    group: 'XXXXX',
    password: 'XXXXX'
  },
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const provider = Provider();
const mockData = {
  '["suggestlibrary",{"qs":{"query":"herlev","lt":"folkebibliotek","n":3}}]':
    '{"responseHeader": {"q": "herlev", "version": "0.2.0", "build": "549", "time": 2, "ab-id": "1", "args": {"lt": "folkebibliotek", "gl": null}, "svn-revision": "106527"}, "response": {"suggestions": [{"suggestion": {"by": "Herlev", "væsensnavn": "Herlev Bibliotek", "adresse": "Biblioteket Kilden\\r\\nDildhaven 40", "navn": "Hjortespring Bibliotek", "postnr": "2730", "kortnavn": "Biblioteket Kilden", "latitude": "", "geolokation": {"lat": 0, "lng": 0}, "bibliotekstype": "Folkebibliotek", "id": "716301"}}, {"suggestion": {"by": "Herlev", "væsensnavn": "Herlev Bibliotek", "adresse": "Herlev Bygade 70", "navn": "Herlev-Bibliotek. Hovedbiblioteket", "postnr": "2730", "kortnavn": "Herlev Bibliotek", "latitude": "55.725455", "geolokation": {"lat": 0, "lng": 0}, "bibliotekstype": "Folkebibliotek", "id": "716300"}}], "numFound": 2}}'
};

describe('Automated test: suggest-library-fields', () => {
  it('expected response. ID:bina8x, for {"q":"herlev","type":"library","limit":3,"fields":["agencyName","postalAddress","branchId","postalCode","geolocation","agencyType","city"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'suggest',
        {
          q: 'herlev',
          type: 'library',
          limit: 3,
          fields: [
            'agencyName',
            'postalAddress',
            'branchId',
            'postalCode',
            'geolocation',
            'agencyType',
            'city'
          ]
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              term: 'Hjortespring Bibliotek',
              agencyName: 'Herlev Bibliotek',
              postalAddress: 'Biblioteket Kilden\r\nDildhaven 40',
              branchId: '716301',
              postalCode: '2730',
              geolocation: {
                longitude: 0,
                latitude: 0
              },
              agencyType: 'Folkebibliotek',
              city: 'Herlev'
            },
            {
              term: 'Herlev-Bibliotek. Hovedbiblioteket',
              agencyName: 'Herlev Bibliotek',
              postalAddress: 'Herlev Bygade 70',
              branchId: '716300',
              postalCode: '2730',
              geolocation: {
                longitude: 0,
                latitude: 0
              },
              agencyType: 'Folkebibliotek',
              city: 'Herlev'
            }
          ]
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 200,
            data: [
              {
                term: 'Hjortespring Bibliotek',
                agencyName: 'Herlev Bibliotek',
                postalAddress: 'Biblioteket Kilden\r\nDildhaven 40',
                branchId: '716301',
                postalCode: '2730',
                geolocation: {
                  longitude: 0,
                  latitude: 0
                },
                agencyType: 'Folkebibliotek',
                city: 'Herlev'
              },
              {
                term: 'Herlev-Bibliotek. Hovedbiblioteket',
                agencyName: 'Herlev Bibliotek',
                postalAddress: 'Herlev Bygade 70',
                branchId: '716300',
                postalCode: '2730',
                geolocation: {
                  longitude: 0,
                  latitude: 0
                },
                agencyType: 'Folkebibliotek',
                city: 'Herlev'
              }
            ]
          }
        );
        done();
      });
  });
});
