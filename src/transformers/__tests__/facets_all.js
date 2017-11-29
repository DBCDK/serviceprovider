/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: facets {"q":"ost","fields":["access","acSource","audience","audienceCategory","branch","category","creator","creatorFunction","date","department","dk5","extraTitles","fictionSubject","form","gamePlatform","genre","genreCategory","geographic","language","level","let","literaryForm","lix","musicSubject","nationality","nonFictionSubject","partOf","period","primaryCreator","sheetMusic","subject","titleSeries","type"],"limit":2}

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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\"\\n    xmlns:open=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>ost</open:query>\\n      <open:agency>775100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>2</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.access</open:facetName>\\n        <open:facetName>facet.acSource</open:facetName>\\n        <open:facetName>facet.audience</open:facetName>\\n        <open:facetName>facet.audienceCategory</open:facetName>\\n        <open:facetName>facet.branch</open:facetName>\\n        <open:facetName>facet.category</open:facetName>\\n        <open:facetName>facet.creator</open:facetName>\\n        <open:facetName>facet.creatorFunction</open:facetName>\\n        <open:facetName>facet.date</open:facetName>\\n        <open:facetName>facet.department</open:facetName>\\n        <open:facetName>facet.dk5</open:facetName>\\n        <open:facetName>facet.extraTitles</open:facetName>\\n        <open:facetName>facet.fictionSubject</open:facetName>\\n        <open:facetName>facet.form</open:facetName>\\n        <open:facetName>facet.gamePlatform</open:facetName>\\n        <open:facetName>facet.genre</open:facetName>\\n        <open:facetName>facet.genreCategory</open:facetName>\\n        <open:facetName>facet.geographic</open:facetName>\\n        <open:facetName>facet.language</open:facetName>\\n        <open:facetName>facet.level</open:facetName>\\n        <open:facetName>facet.let</open:facetName>\\n        <open:facetName>facet.literaryForm</open:facetName>\\n        <open:facetName>facet.lix</open:facetName>\\n        <open:facetName>facet.musicSubject</open:facetName>\\n        <open:facetName>facet.nationality</open:facetName>\\n        <open:facetName>facet.nonFictionSubject</open:facetName>\\n        <open:facetName>facet.partOf</open:facetName>\\n        <open:facetName>facet.period</open:facetName>\\n        <open:facetName>facet.primaryCreator</open:facetName>\\n        <open:facetName>facet.sheetMusic</open:facetName>\\n        <open:facetName>facet.subject</open:facetName>\\n        <open:facetName>facet.titleSeries</open:facetName>\\n        <open:facetName>facet.type</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1269"},"collectionCount":{"$":"0"},"more":{"$":"true"},"facetResult":{"facet":[{"facetName":{"$":"facet.access"},"facetTerm":[{"frequence":{"$":"91"},"term":{"$":"begr\\u00e6nset adgang"}},{"frequence":{"$":"19"},"term":{"$":"ubegr\\u00e6nset adgang"}}]},{"facetName":{"$":"facet.acSource"},"facetTerm":[{"frequence":{"$":"673"},"term":{"$":"bibliotekskatalog"}},{"frequence":{"$":"451"},"term":{"$":"tidsskriftsartikler"}}]},{"facetName":{"$":"facet.audience"},"facetTerm":[{"frequence":{"$":"25"},"term":{"$":"fra 7 \\u00e5r"}},{"frequence":{"$":"21"},"term":{"$":"fra 5 \\u00e5r"}}]},{"facetName":{"$":"facet.audienceCategory"},"facetTerm":[{"frequence":{"$":"55"},"term":{"$":"for 7 \\u00e5r"}},{"frequence":{"$":"46"},"term":{"$":"for 8 \\u00e5r"}}]},{"facetName":{"$":"facet.branch"},"facetTerm":[{"frequence":{"$":"90"},"term":{"$":"hb"}},{"frequence":{"$":"46"},"term":{"$":"ris"}}]},{"facetName":{"$":"facet.category"},"facetTerm":[{"frequence":{"$":"1050"},"term":{"$":"voksenmaterialer"}},{"frequence":{"$":"226"},"term":{"$":"b\\u00f8rnematerialer"}}]},{"facetName":{"$":"facet.creator"},"facetTerm":[{"frequence":{"$":"76"},"term":{"$":"robert hansen"}},{"frequence":{"$":"41"},"term":{"$":"hanne hastrup"}}]},{"facetName":{"$":"facet.creatorFunction"},"facetTerm":[{"frequence":{"$":"76"},"term":{"$":"robert hansen"}},{"frequence":{"$":"39"},"term":{"$":"hanne hastrup"}}]},{"facetName":{"$":"facet.date"},"facetTerm":[{"frequence":{"$":"49"},"term":{"$":"2000"}},{"frequence":{"$":"46"},"term":{"$":"2015"}}]},{"facetName":{"$":"facet.department"}},{"facetName":{"$":"facet.dk5"},"facetTerm":[{"frequence":{"$":"522"},"term":{"$":"63.7"}},{"frequence":{"$":"159"},"term":{"$":"sk\\u00f8nlitteratur"}}]},{"facetName":{"$":"facet.extraTitles"},"facetTerm":[{"frequence":{"$":"2"},"term":{"$":"ekstra titler"}}]},{"facetName":{"$":"facet.fictionSubject"},"facetTerm":[{"frequence":{"$":"44"},"term":{"$":"mus"}},{"frequence":{"$":"21"},"term":{"$":"sjove b\\u00f8ger"}}]},{"facetName":{"$":"facet.form"},"facetTerm":[{"frequence":{"$":"87"},"term":{"$":"opskrifter"}},{"frequence":{"$":"80"},"term":{"$":"kogeb\\u00f8ger"}}]},{"facetName":{"$":"facet.gamePlatform"},"facetTerm":[{"frequence":{"$":"1"},"term":{"$":"pc-spil"}}]},{"facetName":{"$":"facet.genre"},"facetTerm":[{"frequence":{"$":"19"},"term":{"$":"sjove b\\u00f8ger"}},{"frequence":{"$":"18"},"term":{"$":"b\\u00f8rnefilm"}}]},{"facetName":{"$":"facet.genreCategory"},"facetTerm":[{"frequence":{"$":"944"},"term":{"$":"nonfiktion"}},{"frequence":{"$":"192"},"term":{"$":"fiktion"}}]},{"facetName":{"$":"facet.geographic"},"facetTerm":[{"frequence":{"$":"82"},"term":{"$":"danmark"}},{"frequence":{"$":"22"},"term":{"$":"frankrig"}}]},{"facetName":{"$":"facet.language"},"facetTerm":[{"frequence":{"$":"954"},"term":{"$":"dansk"}},{"frequence":{"$":"128"},"term":{"$":"blandede sprog"}}]},{"facetName":{"$":"facet.level"},"facetTerm":[{"frequence":{"$":"105"},"term":{"$":"alment niveau"}},{"frequence":{"$":"12"},"term":{"$":"folkeskoleniveau"}}]},{"facetName":{"$":"facet.let"},"facetTerm":[{"frequence":{"$":"8"},"term":{"$":"16"}},{"frequence":{"$":"4"},"term":{"$":"14"}}]},{"facetName":{"$":"facet.literaryForm"},"facetTerm":[{"frequence":{"$":"944"},"term":{"$":"faglitteratur"}},{"frequence":{"$":"192"},"term":{"$":"sk\\u00f8nlitteratur"}}]},{"facetName":{"$":"facet.lix"},"facetTerm":[{"frequence":{"$":"7"},"term":{"$":"07"}},{"frequence":{"$":"4"},"term":{"$":"15"}}]},{"facetName":{"$":"facet.musicSubject"},"facetTerm":[{"frequence":{"$":"59"},"term":{"$":"vokal"}},{"frequence":{"$":"25"},"term":{"$":"b\\u00f8rnemusik"}}]},{"facetName":{"$":"facet.nationality"},"facetTerm":[{"frequence":{"$":"6"},"term":{"$":"amerikanske film"}},{"frequence":{"$":"5"},"term":{"$":"danske film"}}]},{"facetName":{"$":"facet.nonFictionSubject"},"facetTerm":[{"frequence":{"$":"279"},"term":{"$":"ost"}},{"frequence":{"$":"71"},"term":{"$":"mejeribrug"}}]},{"facetName":{"$":"facet.partOf"},"facetTerm":[{"frequence":{"$":"189"},"term":{"$":"m\\u00e6lkeritidende"}},{"frequence":{"$":"55"},"term":{"$":"nordeurop\\u00e6isk mejeri-tidsskrift"}}]},{"facetName":{"$":"facet.period"},"facetTerm":[{"frequence":{"$":"39"},"term":{"$":"1990-1999"}},{"frequence":{"$":"38"},"term":{"$":"2000-2009"}}]},{"facetName":{"$":"facet.primaryCreator"},"facetTerm":[{"frequence":{"$":"76"},"term":{"$":"robert hansen"}},{"frequence":{"$":"29"},"term":{"$":"j. m. buch kristensen"}}]},{"facetName":{"$":"facet.sheetMusic"},"facetTerm":[{"frequence":{"$":"10"},"term":{"$":"alle partiturer"}}]},{"facetName":{"$":"facet.subject"},"facetTerm":[{"frequence":{"$":"541"},"term":{"$":"ost"}},{"frequence":{"$":"97"},"term":{"$":"danmark"}}]},{"facetName":{"$":"facet.titleSeries"},"facetTerm":[{"frequence":{"$":"6"},"term":{"$":"mini zoom. mellem"}},{"frequence":{"$":"5"},"term":{"$":"dansk sang b-serien"}}]},{"facetName":{"$":"facet.type"},"facetTerm":[{"frequence":{"$":"450"},"term":{"$":"tidsskriftsartikel"}},{"frequence":{"$":"395"},"term":{"$":"bog"}}]}]},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.273"},"trackingId":{"$":"os:2017-11-29T11:38:06:396525:7513"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

