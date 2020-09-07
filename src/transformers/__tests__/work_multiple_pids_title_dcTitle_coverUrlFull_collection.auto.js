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
      pid: ['870970-basis:42946400'],
      language: ['Engelsk'],
      title: ['JavaScript'],
      titleFull: ['JavaScript : the definitive guide'],
      type: ['Bog'],
      workType: ['book']
    },
    {
      coverUrl117: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=bfe56e4f83fa8be831d5'
      ],
      coverUrl207: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=e018b4bedd1073ebacdc'
      ],
      coverUrl42: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=398e215e5af87ddebdb6'
      ],
      coverUrl500: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=d7d1b04691c7b888c007'
      ],
      coverUrlThumbnail: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=367f207f2e9952a6d973'
      ],
      coverUrlFull: [
        'https://moreinfo.addi.dk/2.11/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=39dc2bf596ab19f0d6b3'
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
        '870970-basis:28448716',
        '710100-katalog:24340627',
        '870970-basis:07286406',
        '870970-basis:29302049',
        '870970-basis:24793591',
        '870970-basis:27502563',
        '870970-basis:09311270',
        '870970-basis:09311297'
      ],
      collectionDetails: [
        {
          accessType: ['physical'],
          creator: ['Dennis Jürgensen'],
          pid: ['870970-basis:28448716'],
          language: ['Dansk'],
          title: ['Kadavermarch'],
          titleFull: ['Kadavermarch'],
          type: ['Bog'],
          workType: ['book']
        },
        {
          accessType: ['physical'],
          creator: ['Dennis Jürgensen'],
          pid: ['710100-katalog:24340627'],
          language: ['Dansk'],
          title: ['Kadavermarch'],
          titleFull: ['Kadavermarch'],
          type: ['Bog'],
          workType: ['book']
        },
        {
          accessType: ['physical'],
          creator: ['Dennis Jürgensen'],
          pid: ['870970-basis:07286406'],
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
          pid: ['870970-basis:24793591'],
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
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    openorder: 'https://openorder.addi.dk/2.8/',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.0/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggest: 'http://ortograf.mcp1-proxy.dbc.dk/ortograf/',
    recommend: 'http://staging.recomole.mcp1-proxy.dbc.dk/recomole/loan-cosim',
    suggestpopular: 'XXXXX',
    suggestcreator: 'XXXXX',
    suggestlibrary: 'XXXXX',
    suggestsubject: 'XXXXX',
    performance: 'https://elk-p01.dbc.dk:9100/',
    recommendurls: 'XXXXX'
  },
  communityservice: {id: 1},
  performance: {password: 'XXXXX', username: 'XXXXX'},
  search: {agency: '710100', profile: 'opac'},
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
  '["moreinfo",{"qs":{"action":"moreInfo","authenticationUser":"XXXXX","authenticationGroup":"XXXXX","authenticationPassword":"XXXXX","pidList":"775100-katalog:42946400|870970-basis:28448716","outputType":"json"}}]':
    '{"moreInfoResponse":{"requestStatus":{"statusEnum":{"$":"ok","@":"mi"},"errorText":{"$":"","@":"mi"},"@":"mi"},"identifierInformation":[{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"775100-katalog:42946400","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870970-basis:28448716","@":"mi"},"@":"mi"},"backImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=9b739fd2586bfe98f7ae","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=cb39939015b6c8719078","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=5a81ec5dec61de0f348c","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=ae68999e87516adaa6b4","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=d43efbdaa02272802205","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=104b57c8a4ff07618dee","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"backPage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=8bc0da90007ddf1fa262","@":"mi"}],"coverImage":[{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=bfe56e4f83fa8be831d5","@imageSize":{"$":"detail_117"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=e018b4bedd1073ebacdc","@imageSize":{"$":"detail_207"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=398e215e5af87ddebdb6","@imageSize":{"$":"detail_42"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=d7d1b04691c7b888c007","@imageSize":{"$":"detail_500"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=367f207f2e9952a6d973","@imageSize":{"$":"thumbnail"},"@imageFormat":{"$":"jpeg"},"@":"mi"},{"$":"https:\\/\\/moreinfo.addi.dk\\/2.11\\/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=39dc2bf596ab19f0d6b3","@imageSize":{"$":"detail"},"@imageFormat":{"$":"jpeg"},"@":"mi"}],"@":"mi"}],"@":"mi"},"@namespaces":{"mi":"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo"}}\n',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=775100-katalog:42946400</ns1:query>\\n      <ns1:agency>710100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"0"},"collectionCount":{"$":"0"},"more":{"$":"false"},"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=775100-katalog:42946400</ns1:query>\\n      <ns1:agency>710100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"0"},"collectionCount":{"$":"0"},"more":{"$":"false"},"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=870970-basis:28448716</ns1:query>\\n      <ns1:agency>710100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28448716|870970","@":"ac"},{"$":"9788758808994","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kadavermarch","@":"dc"},{"$":"Kadavermarch","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Dennis J\\u00fcrgensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"J\\u00fcrgensen, Dennis","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 13 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 14 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 15 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"splatter","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"zombier","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\"Isslottet\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse","@":"dcterms"}],"audience":[{"$":"fra 13 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"3. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Tellerup.dk","@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"379 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28448716"},"primaryObjectIdentifier":{"$":"870970-basis:28448716"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:28448716"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:28448716"},"identifier":{"$":"870970-basis:28448716"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"1"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=870970-basis:28448716</ns1:query>\\n      <ns1:agency>710100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"1"},"collectionCount":{"$":"1"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"8"},"object":[{"record":{"identifier":[{"$":"28448716|870970","@":"ac"},{"$":"9788758808994","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kadavermarch","@":"dc"},{"$":"Kadavermarch","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Dennis J\\u00fcrgensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"J\\u00fcrgensen, Dennis","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 13 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 14 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 15 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"splatter","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"zombier","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\"Isslottet\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse","@":"dcterms"}],"audience":[{"$":"fra 13 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"3. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Tellerup.dk","@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"379 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28448716"},"primaryObjectIdentifier":{"$":"870970-basis:28448716"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:28448716"}]}},{"identifier":{"$":"710100-katalog:24340627"},"creationDate":{"$":"2002-11-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:07286406"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:29302049"},"creationDate":{"$":"2012-04-26"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:24793591"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:27502563"},"creationDate":{"$":"2008-11-11"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:09311270"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}},{"identifier":{"$":"870970-basis:09311297"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:28448716"},"identifier":{"$":"870970-basis:28448716"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:24340627"},"identifier":{"$":"710100-katalog:24340627"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:07286406"},"identifier":{"$":"870970-basis:07286406"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"online"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:29302049"},"identifier":{"$":"870970-basis:29302049"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Ebog"},"workType":{"$":"book"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:24793591"},"identifier":{"$":"870970-basis:24793591"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (cd)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"online"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:27502563"},"identifier":{"$":"870970-basis:27502563"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (net)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:09311270"},"identifier":{"$":"870970-basis:09311270"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (b\\u00e5nd) (mappe 1)"},"workType":{"$":"audiobook"}},{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:09311297"},"identifier":{"$":"870970-basis:09311297"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Lydbog (b\\u00e5nd) (mappe 2)"},"workType":{"$":"audiobook"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"8"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch",{"qs":{"action":"getObject","identifier":["775100-katalog:42946400","870970-basis:28448716"],"agency":"710100","profile":"opac","outputType":"json","objectFormat":["briefDisplay","dkabm"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"2"},"collectionCount":{"$":"2"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"42946400|870970","@":"ac"},{"$":"0-596-00048-0","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"JavaScript","@":"dc"},{"$":"JavaScript : the definitive guide","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"David Flanagan","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Flanagan, David","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"19.6532 JavaScript","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Enkelte programmeringssprog","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"JavaScript","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"programmering","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"programmeringssprog","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"websider","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"description":[{"$":"P\\u00e5 omslaget: Activate your web pages","@":"dc"},{"$":"P\\u00e5 ryggen: Covers JavaScript 1.5","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"4. edition","@":"dkdcplus"}],"publisher":[{"$":"O\'Reilly","@":"dc"}],"date":[{"$":"2002","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"xvii, 916 sider","@":"dcterms"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:42946400"},"primaryObjectIdentifier":{"$":"870970-basis:42946400"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"David Flanagan"},"fedoraPid":{"$":"870970-basis:42946400"},"identifier":{"$":"870970-basis:42946400"},"language":{"$":"Engelsk"},"title":{"$":"JavaScript"},"titleFull":{"$":"JavaScript : the definitive guide"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28448716|870970","@":"ac"},{"$":"9788758808994","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kadavermarch","@":"dc"},{"$":"Kadavermarch","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Dennis J\\u00fcrgensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"J\\u00fcrgensen, Dennis","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"for 13 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 14 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 15 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"for 16 \\u00e5r","@type":{"$":"dkdcplus:DBCN","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"gys","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"splatter","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"zombier","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\"Isslottet\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse","@":"dcterms"}],"audience":[{"$":"fra 13 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"version":[{"$":"3. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Tellerup.dk","@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"379 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28448716"},"primaryObjectIdentifier":{"$":"870970-basis:28448716"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Dennis J\\u00fcrgensen"},"fedoraPid":{"$":"870970-basis:28448716"},"identifier":{"$":"870970-basis:28448716"},"language":{"$":"Dansk"},"title":{"$":"Kadavermarch"},"titleFull":{"$":"Kadavermarch"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"2"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: work_multiple_pids_title_dcTitle_coverUrlFull_collection.auto', () => {
  it('has same result as recorded (in work_multiple_pids_title_dcTitle_coverUrlFull_collection.auto)', () => {
    assert(
      Date.now() < +new Date('2021-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
