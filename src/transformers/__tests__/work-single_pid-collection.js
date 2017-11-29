/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: work {"pids":["870970-basis:28448716"],"fields":["collection"]}

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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=870970-basis:28448716</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"2"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28448716|870970","@":"ac"},{"$":"9788758808994","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kadavermarch","@":"dc"},{"$":"Kadavermarch","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Dennis J\\u00fcrgensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"J\\u00fcrgensen, Dennis","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 13-16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"splatter","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"zombier","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\"Isslottet\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse","@":"dcterms"}],"audience":[{"$":"fra 13 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"3. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Tellerup.dk","@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"379 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"775100-katalog:28448716"},"primaryObjectIdentifier":{"$":"870970-basis:28448716"},"recordStatus":{"$":"active"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"775100-katalog:28448716"},{"$":"870970-basis:28448716"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:28448716"},"identifier":{"$":"775100-katalog:28448716"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"6"},"time":{"$":"0.170852"},"trackingId":{"$":"os:2017-11-29T11:38:19:369257:7278"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=870970-basis:28448716</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"2"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"8"},"object":[{"record":{"identifier":[{"$":"28448716|870970","@":"ac"},{"$":"9788758808994","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kadavermarch","@":"dc"},{"$":"Kadavermarch","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Dennis J\\u00fcrgensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"J\\u00fcrgensen, Dennis","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 13-16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"splatter","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"zombier","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\"Isslottet\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse","@":"dcterms"}],"audience":[{"$":"fra 13 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"3. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Tellerup.dk","@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"379 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"775100-katalog:28448716"},"primaryObjectIdentifier":{"$":"870970-basis:28448716"},"recordStatus":{"$":"active"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"775100-katalog:28448716"},{"$":"870970-basis:28448716"}]}},{"identifier":{"$":"775100-katalog:24340627"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"775100-katalog:07286406"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:29302049"},"creationDate":{"$":"2012-04-26"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"775100-katalog:24793591"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27502563"},"creationDate":{"$":"2008-11-11"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:09311270"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:09311297"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:28448716"},"identifier":{"$":"775100-katalog:28448716"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:24340627"},"identifier":{"$":"775100-katalog:24340627"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:07286406"},"identifier":{"$":"775100-katalog:07286406"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"online"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:29302049"},"identifier":{"$":"870970-basis:29302049"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Ebog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:24793591"},"identifier":{"$":"775100-katalog:24793591"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (cd)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"online"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:27502563"},"identifier":{"$":"870970-basis:27502563"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (net)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:09311270"},"identifier":{"$":"870970-basis:09311270"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (b\\u00e5nd) (mappe 1)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:09311297"},"identifier":{"$":"870970-basis:09311297"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (b\\u00e5nd) (mappe 2)"},"workType":{"$":"audiobook"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"48"},"time":{"$":"0.397952"},"trackingId":{"$":"os:2017-11-29T11:38:19:370463:11007"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

describe('Automated test: work-single_pid-collection', () => {
  it('expected response. ID:5s8liu, for {"pids":["870970-basis:28448716"],"fields":["collection"]}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'work',
        {pids: ['870970-basis:28448716'], fields: ['collection']},
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              collection: [
                '775100-katalog:28448716',
                '775100-katalog:24340627',
                '775100-katalog:07286406',
                '870970-basis:29302049',
                '775100-katalog:24793591',
                '870970-basis:27502563',
                '870970-basis:09311270',
                '870970-basis:09311297'
              ],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Dennis Jürgensen'],
                  pid: ['775100-katalog:28448716'],
                  language: ['Dansk'],
                  title: ['Kadavermarch'],
                  titleFull: ['Kadavermarch'],
                  type: ['Bog'],
                  workType: ['book']
                },
                {
                  accessType: ['physical'],
                  creator: ['Dennis Jürgensen'],
                  pid: ['775100-katalog:24340627'],
                  language: ['Dansk'],
                  title: ['Kadavermarch'],
                  titleFull: ['Kadavermarch'],
                  type: ['Bog'],
                  workType: ['book']
                },
                {
                  accessType: ['physical'],
                  creator: ['Dennis Jürgensen'],
                  pid: ['775100-katalog:07286406'],
                  language: ['Dansk'],
                  title: ['Kadavermarch'],
                  titleFull: ['Kadavermarch'],
                  type: ['Bog'],
                  workType: ['book']
                },
                {
                  accessType: ['online'],
                  creator: ['Dennis Jürgensen'],
                  pid: ['870970-basis:29302049'],
                  language: ['Dansk'],
                  title: ['Kadavermarch'],
                  titleFull: ['Kadavermarch'],
                  type: ['Ebog'],
                  workType: ['book']
                },
                {
                  accessType: ['physical'],
                  creator: ['Dennis Jürgensen'],
                  pid: ['775100-katalog:24793591'],
                  language: ['Dansk'],
                  title: ['Kadavermarch'],
                  titleFull: ['Kadavermarch'],
                  type: ['Lydbog (cd)'],
                  workType: ['audiobook']
                },
                {
                  accessType: ['online'],
                  creator: ['Dennis Jürgensen'],
                  pid: ['870970-basis:27502563'],
                  language: ['Dansk'],
                  title: ['Kadavermarch'],
                  titleFull: ['Kadavermarch'],
                  type: ['Lydbog (net)'],
                  workType: ['audiobook']
                },
                {
                  accessType: ['physical'],
                  creator: ['Dennis Jürgensen'],
                  pid: ['870970-basis:09311270'],
                  language: ['Dansk'],
                  title: ['Kadavermarch'],
                  titleFull: ['Kadavermarch'],
                  type: ['Lydbog (bånd) (mappe 1)'],
                  workType: ['audiobook']
                },
                {
                  accessType: ['physical'],
                  creator: ['Dennis Jürgensen'],
                  pid: ['870970-basis:09311297'],
                  language: ['Dansk'],
                  title: ['Kadavermarch'],
                  titleFull: ['Kadavermarch'],
                  type: ['Lydbog (bånd) (mappe 2)'],
                  workType: ['audiobook']
                }
              ]
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
                collection: [
                  '775100-katalog:28448716',
                  '775100-katalog:24340627',
                  '775100-katalog:07286406',
                  '870970-basis:29302049',
                  '775100-katalog:24793591',
                  '870970-basis:27502563',
                  '870970-basis:09311270',
                  '870970-basis:09311297'
                ],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Dennis Jürgensen'],
                    pid: ['775100-katalog:28448716'],
                    language: ['Dansk'],
                    title: ['Kadavermarch'],
                    titleFull: ['Kadavermarch'],
                    type: ['Bog'],
                    workType: ['book']
                  },
                  {
                    accessType: ['physical'],
                    creator: ['Dennis Jürgensen'],
                    pid: ['775100-katalog:24340627'],
                    language: ['Dansk'],
                    title: ['Kadavermarch'],
                    titleFull: ['Kadavermarch'],
                    type: ['Bog'],
                    workType: ['book']
                  },
                  {
                    accessType: ['physical'],
                    creator: ['Dennis Jürgensen'],
                    pid: ['775100-katalog:07286406'],
                    language: ['Dansk'],
                    title: ['Kadavermarch'],
                    titleFull: ['Kadavermarch'],
                    type: ['Bog'],
                    workType: ['book']
                  },
                  {
                    accessType: ['online'],
                    creator: ['Dennis Jürgensen'],
                    pid: ['870970-basis:29302049'],
                    language: ['Dansk'],
                    title: ['Kadavermarch'],
                    titleFull: ['Kadavermarch'],
                    type: ['Ebog'],
                    workType: ['book']
                  },
                  {
                    accessType: ['physical'],
                    creator: ['Dennis Jürgensen'],
                    pid: ['775100-katalog:24793591'],
                    language: ['Dansk'],
                    title: ['Kadavermarch'],
                    titleFull: ['Kadavermarch'],
                    type: ['Lydbog (cd)'],
                    workType: ['audiobook']
                  },
                  {
                    accessType: ['online'],
                    creator: ['Dennis Jürgensen'],
                    pid: ['870970-basis:27502563'],
                    language: ['Dansk'],
                    title: ['Kadavermarch'],
                    titleFull: ['Kadavermarch'],
                    type: ['Lydbog (net)'],
                    workType: ['audiobook']
                  },
                  {
                    accessType: ['physical'],
                    creator: ['Dennis Jürgensen'],
                    pid: ['870970-basis:09311270'],
                    language: ['Dansk'],
                    title: ['Kadavermarch'],
                    titleFull: ['Kadavermarch'],
                    type: ['Lydbog (bånd) (mappe 1)'],
                    workType: ['audiobook']
                  },
                  {
                    accessType: ['physical'],
                    creator: ['Dennis Jürgensen'],
                    pid: ['870970-basis:09311297'],
                    language: ['Dansk'],
                    title: ['Kadavermarch'],
                    titleFull: ['Kadavermarch'],
                    type: ['Lydbog (bånd) (mappe 2)'],
                    workType: ['audiobook']
                  }
                ]
              }
            ]
          }
        );
        done();
      });
  });
});