describe('Automated test: facets_all', () => {
  it('expected response. ID:1fq59u, for {"q":"ost","fields":["access","acSource","audience","audienceCategory","branch","category","creator","creatorFunction","date","department","dk5","extraTitles","fictionSubject","form","gamePlatform","genre","genreCategory","geographic","language","level","let","literaryForm","lix","musicSubject","nationality","nonFictionSubject","partOf","period","primaryCreator","sheetMusic","subject","titleSeries","type"],"limit":2}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'facets',
        {
          q: 'ost',
          fields: [
            'access',
            'acSource',
            'audience',
            'audienceCategory',
            'branch',
            'category',
            'creator',
            'creatorFunction',
            'date',
            'department',
            'dk5',
            'extraTitles',
            'fictionSubject',
            'form',
            'gamePlatform',
            'genre',
            'genreCategory',
            'geographic',
            'language',
            'level',
            'let',
            'literaryForm',
            'lix',
            'musicSubject',
            'nationality',
            'nonFictionSubject',
            'partOf',
            'period',
            'primaryCreator',
            'sheetMusic',
            'subject',
            'titleSeries',
            'type'
          ],
          limit: 2
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: {
            access: [
              {
                term: 'begrænset adgang',
                frequency: 91
              },
              {
                term: 'ubegrænset adgang',
                frequency: 19
              }
            ],
            acSource: [
              {
                term: 'bibliotekskatalog',
                frequency: 673
              },
              {
                term: 'tidsskriftsartikler',
                frequency: 451
              }
            ],
            audience: [
              {
                term: 'fra 7 år',
                frequency: 25
              },
              {
                term: 'fra 5 år',
                frequency: 21
              }
            ],
            audienceCategory: [
              {
                term: 'for 7 år',
                frequency: 55
              },
              {
                term: 'for 8 år',
                frequency: 46
              }
            ],
            branch: [
              {
                term: 'hb',
                frequency: 90
              },
              {
                term: 'ris',
                frequency: 46
              }
            ],
            category: [
              {
                term: 'voksenmaterialer',
                frequency: 1050
              },
              {
                term: 'børnematerialer',
                frequency: 226
              }
            ],
            creator: [
              {
                term: 'robert hansen',
                frequency: 76
              },
              {
                term: 'hanne hastrup',
                frequency: 41
              }
            ],
            creatorFunction: [
              {
                term: 'robert hansen',
                frequency: 76
              },
              {
                term: 'hanne hastrup',
                frequency: 39
              }
            ],
            date: [
              {
                term: '2000',
                frequency: 49
              },
              {
                term: '2015',
                frequency: 46
              }
            ],
            dk5: [
              {
                term: '63.7',
                frequency: 522
              },
              {
                term: 'skønlitteratur',
                frequency: 159
              }
            ],
            extraTitles: [
              {
                term: 'ekstra titler',
                frequency: 2
              }
            ],
            fictionSubject: [
              {
                term: 'mus',
                frequency: 44
              },
              {
                term: 'sjove bøger',
                frequency: 21
              }
            ],
            form: [
              {
                term: 'opskrifter',
                frequency: 87
              },
              {
                term: 'kogebøger',
                frequency: 80
              }
            ],
            gamePlatform: [
              {
                term: 'pc-spil',
                frequency: 1
              }
            ],
            genre: [
              {
                term: 'sjove bøger',
                frequency: 19
              },
              {
                term: 'børnefilm',
                frequency: 18
              }
            ],
            genreCategory: [
              {
                term: 'nonfiktion',
                frequency: 944
              },
              {
                term: 'fiktion',
                frequency: 192
              }
            ],
            geographic: [
              {
                term: 'danmark',
                frequency: 82
              },
              {
                term: 'frankrig',
                frequency: 22
              }
            ],
            language: [
              {
                term: 'dansk',
                frequency: 954
              },
              {
                term: 'blandede sprog',
                frequency: 128
              }
            ],
            level: [
              {
                term: 'alment niveau',
                frequency: 105
              },
              {
                term: 'folkeskoleniveau',
                frequency: 12
              }
            ],
            let: [
              {
                term: '16',
                frequency: 8
              },
              {
                term: '14',
                frequency: 4
              }
            ],
            literaryForm: [
              {
                term: 'faglitteratur',
                frequency: 944
              },
              {
                term: 'skønlitteratur',
                frequency: 192
              }
            ],
            lix: [
              {
                term: '07',
                frequency: 7
              },
              {
                term: '15',
                frequency: 4
              }
            ],
            musicSubject: [
              {
                term: 'vokal',
                frequency: 59
              },
              {
                term: 'børnemusik',
                frequency: 25
              }
            ],
            nationality: [
              {
                term: 'amerikanske film',
                frequency: 6
              },
              {
                term: 'danske film',
                frequency: 5
              }
            ],
            nonFictionSubject: [
              {
                term: 'ost',
                frequency: 279
              },
              {
                term: 'mejeribrug',
                frequency: 71
              }
            ],
            partOf: [
              {
                term: 'mælkeritidende',
                frequency: 189
              },
              {
                term: 'nordeuropæisk mejeri-tidsskrift',
                frequency: 55
              }
            ],
            period: [
              {
                term: '1990-1999',
                frequency: 39
              },
              {
                term: '2000-2009',
                frequency: 38
              }
            ],
            primaryCreator: [
              {
                term: 'robert hansen',
                frequency: 76
              },
              {
                term: 'j. m. buch kristensen',
                frequency: 29
              }
            ],
            sheetMusic: [
              {
                term: 'alle partiturer',
                frequency: 10
              }
            ],
            subject: [
              {
                term: 'ost',
                frequency: 541
              },
              {
                term: 'danmark',
                frequency: 97
              }
            ],
            titleSeries: [
              {
                term: 'mini zoom. mellem',
                frequency: 6
              },
              {
                term: 'dansk sang b-serien',
                frequency: 5
              }
            ],
            type: [
              {
                term: 'tidsskriftsartikel',
                frequency: 450
              },
              {
                term: 'bog',
                frequency: 395
              }
            ]
          }
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 200,
            data: {
              access: [
                {
                  term: 'begrænset adgang',
                  frequency: 91
                },
                {
                  term: 'ubegrænset adgang',
                  frequency: 19
                }
              ],
              acSource: [
                {
                  term: 'bibliotekskatalog',
                  frequency: 673
                },
                {
                  term: 'tidsskriftsartikler',
                  frequency: 451
                }
              ],
              audience: [
                {
                  term: 'fra 7 år',
                  frequency: 25
                },
                {
                  term: 'fra 5 år',
                  frequency: 21
                }
              ],
              audienceCategory: [
                {
                  term: 'for 7 år',
                  frequency: 55
                },
                {
                  term: 'for 8 år',
                  frequency: 46
                }
              ],
              branch: [
                {
                  term: 'hb',
                  frequency: 90
                },
                {
                  term: 'ris',
                  frequency: 46
                }
              ],
              category: [
                {
                  term: 'voksenmaterialer',
                  frequency: 1050
                },
                {
                  term: 'børnematerialer',
                  frequency: 226
                }
              ],
              creator: [
                {
                  term: 'robert hansen',
                  frequency: 76
                },
                {
                  term: 'hanne hastrup',
                  frequency: 41
                }
              ],
              creatorFunction: [
                {
                  term: 'robert hansen',
                  frequency: 76
                },
                {
                  term: 'hanne hastrup',
                  frequency: 39
                }
              ],
              date: [
                {
                  term: '2000',
                  frequency: 49
                },
                {
                  term: '2015',
                  frequency: 46
                }
              ],
              dk5: [
                {
                  term: '63.7',
                  frequency: 522
                },
                {
                  term: 'skønlitteratur',
                  frequency: 159
                }
              ],
              extraTitles: [
                {
                  term: 'ekstra titler',
                  frequency: 2
                }
              ],
              fictionSubject: [
                {
                  term: 'mus',
                  frequency: 44
                },
                {
                  term: 'sjove bøger',
                  frequency: 21
                }
              ],
              form: [
                {
                  term: 'opskrifter',
                  frequency: 87
                },
                {
                  term: 'kogebøger',
                  frequency: 80
                }
              ],
              gamePlatform: [
                {
                  term: 'pc-spil',
                  frequency: 1
                }
              ],
              genre: [
                {
                  term: 'sjove bøger',
                  frequency: 19
                },
                {
                  term: 'børnefilm',
                  frequency: 18
                }
              ],
              genreCategory: [
                {
                  term: 'nonfiktion',
                  frequency: 944
                },
                {
                  term: 'fiktion',
                  frequency: 192
                }
              ],
              geographic: [
                {
                  term: 'danmark',
                  frequency: 82
                },
                {
                  term: 'frankrig',
                  frequency: 22
                }
              ],
              language: [
                {
                  term: 'dansk',
                  frequency: 954
                },
                {
                  term: 'blandede sprog',
                  frequency: 128
                }
              ],
              level: [
                {
                  term: 'alment niveau',
                  frequency: 105
                },
                {
                  term: 'folkeskoleniveau',
                  frequency: 12
                }
              ],
              let: [
                {
                  term: '16',
                  frequency: 8
                },
                {
                  term: '14',
                  frequency: 4
                }
              ],
              literaryForm: [
                {
                  term: 'faglitteratur',
                  frequency: 944
                },
                {
                  term: 'skønlitteratur',
                  frequency: 192
                }
              ],
              lix: [
                {
                  term: '07',
                  frequency: 7
                },
                {
                  term: '15',
                  frequency: 4
                }
              ],
              musicSubject: [
                {
                  term: 'vokal',
                  frequency: 59
                },
                {
                  term: 'børnemusik',
                  frequency: 25
                }
              ],
              nationality: [
                {
                  term: 'amerikanske film',
                  frequency: 6
                },
                {
                  term: 'danske film',
                  frequency: 5
                }
              ],
              nonFictionSubject: [
                {
                  term: 'ost',
                  frequency: 279
                },
                {
                  term: 'mejeribrug',
                  frequency: 71
                }
              ],
              partOf: [
                {
                  term: 'mælkeritidende',
                  frequency: 189
                },
                {
                  term: 'nordeuropæisk mejeri-tidsskrift',
                  frequency: 55
                }
              ],
              period: [
                {
                  term: '1990-1999',
                  frequency: 39
                },
                {
                  term: '2000-2009',
                  frequency: 38
                }
              ],
              primaryCreator: [
                {
                  term: 'robert hansen',
                  frequency: 76
                },
                {
                  term: 'j. m. buch kristensen',
                  frequency: 29
                }
              ],
              sheetMusic: [
                {
                  term: 'alle partiturer',
                  frequency: 10
                }
              ],
              subject: [
                {
                  term: 'ost',
                  frequency: 541
                },
                {
                  term: 'danmark',
                  frequency: 97
                }
              ],
              titleSeries: [
                {
                  term: 'mini zoom. mellem',
                  frequency: 6
                },
                {
                  term: 'dansk sang b-serien',
                  frequency: 5
                }
              ],
              type: [
                {
                  term: 'tidsskriftsartikel',
                  frequency: 450
                },
                {
                  term: 'bog',
                  frequency: 395
                }
              ]
            }
          }
        );
        done();
      });
  });
});
