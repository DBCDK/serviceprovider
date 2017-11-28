/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: search {"q":"harry ","fields":["identifier","title","collection","subjectDBCF","hasAdaptation","coverUrlFull"],"sort":"rank_title"}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  services: {
    ddbcmsapi: 'http://rest.filmstriben.dbc.inlead.dk/web/',
    moreinfo: 'http://moreinfo.addi.dk/2.6/',
    openagency: 'http://openagency.addi.dk/2.24/',
    openholdingstatus: 'https://openholdingstatus.addi.dk/2.2/',
    PRODopenorder: 'https://openorder.addi.dk/2.7.1/',
    openorder: 'https://openorder.addi.dk/test_2.7.1/',
    opensearch: 'http://opensearch.addi.dk/b3.0_4.2/',
    openuserstatus: 'https://openuserstatus.addi.dk/1.5/',
    rank: 'https://xptest.dbc.dk/ms/rank/v1',
    suggestpopular: 'http://xptest.dbc.dk/ms/entity-pop/v1',
    suggestcreator: 'http://xptest.dbc.dk/ms/entity-suggest/v1/creator',
    suggestlibrary: 'http://xptest.dbc.dk/ms/entity-suggest/v1/library',
    suggestsubject: 'http://xptest.dbc.dk/ms/entity-suggest/v1/subject',
    recommendurls: {
      default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1',
      popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1'
    }
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
    agency: '100451',
    id: 'XXXXX',
    pin: 'XXXXX',
    salt: 'XXXXX'
  },
  app: {
    clientid: 'XXXXX',
    ddbcmsapipassword: 'XXXXX',
    orderpolicyrequester: '190101'
  }
};
const provider = Provider();
const mockData = {
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>harry </ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      <ns1:sort>rank_title</ns1:sort>\\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"10134"},"collectionCount":{"$":"10"},"more":{"$":"true"},"sortUsed":{"$":"rank_title"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"70678594|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Motoren Harry","@":"dc"},{"$":"Motoren Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Anders Mose Poulsen","@":"dc"},{"$":"Mose Poulsen, Anders","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Jensen, Harry, f. 1921","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Jensen","@":"dc"},{"$":"Jensen, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"}],"abstract":[{"$":"Harry Motor","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"contributor":[{"$":"Harry Jensen","@type":{"$":"dkdcplus:ive","@":"xsi"},"@":"dc"}],"date":[{"$":"1982","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"Ill.","@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Morgenposten, 1982-10-24","@":"dcterms"},{"$":"1399-8595","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:70678594"},"primaryObjectIdentifier":{"$":"870971-avis:70678594"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:70678594"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Harry Jensen"},"fedoraPid":{"$":"870971-avis:70678594"},"identifier":{"$":"870971-avis:70678594"},"language":{"$":"Dansk"},"partOf":{"$":"Morgenposten, 1982-10-24"},"title":{"$":"Motoren Harry"},"titleFull":{"$":"Motoren Harry"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"70055848|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Kupfer","@":"dc"},{"$":"Harry Kupfer","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Gabor Halasz","@":"dc"},{"$":"Halasz, Gabor","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Kupfer, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Kupfer","@":"dc"},{"$":"Kupfer, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1982","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 26-27","@":"dcterms"}],"language":[{"$":"ger","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Tysk","@":"dc"}],"isPartOf":[{"$":"Opernwelt, Bd. 23, nr. 12 (1982)","@":"dcterms"},{"$":"0030-3690","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:70055848"},"primaryObjectIdentifier":{"$":"870971-tsart:70055848"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:70055848"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Gabor Halasz"},"fedoraPid":{"$":"870971-tsart:70055848"},"identifier":{"$":"870971-tsart:70055848"},"language":{"$":"Tysk"},"partOf":{"$":"Opernwelt, Bd. 23, nr. 12 (1982)"},"title":{"$":"Harry Kupfer"},"titleFull":{"$":"Harry Kupfer"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"10367573|870970","@":"ac"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry Martinson","@":"dc"},{"$":"Harry Martinson","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Lars Ulvenstam","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Ulvenstam, Lars","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Martinson, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Martinson","@":"dc"},{"$":"Martinson, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Bonnier","@":"dc"}],"date":[{"$":"1950","@":"dc"}],"type":[{"$":"Bog","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"}],"@":"dkabm"},"identifier":{"$":"870970-basis:10367573"},"primaryObjectIdentifier":{"$":"870970-basis:10367573"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:10367573"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Lars Ulvenstam"},"fedoraPid":{"$":"870970-basis:10367573"},"identifier":{"$":"870970-basis:10367573"},"language":{"$":"Svensk"},"title":{"$":"Harry Martinson"},"titleFull":{"$":"Harry Martinson"},"type":{"$":"Bog"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"70055813|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Kullman","@":"dc"},{"$":"Harry Kullman","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Kenneth Carlsson","@":"dc"},{"$":"Carlsson, Kenneth","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Kullman, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Kullman","@":"dc"},{"$":"Kullman, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"},{"$":"kriminallitteratur","@":"dc"},{"$":"svensk litteratur","@":"dc"},{"$":"ungdomslitteratur","@":"dc"}],"abstract":[{"$":"Svensk ungdoms- og kriminalforfatter","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1982","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 36-43","@":"dcterms"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"}],"isPartOf":[{"$":"Jury, 1982, nr. 2","@":"dcterms"},{"$":"0345-5734","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:70055813"},"primaryObjectIdentifier":{"$":"870971-tsart:70055813"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:70055813"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Kenneth Carlsson"},"fedoraPid":{"$":"870971-tsart:70055813"},"identifier":{"$":"870971-tsart:70055813"},"language":{"$":"Svensk"},"partOf":{"$":"Jury, 1982, nr. 2"},"title":{"$":"Harry Kullman"},"titleFull":{"$":"Harry Kullman"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"5"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"80487940|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Carlsson","@":"dc"},{"$":"Harry Carlsson","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Ulf Gudmundsen","@":"dc"},{"$":"Gudmundsen, Ulf","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Carlsson, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Carlsson","@":"dc"},{"$":"Carlsson, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Dansk surrealistisk maler","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1991","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 14","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Hrymfaxe, \\u00c5rg. 21, nr. 3 (1991)","@":"dcterms"},{"$":"0901-5795","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"spatial":[{"$":"Danmark malerkunst","@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:80487940"},"primaryObjectIdentifier":{"$":"870971-tsart:80487940"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:80487940"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Ulf Gudmundsen"},"fedoraPid":{"$":"870971-tsart:80487940"},"identifier":{"$":"870971-tsart:80487940"},"language":{"$":"Dansk"},"partOf":{"$":"Hrymfaxe, \\u00c5rg. 21, nr. 3 (1991)"},"title":{"$":"Harry Carlsson"},"titleFull":{"$":"Harry Carlsson"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"6"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"36616636|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Harrison","@":"dc"},{"$":"Harry Harrison","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Klaus \\u00c6. Mogensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Mogensen, Klaus \\u00c6.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Harrison, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Harrison","@":"dc"},{"$":"Harrison, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"amerikansk litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"science fiction","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Portr\\u00e6t af den amerikanske forfatter","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2015","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 41-43","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Himmelskibet, Nr. 45 (2015)","@":"dcterms"},{"$":"1603-5836","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:36616636"},"primaryObjectIdentifier":{"$":"870971-tsart:36616636"},"recordStatus":{"$":"active"},"creationDate":{"$":"2015-09-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:36616636"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Klaus \\u00c6. Mogensen"},"fedoraPid":{"$":"870971-tsart:36616636"},"identifier":{"$":"870971-tsart:36616636"},"language":{"$":"Dansk"},"partOf":{"$":"Himmelskibet, Nr. 45 (2015)"},"title":{"$":"Harry Harrison"},"titleFull":{"$":"Harry Harrison"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"7"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"87319946|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Harry Potter","@":"dc"},{"$":"Harry Potter","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Christian Monggaard","@":"dc"},{"$":"Monggaard, Christian","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Rowling, Joanne K.","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Potter og F\\u00f8nixordenen","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Joanne K. Rowling","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"b\\u00f8rnelitteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"engelsk litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"\\u00c5rsager til Harry Potter-b\\u00f8gernes succes","@":"dcterms"}],"description":[{"$":"I anledning af det 5. bind i serien: \\"Harry Potter og F\\u00f8niksordenen\\"","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2003","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"S. 9","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Information, 2003-06-21","@":"dcterms"},{"$":"1602-2572","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:87319946"},"primaryObjectIdentifier":{"$":"870971-avis:87319946"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:87319946"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"online"},"creator":{"$":"Christian Monggaard"},"fedoraPid":{"$":"870971-avis:87319946"},"identifier":{"$":"870971-avis:87319946"},"language":{"$":"Dansk"},"partOf":{"$":"Information, 2003-06-21"},"title":{"$":"Harry Potter"},"titleFull":{"$":"Harry Potter"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"8"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"36317140|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Dynamit Harry","@":"dc"},{"$":"Dynamit Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Poul H\\u00f8i","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"H\\u00f8i, Poul","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"61.28","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Nervefysiologi","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Potter, Harry","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"empati","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"f\\u00f8lelser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"hjernen","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"litter\\u00e6re personer","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"psykologi","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Empati er en mangelvare hos Islamisk Stat, empati-neuronerne t\\u00e6nder simpelthen ikke i helligkrigernes hjerner, n\\u00e5r de ser andre lide. Men if\\u00f8lge forskere er der en modgift: De skal l\\u00e6se b\\u00f8ger om Harry Potter","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"Sektion 2, s. 8-9","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Berlingske tidende, 2014-12-26","@":"dcterms"},{"$":"0106-4223","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:36317140"},"primaryObjectIdentifier":{"$":"870971-avis:36317140"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-12-29"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:36317140"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"online"},"creator":{"$":"Poul H\\u00f8i"},"fedoraPid":{"$":"870971-avis:36317140"},"identifier":{"$":"870971-avis:36317140"},"language":{"$":"Dansk"},"partOf":{"$":"Berlingske tidende, 2014-12-26"},"title":{"$":"Dynamit Harry"},"titleFull":{"$":"Dynamit Harry"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"9"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"24520471|870970","@":"ac"},{"$":"http:\\/\\/harrypotter.warnerbros.com\\/","@type":{"$":"dcterms:URI","@":"xsi"},"@":"dc"}],"source":[{"$":"Bibliotekskatalog","@":"ac"}],"title":[{"$":"Harry Potter","@":"dc"},{"$":"Harry Potter","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Rowling, Joanne K.","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Potter-film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Joanne K. Rowling","@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"amerikansk film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"engelsk litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"eventyrlige fort\\u00e6llinger","@":"dc"},{"$":"fantastisk litteratur","@":"dc"},{"$":"fantasy","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"film","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"magi","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"mystik","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"trolddom","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"troldm\\u00e6nd","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Filmselskabets officielle amerikanske  side om Harry Potter. Med bl.a. spil, lege, skoleaktiviteter og videoklip","@":"dcterms"}],"description":[{"$":"Ajourf\\u00f8res","@":"dc"},{"$":"Registreret 26.2.2003","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"publisher":[{"$":"Warnerbros.","@":"dc"}],"date":[{"$":"2000","@":"dc"}],"type":[{"$":"Netdokument","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"language":[{"$":"eng","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Engelsk","@":"dc"}],"temporal":[{"$":"1990-1999","@type":{"$":"dkdcplus:DBCP","@":"xsi"},"@":"dcterms"},{"$":"2000-2009","@type":{"$":"dkdcplus:DBCP","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870970-basis:24520471"},"primaryObjectIdentifier":{"$":"870970-basis:24520471"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870970-basis:24520471"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"online"},"fedoraPid":{"$":"870970-basis:24520471"},"identifier":{"$":"870970-basis:24520471"},"language":{"$":"Engelsk"},"title":{"$":"Harry Potter"},"titleFull":{"$":"Harry Potter"},"type":{"$":"Netdokument"},"workType":{"$":"book"}}]}}},{"collection":{"resultPosition":{"$":"10"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"88657357|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Nielsen","@":"dc"},{"$":"Harry Nielsen","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Nikolaj Zeuthen","@":"dc"},{"$":"Zeuthen, Nikolaj","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"86","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Dansk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"dansk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2005","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"S. 49-52","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Den bl\\u00e5 port, 2005, nr. 67","@":"dcterms"},{"$":"0900-8160","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:88657357"},"primaryObjectIdentifier":{"$":"870971-tsart:88657357"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-10-27"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:88657357"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Nikolaj Zeuthen"},"fedoraPid":{"$":"870971-tsart:88657357"},"identifier":{"$":"870971-tsart:88657357"},"language":{"$":"Dansk"},"partOf":{"$":"Den bl\\u00e5 port, 2005, nr. 67"},"title":{"$":"Harry Nielsen"},"titleFull":{"$":"Harry Nielsen"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"40"},"fedoraRecordsRead":{"$":"2"},"time":{"$":"0.219382"},"trackingId":{"$":"2016-12-08T15:46:02:315408:9470"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["opensearch","<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\"http://schemas.xmlsoap.org/soap/envelope/\\" xmlns:ns1=\\"http://oss.dbc.dk/ns/opensearch\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>harry </ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      <ns1:sort>rank_title</ns1:sort>\\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n"]':
    '{"searchResponse":{"result":{"hitCount":{"$":"2597"},"collectionCount":{"$":"10"},"more":{"$":"true"},"sortUsed":{"$":"rank_title"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"70678594|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Motoren Harry","@":"dc"},{"$":"Motoren Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Anders Mose Poulsen","@":"dc"},{"$":"Mose Poulsen, Anders","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Jensen, Harry, f. 1921","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Jensen","@":"dc"},{"$":"Jensen, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"}],"abstract":[{"$":"Harry Motor","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"contributor":[{"$":"Harry Jensen","@type":{"$":"dkdcplus:ive","@":"xsi"},"@":"dc"}],"date":[{"$":"1982","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"Ill.","@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Morgenposten, 1982-10-24","@":"dcterms"},{"$":"1399-8595","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:70678594"},"primaryObjectIdentifier":{"$":"870971-avis:70678594"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:70678594"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Harry Jensen"},"fedoraPid":{"$":"870971-avis:70678594"},"identifier":{"$":"870971-avis:70678594"},"language":{"$":"Dansk"},"partOf":{"$":"Morgenposten, 1982-10-24"},"title":{"$":"Motoren Harry"},"titleFull":{"$":"Motoren Harry"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"70055848|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Kupfer","@":"dc"},{"$":"Harry Kupfer","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Gabor Halasz","@":"dc"},{"$":"Halasz, Gabor","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Kupfer, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Kupfer","@":"dc"},{"$":"Kupfer, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1982","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 26-27","@":"dcterms"}],"language":[{"$":"ger","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Tysk","@":"dc"}],"isPartOf":[{"$":"Opernwelt, Bd. 23, nr. 12 (1982)","@":"dcterms"},{"$":"0030-3690","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:70055848"},"primaryObjectIdentifier":{"$":"870971-tsart:70055848"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:70055848"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Gabor Halasz"},"fedoraPid":{"$":"870971-tsart:70055848"},"identifier":{"$":"870971-tsart:70055848"},"language":{"$":"Tysk"},"partOf":{"$":"Opernwelt, Bd. 23, nr. 12 (1982)"},"title":{"$":"Harry Kupfer"},"titleFull":{"$":"Harry Kupfer"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"70055813|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Kullman","@":"dc"},{"$":"Harry Kullman","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Kenneth Carlsson","@":"dc"},{"$":"Carlsson, Kenneth","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Kullman, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Kullman","@":"dc"},{"$":"Kullman, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"},{"$":"kriminallitteratur","@":"dc"},{"$":"svensk litteratur","@":"dc"},{"$":"ungdomslitteratur","@":"dc"}],"abstract":[{"$":"Svensk ungdoms- og kriminalforfatter","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1982","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 36-43","@":"dcterms"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"}],"isPartOf":[{"$":"Jury, 1982, nr. 2","@":"dcterms"},{"$":"0345-5734","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:70055813"},"primaryObjectIdentifier":{"$":"870971-tsart:70055813"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:70055813"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Kenneth Carlsson"},"fedoraPid":{"$":"870971-tsart:70055813"},"identifier":{"$":"870971-tsart:70055813"},"language":{"$":"Svensk"},"partOf":{"$":"Jury, 1982, nr. 2"},"title":{"$":"Harry Kullman"},"titleFull":{"$":"Harry Kullman"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"80487940|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Carlsson","@":"dc"},{"$":"Harry Carlsson","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Ulf Gudmundsen","@":"dc"},{"$":"Gudmundsen, Ulf","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Carlsson, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Carlsson","@":"dc"},{"$":"Carlsson, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Dansk surrealistisk maler","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1991","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 14","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Hrymfaxe, \\u00c5rg. 21, nr. 3 (1991)","@":"dcterms"},{"$":"0901-5795","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"spatial":[{"$":"Danmark malerkunst","@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:80487940"},"primaryObjectIdentifier":{"$":"870971-tsart:80487940"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:80487940"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Ulf Gudmundsen"},"fedoraPid":{"$":"870971-tsart:80487940"},"identifier":{"$":"870971-tsart:80487940"},"language":{"$":"Dansk"},"partOf":{"$":"Hrymfaxe, \\u00c5rg. 21, nr. 3 (1991)"},"title":{"$":"Harry Carlsson"},"titleFull":{"$":"Harry Carlsson"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"5"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"36616636|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Harrison","@":"dc"},{"$":"Harry Harrison","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Klaus \\u00c6. Mogensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Mogensen, Klaus \\u00c6.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Harrison, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Harrison","@":"dc"},{"$":"Harrison, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"amerikansk litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"science fiction","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Portr\\u00e6t af den amerikanske forfatter","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2015","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 41-43","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Himmelskibet, Nr. 45 (2015)","@":"dcterms"},{"$":"1603-5836","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:36616636"},"primaryObjectIdentifier":{"$":"870971-tsart:36616636"},"recordStatus":{"$":"active"},"creationDate":{"$":"2015-09-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:36616636"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Klaus \\u00c6. Mogensen"},"fedoraPid":{"$":"870971-tsart:36616636"},"identifier":{"$":"870971-tsart:36616636"},"language":{"$":"Dansk"},"partOf":{"$":"Himmelskibet, Nr. 45 (2015)"},"title":{"$":"Harry Harrison"},"titleFull":{"$":"Harry Harrison"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"6"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"87319946|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Harry Potter","@":"dc"},{"$":"Harry Potter","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Christian Monggaard","@":"dc"},{"$":"Monggaard, Christian","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Rowling, Joanne K.","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Potter og F\\u00f8nixordenen","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Joanne K. Rowling","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"b\\u00f8rnelitteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"engelsk litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"\\u00c5rsager til Harry Potter-b\\u00f8gernes succes","@":"dcterms"}],"description":[{"$":"I anledning af det 5. bind i serien: \\"Harry Potter og F\\u00f8niksordenen\\"","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2003","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"S. 9","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Information, 2003-06-21","@":"dcterms"},{"$":"1602-2572","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:87319946"},"primaryObjectIdentifier":{"$":"870971-avis:87319946"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-02"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:87319946"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"online"},"creator":{"$":"Christian Monggaard"},"fedoraPid":{"$":"870971-avis:87319946"},"identifier":{"$":"870971-avis:87319946"},"language":{"$":"Dansk"},"partOf":{"$":"Information, 2003-06-21"},"title":{"$":"Harry Potter"},"titleFull":{"$":"Harry Potter"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"7"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"36317140|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Dynamit Harry","@":"dc"},{"$":"Dynamit Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Poul H\\u00f8i","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"H\\u00f8i, Poul","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"61.28","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Nervefysiologi","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Potter, Harry","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"empati","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"f\\u00f8lelser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"hjernen","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"litter\\u00e6re personer","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"psykologi","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Empati er en mangelvare hos Islamisk Stat, empati-neuronerne t\\u00e6nder simpelthen ikke i helligkrigernes hjerner, n\\u00e5r de ser andre lide. Men if\\u00f8lge forskere er der en modgift: De skal l\\u00e6se b\\u00f8ger om Harry Potter","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"Sektion 2, s. 8-9","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Berlingske tidende, 2014-12-26","@":"dcterms"},{"$":"0106-4223","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:36317140"},"primaryObjectIdentifier":{"$":"870971-avis:36317140"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-12-29"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:36317140"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"online"},"creator":{"$":"Poul H\\u00f8i"},"fedoraPid":{"$":"870971-avis:36317140"},"identifier":{"$":"870971-avis:36317140"},"language":{"$":"Dansk"},"partOf":{"$":"Berlingske tidende, 2014-12-26"},"title":{"$":"Dynamit Harry"},"titleFull":{"$":"Dynamit Harry"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"8"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"88657357|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Nielsen","@":"dc"},{"$":"Harry Nielsen","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Nikolaj Zeuthen","@":"dc"},{"$":"Zeuthen, Nikolaj","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"86","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Dansk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"dansk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2005","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"S. 49-52","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Den bl\\u00e5 port, 2005, nr. 67","@":"dcterms"},{"$":"0900-8160","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:88657357"},"primaryObjectIdentifier":{"$":"870971-tsart:88657357"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-10-27"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:88657357"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Nikolaj Zeuthen"},"fedoraPid":{"$":"870971-tsart:88657357"},"identifier":{"$":"870971-tsart:88657357"},"language":{"$":"Dansk"},"partOf":{"$":"Den bl\\u00e5 port, 2005, nr. 67"},"title":{"$":"Harry Nielsen"},"titleFull":{"$":"Harry Nielsen"},"type":{"$":"Tidsskriftsartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"9"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"35460454|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Dirty Harry","@":"dc"},{"$":"Dirty Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Michael Bjerre","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Bjerre, Michael","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Henry, prins af Wales","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Henry (prins af Wales)","@":"dc"},{"$":"Henry (prins af Wales)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"kongehuset","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"milit\\u00e6rv\\u00e6sen","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Partyprins, drenger\\u00f8v, charmetrold og en soldat, der praler af at have sl\\u00e5et ihjel i Afghanistan. Prins Harry finder sig bedre tilpas som kaptajn end prins","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2013","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"Sektion 1, s. 14-15","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Berlingske tidende, 2013-01-27","@":"dcterms"},{"$":"0106-4223","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"spatial":[{"$":"England","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:35460454"},"primaryObjectIdentifier":{"$":"870971-avis:35460454"},"recordStatus":{"$":"active"},"creationDate":{"$":"2013-01-28"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:35460454"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"online"},"creator":{"$":"Michael Bjerre"},"fedoraPid":{"$":"870971-avis:35460454"},"identifier":{"$":"870971-avis:35460454"},"language":{"$":"Dansk"},"partOf":{"$":"Berlingske tidende, 2013-01-27"},"title":{"$":"Dirty Harry"},"titleFull":{"$":"Dirty Harry"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}},{"collection":{"resultPosition":{"$":"10"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"73850452|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"ang. Harry","@":"dc"},{"$":"ang. Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Niels Rohleder","@":"dc"},{"$":"Rohleder, Niels","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Tisch, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Tisch","@":"dc"},{"$":"Tisch, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"}],"abstract":[{"$":"For\\u00e5ret 1961: En gruppe danske kommunister, bl.a. Poul Emanuel, smuglede en visuml\\u00f8s \\u00f8sttysker i land i K\\u00f8benhavn. Tisch blev senere chef for DDR\'s fagbev\\u00e6gelse og politbureaumedlem i SED. Emanuel blev partisekret\\u00e6r i DKP. I dag sidder Tisch f\\u00e6ngslet i Berlin. Emanuel er efterl\\u00f8nsmodtager p\\u00e5 Amager","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1991","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Information, 1991-04-20","@":"dcterms"},{"$":"1602-2572","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"spatial":[{"$":"Tyskland (DDR) politisk system","@":"dcterms"},{"$":"Danmark politisk system","@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:73850452"},"primaryObjectIdentifier":{"$":"870971-avis:73850452"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:73850452"}]}}]},"formattedCollection":{"briefDisplay":{"manifestation":[{"accessType":{"$":"physical"},"creator":{"$":"Niels Rohleder"},"fedoraPid":{"$":"870971-avis:73850452"},"identifier":{"$":"870971-avis:73850452"},"language":{"$":"Dansk"},"partOf":{"$":"Information, 1991-04-20"},"title":{"$":"ang. Harry"},"titleFull":{"$":"ang. Harry"},"type":{"$":"Avisartikel"},"workType":{"$":"article"}}]}}}],"facetResult":null,"statInfo":{"fedoraRecordsCached":{"$":"44"},"fedoraRecordsRead":{"$":"16"},"time":{"$":"0.292704"},"trackingId":{"$":"2016-12-08T15:46:02:316144:457"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}',
  '["moreinfo",{"qs":{"action":"moreInfo","authenticationUser":"XXXXX","authenticationGroup":"XXXXX","authenticationPassword":"XXXXX","pidList":"870971-avis:70678594|870971-tsart:70055848|870971-tsart:70055813|870971-tsart:80487940|870971-tsart:36616636|870971-avis:87319946|870971-avis:36317140|870971-tsart:88657357|870971-avis:35460454|870971-avis:73850452","outputType":"json"}}]':
    '{"moreInfoResponse":{"requestStatus":{"statusEnum":{"$":"ok","@":"mi"},"errorText":{"$":"","@":"mi"},"@":"mi"},"identifierInformation":[{"identifierKnown":{"$":"false","@":"mi"},"identifier":{"pid":{"$":"870971-avis:70678594","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870971-tsart:70055848","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"true","@":"mi"},"identifier":{"pid":{"$":"870971-tsart:70055813","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"false","@":"mi"},"identifier":{"pid":{"$":"870971-tsart:80487940","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"false","@":"mi"},"identifier":{"pid":{"$":"870971-tsart:36616636","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"false","@":"mi"},"identifier":{"pid":{"$":"870971-avis:87319946","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"false","@":"mi"},"identifier":{"pid":{"$":"870971-avis:36317140","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"false","@":"mi"},"identifier":{"pid":{"$":"870971-tsart:88657357","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"false","@":"mi"},"identifier":{"pid":{"$":"870971-avis:35460454","@":"mi"},"@":"mi"},"@":"mi"},{"identifierKnown":{"$":"false","@":"mi"},"identifier":{"pid":{"$":"870971-avis:73850452","@":"mi"},"@":"mi"},"@":"mi"}],"@":"mi"},"@namespaces":{"mi":"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo"}}\n',
  '["opensearch",{"qs":{"action":"getObject","identifier":["870971-avis:70678594","870971-tsart:70055848","870971-tsart:70055813","870971-tsart:80487940","870971-tsart:36616636","870971-avis:87319946","870971-avis:36317140","870971-tsart:88657357","870971-avis:35460454","870971-avis:73850452"],"agency":"775100","profile":"opac","outputType":"json","objectFormat":[],"relationData":"uri"}}]':
    '{"searchResponse":{"result":{"hitCount":{"$":"10"},"collectionCount":{"$":"10"},"more":{"$":"false"},"searchResult":[{"collection":{"resultPosition":{"$":"1"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"70678594|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Motoren Harry","@":"dc"},{"$":"Motoren Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Anders Mose Poulsen","@":"dc"},{"$":"Mose Poulsen, Anders","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Jensen, Harry, f. 1921","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Jensen","@":"dc"},{"$":"Jensen, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"}],"abstract":[{"$":"Harry Motor","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"contributor":[{"$":"Harry Jensen","@type":{"$":"dkdcplus:ive","@":"xsi"},"@":"dc"}],"date":[{"$":"1982","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"Ill.","@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Morgenposten, 1982-10-24","@":"dcterms"},{"$":"1399-8595","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:70678594"},"primaryObjectIdentifier":{"$":"870971-avis:70678594"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:70678594"}]}}]}},{"collection":{"resultPosition":{"$":"2"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"70055848|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Kupfer","@":"dc"},{"$":"Harry Kupfer","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Gabor Halasz","@":"dc"},{"$":"Halasz, Gabor","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Kupfer, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Kupfer","@":"dc"},{"$":"Kupfer, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1982","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 26-27","@":"dcterms"}],"language":[{"$":"ger","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Tysk","@":"dc"}],"isPartOf":[{"$":"Opernwelt, Bd. 23, nr. 12 (1982)","@":"dcterms"},{"$":"0030-3690","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:70055848"},"primaryObjectIdentifier":{"$":"870971-tsart:70055848"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:70055848"}]}}]}},{"collection":{"resultPosition":{"$":"3"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"70055813|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Kullman","@":"dc"},{"$":"Harry Kullman","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Kenneth Carlsson","@":"dc"},{"$":"Carlsson, Kenneth","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Kullman, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Kullman","@":"dc"},{"$":"Kullman, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"},{"$":"kriminallitteratur","@":"dc"},{"$":"svensk litteratur","@":"dc"},{"$":"ungdomslitteratur","@":"dc"}],"abstract":[{"$":"Svensk ungdoms- og kriminalforfatter","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1982","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 36-43","@":"dcterms"}],"language":[{"$":"swe","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Svensk","@":"dc"}],"isPartOf":[{"$":"Jury, 1982, nr. 2","@":"dcterms"},{"$":"0345-5734","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:70055813"},"primaryObjectIdentifier":{"$":"870971-tsart:70055813"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:70055813"}]}}]}},{"collection":{"resultPosition":{"$":"4"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"80487940|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Carlsson","@":"dc"},{"$":"Harry Carlsson","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Ulf Gudmundsen","@":"dc"},{"$":"Gudmundsen, Ulf","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Carlsson, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Carlsson","@":"dc"},{"$":"Carlsson, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Dansk surrealistisk maler","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1991","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 14","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Hrymfaxe, \\u00c5rg. 21, nr. 3 (1991)","@":"dcterms"},{"$":"0901-5795","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"spatial":[{"$":"Danmark malerkunst","@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:80487940"},"primaryObjectIdentifier":{"$":"870971-tsart:80487940"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:80487940"}]}}]}},{"collection":{"resultPosition":{"$":"5"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"36616636|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Harrison","@":"dc"},{"$":"Harry Harrison","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Klaus \\u00c6. Mogensen","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Mogensen, Klaus \\u00c6.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Harrison, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Harrison","@":"dc"},{"$":"Harrison, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"amerikansk litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"science fiction","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Portr\\u00e6t af den amerikanske forfatter","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2015","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"S. 41-43","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Himmelskibet, Nr. 45 (2015)","@":"dcterms"},{"$":"1603-5836","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:36616636"},"primaryObjectIdentifier":{"$":"870971-tsart:36616636"},"recordStatus":{"$":"active"},"creationDate":{"$":"2015-09-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:36616636"}]}}]}},{"collection":{"resultPosition":{"$":"6"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"87319946|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Harry Potter","@":"dc"},{"$":"Harry Potter","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Christian Monggaard","@":"dc"},{"$":"Monggaard, Christian","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Rowling, Joanne K.","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Potter og F\\u00f8nixordenen","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Joanne K. Rowling","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"Rowling, Joanne K.","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"b\\u00f8rnelitteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"engelsk litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"litteratur","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"\\u00c5rsager til Harry Potter-b\\u00f8gernes succes","@":"dcterms"}],"description":[{"$":"I anledning af det 5. bind i serien: \\"Harry Potter og F\\u00f8niksordenen\\"","@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2003","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"S. 9","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Information, 2003-06-21","@":"dcterms"},{"$":"1602-2572","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:87319946"},"primaryObjectIdentifier":{"$":"870971-avis:87319946"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-02"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasOnlineAccess"},"relationUri":{"$":"[useraccessinfomedia]?action=getArticle&faust=87319946&infomediaId=e008981b&libraryCode=[libraryCode]&userId=[userId]&userPinCode=[userPinCode]"},"linkObject":{"accessType":{"$":"rest"},"access":{"$":"login"},"linkTo":{"$":"webservice"},"linkCollectionIdentifier":[{"$":"870971-avis"},{"$":"870971-avisinf"}]}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:87319946"}]}}]}},{"collection":{"resultPosition":{"$":"7"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"36317140|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Dynamit Harry","@":"dc"},{"$":"Dynamit Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Poul H\\u00f8i","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"H\\u00f8i, Poul","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"61.28","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Nervefysiologi","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Potter, Harry","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"empati","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"f\\u00f8lelser","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"hjernen","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"litter\\u00e6re personer","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"psykologi","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Empati er en mangelvare hos Islamisk Stat, empati-neuronerne t\\u00e6nder simpelthen ikke i helligkrigernes hjerner, n\\u00e5r de ser andre lide. Men if\\u00f8lge forskere er der en modgift: De skal l\\u00e6se b\\u00f8ger om Harry Potter","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2014","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"Sektion 2, s. 8-9","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Berlingske tidende, 2014-12-26","@":"dcterms"},{"$":"0106-4223","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:36317140"},"primaryObjectIdentifier":{"$":"870971-avis:36317140"},"recordStatus":{"$":"active"},"creationDate":{"$":"2014-12-29"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasOnlineAccess"},"relationUri":{"$":"[useraccessinfomedia]?action=getArticle&faust=36317140&infomediaId=e4bc6c6c&libraryCode=[libraryCode]&userId=[userId]&userPinCode=[userPinCode]"},"linkObject":{"accessType":{"$":"rest"},"access":{"$":"login"},"linkTo":{"$":"webservice"},"linkCollectionIdentifier":[{"$":"870971-avis"},{"$":"870971-avisinf"}]}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:36317140"}]}}]}},{"collection":{"resultPosition":{"$":"8"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"88657357|870971","@":"ac"}],"source":[{"$":"Tidsskriftsartikler","@":"ac"}],"title":[{"$":"Harry Nielsen","@":"dc"},{"$":"Harry Nielsen","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Nikolaj Zeuthen","@":"dc"},{"$":"Zeuthen, Nikolaj","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"86","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Dansk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"dansk sk\\u00f8nlitteratur","@type":{"$":"dkdcplus:DBCO","@":"xsi"},"@":"dc"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2005","@":"dc"}],"type":[{"$":"Tidsskriftsartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"extent":[{"$":"S. 49-52","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Den bl\\u00e5 port, 2005, nr. 67","@":"dcterms"},{"$":"0900-8160","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-tsart:88657357"},"primaryObjectIdentifier":{"$":"870971-tsart:88657357"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-10-27"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-tsart:88657357"}]}}]}},{"collection":{"resultPosition":{"$":"9"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"35460454|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"Dirty Harry","@":"dc"},{"$":"Dirty Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Michael Bjerre","@type":{"$":"dkdcplus:aut","@":"xsi"},"@":"dc"},{"$":"Bjerre, Michael","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Henry, prins af Wales","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Henry (prins af Wales)","@":"dc"},{"$":"Henry (prins af Wales)","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"kongehuset","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"},{"$":"milit\\u00e6rv\\u00e6sen","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dc"}],"abstract":[{"$":"Partyprins, drenger\\u00f8v, charmetrold og en soldat, der praler af at have sl\\u00e5et ihjel i Afghanistan. Prins Harry finder sig bedre tilpas som kaptajn end prins","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"2013","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"format":[{"$":"illustreret","@":"dc"}],"extent":[{"$":"Sektion 1, s. 14-15","@":"dcterms"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Berlingske tidende, 2013-01-27","@":"dcterms"},{"$":"0106-4223","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"spatial":[{"$":"England","@type":{"$":"dkdcplus:DBCF","@":"xsi"},"@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:35460454"},"primaryObjectIdentifier":{"$":"870971-avis:35460454"},"recordStatus":{"$":"active"},"creationDate":{"$":"2013-01-28"},"relations":{"relation":[{"relationType":{"$":"dbcaddi:hasOnlineAccess"},"relationUri":{"$":"[useraccessinfomedia]?action=getArticle&faust=35460454&infomediaId=e3a0340c&libraryCode=[libraryCode]&userId=[userId]&userPinCode=[userPinCode]"},"linkObject":{"accessType":{"$":"rest"},"access":{"$":"login"},"linkTo":{"$":"webservice"},"linkCollectionIdentifier":[{"$":"870971-avis"},{"$":"870971-avisinf"}]}}]},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:35460454"}]}}]}},{"collection":{"resultPosition":{"$":"10"},"numberOfObjects":{"$":"1"},"object":[{"record":{"identifier":[{"$":"73850452|870971","@":"ac"}],"source":[{"$":"Avisartikler","@":"ac"}],"title":[{"$":"ang. Harry","@":"dc"},{"$":"ang. Harry","@type":{"$":"dkdcplus:full","@":"xsi"},"@":"dc"}],"creator":[{"$":"Niels Rohleder","@":"dc"},{"$":"Rohleder, Niels","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"}],"subject":[{"$":"99.4 Tisch, Harry","@type":{"$":"dkdcplus:DK5","@":"xsi"},"@":"dc"},{"$":"Biografier af enkelte personer","@type":{"$":"dkdcplus:DK5-Text","@":"xsi"},"@":"dc"},{"$":"Harry Tisch","@":"dc"},{"$":"Tisch, Harry","@type":{"$":"oss:sort","@":"xsi"},"@":"dc"},{"$":"biografier","@":"dc"}],"abstract":[{"$":"For\\u00e5ret 1961: En gruppe danske kommunister, bl.a. Poul Emanuel, smuglede en visuml\\u00f8s \\u00f8sttysker i land i K\\u00f8benhavn. Tisch blev senere chef for DDR\'s fagbev\\u00e6gelse og politbureaumedlem i SED. Emanuel blev partisekret\\u00e6r i DKP. I dag sidder Tisch f\\u00e6ngslet i Berlin. Emanuel er efterl\\u00f8nsmodtager p\\u00e5 Amager","@":"dcterms"}],"audience":[{"$":"voksenmaterialer","@":"dcterms"}],"date":[{"$":"1991","@":"dc"}],"type":[{"$":"Avisartikel","@type":{"$":"dkdcplus:BibDK-Type","@":"xsi"},"@":"dc"}],"language":[{"$":"dan","@type":{"$":"dcterms:ISO639-2","@":"xsi"},"@":"dc"},{"$":"Dansk","@":"dc"}],"isPartOf":[{"$":"Information, 1991-04-20","@":"dcterms"},{"$":"1602-2572","@type":{"$":"dkdcplus:ISSN","@":"xsi"},"@":"dcterms"}],"spatial":[{"$":"Tyskland (DDR) politisk system","@":"dcterms"},{"$":"Danmark politisk system","@":"dcterms"}],"@":"dkabm"},"identifier":{"$":"870971-avis:73850452"},"primaryObjectIdentifier":{"$":"870971-avis:73850452"},"recordStatus":{"$":"active"},"creationDate":{"$":"2005-03-01"},"formatsAvailable":{"format":[{"$":"dkabm"},{"$":"marcxchange"}]},"objectsAvailable":{"identifier":[{"$":"870971-avis:73850452"}]}}]}}],"facetResult":{"$":""},"statInfo":{"fedoraRecordsCached":{"$":"110"},"fedoraRecordsRead":{"$":"2"},"time":{"$":"0.183025"},"trackingId":{"$":"2016-12-08T15:46:02:651305:16190"}}}},"@namespaces":{"ac":"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/","dbcaddi":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#","dbcbib":"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#","dc":"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/","dcmitype":"http:\\/\\/purl.org\\/dc\\/dcmitype\\/","dcterms":"http:\\/\\/purl.org\\/dc\\/terms\\/","dkabm":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/","dkdcplus":"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/","docbook":"http:\\/\\/docbook.org\\/ns\\/docbook","kml":"http:\\/\\/www.opengis.net\\/kml\\/2.2","marcx":"info:lc\\/xmlns\\/marcxchange-v1","mx":"http:\\/\\/www.loc.gov\\/MARC21\\/slim","of":"http:\\/\\/oss.dbc.dk\\/ns\\/openformat","ofo":"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput","os":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch","oso":"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects","oss":"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes","xs":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema","xsi":"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance"}}'
};

describe('Automated test: __search_sort', () => {
  it('expected response. ID:eutmgb, for {"q":"harry ","fields":["identifier","title","collection","subjectDBCF","hasAdaptation","coverUrlFull"],"sort":"rank_title"}', done => {
    context.mockData = mockData;
    provider
      .execute(
        'search',
        {
          q: 'harry ',
          fields: [
            'identifier',
            'title',
            'collection',
            'subjectDBCF',
            'hasAdaptation',
            'coverUrlFull'
          ],
          sort: 'rank_title'
        },
        context
      )
      .then(result => {
        assert.deepEqual(result, {
          statusCode: 200,
          data: [
            {
              collection: ['870971-avis:70678594'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Harry Jensen'],
                  pid: ['870971-avis:70678594'],
                  language: ['Dansk'],
                  partOf: ['Morgenposten, 1982-10-24'],
                  title: ['Motoren Harry'],
                  titleFull: ['Motoren Harry'],
                  type: ['Avisartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['70678594|870971'],
              acSource: ['Avisartikler'],
              dcTitle: ['Motoren Harry'],
              dcTitleFull: ['Motoren Harry'],
              dcCreator: ['Anders Mose Poulsen'],
              creatorSort: ['Mose Poulsen, Anders'],
              subjectDK5: ['99.4 Jensen, Harry, f. 1921'],
              subjectDK5Text: ['Biografier af enkelte personer'],
              subject: ['Harry Jensen', 'biografier'],
              subjectSort: ['Jensen, Harry'],
              abstract: ['Harry Motor'],
              audience: ['voksenmaterialer'],
              contributorIve: ['Harry Jensen'],
              date: ['1982'],
              typeBibDKType: ['Avisartikel'],
              format: ['Ill.'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Morgenposten, 1982-10-24'],
              isPartOfISSN: ['1399-8595'],
              accessType: ['physical'],
              creator: ['Harry Jensen'],
              pid: ['870971-avis:70678594'],
              language: ['Dansk'],
              partOf: ['Morgenposten, 1982-10-24'],
              title: ['Motoren Harry'],
              titleFull: ['Motoren Harry'],
              type: ['Avisartikel'],
              workType: ['article']
            },
            {
              collection: ['870971-tsart:70055848'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Gabor Halasz'],
                  pid: ['870971-tsart:70055848'],
                  language: ['Tysk'],
                  partOf: ['Opernwelt, Bd. 23, nr. 12 (1982)'],
                  title: ['Harry Kupfer'],
                  titleFull: ['Harry Kupfer'],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['70055848|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: ['Harry Kupfer'],
              dcTitleFull: ['Harry Kupfer'],
              dcCreator: ['Gabor Halasz'],
              creatorSort: ['Halasz, Gabor'],
              subjectDK5: ['99.4 Kupfer, Harry'],
              subjectDK5Text: ['Biografier af enkelte personer'],
              subject: ['Harry Kupfer', 'biografier'],
              subjectSort: ['Kupfer, Harry'],
              audience: ['voksenmaterialer'],
              date: ['1982'],
              typeBibDKType: ['Tidsskriftsartikel'],
              format: ['illustreret'],
              extent: ['S. 26-27'],
              languageISO6392: ['ger'],
              dcLanguage: ['Tysk'],
              isPartOf: ['Opernwelt, Bd. 23, nr. 12 (1982)'],
              isPartOfISSN: ['0030-3690'],
              accessType: ['physical'],
              creator: ['Gabor Halasz'],
              pid: ['870971-tsart:70055848'],
              language: ['Tysk'],
              partOf: ['Opernwelt, Bd. 23, nr. 12 (1982)'],
              title: ['Harry Kupfer'],
              titleFull: ['Harry Kupfer'],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870970-basis:10367573'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Lars Ulvenstam'],
                  pid: ['870970-basis:10367573'],
                  language: ['Svensk'],
                  title: ['Harry Martinson'],
                  titleFull: ['Harry Martinson'],
                  type: ['Bog'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['70055813|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: ['Harry Kullman'],
              dcTitleFull: ['Harry Kullman'],
              dcCreator: ['Kenneth Carlsson'],
              creatorSort: ['Carlsson, Kenneth'],
              subjectDK5: ['99.4 Kullman, Harry'],
              subjectDK5Text: ['Biografier af enkelte personer'],
              subject: [
                'Harry Kullman',
                'biografier',
                'kriminallitteratur',
                'svensk litteratur',
                'ungdomslitteratur'
              ],
              subjectSort: ['Kullman, Harry'],
              abstract: ['Svensk ungdoms- og kriminalforfatter'],
              audience: ['voksenmaterialer'],
              date: ['1982'],
              typeBibDKType: ['Tidsskriftsartikel'],
              format: ['illustreret'],
              extent: ['S. 36-43'],
              languageISO6392: ['swe'],
              dcLanguage: ['Svensk'],
              isPartOf: ['Jury, 1982, nr. 2'],
              isPartOfISSN: ['0345-5734'],
              accessType: ['physical'],
              creator: ['Kenneth Carlsson'],
              pid: ['870971-tsart:70055813'],
              language: ['Svensk'],
              partOf: ['Jury, 1982, nr. 2'],
              title: ['Harry Kullman'],
              titleFull: ['Harry Kullman'],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870971-tsart:70055813'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Kenneth Carlsson'],
                  pid: ['870971-tsart:70055813'],
                  language: ['Svensk'],
                  partOf: ['Jury, 1982, nr. 2'],
                  title: ['Harry Kullman'],
                  titleFull: ['Harry Kullman'],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['80487940|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: ['Harry Carlsson'],
              dcTitleFull: ['Harry Carlsson'],
              dcCreator: ['Ulf Gudmundsen'],
              creatorSort: ['Gudmundsen, Ulf'],
              subjectDK5: ['99.4 Carlsson, Harry'],
              subjectDK5Text: ['Biografier af enkelte personer'],
              subject: ['Harry Carlsson'],
              subjectSort: ['Carlsson, Harry'],
              abstract: ['Dansk surrealistisk maler'],
              audience: ['voksenmaterialer'],
              date: ['1991'],
              typeBibDKType: ['Tidsskriftsartikel'],
              format: ['illustreret'],
              extent: ['S. 14'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Hrymfaxe, Årg. 21, nr. 3 (1991)'],
              isPartOfISSN: ['0901-5795'],
              spatial: ['Danmark malerkunst'],
              accessType: ['physical'],
              creator: ['Ulf Gudmundsen'],
              pid: ['870971-tsart:80487940'],
              language: ['Dansk'],
              partOf: ['Hrymfaxe, Årg. 21, nr. 3 (1991)'],
              title: ['Harry Carlsson'],
              titleFull: ['Harry Carlsson'],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870971-tsart:80487940'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Ulf Gudmundsen'],
                  pid: ['870971-tsart:80487940'],
                  language: ['Dansk'],
                  partOf: ['Hrymfaxe, Årg. 21, nr. 3 (1991)'],
                  title: ['Harry Carlsson'],
                  titleFull: ['Harry Carlsson'],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['36616636|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: ['Harry Harrison'],
              dcTitleFull: ['Harry Harrison'],
              creatorAut: ['Klaus Æ. Mogensen'],
              creatorSort: ['Mogensen, Klaus Æ.'],
              subjectDK5: ['99.4 Harrison, Harry'],
              subjectDK5Text: ['Biografier af enkelte personer'],
              subject: ['Harry Harrison'],
              subjectSort: ['Harrison, Harry'],
              subjectDBCF: ['amerikansk litteratur', 'science fiction'],
              abstract: ['Portræt af den amerikanske forfatter'],
              audience: ['voksenmaterialer'],
              date: ['2015'],
              typeBibDKType: ['Tidsskriftsartikel'],
              format: ['illustreret'],
              extent: ['S. 41-43'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Himmelskibet, Nr. 45 (2015)'],
              isPartOfISSN: ['1603-5836'],
              accessType: ['physical'],
              creator: ['Klaus Æ. Mogensen'],
              pid: ['870971-tsart:36616636'],
              language: ['Dansk'],
              partOf: ['Himmelskibet, Nr. 45 (2015)'],
              title: ['Harry Harrison'],
              titleFull: ['Harry Harrison'],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870971-tsart:36616636'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Klaus Æ. Mogensen'],
                  pid: ['870971-tsart:36616636'],
                  language: ['Dansk'],
                  partOf: ['Himmelskibet, Nr. 45 (2015)'],
                  title: ['Harry Harrison'],
                  titleFull: ['Harry Harrison'],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['87319946|870971'],
              acSource: ['Avisartikler'],
              dcTitle: ['Harry Potter'],
              dcTitleFull: ['Harry Potter'],
              dcCreator: ['Christian Monggaard'],
              creatorSort: ['Monggaard, Christian'],
              subjectDK5: ['99.4 Rowling, Joanne K.'],
              subjectDK5Text: ['Biografier af enkelte personer'],
              subjectDBCF: [
                'Harry Potter og Fønixordenen',
                'Joanne K. Rowling',
                'børnelitteratur',
                'engelsk litteratur',
                'litteratur'
              ],
              subjectSort: ['Rowling, Joanne K.'],
              abstract: ['Årsager til Harry Potter-bøgernes succes'],
              description: [
                'I anledning af det 5. bind i serien: "Harry Potter og Føniksordenen"'
              ],
              audience: ['voksenmaterialer'],
              date: ['2003'],
              typeBibDKType: ['Avisartikel'],
              extent: ['S. 9'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Information, 2003-06-21'],
              isPartOfISSN: ['1602-2572'],
              accessType: ['online'],
              creator: ['Christian Monggaard'],
              pid: ['870971-avis:87319946'],
              language: ['Dansk'],
              partOf: ['Information, 2003-06-21'],
              title: ['Harry Potter'],
              titleFull: ['Harry Potter'],
              type: ['Avisartikel'],
              workType: ['article'],
              hasOnlineAccess: [
                '[useraccessinfomedia]?action=getArticle&faust=87319946&infomediaId=e008981b&libraryCode=[libraryCode]&userId=[userId]&userPinCode=[userPinCode]'
              ]
            },
            {
              collection: ['870971-avis:87319946'],
              collectionDetails: [
                {
                  accessType: ['online'],
                  creator: ['Christian Monggaard'],
                  pid: ['870971-avis:87319946'],
                  language: ['Dansk'],
                  partOf: ['Information, 2003-06-21'],
                  title: ['Harry Potter'],
                  titleFull: ['Harry Potter'],
                  type: ['Avisartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['36317140|870971'],
              acSource: ['Avisartikler'],
              dcTitle: ['Dynamit Harry'],
              dcTitleFull: ['Dynamit Harry'],
              creatorAut: ['Poul Høi'],
              creatorSort: ['Høi, Poul'],
              subjectDK5: ['61.28'],
              subjectDK5Text: ['Nervefysiologi'],
              subjectDBCF: [
                'Potter, Harry',
                'empati',
                'følelser',
                'hjernen',
                'litterære personer',
                'psykologi'
              ],
              abstract: [
                'Empati er en mangelvare hos Islamisk Stat, empati-neuronerne tænder simpelthen ikke i helligkrigernes hjerner, når de ser andre lide. Men ifølge forskere er der en modgift: De skal læse bøger om Harry Potter'
              ],
              audience: ['voksenmaterialer'],
              date: ['2014'],
              typeBibDKType: ['Avisartikel'],
              format: ['illustreret'],
              extent: ['Sektion 2, s. 8-9'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Berlingske tidende, 2014-12-26'],
              isPartOfISSN: ['0106-4223'],
              accessType: ['online'],
              creator: ['Poul Høi'],
              pid: ['870971-avis:36317140'],
              language: ['Dansk'],
              partOf: ['Berlingske tidende, 2014-12-26'],
              title: ['Dynamit Harry'],
              titleFull: ['Dynamit Harry'],
              type: ['Avisartikel'],
              workType: ['article'],
              hasOnlineAccess: [
                '[useraccessinfomedia]?action=getArticle&faust=36317140&infomediaId=e4bc6c6c&libraryCode=[libraryCode]&userId=[userId]&userPinCode=[userPinCode]'
              ]
            },
            {
              collection: ['870971-avis:36317140'],
              collectionDetails: [
                {
                  accessType: ['online'],
                  creator: ['Poul Høi'],
                  pid: ['870971-avis:36317140'],
                  language: ['Dansk'],
                  partOf: ['Berlingske tidende, 2014-12-26'],
                  title: ['Dynamit Harry'],
                  titleFull: ['Dynamit Harry'],
                  type: ['Avisartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['88657357|870971'],
              acSource: ['Tidsskriftsartikler'],
              dcTitle: ['Harry Nielsen'],
              dcTitleFull: ['Harry Nielsen'],
              dcCreator: ['Nikolaj Zeuthen'],
              creatorSort: ['Zeuthen, Nikolaj'],
              subjectDK5: ['86'],
              subjectDK5Text: ['Dansk skønlitteratur'],
              subjectDBCO: ['dansk skønlitteratur'],
              audience: ['voksenmaterialer'],
              date: ['2005'],
              typeBibDKType: ['Tidsskriftsartikel'],
              extent: ['S. 49-52'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Den blå port, 2005, nr. 67'],
              isPartOfISSN: ['0900-8160'],
              accessType: ['physical'],
              creator: ['Nikolaj Zeuthen'],
              pid: ['870971-tsart:88657357'],
              language: ['Dansk'],
              partOf: ['Den blå port, 2005, nr. 67'],
              title: ['Harry Nielsen'],
              titleFull: ['Harry Nielsen'],
              type: ['Tidsskriftsartikel'],
              workType: ['article']
            },
            {
              collection: ['870970-basis:24520471'],
              collectionDetails: [
                {
                  accessType: ['online'],
                  pid: ['870970-basis:24520471'],
                  language: ['Engelsk'],
                  title: ['Harry Potter'],
                  titleFull: ['Harry Potter'],
                  type: ['Netdokument'],
                  workType: ['book']
                }
              ],
              acIdentifier: ['35460454|870971'],
              acSource: ['Avisartikler'],
              dcTitle: ['Dirty Harry'],
              dcTitleFull: ['Dirty Harry'],
              creatorAut: ['Michael Bjerre'],
              creatorSort: ['Bjerre, Michael'],
              subjectDK5: ['99.4 Henry, prins af Wales'],
              subjectDK5Text: ['Biografier af enkelte personer'],
              subject: ['Henry (prins af Wales)'],
              subjectSort: ['Henry (prins af Wales)'],
              subjectDBCF: ['kongehuset', 'militærvæsen'],
              abstract: [
                'Partyprins, drengerøv, charmetrold og en soldat, der praler af at have slået ihjel i Afghanistan. Prins Harry finder sig bedre tilpas som kaptajn end prins'
              ],
              audience: ['voksenmaterialer'],
              date: ['2013'],
              typeBibDKType: ['Avisartikel'],
              format: ['illustreret'],
              extent: ['Sektion 1, s. 14-15'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Berlingske tidende, 2013-01-27'],
              isPartOfISSN: ['0106-4223'],
              spatialDBCF: ['England'],
              accessType: ['online'],
              creator: ['Michael Bjerre'],
              pid: ['870971-avis:35460454'],
              language: ['Dansk'],
              partOf: ['Berlingske tidende, 2013-01-27'],
              title: ['Dirty Harry'],
              titleFull: ['Dirty Harry'],
              type: ['Avisartikel'],
              workType: ['article'],
              hasOnlineAccess: [
                '[useraccessinfomedia]?action=getArticle&faust=35460454&infomediaId=e3a0340c&libraryCode=[libraryCode]&userId=[userId]&userPinCode=[userPinCode]'
              ]
            },
            {
              collection: ['870971-tsart:88657357'],
              collectionDetails: [
                {
                  accessType: ['physical'],
                  creator: ['Nikolaj Zeuthen'],
                  pid: ['870971-tsart:88657357'],
                  language: ['Dansk'],
                  partOf: ['Den blå port, 2005, nr. 67'],
                  title: ['Harry Nielsen'],
                  titleFull: ['Harry Nielsen'],
                  type: ['Tidsskriftsartikel'],
                  workType: ['article']
                }
              ],
              acIdentifier: ['73850452|870971'],
              acSource: ['Avisartikler'],
              dcTitle: ['ang. Harry'],
              dcTitleFull: ['ang. Harry'],
              dcCreator: ['Niels Rohleder'],
              creatorSort: ['Rohleder, Niels'],
              subjectDK5: ['99.4 Tisch, Harry'],
              subjectDK5Text: ['Biografier af enkelte personer'],
              subject: ['Harry Tisch', 'biografier'],
              subjectSort: ['Tisch, Harry'],
              abstract: [
                "Foråret 1961: En gruppe danske kommunister, bl.a. Poul Emanuel, smuglede en visumløs østtysker i land i København. Tisch blev senere chef for DDR's fagbevægelse og politbureaumedlem i SED. Emanuel blev partisekretær i DKP. I dag sidder Tisch fængslet i Berlin. Emanuel er efterlønsmodtager på Amager"
              ],
              audience: ['voksenmaterialer'],
              date: ['1991'],
              typeBibDKType: ['Avisartikel'],
              languageISO6392: ['dan'],
              dcLanguage: ['Dansk'],
              isPartOf: ['Information, 1991-04-20'],
              isPartOfISSN: ['1602-2572'],
              spatial: [
                'Tyskland (DDR) politisk system',
                'Danmark politisk system'
              ],
              accessType: ['physical'],
              creator: ['Niels Rohleder'],
              pid: ['870971-avis:73850452'],
              language: ['Dansk'],
              partOf: ['Information, 1991-04-20'],
              title: ['ang. Harry'],
              titleFull: ['ang. Harry'],
              type: ['Avisartikel'],
              workType: ['article']
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
                collection: ['870971-avis:70678594'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Harry Jensen'],
                    pid: ['870971-avis:70678594'],
                    language: ['Dansk'],
                    partOf: ['Morgenposten, 1982-10-24'],
                    title: ['Motoren Harry'],
                    titleFull: ['Motoren Harry'],
                    type: ['Avisartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['70678594|870971'],
                acSource: ['Avisartikler'],
                dcTitle: ['Motoren Harry'],
                dcTitleFull: ['Motoren Harry'],
                dcCreator: ['Anders Mose Poulsen'],
                creatorSort: ['Mose Poulsen, Anders'],
                subjectDK5: ['99.4 Jensen, Harry, f. 1921'],
                subjectDK5Text: ['Biografier af enkelte personer'],
                subject: ['Harry Jensen', 'biografier'],
                subjectSort: ['Jensen, Harry'],
                abstract: ['Harry Motor'],
                audience: ['voksenmaterialer'],
                contributorIve: ['Harry Jensen'],
                date: ['1982'],
                typeBibDKType: ['Avisartikel'],
                format: ['Ill.'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Morgenposten, 1982-10-24'],
                isPartOfISSN: ['1399-8595'],
                accessType: ['physical'],
                creator: ['Harry Jensen'],
                pid: ['870971-avis:70678594'],
                language: ['Dansk'],
                partOf: ['Morgenposten, 1982-10-24'],
                title: ['Motoren Harry'],
                titleFull: ['Motoren Harry'],
                type: ['Avisartikel'],
                workType: ['article']
              },
              {
                collection: ['870971-tsart:70055848'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Gabor Halasz'],
                    pid: ['870971-tsart:70055848'],
                    language: ['Tysk'],
                    partOf: ['Opernwelt, Bd. 23, nr. 12 (1982)'],
                    title: ['Harry Kupfer'],
                    titleFull: ['Harry Kupfer'],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['70055848|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: ['Harry Kupfer'],
                dcTitleFull: ['Harry Kupfer'],
                dcCreator: ['Gabor Halasz'],
                creatorSort: ['Halasz, Gabor'],
                subjectDK5: ['99.4 Kupfer, Harry'],
                subjectDK5Text: ['Biografier af enkelte personer'],
                subject: ['Harry Kupfer', 'biografier'],
                subjectSort: ['Kupfer, Harry'],
                audience: ['voksenmaterialer'],
                date: ['1982'],
                typeBibDKType: ['Tidsskriftsartikel'],
                format: ['illustreret'],
                extent: ['S. 26-27'],
                languageISO6392: ['ger'],
                dcLanguage: ['Tysk'],
                isPartOf: ['Opernwelt, Bd. 23, nr. 12 (1982)'],
                isPartOfISSN: ['0030-3690'],
                accessType: ['physical'],
                creator: ['Gabor Halasz'],
                pid: ['870971-tsart:70055848'],
                language: ['Tysk'],
                partOf: ['Opernwelt, Bd. 23, nr. 12 (1982)'],
                title: ['Harry Kupfer'],
                titleFull: ['Harry Kupfer'],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870970-basis:10367573'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Lars Ulvenstam'],
                    pid: ['870970-basis:10367573'],
                    language: ['Svensk'],
                    title: ['Harry Martinson'],
                    titleFull: ['Harry Martinson'],
                    type: ['Bog'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['70055813|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: ['Harry Kullman'],
                dcTitleFull: ['Harry Kullman'],
                dcCreator: ['Kenneth Carlsson'],
                creatorSort: ['Carlsson, Kenneth'],
                subjectDK5: ['99.4 Kullman, Harry'],
                subjectDK5Text: ['Biografier af enkelte personer'],
                subject: [
                  'Harry Kullman',
                  'biografier',
                  'kriminallitteratur',
                  'svensk litteratur',
                  'ungdomslitteratur'
                ],
                subjectSort: ['Kullman, Harry'],
                abstract: ['Svensk ungdoms- og kriminalforfatter'],
                audience: ['voksenmaterialer'],
                date: ['1982'],
                typeBibDKType: ['Tidsskriftsartikel'],
                format: ['illustreret'],
                extent: ['S. 36-43'],
                languageISO6392: ['swe'],
                dcLanguage: ['Svensk'],
                isPartOf: ['Jury, 1982, nr. 2'],
                isPartOfISSN: ['0345-5734'],
                accessType: ['physical'],
                creator: ['Kenneth Carlsson'],
                pid: ['870971-tsart:70055813'],
                language: ['Svensk'],
                partOf: ['Jury, 1982, nr. 2'],
                title: ['Harry Kullman'],
                titleFull: ['Harry Kullman'],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870971-tsart:70055813'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Kenneth Carlsson'],
                    pid: ['870971-tsart:70055813'],
                    language: ['Svensk'],
                    partOf: ['Jury, 1982, nr. 2'],
                    title: ['Harry Kullman'],
                    titleFull: ['Harry Kullman'],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['80487940|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: ['Harry Carlsson'],
                dcTitleFull: ['Harry Carlsson'],
                dcCreator: ['Ulf Gudmundsen'],
                creatorSort: ['Gudmundsen, Ulf'],
                subjectDK5: ['99.4 Carlsson, Harry'],
                subjectDK5Text: ['Biografier af enkelte personer'],
                subject: ['Harry Carlsson'],
                subjectSort: ['Carlsson, Harry'],
                abstract: ['Dansk surrealistisk maler'],
                audience: ['voksenmaterialer'],
                date: ['1991'],
                typeBibDKType: ['Tidsskriftsartikel'],
                format: ['illustreret'],
                extent: ['S. 14'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Hrymfaxe, Årg. 21, nr. 3 (1991)'],
                isPartOfISSN: ['0901-5795'],
                spatial: ['Danmark malerkunst'],
                accessType: ['physical'],
                creator: ['Ulf Gudmundsen'],
                pid: ['870971-tsart:80487940'],
                language: ['Dansk'],
                partOf: ['Hrymfaxe, Årg. 21, nr. 3 (1991)'],
                title: ['Harry Carlsson'],
                titleFull: ['Harry Carlsson'],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870971-tsart:80487940'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Ulf Gudmundsen'],
                    pid: ['870971-tsart:80487940'],
                    language: ['Dansk'],
                    partOf: ['Hrymfaxe, Årg. 21, nr. 3 (1991)'],
                    title: ['Harry Carlsson'],
                    titleFull: ['Harry Carlsson'],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['36616636|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: ['Harry Harrison'],
                dcTitleFull: ['Harry Harrison'],
                creatorAut: ['Klaus Æ. Mogensen'],
                creatorSort: ['Mogensen, Klaus Æ.'],
                subjectDK5: ['99.4 Harrison, Harry'],
                subjectDK5Text: ['Biografier af enkelte personer'],
                subject: ['Harry Harrison'],
                subjectSort: ['Harrison, Harry'],
                subjectDBCF: ['amerikansk litteratur', 'science fiction'],
                abstract: ['Portræt af den amerikanske forfatter'],
                audience: ['voksenmaterialer'],
                date: ['2015'],
                typeBibDKType: ['Tidsskriftsartikel'],
                format: ['illustreret'],
                extent: ['S. 41-43'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Himmelskibet, Nr. 45 (2015)'],
                isPartOfISSN: ['1603-5836'],
                accessType: ['physical'],
                creator: ['Klaus Æ. Mogensen'],
                pid: ['870971-tsart:36616636'],
                language: ['Dansk'],
                partOf: ['Himmelskibet, Nr. 45 (2015)'],
                title: ['Harry Harrison'],
                titleFull: ['Harry Harrison'],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870971-tsart:36616636'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Klaus Æ. Mogensen'],
                    pid: ['870971-tsart:36616636'],
                    language: ['Dansk'],
                    partOf: ['Himmelskibet, Nr. 45 (2015)'],
                    title: ['Harry Harrison'],
                    titleFull: ['Harry Harrison'],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['87319946|870971'],
                acSource: ['Avisartikler'],
                dcTitle: ['Harry Potter'],
                dcTitleFull: ['Harry Potter'],
                dcCreator: ['Christian Monggaard'],
                creatorSort: ['Monggaard, Christian'],
                subjectDK5: ['99.4 Rowling, Joanne K.'],
                subjectDK5Text: ['Biografier af enkelte personer'],
                subjectDBCF: [
                  'Harry Potter og Fønixordenen',
                  'Joanne K. Rowling',
                  'børnelitteratur',
                  'engelsk litteratur',
                  'litteratur'
                ],
                subjectSort: ['Rowling, Joanne K.'],
                abstract: ['Årsager til Harry Potter-bøgernes succes'],
                description: [
                  'I anledning af det 5. bind i serien: "Harry Potter og Føniksordenen"'
                ],
                audience: ['voksenmaterialer'],
                date: ['2003'],
                typeBibDKType: ['Avisartikel'],
                extent: ['S. 9'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Information, 2003-06-21'],
                isPartOfISSN: ['1602-2572'],
                accessType: ['online'],
                creator: ['Christian Monggaard'],
                pid: ['870971-avis:87319946'],
                language: ['Dansk'],
                partOf: ['Information, 2003-06-21'],
                title: ['Harry Potter'],
                titleFull: ['Harry Potter'],
                type: ['Avisartikel'],
                workType: ['article'],
                hasOnlineAccess: [
                  '[useraccessinfomedia]?action=getArticle&faust=87319946&infomediaId=e008981b&libraryCode=[libraryCode]&userId=[userId]&userPinCode=[userPinCode]'
                ]
              },
              {
                collection: ['870971-avis:87319946'],
                collectionDetails: [
                  {
                    accessType: ['online'],
                    creator: ['Christian Monggaard'],
                    pid: ['870971-avis:87319946'],
                    language: ['Dansk'],
                    partOf: ['Information, 2003-06-21'],
                    title: ['Harry Potter'],
                    titleFull: ['Harry Potter'],
                    type: ['Avisartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['36317140|870971'],
                acSource: ['Avisartikler'],
                dcTitle: ['Dynamit Harry'],
                dcTitleFull: ['Dynamit Harry'],
                creatorAut: ['Poul Høi'],
                creatorSort: ['Høi, Poul'],
                subjectDK5: ['61.28'],
                subjectDK5Text: ['Nervefysiologi'],
                subjectDBCF: [
                  'Potter, Harry',
                  'empati',
                  'følelser',
                  'hjernen',
                  'litterære personer',
                  'psykologi'
                ],
                abstract: [
                  'Empati er en mangelvare hos Islamisk Stat, empati-neuronerne tænder simpelthen ikke i helligkrigernes hjerner, når de ser andre lide. Men ifølge forskere er der en modgift: De skal læse bøger om Harry Potter'
                ],
                audience: ['voksenmaterialer'],
                date: ['2014'],
                typeBibDKType: ['Avisartikel'],
                format: ['illustreret'],
                extent: ['Sektion 2, s. 8-9'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Berlingske tidende, 2014-12-26'],
                isPartOfISSN: ['0106-4223'],
                accessType: ['online'],
                creator: ['Poul Høi'],
                pid: ['870971-avis:36317140'],
                language: ['Dansk'],
                partOf: ['Berlingske tidende, 2014-12-26'],
                title: ['Dynamit Harry'],
                titleFull: ['Dynamit Harry'],
                type: ['Avisartikel'],
                workType: ['article'],
                hasOnlineAccess: [
                  '[useraccessinfomedia]?action=getArticle&faust=36317140&infomediaId=e4bc6c6c&libraryCode=[libraryCode]&userId=[userId]&userPinCode=[userPinCode]'
                ]
              },
              {
                collection: ['870971-avis:36317140'],
                collectionDetails: [
                  {
                    accessType: ['online'],
                    creator: ['Poul Høi'],
                    pid: ['870971-avis:36317140'],
                    language: ['Dansk'],
                    partOf: ['Berlingske tidende, 2014-12-26'],
                    title: ['Dynamit Harry'],
                    titleFull: ['Dynamit Harry'],
                    type: ['Avisartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['88657357|870971'],
                acSource: ['Tidsskriftsartikler'],
                dcTitle: ['Harry Nielsen'],
                dcTitleFull: ['Harry Nielsen'],
                dcCreator: ['Nikolaj Zeuthen'],
                creatorSort: ['Zeuthen, Nikolaj'],
                subjectDK5: ['86'],
                subjectDK5Text: ['Dansk skønlitteratur'],
                subjectDBCO: ['dansk skønlitteratur'],
                audience: ['voksenmaterialer'],
                date: ['2005'],
                typeBibDKType: ['Tidsskriftsartikel'],
                extent: ['S. 49-52'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Den blå port, 2005, nr. 67'],
                isPartOfISSN: ['0900-8160'],
                accessType: ['physical'],
                creator: ['Nikolaj Zeuthen'],
                pid: ['870971-tsart:88657357'],
                language: ['Dansk'],
                partOf: ['Den blå port, 2005, nr. 67'],
                title: ['Harry Nielsen'],
                titleFull: ['Harry Nielsen'],
                type: ['Tidsskriftsartikel'],
                workType: ['article']
              },
              {
                collection: ['870970-basis:24520471'],
                collectionDetails: [
                  {
                    accessType: ['online'],
                    pid: ['870970-basis:24520471'],
                    language: ['Engelsk'],
                    title: ['Harry Potter'],
                    titleFull: ['Harry Potter'],
                    type: ['Netdokument'],
                    workType: ['book']
                  }
                ],
                acIdentifier: ['35460454|870971'],
                acSource: ['Avisartikler'],
                dcTitle: ['Dirty Harry'],
                dcTitleFull: ['Dirty Harry'],
                creatorAut: ['Michael Bjerre'],
                creatorSort: ['Bjerre, Michael'],
                subjectDK5: ['99.4 Henry, prins af Wales'],
                subjectDK5Text: ['Biografier af enkelte personer'],
                subject: ['Henry (prins af Wales)'],
                subjectSort: ['Henry (prins af Wales)'],
                subjectDBCF: ['kongehuset', 'militærvæsen'],
                abstract: [
                  'Partyprins, drengerøv, charmetrold og en soldat, der praler af at have slået ihjel i Afghanistan. Prins Harry finder sig bedre tilpas som kaptajn end prins'
                ],
                audience: ['voksenmaterialer'],
                date: ['2013'],
                typeBibDKType: ['Avisartikel'],
                format: ['illustreret'],
                extent: ['Sektion 1, s. 14-15'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Berlingske tidende, 2013-01-27'],
                isPartOfISSN: ['0106-4223'],
                spatialDBCF: ['England'],
                accessType: ['online'],
                creator: ['Michael Bjerre'],
                pid: ['870971-avis:35460454'],
                language: ['Dansk'],
                partOf: ['Berlingske tidende, 2013-01-27'],
                title: ['Dirty Harry'],
                titleFull: ['Dirty Harry'],
                type: ['Avisartikel'],
                workType: ['article'],
                hasOnlineAccess: [
                  '[useraccessinfomedia]?action=getArticle&faust=35460454&infomediaId=e3a0340c&libraryCode=[libraryCode]&userId=[userId]&userPinCode=[userPinCode]'
                ]
              },
              {
                collection: ['870971-tsart:88657357'],
                collectionDetails: [
                  {
                    accessType: ['physical'],
                    creator: ['Nikolaj Zeuthen'],
                    pid: ['870971-tsart:88657357'],
                    language: ['Dansk'],
                    partOf: ['Den blå port, 2005, nr. 67'],
                    title: ['Harry Nielsen'],
                    titleFull: ['Harry Nielsen'],
                    type: ['Tidsskriftsartikel'],
                    workType: ['article']
                  }
                ],
                acIdentifier: ['73850452|870971'],
                acSource: ['Avisartikler'],
                dcTitle: ['ang. Harry'],
                dcTitleFull: ['ang. Harry'],
                dcCreator: ['Niels Rohleder'],
                creatorSort: ['Rohleder, Niels'],
                subjectDK5: ['99.4 Tisch, Harry'],
                subjectDK5Text: ['Biografier af enkelte personer'],
                subject: ['Harry Tisch', 'biografier'],
                subjectSort: ['Tisch, Harry'],
                abstract: [
                  "Foråret 1961: En gruppe danske kommunister, bl.a. Poul Emanuel, smuglede en visumløs østtysker i land i København. Tisch blev senere chef for DDR's fagbevægelse og politbureaumedlem i SED. Emanuel blev partisekretær i DKP. I dag sidder Tisch fængslet i Berlin. Emanuel er efterlønsmodtager på Amager"
                ],
                audience: ['voksenmaterialer'],
                date: ['1991'],
                typeBibDKType: ['Avisartikel'],
                languageISO6392: ['dan'],
                dcLanguage: ['Dansk'],
                isPartOf: ['Information, 1991-04-20'],
                isPartOfISSN: ['1602-2572'],
                spatial: [
                  'Tyskland (DDR) politisk system',
                  'Danmark politisk system'
                ],
                accessType: ['physical'],
                creator: ['Niels Rohleder'],
                pid: ['870971-avis:73850452'],
                language: ['Dansk'],
                partOf: ['Information, 1991-04-20'],
                title: ['ang. Harry'],
                titleFull: ['ang. Harry'],
                type: ['Avisartikel'],
                workType: ['article']
              }
            ]
          }
        );
        done();
      });
  });
});
