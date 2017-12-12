// AUTOTEST GENERATOR: {"endpoint":"work","params":{"fields":["title","dcTitle","coverUrlFull","collection"],"pids":["775100-katalog:42946400","870970-basis:28448716"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = {
  fields: ['title', 'dcTitle', 'coverUrlFull', 'collection'],
  pids: ['775100-katalog:42946400', '870970-basis:28448716']
};

const expected = {
  statusCode: 200,
  data: [
    {
      acIdentifier: ['42946400|870970'],
      identifierISBN: ['0-596-00048-0'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['JavaScript'],
      dcTitleFull: ['JavaScript : the definitive guide'],
      creatorAut: ['David Flanagan'],
      creatorSort: ['Flanagan, David'],
      subjectDK5: ['19.6532 JavaScript'],
      subjectDK5Text: ['Enkelte programmeringssprog'],
      subjectDBCF: [
        'JavaScript',
        'programmering',
        'programmeringssprog',
        'websider'
      ],
      description: [
        'På omslaget: Activate your web pages',
        'På ryggen: Covers JavaScript 1.5'
      ],
      audience: ['voksenmaterialer'],
      version: ['4. edition'],
      publisher: ["O'Reilly"],
      date: ['2002'],
      typeBibDKType: ['Bog'],
      extent: ['xvii, 916 sider'],
      languageISO6392: ['eng'],
      dcLanguage: ['Engelsk'],
      accessType: ['physical'],
      creator: ['David Flanagan'],
      fedoraPid: ['870970-basis:42946400'],
      pid: ['775100-katalog:42946400'],
      language: ['Engelsk'],
      title: ['JavaScript'],
      titleFull: ['JavaScript : the definitive guide'],
      type: ['Bog'],
      workType: ['book'],
      collection: [
        '870970-basis:45123057',
        '870970-basis:44088622',
        '775100-katalog:42946400',
        '870970-basis:41771283'
      ],
      collectionDetails: [
        {
          accessType: ['physical'],
          creator: ['David Flanagan'],
          pid: ['870970-basis:45123057'],
          language: ['Engelsk'],
          title: ['JavaScript'],
          titleFull: ['JavaScript : the definitive guide'],
          type: ['Bog'],
          workType: ['book']
        },
        {
          accessType: ['physical'],
          creator: ['David Flanagan'],
          pid: ['870970-basis:44088622'],
          language: ['Engelsk'],
          title: ['JavaScript'],
          titleFull: ['JavaScript : the definitive guide'],
          type: ['Bog'],
          workType: ['book']
        },
        {
          accessType: ['physical'],
          creator: ['David Flanagan'],
          pid: ['775100-katalog:42946400'],
          language: ['Engelsk'],
          title: ['JavaScript'],
          titleFull: ['JavaScript : the definitive guide'],
          type: ['Bog'],
          workType: ['book']
        },
        {
          accessType: ['physical'],
          creator: ['David Flanagan'],
          pid: ['870970-basis:41771283'],
          language: ['Engelsk'],
          title: ['JavaScript'],
          titleFull: ['JavaScript : the definitive guide'],
          type: ['Bog'],
          workType: ['book']
        }
      ]
    },
    {
      coverUrl117: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=f4031d1ea1813793f3d8'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=992cbcf2f42abd14694a'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=1684766a4dee48712036'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=1ea4836dcc75c4fc1a91'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=09901f4e2848128eb5e0'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.10/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=4368a7c87a51024d872c'
      ],
      acIdentifier: ['28448716|870970'],
      identifierISBN: ['9788758808994'],
      acSource: ['Bibliotekskatalog'],
      dcTitle: ['Kadavermarch'],
      dcTitleFull: ['Kadavermarch'],
      creatorAut: ['Dennis Jürgensen'],
      creatorSort: ['Jürgensen, Dennis'],
      subjectDK5Text: ['Skønlitteratur'],
      subjectDBCN: ['for 13 år', 'for 14 år', 'for 15 år', 'for 16 år'],
      subjectDBCS: ['gys', 'splatter', 'zombier'],
      subjectGenre: ['gys'],
      subjectDK5: ['sk'],
      abstract: [
        'Rundt om på jorden genopstår de døde som kødædende zombier pga. gensplejsnings-eksperimenter. Bagmændene - en lille gruppe internationale velhavere - har forskanset sig på "Isslottet" i det nordvestlige Sjælland. Da fattigrøvene opdager det, starter en blodig kamp for overlevelse'
      ],
      audienceAge: ['fra 13 år'],
      audience: ['børnematerialer'],
      version: ['3. udgave, 1. oplag (2010)'],
      publisher: ['Tellerup.dk'],
      date: ['2010'],
      typeBibDKType: ['Bog'],
      extent: ['379 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      accessType: ['physical'],
      creator: ['Dennis Jürgensen'],
      fedoraPid: ['870970-basis:28448716'],
      pid: ['870970-basis:28448716'],
      language: ['Dansk'],
      title: ['Kadavermarch'],
      titleFull: ['Kadavermarch'],
      type: ['Bog'],
      workType: ['book'],
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
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.10/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.8/',
    openorder: 'https://openorder.addi.dk/test_2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.0_4.5/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
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
  communityservice: {id: 1},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
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
  '["opensearch",{"qs":{"action":"getObject","identifier":["775100-katalog:42946400","870970-basis:28448716"],"agency":"775100","profile":"opac","outputType":"json","objectFormat":["briefDisplay","dkabm"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"2"},"collectionCount":{"$":"2"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"42946400|870970","@":"ac"},{"$":"0-596-00048-0","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"JavaScript","@":"dc"},{"$":"JavaScript : the definitive guide","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"David Flanagan","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Flanagan, David","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"19.6532 JavaScript","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Enkelte programmeringssprog","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"JavaScript","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"programmering","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"programmeringssprog","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"websider","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"description":[{"$":"P\\u00e5 omslaget: Activate your web pages","@":"dc"},{"$":"P\\u00e5 ryggen: Covers JavaScript 1.5","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"4. edition","@":"dkdcplus"}],"publisher":[{"$":"O\'Reilly","@":"dc"}],"date":[{"$":"2002","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"xvii, 916 sider","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"775100-katalog:42946400"},"primaryObjectIdentifier":{"$":"870970-basis:42946400"},"recordStatus":{"$":"active"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"775100-katalog:42946400"},{"$":"870970-basis:42946400"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"David Flanagan"},"fedoraPid":{"$":"870970-basis:42946400"},"identifier":{"$":"775100-katalog:42946400"},"language":{"$":"Engelsk"},"title":{"$":"JavaScript"},"titleFull":{"$":"JavaScript : the definitive guide"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28448716|870970","@":"ac"},{"$":"9788758808994","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kadavermarch","@":"dc"},{"$":"Kadavermarch","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Dennis J\\u00fcrgensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"J\\u00fcrgensen, Dennis","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 13 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 14 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 15 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"splatter","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"zombier","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\"Isslottet\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse","@":"dcterms"}],"audience":[{"$":"fra 13 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"3. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Tellerup.dk","@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"379 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28448716"},"primaryObjectIdentifier":{"$":"870970-basis:28448716"},"recordStatus":{"$":"active"},"creationDate":{"$":"2010-09-28"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"775100-katalog:28448716"},{"$":"870970-basis:28448716"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:28448716"},"identifier":{"$":"870970-basis:28448716"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"12"},"time":{"$":"0.139241"},"trackingId":{"$":"os:2017-12-12T15:17:25:337638:5795"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=775100-katalog:42946400</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"42946400|870970","@":"ac"},{"$":"0-596-00048-0","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"JavaScript","@":"dc"},{"$":"JavaScript : the definitive guide","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"David Flanagan","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Flanagan, David","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"19.6532 JavaScript","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Enkelte programmeringssprog","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"JavaScript","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"programmering","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"programmeringssprog","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"websider","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"description":[{"$":"P\\u00e5 omslaget: Activate your web pages","@":"dc"},{"$":"P\\u00e5 ryggen: Covers JavaScript 1.5","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"4. edition","@":"dkdcplus"}],"publisher":[{"$":"O\'Reilly","@":"dc"}],"date":[{"$":"2002","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"xvii, 916 sider","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"775100-katalog:42946400"},"primaryObjectIdentifier":{"$":"870970-basis:42946400"},"recordStatus":{"$":"active"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"775100-katalog:42946400"},{"$":"870970-basis:42946400"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"David Flanagan"},"fedoraPid":{"$":"870970-basis:42946400"},"identifier":{"$":"775100-katalog:42946400"},"language":{"$":"Engelsk"},"title":{"$":"JavaScript"},"titleFull":{"$":"JavaScript : the definitive guide"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"6"},"time":{"$":"0.157315"},"trackingId":{"$":"os:2017-12-12T15:17:25:332411:13902"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["moreinfo",{"qs":{"action":"moreInfo","authenticationUser":"XXXXX","authenticationGroup":"XXXXX","authenticationPassword":"XXXXX","pidList":"775100-katalog:42946400|870970-basis:28448716","outputType":"json"}}]':
    '{"moreInfoResponse":{"requestStatus":{"statusEnum":{"$":"ok","@":"mi"},"errorText":{"$":"","@":"mi"},"@":"mi"},"identifierInformation":[{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"775100-katalog:42946400","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:28448716","@":"mi"},"@":"mi"},"backImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=a9412dac16f2bfdb2b72","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=86ab4a41eadbeaec0551","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=cee99710e28aaeb824f4","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=66eaaf6aca283aebb3c2","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=be090aceef6b3b639a45","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=926814c4b339273f95d7","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"backPage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=3549b3d63b4585bef1b4","@":"mi"}],"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=f4031d1ea1813793f3d8","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=992cbcf2f42abd14694a","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=1684766a4dee48712036","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=1ea4836dcc75c4fc1a91","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=09901f4e2848128eb5e0","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.10\\/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=4368a7c87a51024d872c","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"}],"@":"mi"},"@namespaces":{"mi":"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo"}}\n',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=870970-basis:28448716</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"2"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28448716|870970","@":"ac"},{"$":"9788758808994","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kadavermarch","@":"dc"},{"$":"Kadavermarch","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Dennis J\\u00fcrgensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"J\\u00fcrgensen, Dennis","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 13-16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"splatter","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"zombier","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\"Isslottet\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse","@":"dcterms"}],"audience":[{"$":"fra 13 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"3. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Tellerup.dk","@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"379 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"775100-katalog:28448716"},"primaryObjectIdentifier":{"$":"870970-basis:28448716"},"recordStatus":{"$":"active"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"775100-katalog:28448716"},{"$":"870970-basis:28448716"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:28448716"},"identifier":{"$":"775100-katalog:28448716"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"6"},"time":{"$":"0.217681"},"trackingId":{"$":"os:2017-12-12T15:17:25:341397:22803"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=775100-katalog:42946400</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"4"},"object":[{"record":{"identifier":[{"$":"45123057|870970","@":"ac"},{"$":"9780596805524","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"JavaScript","@":"dc"},{"$":"JavaScript : the definitive guide","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"David Flanagan","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Flanagan, David","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"19.6532 JavaScript","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Enkelte programmeringssprog","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Javascript","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"programmering","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"programmeringssprog","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"websider","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"description":[{"$":"P\\u00e5 omslaget: Activate your web pages","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"6. edition","@":"dkdcplus"}],"publisher":[{"$":"O\'Reilly","@":"dc"}],"date":[{"$":"2011","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"xvi, 1078 sider","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:45123057"},"primaryObjectIdentifier":{"$":"870970-basis:45123057"},"recordStatus":{"$":"active"},"creationDate":{"$":"2011-10-18"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:45123057"}]}},{"identifier":{"$":"870970-basis:44088622"},"creationDate":{"$":"2007-03-27"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"775100-katalog:42946400"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:41771283"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"David Flanagan"},"fedoraPid":{"$":"870970-basis:45123057"},"identifier":{"$":"870970-basis:45123057"},"language":{"$":"Engelsk"},"title":{"$":"JavaScript"},"titleFull":{"$":"JavaScript : the definitive guide"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"David Flanagan"},"fedoraPid":{"$":"870970-basis:44088622"},"identifier":{"$":"870970-basis:44088622"},"language":{"$":"Engelsk"},"title":{"$":"JavaScript"},"titleFull":{"$":"JavaScript : the definitive guide"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"David Flanagan"},"fedoraPid":{"$":"870970-basis:42946400"},"identifier":{"$":"775100-katalog:42946400"},"language":{"$":"Engelsk"},"title":{"$":"JavaScript"},"titleFull":{"$":"JavaScript : the definitive guide"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"David Flanagan"},"fedoraPid":{"$":"870970-basis:41771283"},"identifier":{"$":"870970-basis:41771283"},"language":{"$":"Engelsk"},"title":{"$":"JavaScript"},"titleFull":{"$":"JavaScript : the definitive guide"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"22"},"time":{"$":"0.281324"},"trackingId":{"$":"os:2017-12-12T15:17:25:333187:15668"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=870970-basis:28448716</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"2"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"8"},"object":[{"record":{"identifier":[{"$":"28448716|870970","@":"ac"},{"$":"9788758808994","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kadavermarch","@":"dc"},{"$":"Kadavermarch","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Dennis J\\u00fcrgensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"J\\u00fcrgensen, Dennis","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 13-16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"splatter","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"zombier","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\"Isslottet\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse","@":"dcterms"}],"audience":[{"$":"fra 13 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"3. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Tellerup.dk","@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"379 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"775100-katalog:28448716"},"primaryObjectIdentifier":{"$":"870970-basis:28448716"},"recordStatus":{"$":"active"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"775100-katalog:28448716"},{"$":"870970-basis:28448716"}]}},{"identifier":{"$":"775100-katalog:24340627"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"775100-katalog:07286406"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:29302049"},"creationDate":{"$":"2012-04-26"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"775100-katalog:24793591"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27502563"},"creationDate":{"$":"2008-11-11"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:09311270"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:09311297"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:28448716"},"identifier":{"$":"775100-katalog:28448716"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:24340627"},"identifier":{"$":"775100-katalog:24340627"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:07286406"},"identifier":{"$":"775100-katalog:07286406"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"online"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:29302049"},"identifier":{"$":"870970-basis:29302049"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Ebog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:24793591"},"identifier":{"$":"775100-katalog:24793591"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (cd)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"online"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:27502563"},"identifier":{"$":"870970-basis:27502563"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (net)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:09311270"},"identifier":{"$":"870970-basis:09311270"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (b\\u00e5nd) (mappe 1)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:09311297"},"identifier":{"$":"870970-basis:09311297"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (b\\u00e5nd) (mappe 2)"},"workType":{"$":"audiobook"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"48"},"time":{"$":"0.460964"},"trackingId":{"$":"os:2017-12-12T15:17:25:334493:18588"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: work-multiple_pids-title_dcTitle_coverUrlFull_collection', () => {
  it('has same result as recorded (in work-multiple_pids-title_dcTitle_coverUrlFull_collection)', done => {
    assert(
      Date.now() < +new Date('2018-03-12'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    provider
      .execute(endpoint, params, context)
      .then(result => {
        assert.deepEqual(result, expected);
        done();
      })
      .catch(result => {
        fail({throw: result}, expected);
        done();
      });
  });
});
