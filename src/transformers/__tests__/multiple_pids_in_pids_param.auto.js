// AUTOTEST GENERATOR: {"endpoint":"work","params":{"fields":["dcTitle","creator","pid"],"pids":["870970-basis:25775481","870970-basis:52186986","870970-basis:29838003","870970-basis:50936279"]}}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = 'work';
const params = {
  fields: ['dcTitle', 'creator', 'pid'],
  pids: [
    '870970-basis:25775481',
    '870970-basis:52186986',
    '870970-basis:29838003',
    '870970-basis:50936279'
  ]
};

const expected = {
  statusCode: 200,
  data: [
    {
      acIdentifier: ['25775481|870970'],
      identifierISBN: ['87-02-03555-3'],
      acSource: ['Bibliotekskatalog'],
      source: ['Doppler'],
      dcTitle: ['Doppler'],
      dcTitleFull: ['Doppler : roman'],
      creatorAut: ['Erlend Loe'],
      creatorSort: ['Loe, Erlend'],
      subjectDK5Text: ['Skønlitteratur'],
      subjectDBCS: [
        'familien',
        'humor',
        'ironi',
        'midtvejskriser',
        'samfundssatire'
      ],
      subjectGenre: ['humor', 'samfundssatire'],
      subjectDK5: ['sk'],
      abstract: [
        'Doppler, som er en velfungerende borger, beslutter pludselig, at han må finde sig selv, opgiver job og ægteskab og flytter ud i skoven omkring Oslo for at finde sig selv, i selskab med en elgkalv og i pagt med naturen, mens han tænker over udviklingen i samfundet og hans eget ægteskab'
      ],
      descriptionSeries: [
        'Samhørende: Doppler ; Volvo lastvagnar ; Enden på verden som vi kender den'
      ],
      audience: ['voksenmaterialer'],
      version: ['3. oplag (2005)'],
      publisher: ['Gyldendal'],
      date: ['2005'],
      typeBibDKType: ['Bog'],
      extent: ['175 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      spatialDBCS: ['Norge', 'Oslo'],
      accessType: ['physical'],
      creator: ['Erlend Loe'],
      fedoraPid: ['870970-basis:25775481'],
      pid: ['870970-basis:25775481'],
      language: ['Dansk'],
      title: ['Doppler'],
      titleFull: ['Doppler : roman'],
      type: ['Bog'],
      workType: ['book']
    },
    {
      acIdentifier: ['52186986|870970'],
      identifierISBN: ['9788702189148'],
      acSource: ['Bibliotekskatalog'],
      source: ['Slutten på verden slik vi kjenner den'],
      dcTitle: ['Enden på verden som vi kender den'],
      dcTitleFull: ['Enden på verden som vi kender den : roman'],
      creatorAut: ['Erlend Loe'],
      creatorSort: ['Loe, Erlend'],
      subjectDK5Text: ['Skønlitteratur'],
      subjectDBCS: [
        'familien',
        'humor',
        'ironi',
        'midtvejskriser',
        'samfundssatire'
      ],
      subjectGenre: ['humor', 'samfundssatire'],
      subjectDK5: ['sk'],
      abstract: [
        'Efter 2-3 år i skovene med elgen Bongo, vender Doppler hjem til familien. Men huset er blevet blåt, og en anden mand har taget hans plads. Kan Doppler få sin plads i familien tilbage, og kan han finde ud af en normal og materialistisk tilværelse?'
      ],
      description: ['På omslaget: Doppler vender hjem'],
      descriptionSeries: ['3. del af: Doppler'],
      audience: ['voksenmaterialer'],
      version: ['1. udgave, 1. oplag (2016)'],
      publisher: ['Gyldendal'],
      contributorTrl: ['Susanne Vebel'],
      date: ['2016'],
      typeBibDKType: ['Bog'],
      extent: ['276 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      spatialDBCS: ['Norge', 'Oslo'],
      accessType: ['physical'],
      creator: ['Erlend Loe'],
      fedoraPid: ['870970-basis:52186986'],
      pid: ['870970-basis:52186986'],
      language: ['Dansk'],
      title: ['Enden på verden som vi kender den'],
      titleFull: ['Enden på verden som vi kender den : roman'],
      type: ['Bog'],
      workType: ['book']
    },
    {
      acIdentifier: ['29838003|870970'],
      identifierISBN: ['9788702126099'],
      acSource: ['Bibliotekskatalog'],
      source: ['Fvonk'],
      dcTitle: ['Fvonk'],
      dcTitleFull: ['Fvonk : roman'],
      creatorAut: ['Erlend Loe'],
      creatorSort: ['Loe, Erlend'],
      subjectDK5Text: ['Skønlitteratur'],
      subjectDBCS: [
        'humor',
        'ironi',
        'midtvejskriser',
        'mænd',
        'samfundssatire'
      ],
      subjectGenre: ['humor', 'samfundssatire'],
      subjectDK5: ['sk'],
      abstract: [
        'Lektor Fvonk har været ude i noget snavs og er nu sygemeldt og deprimeret. Så får han en logerende, som hedder Jens og er Norges statsminister. Fvonk og Jens har samme humor og indstilling til mange ting, og for en tid udlever de deres indre drengerøv'
      ],
      audience: ['voksenmaterialer'],
      version: ['1. oplag (2013)'],
      publisher: ['Gyldendal'],
      contributorTrl: ['Susanne Vebel'],
      date: ['2013'],
      typeBibDKType: ['Bog'],
      extent: ['211 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      spatialDBCS: ['Norge'],
      accessType: ['physical'],
      creator: ['Erlend Loe'],
      fedoraPid: ['870970-basis:29838003'],
      pid: ['870970-basis:29838003'],
      language: ['Dansk'],
      title: ['Fvonk'],
      titleFull: ['Fvonk : roman'],
      type: ['Bog'],
      workType: ['book']
    },
    {
      acIdentifier: ['50936279|870970'],
      identifierISBN: ['9788702152340'],
      acSource: ['Bibliotekskatalog'],
      source: ['Vareopptelling'],
      dcTitle: ['Status'],
      dcTitleFull: ['Status : roman'],
      creatorAut: ['Erlend Loe'],
      creatorSort: ['Loe, Erlend'],
      subjectDK5Text: ['Skønlitteratur'],
      subjectDBCS: ['anmeldere', 'digtere', 'forfattere', 'humor', 'satire'],
      subjectGenre: ['humor'],
      subjectDK5: ['sk'],
      abstract: [
        'Nina Faber er en ældre lyriker, der aldrig har fået den anerkendelse hun, måske, fortjener. Nu slagtes hendes nyeste digtsamling af kritikerne og Nina tager sagerne i egen hånd. Kunne betegnes som "En lyriker ser rødt"'
      ],
      audience: ['voksenmaterialer'],
      version: ['1. oplag (2014)'],
      publisher: ['Gyldendal'],
      contributorTrl: ['Susanne Vebel'],
      date: ['2014'],
      typeBibDKType: ['Bog'],
      extent: ['143 sider'],
      languageISO6392: ['dan'],
      dcLanguage: ['Dansk'],
      spatialDBCS: ['Oslo', 'Norge'],
      accessType: ['physical'],
      creator: ['Erlend Loe'],
      fedoraPid: ['870970-basis:50936279'],
      pid: ['870970-basis:50936279'],
      language: ['Dansk'],
      title: ['Status'],
      titleFull: ['Status : roman'],
      type: ['Bog'],
      workType: ['book']
    }
  ]
};

const context = {
  services: {
    ddbcmsapi: 'https://cmscontent.dbc.dk/',
    moreinfo: 'https://moreinfo.addi.dk/2.11/',
    openagency: 'https://openagency.addi.dk/2.34/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/3.0/',
    PRODopenorder: 'https://openorder.addi.dk/3.0',
    openorder: 'https://openorder.addi.dk/3.0',
    opensearch: 'https://opensearch.addi.dk/b3.5_5.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/2.0/',
    suggest: 'http://ortograf-service-1-0.mi-prod.svc.cloud.dbc.dk/ortograf/',
    recommend: 'http://booklens-190101-1-0.mi-prod.svc.cloud.dbc.dk/',
    performance: 'https://elk.dbc.dk:9100/k8s-frontend-prod-*/',
    cicero: 'https://cicero-fbs.com/rest/external/v1/',
    openformat:
      'http://openformat-php-master.frontend-prod.svc.cloud.dbc.dk/server.php',
    holdingsitems:
      'http://holdings-items-content-service.cisterne.svc.cloud.dbc.dk/holdings-items-content-service/api',
    infomediaservice: 'http://infomedia.mcp1-proxy.dbc.dk/server.php'
  },
  infomedia: {userId: 'XXXXX', libraryCode: 'XXXXX'},
  cicero: {'DK-710100': 'XXXXX'},
  performance: {username: 'XXXXX', password: 'XXXXX'},
  search: {agency: '775100', profile: 'opac', collectionidentifiers: ''},
  storage: {user: 'XXXXX'},
  netpunkt: {user: 'XXXXX', group: 'XXXXX', password: 'XXXXX'},
  user: {
    id: 'XXXXX',
    salt: 'XXXXX',
    pin: 'XXXXX',
    libraryId: '790900',
    agency: '790900',
    isil: 'DK-790900'
  },
  app: {
    clientId: 'XclientIdX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101',
    orderSystem: 'bibliotekdk'
  }
};
const mockData = {
  '["opensearch",{"qs":{"action":"getObject","identifier":["870970-basis:25775481","870970-basis:52186986","870970-basis:29838003","870970-basis:50936279"],"agency":"775100","profile":"opac","outputType":"json","trackingId":"OP:XclientIdX","objectFormat":["briefDisplay","dkabm"]}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"4"},"collectionCount":{"$":"4"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"25775481|870970","@":"ac"},{"$":"87-02-03555-3","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Doppler","@":"dc"}],"title":[{"$":"Doppler","@":"dc"},{"$":"Doppler : roman","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Erlend Loe","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Loe, Erlend","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"familien","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"ironi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"midtvejskriser","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"samfundssatire","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"samfundssatire","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Doppler, som er en velfungerende borger, beslutter pludselig, at han m\\u00e5 finde sig selv, opgiver job og \\u00e6gteskab og flytter ud i skoven omkring Oslo for at finde sig selv, i selskab med en elgkalv og i pagt med naturen, mens han t\\u00e6nker over udviklingen i samfundet og hans eget \\u00e6gteskab","@":"dcterms"}],"description":[{"$":"Samh\\u00f8rende: Doppler ; Volvo lastvagnar ; Enden p\\u00e5 verden som vi kender den","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"3. oplag (2005)","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"}],"date":[{"$":"2005","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"175 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"spatial":[{"$":"Norge","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"},{"$":"Oslo","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:25775481"},"primaryObjectIdentifier":{"$":"870970-basis:25775481"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Erlend Loe"},"fedoraPid":{"$":"870970-basis:25775481"},"identifier":{"$":"870970-basis:25775481"},"language":{"$":"Dansk"},"title":{"$":"Doppler"},"titleFull":{"$":"Doppler : roman"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"52186986|870970","@":"ac"},{"$":"9788702189148","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Slutten p\\u00e5 verden slik vi kjenner den","@":"dc"}],"title":[{"$":"Enden p\\u00e5 verden som vi kender den","@":"dc"},{"$":"Enden p\\u00e5 verden som vi kender den : roman","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Erlend Loe","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Loe, Erlend","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"familien","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"ironi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"midtvejskriser","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"samfundssatire","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"samfundssatire","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Efter 2-3 \\u00e5r i skovene med elgen Bongo, vender Doppler hjem til familien. Men huset er blevet bl\\u00e5t, og en anden mand har taget hans plads. Kan Doppler f\\u00e5 sin plads i familien tilbage, og kan han finde ud af en normal og materialistisk tilv\\u00e6relse?","@":"dcterms"}],"description":[{"$":"P\\u00e5 omslaget: Doppler vender hjem","@":"dc"},{"$":"3. del af: Doppler","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2016)","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"}],"contributor":[{"$":"Susanne Vebel","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2016","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"276 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"spatial":[{"$":"Norge","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"},{"$":"Oslo","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:52186986"},"primaryObjectIdentifier":{"$":"870970-basis:52186986"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Erlend Loe"},"fedoraPid":{"$":"870970-basis:52186986"},"identifier":{"$":"870970-basis:52186986"},"language":{"$":"Dansk"},"title":{"$":"Enden p\\u00e5 verden som vi kender den"},"titleFull":{"$":"Enden p\\u00e5 verden som vi kender den : roman"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"29838003|870970","@":"ac"},{"$":"9788702126099","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Fvonk","@":"dc"}],"title":[{"$":"Fvonk","@":"dc"},{"$":"Fvonk : roman","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Erlend Loe","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Loe, Erlend","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"ironi","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"midtvejskriser","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"m\\u00e6nd","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"samfundssatire","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"samfundssatire","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Lektor Fvonk har v\\u00e6ret ude i noget snavs og er nu sygemeldt og deprimeret. S\\u00e5 f\\u00e5r han en logerende, som hedder Jens og er Norges statsminister. Fvonk og Jens har samme humor og indstilling til mange ting, og for en tid udlever de deres indre drenger\\u00f8v","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. oplag (2013)","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"}],"contributor":[{"$":"Susanne Vebel","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2013","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"211 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"spatial":[{"$":"Norge","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:29838003"},"primaryObjectIdentifier":{"$":"870970-basis:29838003"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Erlend Loe"},"fedoraPid":{"$":"870970-basis:29838003"},"identifier":{"$":"870970-basis:29838003"},"language":{"$":"Dansk"},"title":{"$":"Fvonk"},"titleFull":{"$":"Fvonk : roman"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"50936279|870970","@":"ac"},{"$":"9788702152340","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Vareopptelling","@":"dc"}],"title":[{"$":"Status","@":"dc"},{"$":"Status : roman","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Erlend Loe","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Loe, Erlend","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"anmeldere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"digtere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"forfattere","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"humor","@type":{"$":"dkdcplus:genre","@":"xsi"},"@":"dc"},{"$":"satire","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Nina Faber er en \\u00e6ldre lyriker, der aldrig har f\\u00e5et den anerkendelse hun, m\\u00e5ske, fortjener. Nu slagtes hendes nyeste digtsamling af kritikerne og Nina tager sagerne i egen h\\u00e5nd. Kunne betegnes som \\"En lyriker ser r\\u00f8dt\\"","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. oplag (2014)","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"}],"contributor":[{"$":"Susanne Vebel","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"143 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"spatial":[{"$":"Oslo","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"},{"$":"Norge","@type":{"$":"dkdcplus:DBCS","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:50936279"},"primaryObjectIdentifier":{"$":"870970-basis:50936279"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-07-09"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Erlend Loe"},"fedoraPid":{"$":"870970-basis:50936279"},"identifier":{"$":"870970-basis:50936279"},"language":{"$":"Dansk"},"title":{"$":"Status"},"titleFull":{"$":"Status : roman"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"4"},"fedoraRecordsRead":{"$":"0"},"time":{"$":"0.1"},"trackingId":{"$":"os:2017-12-24..."}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","bibdk":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\\/bibliotekdkdisplay","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: multiple_pids_in_pids_param.auto', () => {
  it('has same result as recorded (in multiple_pids_in_pids_param.auto)', () => {
    assert(
      Date.now() < +new Date('2025-01-01'),
      'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.'
    );
    context.mockData = mockData;
    return provider.execute(endpoint, params, context).then(result => {
      assert.deepEqual(result, expected);
    });
  });
});
