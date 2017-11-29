/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: search {"q":"fisk","offset":10,"limit":20}

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
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>fisk</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>11</ns1:start>\\n      <ns1:stepValue>20</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"10138"},"collectionCount":{"$":"20"},"more":{"$":"true"},"searchResult":[{"collection":{"resultPosition":{"$":"11"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"25729706|870970","@":"ac"},{"$":"87-00-76819-7","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Let og l\\u00e6kkert - fisk & skaldyr","@":"dc"},{"$":"Let og l\\u00e6kkert - fisk & skaldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Let og l\\u00e6kkert ; 27","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fisk & skaldyr","@":"dcterms"},{"$":"Fisk og skaldyr","@":"dcterms"},{"$":"Let og l\\u00e6kkert - fisk og skaldyr","@":"dcterms"}],"creator":[{"$":"Hanne Bloch","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Bloch, Hanne","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"},{"$":"for Coop Danmark","@":"dc"}],"date":[{"$":"2005","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"60 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:25729706"},"primaryObjectIdentifier":{"$":"870970-basis:25729706"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-05-05"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:25729706"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Hanne Bloch"},"fedoraPid":{"$":"870970-basis:25729706"},"identifier":{"$":"870970-basis:25729706"},"language":{"$":"Dansk"},"title":{"$":"Let og l\\u00e6kkert - fisk & skaldyr"},"titleFull":{"$":"Let og l\\u00e6kkert - fisk & skaldyr"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"12"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"50686221|870970","@":"ac"},{"$":"9788717043442","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Fish","@":"dc"}],"title":[{"$":"Fisk og skaldyr","@":"dc"},{"$":"Fisk og skaldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Hurtig i k\\u00f8kkenet","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fisk & skaldyr","@":"dcterms"},{"$":"Hurtig i k\\u00f8kkenet - fisk og skaldyr","@":"dcterms"}],"creator":[{"$":"Emma Lewis","@type":{"$":"dkdcplus:dkops","@":"xsi"},"@":"dc"},{"$":"Lewis, Emma","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"opskrifter","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"skaldyr","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skaldyrsretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"description":[{"$":"P\\u00e5 omslaget: 360 opskrifter p\\u00e5 10, 20, 30 minutter","@":"dc"},{"$":"Indhold: Snacks ; Hverdagsretter ; Weekendretter ; Sunde retter ; G\\u00e6steretter","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. oplag (2013)","@":"dkdcplus"}],"publisher":[{"$":"Nyt Nordisk Forlag Arnold Busck","@":"dc"}],"contributor":[{"$":"Emma Lewis","@type":{"$":"dkdcplus:dkops","@":"xsi"},"@":"dc"},{"$":"Lars Thomas","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2013","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"288 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"775100-katalog:50686221"},"primaryObjectIdentifier":{"$":"870970-basis:50686221"},"recordStatus":{"$":"active"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"775100-katalog:50686221"},{"$":"870970-basis:50686221"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50686221"},"identifier":{"$":"775100-katalog:50686221"},"language":{"$":"Dansk"},"title":{"$":"Fisk og skaldyr"},"titleFull":{"$":"Fisk og skaldyr"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"13"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"74013864|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr","@":"dc"},{"$":"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"J\\u00f8rgen M\\u00f8rup J\\u00f8rgensen","@":"dc"},{"$":"M\\u00f8rup J\\u00f8rgensen, J\\u00f8rgen","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"den bl\\u00e5 fisk","@":"dc"},{"$":"det elektrosensoriske sansesystem","@":"dc"},{"$":"fisk","@":"dc"},{"$":"sansefysiologi fisk","@":"dc"}],"abstract":[{"$":"Latimeria","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1991","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"S. 303-308","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Naturens verden, 1991, nr. 8","@":"dcterms"},{"$":"0028-0895","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:74013864"},"primaryObjectIdentifier":{"$":"870971-tsart:74013864"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:74013864"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"J\\u00f8rgen M\\u00f8rup J\\u00f8rgensen"},"fedoraPid":{"$":"870971-tsart:74013864"},"identifier":{"$":"870971-tsart:74013864"},"language":{"$":"Dansk"},"partOf":{"$":"Naturens verden, 1991, nr. 8"},"title":{"$":"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr"},"titleFull":{"$":"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"14"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"82068902|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"S\\u00e5rinfektioner hos fisk","@":"dc"},{"$":"S\\u00e5rinfektioner hos fisk : forekomst, \\u00e5rsag og betydning","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Inger Dalsgaard","@":"dc"},{"$":"Dalsgaard, Inger","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Pisces","@":"dc"},{"$":"chordater vertebrater","@":"dc"},{"$":"fisk","@":"dc"},{"$":"fiskesygdomme","@":"dc"},{"$":"hvirveldyr","@":"dc"},{"$":"infektioner veterin\\u00e6rmedicin","@":"dc"},{"$":"s\\u00e5rinfektioner veterin\\u00e6rmedicin","@":"dc"},{"$":"vertebrater","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1994","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 57-64","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Fisk og hav, 1994 = Skrifter... nr. 45 (1994)","@":"dcterms"},{"$":"0105-9211","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:82068902"},"primaryObjectIdentifier":{"$":"870971-tsart:82068902"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:82068902"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Inger Dalsgaard"},"fedoraPid":{"$":"870971-tsart:82068902"},"identifier":{"$":"870971-tsart:82068902"},"language":{"$":"Dansk"},"partOf":{"$":"Fisk og hav, 1994 = Skrifter... nr. 45 (1994)"},"title":{"$":"S\\u00e5rinfektioner hos fisk"},"titleFull":{"$":"S\\u00e5rinfektioner hos fisk : forekomst, \\u00e5rsag og betydning"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"15"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"85745824|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Plejehjemsbeboere har appetit p\\u00e5 fisk. Mere fisk til flere danskere","@":"dc"},{"$":"Plejehjemsbeboere har appetit p\\u00e5 fisk : Mere fisk til flere danskere","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Karin M\\u00f8ller-Olsen","@":"dc"},{"$":"M\\u00f8ller-Olsen, Karin","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"61.38","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Ern\\u00e6ring","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"hospitalskost","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kostforplejning","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"plejehjem","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"syge","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"\\u00e6ldre","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2000","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 4-7","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"F\\u00f8devarenyt, \\u00c5rg. 13, nr. 4 (2000)","@":"dcterms"},{"$":"1398-0599","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:85745824"},"primaryObjectIdentifier":{"$":"870971-tsart:85745824"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:85745824"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Karin M\\u00f8ller-Olsen"},"fedoraPid":{"$":"870971-tsart:85745824"},"identifier":{"$":"870971-tsart:85745824"},"language":{"$":"Dansk"},"partOf":{"$":"F\\u00f8devarenyt, \\u00c5rg. 13, nr. 4 (2000)"},"title":{"$":"Plejehjemsbeboere har appetit p\\u00e5 fisk. Mere fisk til flere danskere"},"titleFull":{"$":"Plejehjemsbeboere har appetit p\\u00e5 fisk. Mere fisk til flere danskere"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"16"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"89196078|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Ugegammel frisk fisk. Farvel til frisk fisk","@":"dc"},{"$":"Ugegammel frisk fisk : Farvel til frisk fisk","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Lene Torp","@":"dc"},{"$":"Torp, Lene","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Erik Valeur","@":"dc"},{"$":"Valeur, Erik","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"63.9","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Erhvervsfiskeri og -jagt","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskehandel","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"forbrugere","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"handel","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kvalitet","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2006","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 22-28","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"T\\u00e6nk, 2006, nr. 68","@":"dcterms"},{"$":"1604-6307","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:89196078"},"primaryObjectIdentifier":{"$":"870971-tsart:89196078"},"recordStatus":{"$":"active"},"creationDate":{"$":"2006-10-18"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:89196078"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Lene Torp"},"fedoraPid":{"$":"870971-tsart:89196078"},"identifier":{"$":"870971-tsart:89196078"},"language":{"$":"Dansk"},"partOf":{"$":"T\\u00e6nk, 2006, nr. 68"},"title":{"$":"Ugegammel frisk fisk. Farvel til frisk fisk"},"titleFull":{"$":"Ugegammel frisk fisk. Farvel til frisk fisk"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"17"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"24879577|870970","@":"ac"},{"$":"87-91296-58-7","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Healthy eating - seafood","@":"dc"}],"title":[{"$":"Minikogebogen - fisk & skaldyr","@":"dc"},{"$":"Minikogebogen - fisk & skaldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Minikogebog","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fisk & skaldyr","@":"dcterms"},{"$":"Fisk og skaldyr","@":"dcterms"},{"$":"Minikogebogen - fisk og skaldyr","@":"dcterms"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"P\\u00e5 omslaget: Hurtig & nem mad","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Aktium","@":"dc"},{"$":"for Dansk Supermarked","@":"dc"}],"date":[{"$":"2003","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"48 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:24879577"},"primaryObjectIdentifier":{"$":"870970-basis:24879577"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:24879577"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:24879577"},"identifier":{"$":"870970-basis:24879577"},"language":{"$":"Dansk"},"title":{"$":"Minikogebogen - fisk & skaldyr"},"titleFull":{"$":"Minikogebogen - fisk & skaldyr"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"18"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28442173|870970","@":"ac"},{"$":"9788702101171","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Fisk & skaldyr","@":"dc"},{"$":"Fisk & skaldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Gyldendals sm\\u00e5 kogeb\\u00f8ger","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fisk og skaldyr","@":"dcterms"}],"creator":[{"$":"Hanne Bloch","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Bloch, Hanne","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"opskrifter","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"skaldyr","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skaldyrsretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"2. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"}],"contributor":[{"$":"Tine Duch","@type":{"$":"dkdcplus:ill","@":"xsi"},"@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"60 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28442173"},"primaryObjectIdentifier":{"$":"870970-basis:28442173"},"recordStatus":{"$":"active"},"creationDate":{"$":"2010-09-22"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:28442173"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Hanne Bloch"},"fedoraPid":{"$":"870970-basis:28442173"},"identifier":{"$":"870970-basis:28442173"},"language":{"$":"Dansk"},"title":{"$":"Fisk & skaldyr"},"titleFull":{"$":"Fisk & skaldyr"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"19"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"21676748|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Her lugter lidt af fisk","@":"dc"},{"$":"Her lugter lidt af fisk","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Shu-Bi-Dua","@":"dc"},{"$":"Shu-Bi-Dua","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"78.794:5","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Rock (Beat). Moderne folkemusik (Folk)","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"shelf":[{"$":"Rock","@type":{"$":"oss:musicshelf","@":"xsi"},"@":"dkdcplus"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"CMC","@":"dc"}],"contributor":[{"$":"CeeJay","@":"dc"},{"$":"Lars Pedersen (f. 1970)","@":"dc"}],"date":[{"$":"1997","@":"dc"}],"type":[{"$":"Cd (musik)","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"hasPart":[{"$":"Fisk (album version)","@type":{"$":"dkdcplus:track","@":"xsi"},"@":"dcterms"},{"$":"Fisk (Chief 1 remix)","@type":{"$":"dkdcplus:track","@":"xsi"},"@":"dcterms"},{"$":"Fisk (CeeJay remix)","@type":{"$":"dkdcplus:track","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:21676748"},"primaryObjectIdentifier":{"$":"870970-basis:21676748"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:21676748"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Shu-Bi-Dua"},"fedoraPid":{"$":"870970-basis:21676748"},"identifier":{"$":"870970-basis:21676748"},"title":{"$":"Her lugter lidt af fisk"},"titleFull":{"$":"Her lugter lidt af fisk"},"type":{"$":"Cd (musik)"},"workType":{"$":"music"}}]}}},{"collection":{"resultPosition":{"$":"20"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"22784897|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Opskrifter med fisk","@":"dc"},{"$":"Opskrifter med fisk : gerne flere gange om ugen","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"s.n.","@":"dc"}],"date":[{"$":"199?","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"20 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:22784897"},"primaryObjectIdentifier":{"$":"870970-basis:22784897"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:22784897"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:22784897"},"identifier":{"$":"870970-basis:22784897"},"language":{"$":"Dansk"},"title":{"$":"Opskrifter med fisk"},"titleFull":{"$":"Opskrifter med fisk : gerne flere gange om ugen"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"21"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"43878581|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Fisk i vandet","@":"dc"},{"$":"Fisk i vandet (Goula)","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"puslespil","@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Knoppuslespil. Fisk og s\\u00f8stjerne","@":"dcterms"}],"audience":[{"$":"Fra 2 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Goula","@":"dc"}],"date":[{"$":"200?","@":"dc"}],"type":[{"$":"Puslespil","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 plade, 4 brikker, tr\\u00e6, farve","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:43878581"},"primaryObjectIdentifier":{"$":"870970-basis:43878581"},"recordStatus":{"$":"active"},"creationDate":{"$":"2006-05-19"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:43878581"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:43878581"},"identifier":{"$":"870970-basis:43878581"},"title":{"$":"Fisk i vandet"},"titleFull":{"$":"Fisk i vandet"},"type":{"$":"Puslespil"},"workType":{"$":"other"}}]}}},{"collection":{"resultPosition":{"$":"22"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"36406186|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"B\\u00f8r vi holde igen med fed fisk?","@":"dc"},{"$":"B\\u00f8r vi holde igen med fed fisk?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Philippe Grandjean","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Grandjean, Philippe","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Lotte Lauritzen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Lauritzen, Lotte","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"61.38","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Ern\\u00e6ring","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"ern\\u00e6ring","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kost","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kviks\\u00f8lv","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kviks\\u00f8lvforurening","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"sundhed","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Danskerne spiser mere fisk. I 2013 blev der solgt 1.100 tons flere ferske fisk end \\u00e5ret f\\u00f8r. Alligevel spiser f\\u00e5 fisk som hovedret to gange om ugen, s\\u00e5dan som F\\u00f8devarestyrelsen anbefaler. Men er det overhovedet sundt at spise fisk fra de forurenede have? Forskerne ser forskelligt p\\u00e5 det","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2015","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"Sektion 4, s. 4","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Politiken, 2015-02-28","@":"dcterms"},{"$":"0907-1814","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:36406186"},"primaryObjectIdentifier":{"$":"870971-avis:36406186"},"recordStatus":{"$":"active"},"creationDate":{"$":"2015-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:36406186"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Philippe Grandjean"},"fedoraPid":{"$":"870971-avis:36406186"},"identifier":{"$":"870971-avis:36406186"},"language":{"$":"Dansk"},"partOf":{"$":"Politiken, 2015-02-28"},"title":{"$":"B\\u00f8r vi holde igen med fed fisk?"},"titleFull":{"$":"B\\u00f8r vi holde igen med fed fisk?"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"23"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"42253227|870970","@":"ac"},{"$":"87-89796-31-4","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kend din fisk","@":"dc"},{"$":"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk. Bind 1","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"f\\u00f8devarer","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"h\\u00e5ndb\\u00f8ger","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skaldyr","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Et opslagsv\\u00e6rk, der kan tilf\\u00f8re kokke og andre en grundl\\u00e6ggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udf\\u00f8rligt for at fastholde kravet til kvalitet","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"HORESTA","@":"dc"}],"contributor":[{"$":"Claus Jacobsen","@":"dc"},{"$":"Kurt Prentow","@":"dc"},{"$":"HORESTA","@":"dc"}],"date":[{"$":"2000","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"144 sider","@":"dcterms"},{"$":"2 bind","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:42253227"},"primaryObjectIdentifier":{"$":"870970-basis:42253227"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:42253227"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:42253227"},"identifier":{"$":"870970-basis:42253227"},"language":{"$":"Dansk"},"title":{"$":"Kend din fisk"},"titleFull":{"$":"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk"},"type":{"$":"Bog (bind 1)"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"24"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"42253235|870970","@":"ac"},{"$":"87-89796-33-0","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kend din fisk","@":"dc"},{"$":"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk. Bind 2","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"f\\u00f8devarer","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"h\\u00e5ndb\\u00f8ger","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skaldyr","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Et opslagsv\\u00e6rk, der kan tilf\\u00f8re kokke og andre en grundl\\u00e6ggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udf\\u00f8rligt for at fastholde kravet til kvalitet","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"HORESTA","@":"dc"}],"contributor":[{"$":"Kurt Prentow","@":"dc"},{"$":"HORESTA","@":"dc"}],"date":[{"$":"2000","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"208 sider","@":"dcterms"},{"$":"2 bind","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:42253235"},"primaryObjectIdentifier":{"$":"870970-basis:42253235"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:42253235"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:42253235"},"identifier":{"$":"870970-basis:42253235"},"language":{"$":"Dansk"},"title":{"$":"Kend din fisk"},"titleFull":{"$":"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk"},"type":{"$":"Bog (bind 2)"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"25"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"52710332|870970","@":"ac"},{"$":"9788799757305","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Hva\' for en fisk?","@":"dc"},{"$":"Hva\' for en fisk? : en dansk guide til fisk p\\u00e5 koralrevet og i k\\u00f8ledisken","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Hvad for en fisk?","@":"dcterms"}],"creator":[{"$":"Lars Anker Angantyr","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Angantyr, Lars Anker","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"koralrev","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"En guide til alverdens fisk p\\u00e5 koralrevet med navne p\\u00e5 dansk, engelsk og latin","@":"dcterms"}],"description":[{"$":"P\\u00e5 titelsiden: Aqua-Bio","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. oplag (2016)","@":"dkdcplus"}],"publisher":[{"$":"Life Publishing","@":"dc"}],"date":[{"$":"2016","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"104 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:52710332"},"primaryObjectIdentifier":{"$":"870970-basis:52710332"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-11-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:52710332"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Lars Anker Angantyr"},"fedoraPid":{"$":"870970-basis:52710332"},"identifier":{"$":"870970-basis:52710332"},"language":{"$":"Dansk"},"title":{"$":"Hva\' for en fisk?"},"titleFull":{"$":"Hva\' for en fisk? : en dansk guide til fisk p\\u00e5 koralrevet og i k\\u00f8ledisken"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"26"},"numberOfObjects":{"$":"2"},"object":[{"record":{"identifier":[{"$":"53388507|870970","@":"ac"},{"$":"9788702233025","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Fisk & vildt","@":"dc"},{"$":"Fisk & vildt : fr\\u00f8ken Jensens kogebog siden 1901","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fr\\u00f8ken Jensens kogebog - fisk & vildt","@":"dcterms"},{"$":"Fisk og vildt","@":"dcterms"}],"creator":[{"$":"Kristine Marie Jensen (f. 1858)","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Jensen, Kristine Marie (f. 1858)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"opskrifter","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"vildt","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"vildtretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Et stort udvalg af de bedste opskrifter p\\u00e5 fisk og vildt. Revideret, s\\u00e5 den passer til den moderne families \\u00f8nsker og madvaner","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2017)","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"}],"contributor":[{"$":"Nanna Simonsen (f. 1956)","@type":{"$":"dkdcplus:edt","@":"xsi"},"@":"dc"},{"$":"Nanna Simonsen (f. 1956)","@type":{"$":"dkdcplus:dkbea","@":"xsi"},"@":"dc"},{"$":"Ulla Selfort","@type":{"$":"dkdcplus:edt","@":"xsi"},"@":"dc"}],"date":[{"$":"2017","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"48 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:53388507"},"primaryObjectIdentifier":{"$":"870970-basis:53388507"},"recordStatus":{"$":"active"},"creationDate":{"$":"2017-08-16"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:53388507"}]}},{"identifier":{"$":"870970-basis:53388493"},"creationDate":{"$":"2017-08-16"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Kristine Marie Jensen (f. 1858)"},"fedoraPid":{"$":"870970-basis:53388507"},"identifier":{"$":"870970-basis:53388507"},"language":{"$":"Dansk"},"title":{"$":"Fisk & vildt"},"titleFull":{"$":"Fisk & vildt : fr\\u00f8ken Jensens kogebog siden 1901"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"online"},"creator":{"$":"Kristine Marie Jensen (f. 1858)"},"fedoraPid":{"$":"870970-basis:53388493"},"identifier":{"$":"870970-basis:53388493"},"language":{"$":"Dansk"},"title":{"$":"Fisk & vildt"},"titleFull":{"$":"Fisk & vildt : fr\\u00f8ken Jensens kogebog siden 1901"},"type":{"$":"Ebog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"27"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"71296709|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Vand- og saltbalance hos fisk","@":"dc"},{"$":"Vand- og saltbalance hos fisk","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"J\\u00f8rgen Riis-Vesterg\\u00e5rd","@":"dc"},{"$":"Riis-Vesterg\\u00e5rd, J\\u00f8rgen","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Pisces","@":"dc"},{"$":"chordater vertebrater","@":"dc"},{"$":"fisk","@":"dc"},{"$":"hvirveldyr","@":"dc"},{"$":"saltbalance fisk","@":"dc"},{"$":"vandbalance fisk","@":"dc"},{"$":"vertebrater","@":"dc"}],"abstract":[{"$":"Saltvandsfisk m\\u00e5 for at overleve aktivt udskille salt og optage vand - for ferskvandsfisk er det omvendt","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1981","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 16-21","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Fisk og hav, 1981\\/83","@":"dcterms"},{"$":"0105-9211","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:71296709"},"primaryObjectIdentifier":{"$":"870971-tsart:71296709"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:71296709"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"J\\u00f8rgen Riis-Vesterg\\u00e5rd"},"fedoraPid":{"$":"870971-tsart:71296709"},"identifier":{"$":"870971-tsart:71296709"},"language":{"$":"Dansk"},"partOf":{"$":"Fisk og hav, 1981\\/83"},"title":{"$":"Vand- og saltbalance hos fisk"},"titleFull":{"$":"Vand- og saltbalance hos fisk"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"28"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"86775085|870971","@":"ac"},{"$":"http:\\/\\/www.dfu.min.dk\\/dk\\/publication\\/files\\/22122003$FH54lores.pdf","@type":{"$":"dcterms:URI","@":"xsi"},"@":"dc"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"God og d\\u00e5rlig frossen fisk","@":"dc"},{"$":"God og d\\u00e5rlig frossen fisk : hvorfor er der forskel?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Flemming Jessen","@":"dc"},{"$":"Jessen, Flemming","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Jette Nielsen","@":"dc"},{"$":"Nielsen, Jette","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"66.85","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Slagteri. K\\u00f8d- og fiskeindustri","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeindustri","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"frossen fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"frysning","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kvalitet","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"k\\u00f8lelagring","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"lagring","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2002","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 16-25","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Fisk og hav, nr. 54 (2002)","@":"dcterms"},{"$":"0105-9211","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:86775085"},"primaryObjectIdentifier":{"$":"870971-tsart:86775085"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:86775085"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Jette Nielsen"},"fedoraPid":{"$":"870971-tsart:86775085"},"identifier":{"$":"870971-tsart:86775085"},"language":{"$":"Dansk"},"partOf":{"$":"Fisk og hav, nr. 54 (2002)"},"title":{"$":"God og d\\u00e5rlig frossen fisk"},"titleFull":{"$":"God og d\\u00e5rlig frossen fisk : hvorfor er der forskel?"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"29"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51644557|870970","@":"ac"},{"$":"9788799637416","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Adamsen\'s nordisk fisk","@":"dc"},{"$":"Adamsen\'s nordisk fisk : p\\u00e5 den nemme m\\u00e5de","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Nordisk fisk","@":"dcterms"}],"creator":[{"$":"Nina Marie Villadsen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Villadsen, Nina Marie","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"opskrifter","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Fiskeopskrifter som fx havkat, torsk, laks, bl\\u00e6ksprutte samt fotos og beskrivelse af dem","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave","@":"dkdcplus"}],"publisher":[{"$":"Wiegaarden Media","@":"dc"}],"contributor":[{"$":"Adamsen\'s Fisk","@type":{"$":"dkdcplus:dkops","@":"xsi"},"@":"dc"},{"$":"Wiegaarden Media","@":"dc"},{"$":"Annette Boe \\u00d8stergaard","@type":{"$":"dkdcplus:pht","@":"xsi"},"@":"dc"}],"date":[{"$":"2015","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"95 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51644557"},"primaryObjectIdentifier":{"$":"870970-basis:51644557"},"recordStatus":{"$":"active"},"creationDate":{"$":"2015-03-16"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51644557"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Nina Marie Villadsen"},"fedoraPid":{"$":"870970-basis:51644557"},"identifier":{"$":"870970-basis:51644557"},"language":{"$":"Dansk"},"title":{"$":"Adamsen\'s nordisk fisk"},"titleFull":{"$":"Adamsen\'s nordisk fisk : p\\u00e5 den nemme m\\u00e5de"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"30"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"22060139|870970","@":"ac"},{"$":"87-608-0385-1","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Walt Disney pr\\u00e6senterer Hiawatha og den store fisk","@":"dc"},{"$":"Walt Disney pr\\u00e6senterer Hiawatha og den store fisk","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Anders And\'s bogklub","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Hiawatha og den store fisk","@":"dcterms"},{"$":"Lille Hiawatha og den store fisk","@":"dcterms"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"description":[{"$":"Oversat fra amerikansk","@":"dc"},{"$":"Rygtitel: Hiawatha og den store fisk","@":"dc"}],"audience":[{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"publisher":[{"$":"Egmont Wangel","@":"dc"}],"contributor":[{"$":"Walt Disney firma","@":"dc"}],"date":[{"$":"1997","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"alle illustreret i farver","@":"dc"}],"extent":[{"$":"44 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:22060139"},"primaryObjectIdentifier":{"$":"870970-basis:22060139"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:22060139"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:22060139"},"identifier":{"$":"870970-basis:22060139"},"language":{"$":"Dansk"},"title":{"$":"Walt Disney pr\\u00e6senterer Hiawatha og den store fisk"},"titleFull":{"$":"Walt Disney pr\\u00e6senterer Hiawatha og den store fisk"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"102"},"time":{"$":"1.17989"},"trackingId":{"$":"os:2017-11-29T11:38:07:997637:23438"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>fisk</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>11</ns1:start>\\n      <ns1:stepValue>20</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"10138"},"collectionCount":{"$":"20"},"more":{"$":"true"},"searchResult":[{"collection":{"resultPosition":{"$":"11"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"25729706|870970","@":"ac"},{"$":"87-00-76819-7","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Let og l\\u00e6kkert - fisk & skaldyr","@":"dc"},{"$":"Let og l\\u00e6kkert - fisk & skaldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Let og l\\u00e6kkert ; 27","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fisk & skaldyr","@":"dcterms"},{"$":"Fisk og skaldyr","@":"dcterms"},{"$":"Let og l\\u00e6kkert - fisk og skaldyr","@":"dcterms"}],"creator":[{"$":"Hanne Bloch","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Bloch, Hanne","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"},{"$":"for Coop Danmark","@":"dc"}],"date":[{"$":"2005","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"60 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:25729706"},"primaryObjectIdentifier":{"$":"870970-basis:25729706"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-05-05"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:25729706"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Hanne Bloch"},"fedoraPid":{"$":"870970-basis:25729706"},"identifier":{"$":"870970-basis:25729706"},"language":{"$":"Dansk"},"title":{"$":"Let og l\\u00e6kkert - fisk & skaldyr"},"titleFull":{"$":"Let og l\\u00e6kkert - fisk & skaldyr"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"12"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"50686221|870970","@":"ac"},{"$":"9788717043442","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Fish","@":"dc"}],"title":[{"$":"Fisk og skaldyr","@":"dc"},{"$":"Fisk og skaldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Hurtig i k\\u00f8kkenet","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fisk & skaldyr","@":"dcterms"},{"$":"Hurtig i k\\u00f8kkenet - fisk og skaldyr","@":"dcterms"}],"creator":[{"$":"Emma Lewis","@type":{"$":"dkdcplus:dkops","@":"xsi"},"@":"dc"},{"$":"Lewis, Emma","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"opskrifter","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"skaldyr","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skaldyrsretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"description":[{"$":"P\\u00e5 omslaget: 360 opskrifter p\\u00e5 10, 20, 30 minutter","@":"dc"},{"$":"Indhold: Snacks ; Hverdagsretter ; Weekendretter ; Sunde retter ; G\\u00e6steretter","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. oplag (2013)","@":"dkdcplus"}],"publisher":[{"$":"Nyt Nordisk Forlag Arnold Busck","@":"dc"}],"contributor":[{"$":"Emma Lewis","@type":{"$":"dkdcplus:dkops","@":"xsi"},"@":"dc"},{"$":"Lars Thomas","@type":{"$":"dkdcplus:trl","@":"xsi"},"@":"dc"}],"date":[{"$":"2013","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"288 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"775100-katalog:50686221"},"primaryObjectIdentifier":{"$":"870970-basis:50686221"},"recordStatus":{"$":"active"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"775100-katalog:50686221"},{"$":"870970-basis:50686221"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:50686221"},"identifier":{"$":"775100-katalog:50686221"},"language":{"$":"Dansk"},"title":{"$":"Fisk og skaldyr"},"titleFull":{"$":"Fisk og skaldyr"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"13"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"74013864|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr","@":"dc"},{"$":"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"J\\u00f8rgen M\\u00f8rup J\\u00f8rgensen","@":"dc"},{"$":"M\\u00f8rup J\\u00f8rgensen, J\\u00f8rgen","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"den bl\\u00e5 fisk","@":"dc"},{"$":"det elektrosensoriske sansesystem","@":"dc"},{"$":"fisk","@":"dc"},{"$":"sansefysiologi fisk","@":"dc"}],"abstract":[{"$":"Latimeria","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1991","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"S. 303-308","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Naturens verden, 1991, nr. 8","@":"dcterms"},{"$":"0028-0895","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:74013864"},"primaryObjectIdentifier":{"$":"870971-tsart:74013864"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:74013864"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"J\\u00f8rgen M\\u00f8rup J\\u00f8rgensen"},"fedoraPid":{"$":"870971-tsart:74013864"},"identifier":{"$":"870971-tsart:74013864"},"language":{"$":"Dansk"},"partOf":{"$":"Naturens verden, 1991, nr. 8"},"title":{"$":"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr"},"titleFull":{"$":"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"14"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"82068902|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"S\\u00e5rinfektioner hos fisk","@":"dc"},{"$":"S\\u00e5rinfektioner hos fisk : forekomst, \\u00e5rsag og betydning","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Inger Dalsgaard","@":"dc"},{"$":"Dalsgaard, Inger","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Pisces","@":"dc"},{"$":"chordater vertebrater","@":"dc"},{"$":"fisk","@":"dc"},{"$":"fiskesygdomme","@":"dc"},{"$":"hvirveldyr","@":"dc"},{"$":"infektioner veterin\\u00e6rmedicin","@":"dc"},{"$":"s\\u00e5rinfektioner veterin\\u00e6rmedicin","@":"dc"},{"$":"vertebrater","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1994","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 57-64","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Fisk og hav, 1994 = Skrifter... nr. 45 (1994)","@":"dcterms"},{"$":"0105-9211","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:82068902"},"primaryObjectIdentifier":{"$":"870971-tsart:82068902"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:82068902"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Inger Dalsgaard"},"fedoraPid":{"$":"870971-tsart:82068902"},"identifier":{"$":"870971-tsart:82068902"},"language":{"$":"Dansk"},"partOf":{"$":"Fisk og hav, 1994 = Skrifter... nr. 45 (1994)"},"title":{"$":"S\\u00e5rinfektioner hos fisk"},"titleFull":{"$":"S\\u00e5rinfektioner hos fisk : forekomst, \\u00e5rsag og betydning"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"15"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"85745824|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Plejehjemsbeboere har appetit p\\u00e5 fisk. Mere fisk til flere danskere","@":"dc"},{"$":"Plejehjemsbeboere har appetit p\\u00e5 fisk : Mere fisk til flere danskere","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Karin M\\u00f8ller-Olsen","@":"dc"},{"$":"M\\u00f8ller-Olsen, Karin","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"61.38","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Ern\\u00e6ring","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"hospitalskost","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kostforplejning","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"plejehjem","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"syge","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"\\u00e6ldre","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2000","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 4-7","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"F\\u00f8devarenyt, \\u00c5rg. 13, nr. 4 (2000)","@":"dcterms"},{"$":"1398-0599","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:85745824"},"primaryObjectIdentifier":{"$":"870971-tsart:85745824"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:85745824"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Karin M\\u00f8ller-Olsen"},"fedoraPid":{"$":"870971-tsart:85745824"},"identifier":{"$":"870971-tsart:85745824"},"language":{"$":"Dansk"},"partOf":{"$":"F\\u00f8devarenyt, \\u00c5rg. 13, nr. 4 (2000)"},"title":{"$":"Plejehjemsbeboere har appetit p\\u00e5 fisk. Mere fisk til flere danskere"},"titleFull":{"$":"Plejehjemsbeboere har appetit p\\u00e5 fisk. Mere fisk til flere danskere"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"16"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"89196078|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Ugegammel frisk fisk. Farvel til frisk fisk","@":"dc"},{"$":"Ugegammel frisk fisk : Farvel til frisk fisk","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Lene Torp","@":"dc"},{"$":"Torp, Lene","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Erik Valeur","@":"dc"},{"$":"Valeur, Erik","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"63.9","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Erhvervsfiskeri og -jagt","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskehandel","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"forbrugere","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"handel","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kvalitet","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2006","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 22-28","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"T\\u00e6nk, 2006, nr. 68","@":"dcterms"},{"$":"1604-6307","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:89196078"},"primaryObjectIdentifier":{"$":"870971-tsart:89196078"},"recordStatus":{"$":"active"},"creationDate":{"$":"2006-10-18"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:89196078"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Lene Torp"},"fedoraPid":{"$":"870971-tsart:89196078"},"identifier":{"$":"870971-tsart:89196078"},"language":{"$":"Dansk"},"partOf":{"$":"T\\u00e6nk, 2006, nr. 68"},"title":{"$":"Ugegammel frisk fisk. Farvel til frisk fisk"},"titleFull":{"$":"Ugegammel frisk fisk. Farvel til frisk fisk"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"17"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"24879577|870970","@":"ac"},{"$":"87-91296-58-7","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"},{"$":"Healthy eating - seafood","@":"dc"}],"title":[{"$":"Minikogebogen - fisk & skaldyr","@":"dc"},{"$":"Minikogebogen - fisk & skaldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Minikogebog","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fisk & skaldyr","@":"dcterms"},{"$":"Fisk og skaldyr","@":"dcterms"},{"$":"Minikogebogen - fisk og skaldyr","@":"dcterms"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"description":[{"$":"P\\u00e5 omslaget: Hurtig & nem mad","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Aktium","@":"dc"},{"$":"for Dansk Supermarked","@":"dc"}],"date":[{"$":"2003","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"48 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:24879577"},"primaryObjectIdentifier":{"$":"870970-basis:24879577"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:24879577"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:24879577"},"identifier":{"$":"870970-basis:24879577"},"language":{"$":"Dansk"},"title":{"$":"Minikogebogen - fisk & skaldyr"},"titleFull":{"$":"Minikogebogen - fisk & skaldyr"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"18"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"28442173|870970","@":"ac"},{"$":"9788702101171","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Fisk & skaldyr","@":"dc"},{"$":"Fisk & skaldyr","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Gyldendals sm\\u00e5 kogeb\\u00f8ger","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fisk og skaldyr","@":"dcterms"}],"creator":[{"$":"Hanne Bloch","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Bloch, Hanne","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"opskrifter","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"skaldyr","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skaldyrsretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"2. udgave, 1. oplag (2010)","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"}],"contributor":[{"$":"Tine Duch","@type":{"$":"dkdcplus:ill","@":"xsi"},"@":"dc"}],"date":[{"$":"2010","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"60 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:28442173"},"primaryObjectIdentifier":{"$":"870970-basis:28442173"},"recordStatus":{"$":"active"},"creationDate":{"$":"2010-09-22"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:28442173"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Hanne Bloch"},"fedoraPid":{"$":"870970-basis:28442173"},"identifier":{"$":"870970-basis:28442173"},"language":{"$":"Dansk"},"title":{"$":"Fisk & skaldyr"},"titleFull":{"$":"Fisk & skaldyr"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"19"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"21676748|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Her lugter lidt af fisk","@":"dc"},{"$":"Her lugter lidt af fisk","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Shu-Bi-Dua","@":"dc"},{"$":"Shu-Bi-Dua","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"78.794:5","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Rock (Beat). Moderne folkemusik (Folk)","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"}],"shelf":[{"$":"Rock","@type":{"$":"oss:musicshelf","@":"xsi"},"@":"dkdcplus"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"CMC","@":"dc"}],"contributor":[{"$":"CeeJay","@":"dc"},{"$":"Lars Pedersen (f. 1970)","@":"dc"}],"date":[{"$":"1997","@":"dc"}],"type":[{"$":"Cd (musik)","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"hasPart":[{"$":"Fisk (album version)","@type":{"$":"dkdcplus:track","@":"xsi"},"@":"dcterms"},{"$":"Fisk (Chief 1 remix)","@type":{"$":"dkdcplus:track","@":"xsi"},"@":"dcterms"},{"$":"Fisk (CeeJay remix)","@type":{"$":"dkdcplus:track","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:21676748"},"primaryObjectIdentifier":{"$":"870970-basis:21676748"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:21676748"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Shu-Bi-Dua"},"fedoraPid":{"$":"870970-basis:21676748"},"identifier":{"$":"870970-basis:21676748"},"title":{"$":"Her lugter lidt af fisk"},"titleFull":{"$":"Her lugter lidt af fisk"},"type":{"$":"Cd (musik)"},"workType":{"$":"music"}}]}}},{"collection":{"resultPosition":{"$":"20"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"22784897|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Opskrifter med fisk","@":"dc"},{"$":"Opskrifter med fisk : gerne flere gange om ugen","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"s.n.","@":"dc"}],"date":[{"$":"199?","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"20 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:22784897"},"primaryObjectIdentifier":{"$":"870970-basis:22784897"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:22784897"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:22784897"},"identifier":{"$":"870970-basis:22784897"},"language":{"$":"Dansk"},"title":{"$":"Opskrifter med fisk"},"titleFull":{"$":"Opskrifter med fisk : gerne flere gange om ugen"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"21"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"43878581|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Fisk i vandet","@":"dc"},{"$":"Fisk i vandet (Goula)","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"puslespil","@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Knoppuslespil. Fisk og s\\u00f8stjerne","@":"dcterms"}],"audience":[{"$":"Fra 2 \\u00e5r","@type":{"$":"dkdcplus:age","@":"xsi"},"@":"dcterms"},{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Goula","@":"dc"}],"date":[{"$":"200?","@":"dc"}],"type":[{"$":"Puslespil","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"1 plade, 4 brikker, tr\\u00e6, farve","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:43878581"},"primaryObjectIdentifier":{"$":"870970-basis:43878581"},"recordStatus":{"$":"active"},"creationDate":{"$":"2006-05-19"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:43878581"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:43878581"},"identifier":{"$":"870970-basis:43878581"},"title":{"$":"Fisk i vandet"},"titleFull":{"$":"Fisk i vandet"},"type":{"$":"Puslespil"},"workType":{"$":"other"}}]}}},{"collection":{"resultPosition":{"$":"22"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"36406186|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"B\\u00f8r vi holde igen med fed fisk?","@":"dc"},{"$":"B\\u00f8r vi holde igen med fed fisk?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Philippe Grandjean","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Grandjean, Philippe","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Lotte Lauritzen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Lauritzen, Lotte","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"61.38","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Ern\\u00e6ring","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"ern\\u00e6ring","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kost","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kviks\\u00f8lv","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kviks\\u00f8lvforurening","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"sundhed","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Danskerne spiser mere fisk. I 2013 blev der solgt 1.100 tons flere ferske fisk end \\u00e5ret f\\u00f8r. Alligevel spiser f\\u00e5 fisk som hovedret to gange om ugen, s\\u00e5dan som F\\u00f8devarestyrelsen anbefaler. Men er det overhovedet sundt at spise fisk fra de forurenede have? Forskerne ser forskelligt p\\u00e5 det","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2015","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"Sektion 4, s. 4","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Politiken, 2015-02-28","@":"dcterms"},{"$":"0907-1814","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:36406186"},"primaryObjectIdentifier":{"$":"870971-avis:36406186"},"recordStatus":{"$":"active"},"creationDate":{"$":"2015-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:36406186"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Philippe Grandjean"},"fedoraPid":{"$":"870971-avis:36406186"},"identifier":{"$":"870971-avis:36406186"},"language":{"$":"Dansk"},"partOf":{"$":"Politiken, 2015-02-28"},"title":{"$":"B\\u00f8r vi holde igen med fed fisk?"},"titleFull":{"$":"B\\u00f8r vi holde igen med fed fisk?"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"23"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"42253227|870970","@":"ac"},{"$":"87-89796-31-4","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kend din fisk","@":"dc"},{"$":"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk. Bind 1","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"f\\u00f8devarer","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"h\\u00e5ndb\\u00f8ger","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skaldyr","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Et opslagsv\\u00e6rk, der kan tilf\\u00f8re kokke og andre en grundl\\u00e6ggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udf\\u00f8rligt for at fastholde kravet til kvalitet","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"HORESTA","@":"dc"}],"contributor":[{"$":"Claus Jacobsen","@":"dc"},{"$":"Kurt Prentow","@":"dc"},{"$":"HORESTA","@":"dc"}],"date":[{"$":"2000","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"144 sider","@":"dcterms"},{"$":"2 bind","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:42253227"},"primaryObjectIdentifier":{"$":"870970-basis:42253227"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:42253227"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:42253227"},"identifier":{"$":"870970-basis:42253227"},"language":{"$":"Dansk"},"title":{"$":"Kend din fisk"},"titleFull":{"$":"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk"},"type":{"$":"Bog (bind 1)"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"24"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"42253235|870970","@":"ac"},{"$":"87-89796-33-0","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Kend din fisk","@":"dc"},{"$":"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk. Bind 2","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"f\\u00f8devarer","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"h\\u00e5ndb\\u00f8ger","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"skaldyr","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Et opslagsv\\u00e6rk, der kan tilf\\u00f8re kokke og andre en grundl\\u00e6ggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udf\\u00f8rligt for at fastholde kravet til kvalitet","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"HORESTA","@":"dc"}],"contributor":[{"$":"Kurt Prentow","@":"dc"},{"$":"HORESTA","@":"dc"}],"date":[{"$":"2000","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"208 sider","@":"dcterms"},{"$":"2 bind","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:42253235"},"primaryObjectIdentifier":{"$":"870970-basis:42253235"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:42253235"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:42253235"},"identifier":{"$":"870970-basis:42253235"},"language":{"$":"Dansk"},"title":{"$":"Kend din fisk"},"titleFull":{"$":"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk"},"type":{"$":"Bog (bind 2)"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"25"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"52710332|870970","@":"ac"},{"$":"9788799757305","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Hva\' for en fisk?","@":"dc"},{"$":"Hva\' for en fisk? : en dansk guide til fisk p\\u00e5 koralrevet og i k\\u00f8ledisken","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Hvad for en fisk?","@":"dcterms"}],"creator":[{"$":"Lars Anker Angantyr","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Angantyr, Lars Anker","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"koralrev","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"En guide til alverdens fisk p\\u00e5 koralrevet med navne p\\u00e5 dansk, engelsk og latin","@":"dcterms"}],"description":[{"$":"P\\u00e5 titelsiden: Aqua-Bio","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. oplag (2016)","@":"dkdcplus"}],"publisher":[{"$":"Life Publishing","@":"dc"}],"date":[{"$":"2016","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"104 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:52710332"},"primaryObjectIdentifier":{"$":"870970-basis:52710332"},"recordStatus":{"$":"active"},"creationDate":{"$":"2016-11-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:52710332"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Lars Anker Angantyr"},"fedoraPid":{"$":"870970-basis:52710332"},"identifier":{"$":"870970-basis:52710332"},"language":{"$":"Dansk"},"title":{"$":"Hva\' for en fisk?"},"titleFull":{"$":"Hva\' for en fisk? : en dansk guide til fisk p\\u00e5 koralrevet og i k\\u00f8ledisken"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"26"},"numberOfObjects":{"$":"2"},"object":[{"record":{"identifier":[{"$":"53388507|870970","@":"ac"},{"$":"9788702233025","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Fisk & vildt","@":"dc"},{"$":"Fisk & vildt : fr\\u00f8ken Jensens kogebog siden 1901","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Fr\\u00f8ken Jensens kogebog - fisk & vildt","@":"dcterms"},{"$":"Fisk og vildt","@":"dcterms"}],"creator":[{"$":"Kristine Marie Jensen (f. 1858)","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Jensen, Kristine Marie (f. 1858)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"opskrifter","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"vildt","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"vildtretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Et stort udvalg af de bedste opskrifter p\\u00e5 fisk og vildt. Revideret, s\\u00e5 den passer til den moderne families \\u00f8nsker og madvaner","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave, 1. oplag (2017)","@":"dkdcplus"}],"publisher":[{"$":"Gyldendal","@":"dc"}],"contributor":[{"$":"Nanna Simonsen (f. 1956)","@type":{"$":"dkdcplus:edt","@":"xsi"},"@":"dc"},{"$":"Nanna Simonsen (f. 1956)","@type":{"$":"dkdcplus:dkbea","@":"xsi"},"@":"dc"},{"$":"Ulla Selfort","@type":{"$":"dkdcplus:edt","@":"xsi"},"@":"dc"}],"date":[{"$":"2017","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"48 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:53388507"},"primaryObjectIdentifier":{"$":"870970-basis:53388507"},"recordStatus":{"$":"active"},"creationDate":{"$":"2017-08-16"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:53388507"}]}},{"identifier":{"$":"870970-basis:53388493"},"creationDate":{"$":"2017-08-16"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Kristine Marie Jensen (f. 1858)"},"fedoraPid":{"$":"870970-basis:53388507"},"identifier":{"$":"870970-basis:53388507"},"language":{"$":"Dansk"},"title":{"$":"Fisk & vildt"},"titleFull":{"$":"Fisk & vildt : fr\\u00f8ken Jensens kogebog siden 1901"},"type":{"$":"Bog"},"workType":{"$":"book"}},{"accessType":{"$":"online"},"creator":{"$":"Kristine Marie Jensen (f. 1858)"},"fedoraPid":{"$":"870970-basis:53388493"},"identifier":{"$":"870970-basis:53388493"},"language":{"$":"Dansk"},"title":{"$":"Fisk & vildt"},"titleFull":{"$":"Fisk & vildt : fr\\u00f8ken Jensens kogebog siden 1901"},"type":{"$":"Ebog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"27"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"71296709|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Vand- og saltbalance hos fisk","@":"dc"},{"$":"Vand- og saltbalance hos fisk","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"J\\u00f8rgen Riis-Vesterg\\u00e5rd","@":"dc"},{"$":"Riis-Vesterg\\u00e5rd, J\\u00f8rgen","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"58.6","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Fisk","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Pisces","@":"dc"},{"$":"chordater vertebrater","@":"dc"},{"$":"fisk","@":"dc"},{"$":"hvirveldyr","@":"dc"},{"$":"saltbalance fisk","@":"dc"},{"$":"vandbalance fisk","@":"dc"},{"$":"vertebrater","@":"dc"}],"abstract":[{"$":"Saltvandsfisk m\\u00e5 for at overleve aktivt udskille salt og optage vand - for ferskvandsfisk er det omvendt","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1981","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 16-21","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Fisk og hav, 1981\\/83","@":"dcterms"},{"$":"0105-9211","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:71296709"},"primaryObjectIdentifier":{"$":"870971-tsart:71296709"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:71296709"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"J\\u00f8rgen Riis-Vesterg\\u00e5rd"},"fedoraPid":{"$":"870971-tsart:71296709"},"identifier":{"$":"870971-tsart:71296709"},"language":{"$":"Dansk"},"partOf":{"$":"Fisk og hav, 1981\\/83"},"title":{"$":"Vand- og saltbalance hos fisk"},"titleFull":{"$":"Vand- og saltbalance hos fisk"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"28"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"86775085|870971","@":"ac"},{"$":"http:\\/\\/www.dfu.min.dk\\/dk\\/publication\\/files\\/22122003$FH54lores.pdf","@type":{"$":"dcterms:URI","@":"xsi"},"@":"dc"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"God og d\\u00e5rlig frossen fisk","@":"dc"},{"$":"God og d\\u00e5rlig frossen fisk : hvorfor er der forskel?","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Flemming Jessen","@":"dc"},{"$":"Jessen, Flemming","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"Jette Nielsen","@":"dc"},{"$":"Nielsen, Jette","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"66.85","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Slagteri. K\\u00f8d- og fiskeindustri","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeindustri","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"frossen fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"frysning","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kvalitet","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"k\\u00f8lelagring","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"lagring","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2002","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 16-25","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Fisk og hav, nr. 54 (2002)","@":"dcterms"},{"$":"0105-9211","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:86775085"},"primaryObjectIdentifier":{"$":"870971-tsart:86775085"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:86775085"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Jette Nielsen"},"fedoraPid":{"$":"870971-tsart:86775085"},"identifier":{"$":"870971-tsart:86775085"},"language":{"$":"Dansk"},"partOf":{"$":"Fisk og hav, nr. 54 (2002)"},"title":{"$":"God og d\\u00e5rlig frossen fisk"},"titleFull":{"$":"God og d\\u00e5rlig frossen fisk : hvorfor er der forskel?"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"29"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"51644557|870970","@":"ac"},{"$":"9788799637416","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Adamsen\'s nordisk fisk","@":"dc"},{"$":"Adamsen\'s nordisk fisk : p\\u00e5 den nemme m\\u00e5de","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Nordisk fisk","@":"dcterms"}],"creator":[{"$":"Nina Marie Villadsen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Villadsen, Nina Marie","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"64.17","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"S\\u00e6rlige retter","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"fisk","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"fiskeretter","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"kogeb\\u00f8ger","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"},{"$":"opskrifter","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Fiskeopskrifter som fx havkat, torsk, laks, bl\\u00e6ksprutte samt fotos og beskrivelse af dem","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"version":[{"$":"1. udgave","@":"dkdcplus"}],"publisher":[{"$":"Wiegaarden Media","@":"dc"}],"contributor":[{"$":"Adamsen\'s Fisk","@type":{"$":"dkdcplus:dkops","@":"xsi"},"@":"dc"},{"$":"Wiegaarden Media","@":"dc"},{"$":"Annette Boe \\u00d8stergaard","@type":{"$":"dkdcplus:pht","@":"xsi"},"@":"dc"}],"date":[{"$":"2015","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret i farver","@":"dc"}],"extent":[{"$":"95 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:51644557"},"primaryObjectIdentifier":{"$":"870970-basis:51644557"},"recordStatus":{"$":"active"},"creationDate":{"$":"2015-03-16"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:51644557"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Nina Marie Villadsen"},"fedoraPid":{"$":"870970-basis:51644557"},"identifier":{"$":"870970-basis:51644557"},"language":{"$":"Dansk"},"title":{"$":"Adamsen\'s nordisk fisk"},"titleFull":{"$":"Adamsen\'s nordisk fisk : p\\u00e5 den nemme m\\u00e5de"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"30"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"22060139|870970","@":"ac"},{"$":"87-608-0385-1","@type":{"$":"dkdcplus:ISBN","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Walt Disney pr\\u00e6senterer Hiawatha og den store fisk","@":"dc"},{"$":"Walt Disney pr\\u00e6senterer Hiawatha og den store fisk","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"},{"$":"Anders And\'s bogklub","@type":{"$":"dkdcplus:series","@":"xsi"},"@":"dc"}],"alternative":[{"$":"Hiawatha og den store fisk","@":"dcterms"},{"$":"Lille Hiawatha og den store fisk","@":"dcterms"}],"subject":[{"$":"Sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"sk","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"}],"description":[{"$":"Oversat fra amerikansk","@":"dc"},{"$":"Rygtitel: Hiawatha og den store fisk","@":"dc"}],"audience":[{"$":"b\\u00f8rnematerialer","@":"dcterms"}],"publisher":[{"$":"Egmont Wangel","@":"dc"}],"contributor":[{"$":"Walt Disney firma","@":"dc"}],"date":[{"$":"1997","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"alle illustreret i farver","@":"dc"}],"extent":[{"$":"44 sider","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:22060139"},"primaryObjectIdentifier":{"$":"870970-basis:22060139"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:22060139"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"fedoraPid":{"$":"870970-basis:22060139"},"identifier":{"$":"870970-basis:22060139"},"language":{"$":"Dansk"},"title":{"$":"Walt Disney pr\\u00e6senterer Hiawatha og den store fisk"},"titleFull":{"$":"Walt Disney pr\\u00e6senterer Hiawatha og den store fisk"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"0"},"fedoraRecordsRead":{"$":"102"},"time":{"$":"1.182031"},"trackingId":{"$":"os:2017-11-29T11:38:08:009083:13982"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

describe('Automated test: search-with-parse-errors', () => {
  it('expected response. ID:841fpo, for {"q":"fisk","offset":10,"limit":20}', done => {
    context.mockData = mockData;
    provider
      .execute('search', {q: 'fisk', offset: 10, limit: 20}, context)
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              collection: ['870970-basis:25729706'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Hanne Bloch'],
                  pid: ['870970-basis:25729706'],
                  language: ['Dansk'],
                  title: ['Let og lækkert - fisk & skaldyr'],
                  titleFull: ['Let og lækkert - fisk & skaldyr'],
                  type: ['Bog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['25729706|870970'],
              identifierISBN: ['87-00-76819-7'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ['Let og lækkert - fisk & skaldyr'],
              dcTitleFull: ['Let og lækkert - fisk & skaldyr'],
              titleSeries: ['Let og lækkert ; 27'],
              alternative: [
                'Fisk & skaldyr',
                'Fisk og skaldyr',
                'Let og lækkert - fisk og skaldyr'
              ],
              creatorAut: ['Hanne Bloch'],
              creatorSort: ['Bloch, Hanne'],
              subjectDK5: ['64.17'],
              subjectDK5Text: ['Særlige retter'],
              audience: ['voksenmaterialer'],
              version: ['1. udgave, 1. oplag'],
              publisher: ['Gyldendal', 'for Coop Danmark'],
              date: ['2005'],
              typeBibDKType: ['Bog'],
              format: ['illustreret i farver'],
              extent: ['60 sider'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              creator: ['Hanne Bloch'],
              pid: ['870970-basis:25729706'],
              language: ['Dansk'],
              title: ['Let og lækkert - fisk & skaldyr'],
              titleFull: ['Let og lækkert - fisk & skaldyr'],
              type: ['Bog'],
              workType: ['book']
            },
            {
              collection: ['775100-katalog:50686221'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  pid: ['775100-katalog:50686221'],
                  language: ['Dansk'],
                  title: ['Fisk og skaldyr'],
                  titleFull: ['Fisk og skaldyr'],
                  type: ['Bog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['50686221|870970'],
              identifierISBN: ['9788717043442'],
              acSource: ['Bibliotekskatalog'],
              source: ['Fish'],
              dcTitle: ['Fisk og skaldyr'],
              dcTitleFull: ['Fisk og skaldyr'],
              titleSeries: ['Hurtig i køkkenet'],
              alternative: [
                'Fisk & skaldyr',
                'Hurtig i køkkenet - fisk og skaldyr'
              ],
              creatorDkops: ['Emma Lewis'],
              creatorSort: ['Lewis, Emma'],
              subjectDK5: ['64.17'],
              subjectDK5Text: ['Særlige retter'],
              subjectDBCF: ['fisk', 'fiskeretter', 'skaldyr', 'skaldyrsretter'],
              subjectDBCO: ['kogebøger', 'opskrifter'],
              description: [
                'På omslaget: 360 opskrifter på 10, 20, 30 minutter',
                'Indhold: Snacks ; Hverdagsretter ; Weekendretter ; Sunde retter ; Gæsteretter'
              ],
              audience: ['voksenmaterialer'],
              version: ['1. oplag (2013)'],
              publisher: ['Nyt Nordisk Forlag Arnold Busck'],
              contributorDkops: ['Emma Lewis'],
              contributorTrl: ['Lars Thomas'],
              date: ['2013'],
              typeBibDKType: ['Bog'],
              format: ['illustreret i farver'],
              extent: ['288 sider'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              pid: ['775100-katalog:50686221'],
              language: ['Dansk'],
              title: ['Fisk og skaldyr'],
              titleFull: ['Fisk og skaldyr'],
              type: ['Bog'],
              workType: ['book']
            },
            {
              collection: ['870971-tsart:74013864'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Jørgen Mørup Jørgensen'],
                  pid: ['870971-tsart:74013864'],
                  language: ['Dansk'],
                  partOf: ['Naturens verden, 1991, nr. 8'],
                  title: [
                    'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
                  ],
                  titleFull: [
                    'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
                  ],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['74013864|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: [
                'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
              ],
              dcTitleFull: [
                'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
              ],
              dcCreator: ['Jørgen Mørup Jørgensen'],
              creatorSort: ['Mørup Jørgensen, Jørgen'],
              subjectDK5: ['58.6'],
              subjectDK5Text: ['Fisk'],
              subject: [
                'den blå fisk',
                'det elektrosensoriske sansesystem',
                'fisk',
                'sansefysiologi fisk'
              ],
              abstract: ['Latimeria'],
              audience: ['voksenmaterialer'],
              date: ['1991'],
              typeBibDKType: ['Tidsskriftsartikel'],
              extent: ['S. 303-308'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Naturens verden, 1991, nr. 8'],
              isPartOfISSN: ['0028-0895'],
              accessType: ['physical'],
              creator: ['Jørgen Mørup Jørgensen'],
              pid: ['870971-tsart:74013864'],
              language: ['Dansk'],
              partOf: ['Naturens verden, 1991, nr. 8'],
              title: ['Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'],
              titleFull: [
                'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
              ],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870971-tsart:82068902'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Inger Dalsgaard'],
                  pid: ['870971-tsart:82068902'],
                  language: ['Dansk'],
                  partOf: ['Fisk og hav, 1994 = Skrifter... nr. 45 (1994)'],
                  title: ['Sårinfektioner hos fisk'],
                  titleFull: [
                    'Sårinfektioner hos fisk : forekomst, årsag og betydning'
                  ],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['82068902|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: ['Sårinfektioner hos fisk'],
              dcTitleFull: [
                'Sårinfektioner hos fisk : forekomst, årsag og betydning'
              ],
              dcCreator: ['Inger Dalsgaard'],
              creatorSort: ['Dalsgaard, Inger'],
              subjectDK5: ['58.6'],
              subjectDK5Text: ['Fisk'],
              subject: [
                'Pisces',
                'chordater vertebrater',
                'fisk',
                'fiskesygdomme',
                'hvirveldyr',
                'infektioner veterinærmedicin',
                'sårinfektioner veterinærmedicin',
                'vertebrater'
              ],
              audience: ['voksenmaterialer'],
              date: ['1994'],
              typeBibDKType: ['Tidsskriftsartikel'],
              format: ['illustreret'],
              extent: ['S. 57-64'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Fisk og hav, 1994 = Skrifter... nr. 45 (1994)'],
              isPartOfISSN: ['0105-9211'],
              accessType: ['physical'],
              creator: ['Inger Dalsgaard'],
              pid: ['870971-tsart:82068902'],
              language: ['Dansk'],
              partOf: ['Fisk og hav, 1994 = Skrifter... nr. 45 (1994)'],
              title: ['Sårinfektioner hos fisk'],
              titleFull: [
                'Sårinfektioner hos fisk : forekomst, årsag og betydning'
              ],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870971-tsart:85745824'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Karin Møller-Olsen'],
                  pid: ['870971-tsart:85745824'],
                  language: ['Dansk'],
                  partOf: ['Fødevarenyt, Årg. 13, nr. 4 (2000)'],
                  title: [
                    'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
                  ],
                  titleFull: [
                    'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
                  ],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['85745824|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: [
                'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
              ],
              dcTitleFull: [
                'Plejehjemsbeboere har appetit på fisk : Mere fisk til flere danskere'
              ],
              dcCreator: ['Karin Møller-Olsen'],
              creatorSort: ['Møller-Olsen, Karin'],
              subjectDK5: ['61.38'],
              subjectDK5Text: ['Ernæring'],
              subjectDBCF: [
                'fisk',
                'hospitalskost',
                'kostforplejning',
                'plejehjem',
                'syge',
                'ældre'
              ],
              audience: ['voksenmaterialer'],
              date: ['2000'],
              typeBibDKType: ['Tidsskriftsartikel'],
              format: ['illustreret'],
              extent: ['S. 4-7'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Fødevarenyt, Årg. 13, nr. 4 (2000)'],
              isPartOfISSN: ['1398-0599'],
              accessType: ['physical'],
              creator: ['Karin Møller-Olsen'],
              pid: ['870971-tsart:85745824'],
              language: ['Dansk'],
              partOf: ['Fødevarenyt, Årg. 13, nr. 4 (2000)'],
              title: [
                'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
              ],
              titleFull: [
                'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
              ],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870971-tsart:89196078'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Lene Torp'],
                  pid: ['870971-tsart:89196078'],
                  language: ['Dansk'],
                  partOf: ['Tænk, 2006, nr. 68'],
                  title: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
                  titleFull: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['89196078|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
              dcTitleFull: ['Ugegammel frisk fisk : Farvel til frisk fisk'],
              dcCreator: ['Lene Torp', 'Erik Valeur'],
              creatorSort: ['Torp, Lene', 'Valeur, Erik'],
              subjectDK5: ['63.9'],
              subjectDK5Text: ['Erhvervsfiskeri og -jagt'],
              subjectDBCF: [
                'fisk',
                'fiskehandel',
                'forbrugere',
                'handel',
                'kvalitet'
              ],
              audience: ['voksenmaterialer'],
              date: ['2006'],
              typeBibDKType: ['Tidsskriftsartikel'],
              format: ['illustreret'],
              extent: ['S. 22-28'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Tænk, 2006, nr. 68'],
              isPartOfISSN: ['1604-6307'],
              accessType: ['physical'],
              creator: ['Lene Torp'],
              pid: ['870971-tsart:89196078'],
              language: ['Dansk'],
              partOf: ['Tænk, 2006, nr. 68'],
              title: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
              titleFull: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870970-basis:24879577'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  pid: ['870970-basis:24879577'],
                  language: ['Dansk'],
                  title: ['Minikogebogen - fisk & skaldyr'],
                  titleFull: ['Minikogebogen - fisk & skaldyr'],
                  type: ['Bog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['24879577|870970'],
              identifierISBN: ['87-91296-58-7'],
              acSource: ['Bibliotekskatalog'],
              source: ['Healthy eating - seafood'],
              dcTitle: ['Minikogebogen - fisk & skaldyr'],
              dcTitleFull: ['Minikogebogen - fisk & skaldyr'],
              titleSeries: ['Minikogebog'],
              alternative: [
                'Fisk & skaldyr',
                'Fisk og skaldyr',
                'Minikogebogen - fisk og skaldyr'
              ],
              subjectDK5: ['64.17'],
              subjectDK5Text: ['Særlige retter'],
              description: ['På omslaget: Hurtig & nem mad'],
              audience: ['voksenmaterialer'],
              publisher: ['Aktium', 'for Dansk Supermarked'],
              date: ['2003'],
              typeBibDKType: ['Bog'],
              format: ['illustreret i farver'],
              extent: ['48 sider'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              pid: ['870970-basis:24879577'],
              language: ['Dansk'],
              title: ['Minikogebogen - fisk & skaldyr'],
              titleFull: ['Minikogebogen - fisk & skaldyr'],
              type: ['Bog'],
              workType: ['book']
            },
            {
              collection: ['870970-basis:28442173'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Hanne Bloch'],
                  pid: ['870970-basis:28442173'],
                  language: ['Dansk'],
                  title: ['Fisk & skaldyr'],
                  titleFull: ['Fisk & skaldyr'],
                  type: ['Bog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['28442173|870970'],
              identifierISBN: ['9788702101171'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ['Fisk & skaldyr'],
              dcTitleFull: ['Fisk & skaldyr'],
              titleSeries: ['Gyldendals små kogebøger'],
              alternative: ['Fisk og skaldyr'],
              creatorAut: ['Hanne Bloch'],
              creatorSort: ['Bloch, Hanne'],
              subjectDK5: ['64.17'],
              subjectDK5Text: ['Særlige retter'],
              subjectDBCF: ['fisk', 'fiskeretter', 'skaldyr', 'skaldyrsretter'],
              subjectDBCO: ['kogebøger', 'opskrifter'],
              audience: ['voksenmaterialer'],
              version: ['2. udgave, 1. oplag (2010)'],
              publisher: ['Gyldendal'],
              contributorIll: ['Tine Duch'],
              date: ['2010'],
              typeBibDKType: ['Bog'],
              format: ['illustreret i farver'],
              extent: ['60 sider'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              creator: ['Hanne Bloch'],
              pid: ['870970-basis:28442173'],
              language: ['Dansk'],
              title: ['Fisk & skaldyr'],
              titleFull: ['Fisk & skaldyr'],
              type: ['Bog'],
              workType: ['book']
            },
            {
              collection: ['870970-basis:21676748'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Shu-Bi-Dua'],
                  pid: ['870970-basis:21676748'],
                  title: ['Her lugter lidt af fisk'],
                  titleFull: ['Her lugter lidt af fisk'],
                  type: ['Cd (musik)'],
                  workType: ['music']
                }
              ],
              acIdentifier: ['21676748|870970'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ['Her lugter lidt af fisk'],
              dcTitleFull: ['Her lugter lidt af fisk'],
              dcCreator: ['Shu-Bi-Dua'],
              creatorSort: ['Shu-Bi-Dua'],
              subjectDK5: ['78.794:5'],
              subjectDK5Text: ['Rock (Beat). Moderne folkemusik (Folk)'],
              shelfMusicshelf: ['Rock'],
              audience: ['voksenmaterialer'],
              publisher: ['CMC'],
              contributor: ['CeeJay', 'Lars Pedersen (f. 1970)'],
              date: ['1997'],
              typeBibDKType: ['Cd (musik)'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              hasPartTrack: [
                'Fisk (album version)',
                'Fisk (Chief 1 remix)',
                'Fisk (CeeJay remix)'
              ],
              accessType: ['physical'],
              creator: ['Shu-Bi-Dua'],
              pid: ['870970-basis:21676748'],
              title: ['Her lugter lidt af fisk'],
              titleFull: ['Her lugter lidt af fisk'],
              type: ['Cd (musik)'],
              workType: ['music']
            },
            {
              collection: ['870970-basis:22784897'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  pid: ['870970-basis:22784897'],
                  language: ['Dansk'],
                  title: ['Opskrifter med fisk'],
                  titleFull: [
                    'Opskrifter med fisk : gerne flere gange om ugen'
                  ],
                  type: ['Bog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['22784897|870970'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ['Opskrifter med fisk'],
              dcTitleFull: ['Opskrifter med fisk : gerne flere gange om ugen'],
              subjectDK5: ['64.17'],
              subjectDK5Text: ['Særlige retter'],
              subjectDBCF: ['fisk', 'fiskeretter'],
              subjectDBCO: ['kogebøger'],
              audience: ['voksenmaterialer'],
              publisher: ['s.n.'],
              date: ['199?'],
              typeBibDKType: ['Bog'],
              format: ['illustreret'],
              extent: ['20 sider'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              pid: ['870970-basis:22784897'],
              language: ['Dansk'],
              title: ['Opskrifter med fisk'],
              titleFull: ['Opskrifter med fisk : gerne flere gange om ugen'],
              type: ['Bog'],
              workType: ['book']
            },
            {
              collection: ['870970-basis:43878581'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  pid: ['870970-basis:43878581'],
                  title: ['Fisk i vandet'],
                  titleFull: ['Fisk i vandet'],
                  type: ['Puslespil'],
                  workType: ['other']
                }
              ],
              acIdentifier: ['43878581|870970'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ['Fisk i vandet'],
              dcTitleFull: ['Fisk i vandet (Goula)'],
              subjectDK5Text: ['Skønlitteratur'],
              subject: ['puslespil'],
              subjectDK5: ['sk'],
              abstract: ['Knoppuslespil. Fisk og søstjerne'],
              audienceAge: ['Fra 2 år'],
              audience: ['voksenmaterialer'],
              publisher: ['Goula'],
              date: ['200?'],
              typeBibDKType: ['Puslespil'],
              format: ['1 plade, 4 brikker, træ, farve'],
              accessType: ['physical'],
              pid: ['870970-basis:43878581'],
              title: ['Fisk i vandet'],
              titleFull: ['Fisk i vandet'],
              type: ['Puslespil'],
              workType: ['other']
            },
            {
              collection: ['870971-avis:36406186'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Philippe Grandjean'],
                  pid: ['870971-avis:36406186'],
                  language: ['Dansk'],
                  partOf: ['Politiken, 2015-02-28'],
                  title: ['Bør vi holde igen med fed fisk?'],
                  titleFull: ['Bør vi holde igen med fed fisk?'],
                  type: ['Avisartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['36406186|870971'],
              acSource: ['Avisartikler'],
              dcTitle: ['Bør vi holde igen med fed fisk?'],
              dcTitleFull: ['Bør vi holde igen med fed fisk?'],
              creatorAut: ['Philippe Grandjean', 'Lotte Lauritzen'],
              creatorSort: ['Grandjean, Philippe', 'Lauritzen, Lotte'],
              subjectDK5: ['61.38'],
              subjectDK5Text: ['Ernæring'],
              subjectDBCF: [
                'ernæring',
                'fisk',
                'kost',
                'kviksølv',
                'kviksølvforurening',
                'sundhed'
              ],
              abstract: [
                'Danskerne spiser mere fisk. I 2013 blev der solgt 1.100 tons flere ferske fisk end året før. Alligevel spiser få fisk som hovedret to gange om ugen, sådan som Fødevarestyrelsen anbefaler. Men er det overhovedet sundt at spise fisk fra de forurenede have? Forskerne ser forskelligt på det'
              ],
              audience: ['voksenmaterialer'],
              date: ['2015'],
              typeBibDKType: ['Avisartikel'],
              format: ['illustreret'],
              extent: ['Sektion 4, s. 4'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Politiken, 2015-02-28'],
              isPartOfISSN: ['0907-1814'],
              accessType: ['physical'],
              creator: ['Philippe Grandjean'],
              pid: ['870971-avis:36406186'],
              language: ['Dansk'],
              partOf: ['Politiken, 2015-02-28'],
              title: ['Bør vi holde igen med fed fisk?'],
              titleFull: ['Bør vi holde igen med fed fisk?'],
              type: ['Avisartikel'],
              workType: ['article']
            },
            {
              collection: ['870970-basis:42253227'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  pid: ['870970-basis:42253227'],
                  language: ['Dansk'],
                  title: ['Kend din fisk'],
                  titleFull: [
                    'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk'
                  ],
                  type: ['Bog (bind 1)'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['42253227|870970'],
              identifierISBN: ['87-89796-31-4'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ['Kend din fisk'],
              dcTitleFull: [
                'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk. Bind 1'
              ],
              subjectDK5: ['58.6'],
              subjectDK5Text: ['Fisk'],
              subjectDBCF: ['fisk', 'fødevarer', 'håndbøger', 'skaldyr'],
              abstract: [
                'Et opslagsværk, der kan tilføre kokke og andre en grundlæggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udførligt for at fastholde kravet til kvalitet'
              ],
              audience: ['voksenmaterialer'],
              publisher: ['HORESTA'],
              contributor: ['Claus Jacobsen', 'Kurt Prentow', 'HORESTA'],
              date: ['2000'],
              typeBibDKType: ['Bog'],
              format: ['illustreret i farver'],
              extent: ['144 sider', '2 bind'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              pid: ['870970-basis:42253227'],
              language: ['Dansk'],
              title: ['Kend din fisk'],
              titleFull: [
                'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk'
              ],
              type: ['Bog (bind 1)'],
              workType: ['book']
            },
            {
              collection: ['870970-basis:42253235'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  pid: ['870970-basis:42253235'],
                  language: ['Dansk'],
                  title: ['Kend din fisk'],
                  titleFull: [
                    'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk'
                  ],
                  type: ['Bog (bind 2)'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['42253235|870970'],
              identifierISBN: ['87-89796-33-0'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ['Kend din fisk'],
              dcTitleFull: [
                'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk. Bind 2'
              ],
              subjectDK5: ['58.6'],
              subjectDK5Text: ['Fisk'],
              subjectDBCF: ['fisk', 'fødevarer', 'håndbøger', 'skaldyr'],
              abstract: [
                'Et opslagsværk, der kan tilføre kokke og andre en grundlæggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udførligt for at fastholde kravet til kvalitet'
              ],
              audience: ['voksenmaterialer'],
              publisher: ['HORESTA'],
              contributor: ['Kurt Prentow', 'HORESTA'],
              date: ['2000'],
              typeBibDKType: ['Bog'],
              format: ['illustreret i farver'],
              extent: ['208 sider', '2 bind'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              pid: ['870970-basis:42253235'],
              language: ['Dansk'],
              title: ['Kend din fisk'],
              titleFull: [
                'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk'
              ],
              type: ['Bog (bind 2)'],
              workType: ['book']
            },
            {
              collection: ['870970-basis:52710332'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Lars Anker Angantyr'],
                  pid: ['870970-basis:52710332'],
                  language: ['Dansk'],
                  title: ["Hva' for en fisk?"],
                  titleFull: [
                    "Hva' for en fisk? : en dansk guide til fisk på koralrevet og i køledisken"
                  ],
                  type: ['Bog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['52710332|870970'],
              identifierISBN: ['9788799757305'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ["Hva' for en fisk?"],
              dcTitleFull: [
                "Hva' for en fisk? : en dansk guide til fisk på koralrevet og i køledisken"
              ],
              alternative: ['Hvad for en fisk?'],
              creatorAut: ['Lars Anker Angantyr'],
              creatorSort: ['Angantyr, Lars Anker'],
              subjectDK5: ['58.6'],
              subjectDK5Text: ['Fisk'],
              subjectDBCF: ['fisk', 'koralrev'],
              abstract: [
                'En guide til alverdens fisk på koralrevet med navne på dansk, engelsk og latin'
              ],
              description: ['På titelsiden: Aqua-Bio'],
              audience: ['voksenmaterialer'],
              version: ['1. oplag (2016)'],
              publisher: ['Life Publishing'],
              date: ['2016'],
              typeBibDKType: ['Bog'],
              format: ['illustreret i farver'],
              extent: ['104 sider'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              creator: ['Lars Anker Angantyr'],
              pid: ['870970-basis:52710332'],
              language: ['Dansk'],
              title: ["Hva' for en fisk?"],
              titleFull: [
                "Hva' for en fisk? : en dansk guide til fisk på koralrevet og i køledisken"
              ],
              type: ['Bog'],
              workType: ['book']
            },
            {
              collection: ['870970-basis:53388507', '870970-basis:53388493'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Kristine Marie Jensen (f. 1858)'],
                  pid: ['870970-basis:53388507'],
                  language: ['Dansk'],
                  title: ['Fisk & vildt'],
                  titleFull: [
                    'Fisk & vildt : frøken Jensens kogebog siden 1901'
                  ],
                  type: ['Bog'],
                  workType: ['book']
                },
                {
                  accessType: ['online'],
                  creator: ['Kristine Marie Jensen (f. 1858)'],
                  pid: ['870970-basis:53388493'],
                  language: ['Dansk'],
                  title: ['Fisk & vildt'],
                  titleFull: [
                    'Fisk & vildt : frøken Jensens kogebog siden 1901'
                  ],
                  type: ['Ebog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['53388507|870970'],
              identifierISBN: ['9788702233025'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ['Fisk & vildt'],
              dcTitleFull: ['Fisk & vildt : frøken Jensens kogebog siden 1901'],
              alternative: [
                'Frøken Jensens kogebog - fisk & vildt',
                'Fisk og vildt'
              ],
              creatorAut: ['Kristine Marie Jensen (f. 1858)'],
              creatorSort: ['Jensen, Kristine Marie (f. 1858)'],
              subjectDK5: ['64.17'],
              subjectDK5Text: ['Særlige retter'],
              subjectDBCF: ['fisk', 'fiskeretter', 'vildt', 'vildtretter'],
              subjectDBCO: ['kogebøger', 'opskrifter'],
              abstract: [
                'Et stort udvalg af de bedste opskrifter på fisk og vildt. Revideret, så den passer til den moderne families ønsker og madvaner'
              ],
              audience: ['voksenmaterialer'],
              version: ['1. udgave, 1. oplag (2017)'],
              publisher: ['Gyldendal'],
              contributorEdt: ['Nanna Simonsen (f. 1956)', 'Ulla Selfort'],
              contributorDkbea: ['Nanna Simonsen (f. 1956)'],
              date: ['2017'],
              typeBibDKType: ['Bog'],
              extent: ['48 sider'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              creator: ['Kristine Marie Jensen (f. 1858)'],
              pid: ['870970-basis:53388507'],
              language: ['Dansk'],
              title: ['Fisk & vildt'],
              titleFull: ['Fisk & vildt : frøken Jensens kogebog siden 1901'],
              type: ['Bog'],
              workType: ['book']
            },
            {
              collection: ['870971-tsart:71296709'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Jørgen Riis-Vestergård'],
                  pid: ['870971-tsart:71296709'],
                  language: ['Dansk'],
                  partOf: ['Fisk og hav, 1981/83'],
                  title: ['Vand- og saltbalance hos fisk'],
                  titleFull: ['Vand- og saltbalance hos fisk'],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['71296709|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: ['Vand- og saltbalance hos fisk'],
              dcTitleFull: ['Vand- og saltbalance hos fisk'],
              dcCreator: ['Jørgen Riis-Vestergård'],
              creatorSort: ['Riis-Vestergård, Jørgen'],
              subjectDK5: ['58.6'],
              subjectDK5Text: ['Fisk'],
              subject: [
                'Pisces',
                'chordater vertebrater',
                'fisk',
                'hvirveldyr',
                'saltbalance fisk',
                'vandbalance fisk',
                'vertebrater'
              ],
              abstract: [
                'Saltvandsfisk må for at overleve aktivt udskille salt og optage vand - for ferskvandsfisk er det omvendt'
              ],
              audience: ['voksenmaterialer'],
              date: ['1981'],
              typeBibDKType: ['Tidsskriftsartikel'],
              format: ['illustreret'],
              extent: ['S. 16-21'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Fisk og hav, 1981/83'],
              isPartOfISSN: ['0105-9211'],
              accessType: ['physical'],
              creator: ['Jørgen Riis-Vestergård'],
              pid: ['870971-tsart:71296709'],
              language: ['Dansk'],
              partOf: ['Fisk og hav, 1981/83'],
              title: ['Vand- og saltbalance hos fisk'],
              titleFull: ['Vand- og saltbalance hos fisk'],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870971-tsart:86775085'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Jette Nielsen'],
                  pid: ['870971-tsart:86775085'],
                  language: ['Dansk'],
                  partOf: ['Fisk og hav, nr. 54 (2002)'],
                  title: ['God og dårlig frossen fisk'],
                  titleFull: [
                    'God og dårlig frossen fisk : hvorfor er der forskel?'
                  ],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['86775085|870971'],
              identifierURI: [
                'http://www.dfu.min.dk/dk/publication/files/22122003$FH54lores.pdf'
              ],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: ['God og dårlig frossen fisk'],
              dcTitleFull: [
                'God og dårlig frossen fisk : hvorfor er der forskel?'
              ],
              dcCreator: ['Flemming Jessen', 'Jette Nielsen'],
              creatorSort: ['Jessen, Flemming', 'Nielsen, Jette'],
              subjectDK5: ['66.85'],
              subjectDK5Text: ['Slagteri. Kød- og fiskeindustri'],
              subjectDBCF: [
                'fisk',
                'fiskeindustri',
                'frossen fisk',
                'frysning',
                'kvalitet',
                'kølelagring',
                'lagring'
              ],
              audience: ['voksenmaterialer'],
              date: ['2002'],
              typeBibDKType: ['Tidsskriftsartikel'],
              format: ['illustreret'],
              extent: ['S. 16-25'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Fisk og hav, nr. 54 (2002)'],
              isPartOfISSN: ['0105-9211'],
              accessType: ['physical'],
              creator: ['Jette Nielsen'],
              pid: ['870971-tsart:86775085'],
              language: ['Dansk'],
              partOf: ['Fisk og hav, nr. 54 (2002)'],
              title: ['God og dårlig frossen fisk'],
              titleFull: [
                'God og dårlig frossen fisk : hvorfor er der forskel?'
              ],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870970-basis:51644557'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Nina Marie Villadsen'],
                  pid: ['870970-basis:51644557'],
                  language: ['Dansk'],
                  title: ["Adamsen's nordisk fisk"],
                  titleFull: ["Adamsen's nordisk fisk : på den nemme måde"],
                  type: ['Bog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['51644557|870970'],
              identifierISBN: ['9788799637416'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ["Adamsen's nordisk fisk"],
              dcTitleFull: ["Adamsen's nordisk fisk : på den nemme måde"],
              alternative: ['Nordisk fisk'],
              creatorAut: ['Nina Marie Villadsen'],
              creatorSort: ['Villadsen, Nina Marie'],
              subjectDK5: ['64.17'],
              subjectDK5Text: ['Særlige retter'],
              subjectDBCF: ['fisk', 'fiskeretter'],
              subjectDBCO: ['kogebøger', 'opskrifter'],
              abstract: [
                'Fiskeopskrifter som fx havkat, torsk, laks, blæksprutte samt fotos og beskrivelse af dem'
              ],
              audience: ['voksenmaterialer'],
              version: ['1. udgave'],
              publisher: ['Wiegaarden Media'],
              contributorDkops: ["Adamsen's Fisk"],
              contributor: ['Wiegaarden Media'],
              contributorPht: ['Annette Boe Østergaard'],
              date: ['2015'],
              typeBibDKType: ['Bog'],
              format: ['illustreret i farver'],
              extent: ['95 sider'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              creator: ['Nina Marie Villadsen'],
              pid: ['870970-basis:51644557'],
              language: ['Dansk'],
              title: ["Adamsen's nordisk fisk"],
              titleFull: ["Adamsen's nordisk fisk : på den nemme måde"],
              type: ['Bog'],
              workType: ['book']
            },
            {
              collection: ['870970-basis:22060139'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  pid: ['870970-basis:22060139'],
                  language: ['Dansk'],
                  title: ['Walt Disney præsenterer Hiawatha og den store fisk'],
                  titleFull: [
                    'Walt Disney præsenterer Hiawatha og den store fisk'
                  ],
                  type: ['Bog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['22060139|870970'],
              identifierISBN: ['87-608-0385-1'],
              acSource: ['Bibliotekskatalog'],
              dcTitle: ['Walt Disney præsenterer Hiawatha og den store fisk'],
              dcTitleFull: [
                'Walt Disney præsenterer Hiawatha og den store fisk'
              ],
              titleSeries: ["Anders And's bogklub"],
              alternative: [
                'Hiawatha og den store fisk',
                'Lille Hiawatha og den store fisk'
              ],
              subjectDK5Text: ['Skønlitteratur'],
              subjectDK5: ['sk'],
              description: [
                'Oversat fra amerikansk',
                'Rygtitel: Hiawatha og den store fisk'
              ],
              audience: ['børnematerialer'],
              publisher: ['Egmont Wangel'],
              contributor: ['Walt Disney firma'],
              date: ['1997'],
              typeBibDKType: ['Bog'],
              format: ['alle illustreret i farver'],
              extent: ['44 sider'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              accessType: ['physical'],
              pid: ['870970-basis:22060139'],
              language: ['Dansk'],
              title: ['Walt Disney præsenterer Hiawatha og den store fisk'],
              titleFull: ['Walt Disney præsenterer Hiawatha og den store fisk'],
              type: ['Bog'],
              workType: ['book']
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
                collection: ['870970-basis:25729706'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Hanne Bloch'],
                    pid: ['870970-basis:25729706'],
                    language: ['Dansk'],
                    title: ['Let og lækkert - fisk & skaldyr'],
                    titleFull: ['Let og lækkert - fisk & skaldyr'],
                    type: ['Bog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['25729706|870970'],
                identifierISBN: ['87-00-76819-7'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ['Let og lækkert - fisk & skaldyr'],
                dcTitleFull: ['Let og lækkert - fisk & skaldyr'],
                titleSeries: ['Let og lækkert ; 27'],
                alternative: [
                  'Fisk & skaldyr',
                  'Fisk og skaldyr',
                  'Let og lækkert - fisk og skaldyr'
                ],
                creatorAut: ['Hanne Bloch'],
                creatorSort: ['Bloch, Hanne'],
                subjectDK5: ['64.17'],
                subjectDK5Text: ['Særlige retter'],
                audience: ['voksenmaterialer'],
                version: ['1. udgave, 1. oplag'],
                publisher: ['Gyldendal', 'for Coop Danmark'],
                date: ['2005'],
                typeBibDKType: ['Bog'],
                format: ['illustreret i farver'],
                extent: ['60 sider'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                creator: ['Hanne Bloch'],
                pid: ['870970-basis:25729706'],
                language: ['Dansk'],
                title: ['Let og lækkert - fisk & skaldyr'],
                titleFull: ['Let og lækkert - fisk & skaldyr'],
                type: ['Bog'],
                workType: ['book']
              },
              {
                collection: ['775100-katalog:50686221'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    pid: ['775100-katalog:50686221'],
                    language: ['Dansk'],
                    title: ['Fisk og skaldyr'],
                    titleFull: ['Fisk og skaldyr'],
                    type: ['Bog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['50686221|870970'],
                identifierISBN: ['9788717043442'],
                acSource: ['Bibliotekskatalog'],
                source: ['Fish'],
                dcTitle: ['Fisk og skaldyr'],
                dcTitleFull: ['Fisk og skaldyr'],
                titleSeries: ['Hurtig i køkkenet'],
                alternative: [
                  'Fisk & skaldyr',
                  'Hurtig i køkkenet - fisk og skaldyr'
                ],
                creatorDkops: ['Emma Lewis'],
                creatorSort: ['Lewis, Emma'],
                subjectDK5: ['64.17'],
                subjectDK5Text: ['Særlige retter'],
                subjectDBCF: [
                  'fisk',
                  'fiskeretter',
                  'skaldyr',
                  'skaldyrsretter'
                ],
                subjectDBCO: ['kogebøger', 'opskrifter'],
                description: [
                  'På omslaget: 360 opskrifter på 10, 20, 30 minutter',
                  'Indhold: Snacks ; Hverdagsretter ; Weekendretter ; Sunde retter ; Gæsteretter'
                ],
                audience: ['voksenmaterialer'],
                version: ['1. oplag (2013)'],
                publisher: ['Nyt Nordisk Forlag Arnold Busck'],
                contributorDkops: ['Emma Lewis'],
                contributorTrl: ['Lars Thomas'],
                date: ['2013'],
                typeBibDKType: ['Bog'],
                format: ['illustreret i farver'],
                extent: ['288 sider'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                pid: ['775100-katalog:50686221'],
                language: ['Dansk'],
                title: ['Fisk og skaldyr'],
                titleFull: ['Fisk og skaldyr'],
                type: ['Bog'],
                workType: ['book']
              },
              {
                collection: ['870971-tsart:74013864'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Jørgen Mørup Jørgensen'],
                    pid: ['870971-tsart:74013864'],
                    language: ['Dansk'],
                    partOf: ['Naturens verden, 1991, nr. 8'],
                    title: [
                      'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
                    ],
                    titleFull: [
                      'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
                    ],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['74013864|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: [
                  'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
                ],
                dcTitleFull: [
                  'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
                ],
                dcCreator: ['Jørgen Mørup Jørgensen'],
                creatorSort: ['Mørup Jørgensen, Jørgen'],
                subjectDK5: ['58.6'],
                subjectDK5Text: ['Fisk'],
                subject: [
                  'den blå fisk',
                  'det elektrosensoriske sansesystem',
                  'fisk',
                  'sansefysiologi fisk'
                ],
                abstract: ['Latimeria'],
                audience: ['voksenmaterialer'],
                date: ['1991'],
                typeBibDKType: ['Tidsskriftsartikel'],
                extent: ['S. 303-308'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Naturens verden, 1991, nr. 8'],
                isPartOfISSN: ['0028-0895'],
                accessType: ['physical'],
                creator: ['Jørgen Mørup Jørgensen'],
                pid: ['870971-tsart:74013864'],
                language: ['Dansk'],
                partOf: ['Naturens verden, 1991, nr. 8'],
                title: [
                  'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
                ],
                titleFull: [
                  'Elektroreceptorer hos Den blå Fisk og andre hvirveldyr'
                ],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870971-tsart:82068902'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Inger Dalsgaard'],
                    pid: ['870971-tsart:82068902'],
                    language: ['Dansk'],
                    partOf: ['Fisk og hav, 1994 = Skrifter... nr. 45 (1994)'],
                    title: ['Sårinfektioner hos fisk'],
                    titleFull: [
                      'Sårinfektioner hos fisk : forekomst, årsag og betydning'
                    ],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['82068902|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: ['Sårinfektioner hos fisk'],
                dcTitleFull: [
                  'Sårinfektioner hos fisk : forekomst, årsag og betydning'
                ],
                dcCreator: ['Inger Dalsgaard'],
                creatorSort: ['Dalsgaard, Inger'],
                subjectDK5: ['58.6'],
                subjectDK5Text: ['Fisk'],
                subject: [
                  'Pisces',
                  'chordater vertebrater',
                  'fisk',
                  'fiskesygdomme',
                  'hvirveldyr',
                  'infektioner veterinærmedicin',
                  'sårinfektioner veterinærmedicin',
                  'vertebrater'
                ],
                audience: ['voksenmaterialer'],
                date: ['1994'],
                typeBibDKType: ['Tidsskriftsartikel'],
                format: ['illustreret'],
                extent: ['S. 57-64'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Fisk og hav, 1994 = Skrifter... nr. 45 (1994)'],
                isPartOfISSN: ['0105-9211'],
                accessType: ['physical'],
                creator: ['Inger Dalsgaard'],
                pid: ['870971-tsart:82068902'],
                language: ['Dansk'],
                partOf: ['Fisk og hav, 1994 = Skrifter... nr. 45 (1994)'],
                title: ['Sårinfektioner hos fisk'],
                titleFull: [
                  'Sårinfektioner hos fisk : forekomst, årsag og betydning'
                ],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870971-tsart:85745824'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Karin Møller-Olsen'],
                    pid: ['870971-tsart:85745824'],
                    language: ['Dansk'],
                    partOf: ['Fødevarenyt, Årg. 13, nr. 4 (2000)'],
                    title: [
                      'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
                    ],
                    titleFull: [
                      'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
                    ],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['85745824|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: [
                  'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
                ],
                dcTitleFull: [
                  'Plejehjemsbeboere har appetit på fisk : Mere fisk til flere danskere'
                ],
                dcCreator: ['Karin Møller-Olsen'],
                creatorSort: ['Møller-Olsen, Karin'],
                subjectDK5: ['61.38'],
                subjectDK5Text: ['Ernæring'],
                subjectDBCF: [
                  'fisk',
                  'hospitalskost',
                  'kostforplejning',
                  'plejehjem',
                  'syge',
                  'ældre'
                ],
                audience: ['voksenmaterialer'],
                date: ['2000'],
                typeBibDKType: ['Tidsskriftsartikel'],
                format: ['illustreret'],
                extent: ['S. 4-7'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Fødevarenyt, Årg. 13, nr. 4 (2000)'],
                isPartOfISSN: ['1398-0599'],
                accessType: ['physical'],
                creator: ['Karin Møller-Olsen'],
                pid: ['870971-tsart:85745824'],
                language: ['Dansk'],
                partOf: ['Fødevarenyt, Årg. 13, nr. 4 (2000)'],
                title: [
                  'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
                ],
                titleFull: [
                  'Plejehjemsbeboere har appetit på fisk. Mere fisk til flere danskere'
                ],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870971-tsart:89196078'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Lene Torp'],
                    pid: ['870971-tsart:89196078'],
                    language: ['Dansk'],
                    partOf: ['Tænk, 2006, nr. 68'],
                    title: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
                    titleFull: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['89196078|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
                dcTitleFull: ['Ugegammel frisk fisk : Farvel til frisk fisk'],
                dcCreator: ['Lene Torp', 'Erik Valeur'],
                creatorSort: ['Torp, Lene', 'Valeur, Erik'],
                subjectDK5: ['63.9'],
                subjectDK5Text: ['Erhvervsfiskeri og -jagt'],
                subjectDBCF: [
                  'fisk',
                  'fiskehandel',
                  'forbrugere',
                  'handel',
                  'kvalitet'
                ],
                audience: ['voksenmaterialer'],
                date: ['2006'],
                typeBibDKType: ['Tidsskriftsartikel'],
                format: ['illustreret'],
                extent: ['S. 22-28'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Tænk, 2006, nr. 68'],
                isPartOfISSN: ['1604-6307'],
                accessType: ['physical'],
                creator: ['Lene Torp'],
                pid: ['870971-tsart:89196078'],
                language: ['Dansk'],
                partOf: ['Tænk, 2006, nr. 68'],
                title: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
                titleFull: ['Ugegammel frisk fisk. Farvel til frisk fisk'],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870970-basis:24879577'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    pid: ['870970-basis:24879577'],
                    language: ['Dansk'],
                    title: ['Minikogebogen - fisk & skaldyr'],
                    titleFull: ['Minikogebogen - fisk & skaldyr'],
                    type: ['Bog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['24879577|870970'],
                identifierISBN: ['87-91296-58-7'],
                acSource: ['Bibliotekskatalog'],
                source: ['Healthy eating - seafood'],
                dcTitle: ['Minikogebogen - fisk & skaldyr'],
                dcTitleFull: ['Minikogebogen - fisk & skaldyr'],
                titleSeries: ['Minikogebog'],
                alternative: [
                  'Fisk & skaldyr',
                  'Fisk og skaldyr',
                  'Minikogebogen - fisk og skaldyr'
                ],
                subjectDK5: ['64.17'],
                subjectDK5Text: ['Særlige retter'],
                description: ['På omslaget: Hurtig & nem mad'],
                audience: ['voksenmaterialer'],
                publisher: ['Aktium', 'for Dansk Supermarked'],
                date: ['2003'],
                typeBibDKType: ['Bog'],
                format: ['illustreret i farver'],
                extent: ['48 sider'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                pid: ['870970-basis:24879577'],
                language: ['Dansk'],
                title: ['Minikogebogen - fisk & skaldyr'],
                titleFull: ['Minikogebogen - fisk & skaldyr'],
                type: ['Bog'],
                workType: ['book']
              },
              {
                collection: ['870970-basis:28442173'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Hanne Bloch'],
                    pid: ['870970-basis:28442173'],
                    language: ['Dansk'],
                    title: ['Fisk & skaldyr'],
                    titleFull: ['Fisk & skaldyr'],
                    type: ['Bog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['28442173|870970'],
                identifierISBN: ['9788702101171'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ['Fisk & skaldyr'],
                dcTitleFull: ['Fisk & skaldyr'],
                titleSeries: ['Gyldendals små kogebøger'],
                alternative: ['Fisk og skaldyr'],
                creatorAut: ['Hanne Bloch'],
                creatorSort: ['Bloch, Hanne'],
                subjectDK5: ['64.17'],
                subjectDK5Text: ['Særlige retter'],
                subjectDBCF: [
                  'fisk',
                  'fiskeretter',
                  'skaldyr',
                  'skaldyrsretter'
                ],
                subjectDBCO: ['kogebøger', 'opskrifter'],
                audience: ['voksenmaterialer'],
                version: ['2. udgave, 1. oplag (2010)'],
                publisher: ['Gyldendal'],
                contributorIll: ['Tine Duch'],
                date: ['2010'],
                typeBibDKType: ['Bog'],
                format: ['illustreret i farver'],
                extent: ['60 sider'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                creator: ['Hanne Bloch'],
                pid: ['870970-basis:28442173'],
                language: ['Dansk'],
                title: ['Fisk & skaldyr'],
                titleFull: ['Fisk & skaldyr'],
                type: ['Bog'],
                workType: ['book']
              },
              {
                collection: ['870970-basis:21676748'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Shu-Bi-Dua'],
                    pid: ['870970-basis:21676748'],
                    title: ['Her lugter lidt af fisk'],
                    titleFull: ['Her lugter lidt af fisk'],
                    type: ['Cd (musik)'],
                    workType: ['music']
                  }
                ],
                acIdentifier: ['21676748|870970'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ['Her lugter lidt af fisk'],
                dcTitleFull: ['Her lugter lidt af fisk'],
                dcCreator: ['Shu-Bi-Dua'],
                creatorSort: ['Shu-Bi-Dua'],
                subjectDK5: ['78.794:5'],
                subjectDK5Text: ['Rock (Beat). Moderne folkemusik (Folk)'],
                shelfMusicshelf: ['Rock'],
                audience: ['voksenmaterialer'],
                publisher: ['CMC'],
                contributor: ['CeeJay', 'Lars Pedersen (f. 1970)'],
                date: ['1997'],
                typeBibDKType: ['Cd (musik)'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                hasPartTrack: [
                  'Fisk (album version)',
                  'Fisk (Chief 1 remix)',
                  'Fisk (CeeJay remix)'
                ],
                accessType: ['physical'],
                creator: ['Shu-Bi-Dua'],
                pid: ['870970-basis:21676748'],
                title: ['Her lugter lidt af fisk'],
                titleFull: ['Her lugter lidt af fisk'],
                type: ['Cd (musik)'],
                workType: ['music']
              },
              {
                collection: ['870970-basis:22784897'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    pid: ['870970-basis:22784897'],
                    language: ['Dansk'],
                    title: ['Opskrifter med fisk'],
                    titleFull: [
                      'Opskrifter med fisk : gerne flere gange om ugen'
                    ],
                    type: ['Bog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['22784897|870970'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ['Opskrifter med fisk'],
                dcTitleFull: [
                  'Opskrifter med fisk : gerne flere gange om ugen'
                ],
                subjectDK5: ['64.17'],
                subjectDK5Text: ['Særlige retter'],
                subjectDBCF: ['fisk', 'fiskeretter'],
                subjectDBCO: ['kogebøger'],
                audience: ['voksenmaterialer'],
                publisher: ['s.n.'],
                date: ['199?'],
                typeBibDKType: ['Bog'],
                format: ['illustreret'],
                extent: ['20 sider'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                pid: ['870970-basis:22784897'],
                language: ['Dansk'],
                title: ['Opskrifter med fisk'],
                titleFull: ['Opskrifter med fisk : gerne flere gange om ugen'],
                type: ['Bog'],
                workType: ['book']
              },
              {
                collection: ['870970-basis:43878581'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    pid: ['870970-basis:43878581'],
                    title: ['Fisk i vandet'],
                    titleFull: ['Fisk i vandet'],
                    type: ['Puslespil'],
                    workType: ['other']
                  }
                ],
                acIdentifier: ['43878581|870970'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ['Fisk i vandet'],
                dcTitleFull: ['Fisk i vandet (Goula)'],
                subjectDK5Text: ['Skønlitteratur'],
                subject: ['puslespil'],
                subjectDK5: ['sk'],
                abstract: ['Knoppuslespil. Fisk og søstjerne'],
                audienceAge: ['Fra 2 år'],
                audience: ['voksenmaterialer'],
                publisher: ['Goula'],
                date: ['200?'],
                typeBibDKType: ['Puslespil'],
                format: ['1 plade, 4 brikker, træ, farve'],
                accessType: ['physical'],
                pid: ['870970-basis:43878581'],
                title: ['Fisk i vandet'],
                titleFull: ['Fisk i vandet'],
                type: ['Puslespil'],
                workType: ['other']
              },
              {
                collection: ['870971-avis:36406186'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Philippe Grandjean'],
                    pid: ['870971-avis:36406186'],
                    language: ['Dansk'],
                    partOf: ['Politiken, 2015-02-28'],
                    title: ['Bør vi holde igen med fed fisk?'],
                    titleFull: ['Bør vi holde igen med fed fisk?'],
                    type: ['Avisartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['36406186|870971'],
                acSource: ['Avisartikler'],
                dcTitle: ['Bør vi holde igen med fed fisk?'],
                dcTitleFull: ['Bør vi holde igen med fed fisk?'],
                creatorAut: ['Philippe Grandjean', 'Lotte Lauritzen'],
                creatorSort: ['Grandjean, Philippe', 'Lauritzen, Lotte'],
                subjectDK5: ['61.38'],
                subjectDK5Text: ['Ernæring'],
                subjectDBCF: [
                  'ernæring',
                  'fisk',
                  'kost',
                  'kviksølv',
                  'kviksølvforurening',
                  'sundhed'
                ],
                abstract: [
                  'Danskerne spiser mere fisk. I 2013 blev der solgt 1.100 tons flere ferske fisk end året før. Alligevel spiser få fisk som hovedret to gange om ugen, sådan som Fødevarestyrelsen anbefaler. Men er det overhovedet sundt at spise fisk fra de forurenede have? Forskerne ser forskelligt på det'
                ],
                audience: ['voksenmaterialer'],
                date: ['2015'],
                typeBibDKType: ['Avisartikel'],
                format: ['illustreret'],
                extent: ['Sektion 4, s. 4'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Politiken, 2015-02-28'],
                isPartOfISSN: ['0907-1814'],
                accessType: ['physical'],
                creator: ['Philippe Grandjean'],
                pid: ['870971-avis:36406186'],
                language: ['Dansk'],
                partOf: ['Politiken, 2015-02-28'],
                title: ['Bør vi holde igen med fed fisk?'],
                titleFull: ['Bør vi holde igen med fed fisk?'],
                type: ['Avisartikel'],
                workType: ['article']
              },
              {
                collection: ['870970-basis:42253227'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    pid: ['870970-basis:42253227'],
                    language: ['Dansk'],
                    title: ['Kend din fisk'],
                    titleFull: [
                      'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk'
                    ],
                    type: ['Bog (bind 1)'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['42253227|870970'],
                identifierISBN: ['87-89796-31-4'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ['Kend din fisk'],
                dcTitleFull: [
                  'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk. Bind 1'
                ],
                subjectDK5: ['58.6'],
                subjectDK5Text: ['Fisk'],
                subjectDBCF: ['fisk', 'fødevarer', 'håndbøger', 'skaldyr'],
                abstract: [
                  'Et opslagsværk, der kan tilføre kokke og andre en grundlæggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udførligt for at fastholde kravet til kvalitet'
                ],
                audience: ['voksenmaterialer'],
                publisher: ['HORESTA'],
                contributor: ['Claus Jacobsen', 'Kurt Prentow', 'HORESTA'],
                date: ['2000'],
                typeBibDKType: ['Bog'],
                format: ['illustreret i farver'],
                extent: ['144 sider', '2 bind'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                pid: ['870970-basis:42253227'],
                language: ['Dansk'],
                title: ['Kend din fisk'],
                titleFull: [
                  'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk'
                ],
                type: ['Bog (bind 1)'],
                workType: ['book']
              },
              {
                collection: ['870970-basis:42253235'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    pid: ['870970-basis:42253235'],
                    language: ['Dansk'],
                    title: ['Kend din fisk'],
                    titleFull: [
                      'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk'
                    ],
                    type: ['Bog (bind 2)'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['42253235|870970'],
                identifierISBN: ['87-89796-33-0'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ['Kend din fisk'],
                dcTitleFull: [
                  'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk. Bind 2'
                ],
                subjectDK5: ['58.6'],
                subjectDK5Text: ['Fisk'],
                subjectDBCF: ['fisk', 'fødevarer', 'håndbøger', 'skaldyr'],
                abstract: [
                  'Et opslagsværk, der kan tilføre kokke og andre en grundlæggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udførligt for at fastholde kravet til kvalitet'
                ],
                audience: ['voksenmaterialer'],
                publisher: ['HORESTA'],
                contributor: ['Kurt Prentow', 'HORESTA'],
                date: ['2000'],
                typeBibDKType: ['Bog'],
                format: ['illustreret i farver'],
                extent: ['208 sider', '2 bind'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                pid: ['870970-basis:42253235'],
                language: ['Dansk'],
                title: ['Kend din fisk'],
                titleFull: [
                  'Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk'
                ],
                type: ['Bog (bind 2)'],
                workType: ['book']
              },
              {
                collection: ['870970-basis:52710332'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Lars Anker Angantyr'],
                    pid: ['870970-basis:52710332'],
                    language: ['Dansk'],
                    title: ["Hva' for en fisk?"],
                    titleFull: [
                      "Hva' for en fisk? : en dansk guide til fisk på koralrevet og i køledisken"
                    ],
                    type: ['Bog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['52710332|870970'],
                identifierISBN: ['9788799757305'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ["Hva' for en fisk?"],
                dcTitleFull: [
                  "Hva' for en fisk? : en dansk guide til fisk på koralrevet og i køledisken"
                ],
                alternative: ['Hvad for en fisk?'],
                creatorAut: ['Lars Anker Angantyr'],
                creatorSort: ['Angantyr, Lars Anker'],
                subjectDK5: ['58.6'],
                subjectDK5Text: ['Fisk'],
                subjectDBCF: ['fisk', 'koralrev'],
                abstract: [
                  'En guide til alverdens fisk på koralrevet med navne på dansk, engelsk og latin'
                ],
                description: ['På titelsiden: Aqua-Bio'],
                audience: ['voksenmaterialer'],
                version: ['1. oplag (2016)'],
                publisher: ['Life Publishing'],
                date: ['2016'],
                typeBibDKType: ['Bog'],
                format: ['illustreret i farver'],
                extent: ['104 sider'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                creator: ['Lars Anker Angantyr'],
                pid: ['870970-basis:52710332'],
                language: ['Dansk'],
                title: ["Hva' for en fisk?"],
                titleFull: [
                  "Hva' for en fisk? : en dansk guide til fisk på koralrevet og i køledisken"
                ],
                type: ['Bog'],
                workType: ['book']
              },
              {
                collection: ['870970-basis:53388507', '870970-basis:53388493'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Kristine Marie Jensen (f. 1858)'],
                    pid: ['870970-basis:53388507'],
                    language: ['Dansk'],
                    title: ['Fisk & vildt'],
                    titleFull: [
                      'Fisk & vildt : frøken Jensens kogebog siden 1901'
                    ],
                    type: ['Bog'],
                    workType: ['book']
                  },
                  {
                    accessType: ['online'],
                    creator: ['Kristine Marie Jensen (f. 1858)'],
                    pid: ['870970-basis:53388493'],
                    language: ['Dansk'],
                    title: ['Fisk & vildt'],
                    titleFull: [
                      'Fisk & vildt : frøken Jensens kogebog siden 1901'
                    ],
                    type: ['Ebog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['53388507|870970'],
                identifierISBN: ['9788702233025'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ['Fisk & vildt'],
                dcTitleFull: [
                  'Fisk & vildt : frøken Jensens kogebog siden 1901'
                ],
                alternative: [
                  'Frøken Jensens kogebog - fisk & vildt',
                  'Fisk og vildt'
                ],
                creatorAut: ['Kristine Marie Jensen (f. 1858)'],
                creatorSort: ['Jensen, Kristine Marie (f. 1858)'],
                subjectDK5: ['64.17'],
                subjectDK5Text: ['Særlige retter'],
                subjectDBCF: ['fisk', 'fiskeretter', 'vildt', 'vildtretter'],
                subjectDBCO: ['kogebøger', 'opskrifter'],
                abstract: [
                  'Et stort udvalg af de bedste opskrifter på fisk og vildt. Revideret, så den passer til den moderne families ønsker og madvaner'
                ],
                audience: ['voksenmaterialer'],
                version: ['1. udgave, 1. oplag (2017)'],
                publisher: ['Gyldendal'],
                contributorEdt: ['Nanna Simonsen (f. 1956)', 'Ulla Selfort'],
                contributorDkbea: ['Nanna Simonsen (f. 1956)'],
                date: ['2017'],
                typeBibDKType: ['Bog'],
                extent: ['48 sider'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                creator: ['Kristine Marie Jensen (f. 1858)'],
                pid: ['870970-basis:53388507'],
                language: ['Dansk'],
                title: ['Fisk & vildt'],
                titleFull: ['Fisk & vildt : frøken Jensens kogebog siden 1901'],
                type: ['Bog'],
                workType: ['book']
              },
              {
                collection: ['870971-tsart:71296709'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Jørgen Riis-Vestergård'],
                    pid: ['870971-tsart:71296709'],
                    language: ['Dansk'],
                    partOf: ['Fisk og hav, 1981/83'],
                    title: ['Vand- og saltbalance hos fisk'],
                    titleFull: ['Vand- og saltbalance hos fisk'],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['71296709|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: ['Vand- og saltbalance hos fisk'],
                dcTitleFull: ['Vand- og saltbalance hos fisk'],
                dcCreator: ['Jørgen Riis-Vestergård'],
                creatorSort: ['Riis-Vestergård, Jørgen'],
                subjectDK5: ['58.6'],
                subjectDK5Text: ['Fisk'],
                subject: [
                  'Pisces',
                  'chordater vertebrater',
                  'fisk',
                  'hvirveldyr',
                  'saltbalance fisk',
                  'vandbalance fisk',
                  'vertebrater'
                ],
                abstract: [
                  'Saltvandsfisk må for at overleve aktivt udskille salt og optage vand - for ferskvandsfisk er det omvendt'
                ],
                audience: ['voksenmaterialer'],
                date: ['1981'],
                typeBibDKType: ['Tidsskriftsartikel'],
                format: ['illustreret'],
                extent: ['S. 16-21'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Fisk og hav, 1981/83'],
                isPartOfISSN: ['0105-9211'],
                accessType: ['physical'],
                creator: ['Jørgen Riis-Vestergård'],
                pid: ['870971-tsart:71296709'],
                language: ['Dansk'],
                partOf: ['Fisk og hav, 1981/83'],
                title: ['Vand- og saltbalance hos fisk'],
                titleFull: ['Vand- og saltbalance hos fisk'],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870971-tsart:86775085'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Jette Nielsen'],
                    pid: ['870971-tsart:86775085'],
                    language: ['Dansk'],
                    partOf: ['Fisk og hav, nr. 54 (2002)'],
                    title: ['God og dårlig frossen fisk'],
                    titleFull: [
                      'God og dårlig frossen fisk : hvorfor er der forskel?'
                    ],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['86775085|870971'],
                identifierURI: [
                  'http://www.dfu.min.dk/dk/publication/files/22122003$FH54lores.pdf'
                ],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: ['God og dårlig frossen fisk'],
                dcTitleFull: [
                  'God og dårlig frossen fisk : hvorfor er der forskel?'
                ],
                dcCreator: ['Flemming Jessen', 'Jette Nielsen'],
                creatorSort: ['Jessen, Flemming', 'Nielsen, Jette'],
                subjectDK5: ['66.85'],
                subjectDK5Text: ['Slagteri. Kød- og fiskeindustri'],
                subjectDBCF: [
                  'fisk',
                  'fiskeindustri',
                  'frossen fisk',
                  'frysning',
                  'kvalitet',
                  'kølelagring',
                  'lagring'
                ],
                audience: ['voksenmaterialer'],
                date: ['2002'],
                typeBibDKType: ['Tidsskriftsartikel'],
                format: ['illustreret'],
                extent: ['S. 16-25'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Fisk og hav, nr. 54 (2002)'],
                isPartOfISSN: ['0105-9211'],
                accessType: ['physical'],
                creator: ['Jette Nielsen'],
                pid: ['870971-tsart:86775085'],
                language: ['Dansk'],
                partOf: ['Fisk og hav, nr. 54 (2002)'],
                title: ['God og dårlig frossen fisk'],
                titleFull: [
                  'God og dårlig frossen fisk : hvorfor er der forskel?'
                ],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870970-basis:51644557'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Nina Marie Villadsen'],
                    pid: ['870970-basis:51644557'],
                    language: ['Dansk'],
                    title: ["Adamsen's nordisk fisk"],
                    titleFull: ["Adamsen's nordisk fisk : på den nemme måde"],
                    type: ['Bog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['51644557|870970'],
                identifierISBN: ['9788799637416'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ["Adamsen's nordisk fisk"],
                dcTitleFull: ["Adamsen's nordisk fisk : på den nemme måde"],
                alternative: ['Nordisk fisk'],
                creatorAut: ['Nina Marie Villadsen'],
                creatorSort: ['Villadsen, Nina Marie'],
                subjectDK5: ['64.17'],
                subjectDK5Text: ['Særlige retter'],
                subjectDBCF: ['fisk', 'fiskeretter'],
                subjectDBCO: ['kogebøger', 'opskrifter'],
                abstract: [
                  'Fiskeopskrifter som fx havkat, torsk, laks, blæksprutte samt fotos og beskrivelse af dem'
                ],
                audience: ['voksenmaterialer'],
                version: ['1. udgave'],
                publisher: ['Wiegaarden Media'],
                contributorDkops: ["Adamsen's Fisk"],
                contributor: ['Wiegaarden Media'],
                contributorPht: ['Annette Boe Østergaard'],
                date: ['2015'],
                typeBibDKType: ['Bog'],
                format: ['illustreret i farver'],
                extent: ['95 sider'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                creator: ['Nina Marie Villadsen'],
                pid: ['870970-basis:51644557'],
                language: ['Dansk'],
                title: ["Adamsen's nordisk fisk"],
                titleFull: ["Adamsen's nordisk fisk : på den nemme måde"],
                type: ['Bog'],
                workType: ['book']
              },
              {
                collection: ['870970-basis:22060139'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    pid: ['870970-basis:22060139'],
                    language: ['Dansk'],
                    title: [
                      'Walt Disney præsenterer Hiawatha og den store fisk'
                    ],
                    titleFull: [
                      'Walt Disney præsenterer Hiawatha og den store fisk'
                    ],
                    type: ['Bog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['22060139|870970'],
                identifierISBN: ['87-608-0385-1'],
                acSource: ['Bibliotekskatalog'],
                dcTitle: ['Walt Disney præsenterer Hiawatha og den store fisk'],
                dcTitleFull: [
                  'Walt Disney præsenterer Hiawatha og den store fisk'
                ],
                titleSeries: ["Anders And's bogklub"],
                alternative: [
                  'Hiawatha og den store fisk',
                  'Lille Hiawatha og den store fisk'
                ],
                subjectDK5Text: ['Skønlitteratur'],
                subjectDK5: ['sk'],
                description: [
                  'Oversat fra amerikansk',
                  'Rygtitel: Hiawatha og den store fisk'
                ],
                audience: ['børnematerialer'],
                publisher: ['Egmont Wangel'],
                contributor: ['Walt Disney firma'],
                date: ['1997'],
                typeBibDKType: ['Bog'],
                format: ['alle illustreret i farver'],
                extent: ['44 sider'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                accessType: ['physical'],
                pid: ['870970-basis:22060139'],
                language: ['Dansk'],
                title: ['Walt Disney præsenterer Hiawatha og den store fisk'],
                titleFull: [
                  'Walt Disney præsenterer Hiawatha og den store fisk'
                ],
                type: ['Bog'],
                workType: ['book']
              }
            ]
          }
        );
        done();
      });
  });
});
