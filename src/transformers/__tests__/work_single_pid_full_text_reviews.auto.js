// AUTOTEST GENERATOR: {"endpoint":"work","params":{"fields":["pid","title","fullTextReviews"],"pids":["870976-anmeld:31500346"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = {
  fields: ['pid', 'title', 'fullTextReviews'],
  pids: ['870976-anmeld:31500346']
};

const expected = {
  statusCode: 200,
  data: [
    {
      fedoraPid: ['870976-anmeld:31500346'],
      pid: ['870976-anmeld:31500346'],
      fullTextReviews: [
        {
          reviewer: {firstname: 'Jacob Holm', surname: 'Krogsøe'},
          creationDate: '2017-08-11T00:00:00+02:00',
          review: {
            'Kort om bogen':
              '49-årige David har en stor stilling på en avis. En dag bryder David sammen og må genfinde sig selv i et lille sommerhus. Et hverdagsrealistisk drama om stress og kærlighed, der med fordel kan formidles til mandlige læsere',
            Beskrivelse:
              'David Bramsen er 49 år, han er single, far til en dreng og er aldrig kommet sig over bruddet med sønnens mor. David, der er uddannet journalist, har en fin stilling på avisen Bladet. Til et møde besvimer David. Mange år med alt for meget arbejde og rod i følelseslivet rammer David som en hammer. Han får orlov fra Bladet og lejer et lille sommerhus ved Roskilde Fjord. Her forsøger David at få fodfæste, at finde frem til sig selv. David er bogens jegfortæller',
            Vurdering:
              'David er som hovedperson realistisk og levende. Der er ikke nogen nemme løsninger, men en hård kamp for at genfinde sig selv efter de mange år han har levet i et følelsesmæssigt vakuum. Sproget er enkelt, uden de store armbevægelser, og det passer fint til Davids udvikling, hvor det handler om at stå af ræset og trække vejret dybt ind. Michael Robak bruger sin erfaring fra journalistbranchen til at give den del af romanen en vigtig troværdighed',
            'Andre bøger om samme emne':
              'Novellesamlingen Ikke altid sådan her er spækket med sammenbrud og livskriser. Robak har tidligere skrevet Hele byen ved det der er fyldt med kærlighed og livskriser'
          }
        }
      ]
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    performance: 'http://elk/elasticsearch',
    communityservice: 'http://localhost:4010/v1',
    cicero: 'https://cicero-fbs.com/rest/external/v1/'
  },
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  storage: {user: 'XXXXX'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '710100',
    agency: '710100',
    isil: 'DK-710100'
  },
  app: {
    clientId: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["opensearch",{"qs":{"action":"getObject","identifier":["870976-anmeld:31500346"],"agency":"775100","profile":"opac","outputType":"json","objectFormat":["briefDisplay","docbook"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"article":{"title":{"$":"Lekt\\u00f8rudtalelse","@":"docbook"},"info":{"author":{"personname":{"firstname":{"$":"Jacob Holm","@":"docbook"},"surname":{"$":"Krogs\\u00f8e","@":"docbook"},"@":"docbook"},"@":"docbook"},"@":"docbook"},"section":[{"title":{"$":"Kort om bogen","@":"docbook"},"para":{"$":"49-\\u00e5rige David har en stor stilling p\\u00e5 en avis. En dag bryder David sammen og m\\u00e5 genfinde sig selv i et lille sommerhus. Et hverdagsrealistisk drama om stress og k\\u00e6rlighed, der med fordel kan formidles til mandlige l\\u00e6sere","@":"docbook"},"@":"docbook"},{"title":{"$":"Beskrivelse","@":"docbook"},"para":{"$":"David Bramsen er 49 \\u00e5r, han er single, far til en dreng og er aldrig kommet sig over bruddet med s\\u00f8nnens mor. David, der er uddannet journalist, har en fin stilling p\\u00e5 avisen Bladet. Til et m\\u00f8de besvimer David. Mange \\u00e5r med alt for meget arbejde og rod i f\\u00f8lelseslivet rammer David som en hammer. Han f\\u00e5r orlov fra Bladet og lejer et lille sommerhus ved Roskilde Fjord. Her fors\\u00f8ger David at f\\u00e5 fodf\\u00e6ste, at finde frem til sig selv. David er bogens jegfort\\u00e6ller","@":"docbook"},"@":"docbook"},{"title":{"$":"Vurdering","@":"docbook"},"para":{"$":"David er som hovedperson realistisk og levende. Der er ikke nogen nemme l\\u00f8sninger, men en h\\u00e5rd kamp for at genfinde sig selv efter de mange \\u00e5r han har levet i et f\\u00f8lelsesm\\u00e6ssigt vakuum. Sproget er enkelt, uden de store armbev\\u00e6gelser, og det passer fint til Davids udvikling, hvor det handler om at st\\u00e5 af r\\u00e6set og tr\\u00e6kke vejret dybt ind. Michael Robak bruger sin erfaring fra journalistbranchen til at give den del af romanen en vigtig trov\\u00e6rdighed","@":"docbook"},"@":"docbook"},{"title":{"$":"Andre b\\u00f8ger om samme emne","@":"docbook"},"para":{"$":"Novellesamlingen\\u00a0Ikke altid s\\u00e5dan her\\u00a0er sp\\u00e6kket med sammenbrud og livskriser. Robak har tidligere skrevet\\u00a0Hele byen ved det\\u00a0der er fyldt med k\\u00e6rlighed og livskriser","@":"docbook"},"@":"docbook"}],"@":"docbook"},"identifier":{"$":"870976-anmeld:31500346"},"primaryObjectIdentifier":{"$":"870976-anmeld:31500346"},"recordStatus":{"$":"active"},"creationDate":{"$":"2017-08-11"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"},{"$":"docbook"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"fedoraPid":{"$":"870976-anmeld:31500346"},"identifier":{"$":"870976-anmeld:31500346"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"1"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const provider = Provider();

describe('Automated test: work_single_pid_full_text_reviews.auto', () => {
  it('has same result as recorded (in work_single_pid_full_text_reviews.auto)', () => {
    assert(
      Date.now() < +new Date('2019-06-28'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
