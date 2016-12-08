/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: search {"q":"krigerkattene","fields":["pid","title","creator","coverDataUrl117"],"limit":3}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  "services": {
    "ddbcmsapi": "http://rest.filmstriben.dbc.inlead.dk/web/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "PRODopenorder": "https://openorder.addi.dk/2.7.1/",
    "openorder": "https://openorder.addi.dk/test_2.7.1/",
    "opensearch": "http://opensearch.addi.dk/b3.0_4.2/",
    "openuserstatus": "https://openuserstatus.addi.dk/1.4.1/",
    "rank": "https://xptest.dbc.dk/ms/rank/v1",
    "suggestpopular": "http://xptest.dbc.dk/ms/entity-pop/v1",
    "suggestcreator": "http://xptest.dbc.dk/ms/entity-suggest/v1/creator",
    "suggestlibrary": "http://xptest.dbc.dk/ms/entity-suggest/v1/library",
    "suggestsubject": "http://xptest.dbc.dk/ms/entity-suggest/v1/subject",
    "recommendurls": {
      "default": "https://xptest.dbc.dk/ms/recommend-cosim/v1",
      "popular": "https://xptest.dbc.dk/ms/recommend-pop/v1"
    }
  },
  "search": {
    "agency": "775100",
    "profile": "opac",
    "collectionidentifiers": "rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"
  },
  "netpunkt": {
    "user": "XXXXX",
    "group": "XXXXX",
    "password": "XXXXX"
  },
  "user": {
    "agency": "100451",
    "id": "XXXXX",
    "pin": "XXXXX",
    "salt": "XXXXX"
  },
  "app": {
    "clientid": "XXXXX",
    "ddbcmsapipassword": "XXXXX",
    "orderpolicyrequester": "190101"
  }
};
const provider = Provider();
const mockData = {
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>krigerkattene</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>3</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"14\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"14\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"29602352|870970\",\"@\":\"ac\"},{\"$\":\"9788771220353\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"},{\"$\":\"Warrior cats\",\"@\":\"dc\"}],\"title\":[{\"$\":\"Krigerkattene\",\"@\":\"dc\"},{\"$\":\"Krigerkattene. Bind 6, Den m\\u00f8rkeste time\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Erin Hunter\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Hunter, Erin\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dyrefort\\u00e6llinger\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dyrefort\\u00e6llinger\",\"@type\":{\"$\":\"dkdcplus:genre\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 10 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 11 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 7 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 8 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 9 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for h\\u00f8jtl\\u00e6sning\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"forr\\u00e6deri\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"katte\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"magtkamp\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"venskab\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Da Tigerstjerne foresl\\u00e5r, at han bliver leder af alle klanerne i skoven, g\\u00e5r Flodklanen med ham, men Vindklanen og Tordenklanen siger nej. Det bliver starten til det helt store slag om herred\\u00f8mmet i skoven. Tigerstjerne tr\\u00e6kker de blodt\\u00f8rstige bagg\\u00e5rdskatte fra Blodklanen med ind i kampen og f\\u00f8ler sig sikker p\\u00e5 sejren. Men det g\\u00e5r anderledes, end han tror, og pludselig m\\u00e5 alle fire klaner st\\u00e5 sammen om at bevare deres skov, som de kender den\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"fra 7 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:age\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, 1. oplag (2012)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Sohn\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Jens Christiansen\",\"@type\":{\"$\":\"dkdcplus:trl\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"date\":[{\"$\":\"2012\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"262 sider\",\"@\":\"dcterms\"},{\"$\":\"6 bind\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:29602352\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:29602352\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:29602352\"},{\"$\":\"870970-basis:29602352\"}]}},{\"identifier\":{\"$\":\"775100-katalog:28949847\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29024707\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29283893\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29333793\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29496226\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29227756\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29288623\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:50926419\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:50926400\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29614636\"},\"creationDate\":{\"$\":\"2012-11-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29614857\"},\"creationDate\":{\"$\":\"2012-11-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:50926427\"},\"creationDate\":{\"$\":\"2014-01-23\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:50926443\"},\"creationDate\":{\"$\":\"2014-01-23\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29602352\"},\"identifier\":{\"$\":\"775100-katalog:29602352\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 6)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:28949847\"},\"identifier\":{\"$\":\"775100-katalog:28949847\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 1)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29024707\"},\"identifier\":{\"$\":\"775100-katalog:29024707\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 2)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29283893\"},\"identifier\":{\"$\":\"775100-katalog:29283893\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 3)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29333793\"},\"identifier\":{\"$\":\"775100-katalog:29333793\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 4)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29496226\"},\"identifier\":{\"$\":\"775100-katalog:29496226\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 5)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29227756\"},\"identifier\":{\"$\":\"775100-katalog:29227756\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 1)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29288623\"},\"identifier\":{\"$\":\"775100-katalog:29288623\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 2)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926419\"},\"identifier\":{\"$\":\"775100-katalog:50926419\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 3)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926400\"},\"identifier\":{\"$\":\"775100-katalog:50926400\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 4)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29614636\"},\"identifier\":{\"$\":\"870970-basis:29614636\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 1)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29614857\"},\"identifier\":{\"$\":\"870970-basis:29614857\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 2)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926427\"},\"identifier\":{\"$\":\"870970-basis:50926427\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 3)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926443\"},\"identifier\":{\"$\":\"870970-basis:50926443\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 4)\"},\"workType\":{\"$\":\"audiobook\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"15\"},\"fedoraRecordsRead\":{\"$\":\"71\"},\"time\":{\"$\":\"1.467638\"},\"trackingId\":{\"$\":\"2016-12-08T15:20:35:957693:23087\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>krigerkattene</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>3</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"14\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"14\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"29602352|870970\",\"@\":\"ac\"},{\"$\":\"9788771220353\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"},{\"$\":\"Warrior cats\",\"@\":\"dc\"}],\"title\":[{\"$\":\"Krigerkattene\",\"@\":\"dc\"},{\"$\":\"Krigerkattene. Bind 6, Den m\\u00f8rkeste time\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Erin Hunter\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Hunter, Erin\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dyrefort\\u00e6llinger\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dyrefort\\u00e6llinger\",\"@type\":{\"$\":\"dkdcplus:genre\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 10 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 11 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 7 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 8 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 9 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for h\\u00f8jtl\\u00e6sning\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"forr\\u00e6deri\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"katte\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"magtkamp\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"venskab\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Da Tigerstjerne foresl\\u00e5r, at han bliver leder af alle klanerne i skoven, g\\u00e5r Flodklanen med ham, men Vindklanen og Tordenklanen siger nej. Det bliver starten til det helt store slag om herred\\u00f8mmet i skoven. Tigerstjerne tr\\u00e6kker de blodt\\u00f8rstige bagg\\u00e5rdskatte fra Blodklanen med ind i kampen og f\\u00f8ler sig sikker p\\u00e5 sejren. Men det g\\u00e5r anderledes, end han tror, og pludselig m\\u00e5 alle fire klaner st\\u00e5 sammen om at bevare deres skov, som de kender den\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"fra 7 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:age\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, 1. oplag (2012)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Sohn\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Jens Christiansen\",\"@type\":{\"$\":\"dkdcplus:trl\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"date\":[{\"$\":\"2012\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"262 sider\",\"@\":\"dcterms\"},{\"$\":\"6 bind\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:29602352\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:29602352\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:29602352\"},{\"$\":\"870970-basis:29602352\"}]}},{\"identifier\":{\"$\":\"775100-katalog:28949847\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29024707\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29283893\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29333793\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29496226\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29227756\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29288623\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:50926419\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:50926400\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29614636\"},\"creationDate\":{\"$\":\"2012-11-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29614857\"},\"creationDate\":{\"$\":\"2012-11-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:50926427\"},\"creationDate\":{\"$\":\"2014-01-23\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:50926443\"},\"creationDate\":{\"$\":\"2014-01-23\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008506844__1\"},\"identifier\":{\"$\":\"775100-katalog:29602352\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 6)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008209967__1\"},\"identifier\":{\"$\":\"775100-katalog:28949847\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 1)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008213211__1\"},\"identifier\":{\"$\":\"775100-katalog:29024707\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 2)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008462346__1\"},\"identifier\":{\"$\":\"775100-katalog:29283893\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 3)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008461956__1\"},\"identifier\":{\"$\":\"775100-katalog:29333793\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 4)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008487410__1\"},\"identifier\":{\"$\":\"775100-katalog:29496226\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 5)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29227756\"},\"identifier\":{\"$\":\"775100-katalog:29227756\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 1)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29288623\"},\"identifier\":{\"$\":\"775100-katalog:29288623\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 2)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926419\"},\"identifier\":{\"$\":\"775100-katalog:50926419\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 3)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926400\"},\"identifier\":{\"$\":\"775100-katalog:50926400\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 4)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29614636\"},\"identifier\":{\"$\":\"870970-basis:29614636\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 1)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29614857\"},\"identifier\":{\"$\":\"870970-basis:29614857\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 2)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926427\"},\"identifier\":{\"$\":\"870970-basis:50926427\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 3)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926443\"},\"identifier\":{\"$\":\"870970-basis:50926443\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 4)\"},\"workType\":{\"$\":\"audiobook\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"15\"},\"fedoraRecordsRead\":{\"$\":\"71\"},\"time\":{\"$\":\"1.53986\"},\"trackingId\":{\"$\":\"2016-12-08T15:20:35:959763:9340\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"moreinfo\",{\"qs\":{\"action\":\"moreInfo\",\"authenticationUser\":\"XXXXX\",\"authenticationGroup\":\"XXXXX\",\"authenticationPassword\":\"XXXXX\",\"pidList\":\"775100-katalog:29602352\",\"outputType\":\"json\"}}]": "{\"moreInfoResponse\":{\"requestStatus\":{\"statusEnum\":{\"$\":\"ok\",\"@\":\"mi\"},\"errorText\":{\"$\":\"\",\"@\":\"mi\"},\"@\":\"mi\"},\"identifierInformation\":[{\"identifierKnown\":{\"$\":\"true\",\"@\":\"mi\"},\"identifier\":{\"pid\":{\"$\":\"775100-katalog:29602352\",\"@\":\"mi\"},\"@\":\"mi\"},\"backImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=c12ee161a714070a3b16\",\"@imageSize\":{\"$\":\"detail_117\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=5905106fab9c5a89629b\",\"@imageSize\":{\"$\":\"detail_207\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=fd660dd4da6865f4536a\",\"@imageSize\":{\"$\":\"detail_42\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=b87f0bb87bb814d6ca8c\",\"@imageSize\":{\"$\":\"detail_500\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=bfe8314dd0b605c3f75c\",\"@imageSize\":{\"$\":\"thumbnail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=2949bf053a55f2a8d82b\",\"@imageSize\":{\"$\":\"detail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"}],\"backPage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=3c812b4d81bf6b4ad5f6\",\"@\":\"mi\"}],\"coverImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=59f7b3733316236e6931\",\"@imageSize\":{\"$\":\"detail_117\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=270b640b35b03e0e3e2e\",\"@imageSize\":{\"$\":\"detail_207\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=b7d99549a26e6b83e5c5\",\"@imageSize\":{\"$\":\"detail_42\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=847acb0344111b7bf4b4\",\"@imageSize\":{\"$\":\"detail_500\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=45c779ce75b86b4f6596\",\"@imageSize\":{\"$\":\"thumbnail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=df99d4c872e1d802bb72\",\"@imageSize\":{\"$\":\"detail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"}],\"@\":\"mi\"}],\"@\":\"mi\"},\"@namespaces\":{\"mi\":\"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo\"}}\n",
  "[\"http://moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=59f7b3733316236e6931\",{\"encoding\":null}]": {
    "type": "Buffer",
    "data": [255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 1, 1, 1, 1, 44, 1, 44, 0, 0, 255, 219, 0, 67, 0, 8, 6, 6, 7, 6, 5, 8, 7, 7, 7, 9, 9, 8, 10, 12, 20, 13, 12, 11, 11, 12, 25, 18, 19, 15, 20, 29, 26, 31, 30, 29, 26, 28, 28, 32, 36, 46, 39, 32, 34, 44, 35, 28, 28, 40, 55, 41, 44, 48, 49, 52, 52, 52, 31, 39, 57, 61, 56, 50, 60, 46, 51, 52, 50, 255, 219, 0, 67, 1, 9, 9, 9, 12, 11, 12, 24, 13, 13, 24, 50, 33, 28, 33, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 255, 192, 0, 17, 8, 0, 103, 0, 117, 3, 1, 34, 0, 2, 17, 1, 3, 17, 1, 255, 196, 0, 31, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 255, 196, 0, 181, 16, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125, 1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 255, 196, 0, 31, 1, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 255, 196, 0, 181, 17, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119, 0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250, 255, 218, 0, 12, 3, 1, 0, 2, 17, 3, 17, 0, 63, 0, 187, 225, 189, 3, 67, 151, 195, 58, 91, 73, 160, 233, 114, 202, 214, 113, 72, 242, 73, 103, 27, 22, 37, 70, 114, 72, 201, 168, 167, 240, 55, 133, 53, 31, 49, 227, 211, 210, 18, 36, 59, 218, 5, 11, 150, 39, 36, 0, 195, 104, 0, 30, 128, 12, 12, 84, 254, 27, 189, 146, 31, 13, 233, 62, 125, 188, 223, 241, 233, 8, 86, 136, 121, 128, 141, 156, 28, 15, 155, 56, 199, 110, 57, 246, 173, 248, 132, 110, 54, 197, 26, 132, 4, 183, 202, 0, 5, 143, 95, 199, 143, 229, 92, 78, 233, 220, 119, 60, 151, 90, 240, 20, 154, 84, 82, 92, 44, 86, 147, 91, 46, 70, 237, 170, 141, 128, 1, 206, 210, 126, 189, 9, 233, 206, 56, 174, 106, 75, 24, 34, 145, 146, 75, 72, 209, 212, 144, 200, 209, 0, 65, 29, 71, 231, 95, 66, 221, 90, 69, 61, 185, 142, 80, 60, 178, 14, 124, 193, 158, 15, 83, 249, 102, 185, 159, 17, 233, 214, 109, 97, 105, 103, 60, 18, 220, 59, 50, 90, 193, 51, 201, 151, 93, 228, 29, 196, 158, 126, 240, 4, 145, 239, 254, 208, 173, 35, 82, 227, 230, 238, 114, 26, 95, 194, 251, 205, 87, 70, 181, 212, 35, 91, 24, 62, 209, 243, 8, 231, 141, 148, 132, 236, 220, 41, 235, 212, 123, 16, 123, 213, 43, 223, 135, 58, 213, 156, 82, 72, 218, 36, 114, 164, 103, 172, 59, 28, 176, 206, 50, 20, 124, 199, 242, 175, 98, 150, 254, 195, 236, 34, 206, 198, 228, 68, 145, 32, 138, 48, 156, 148, 80, 48, 48, 15, 39, 143, 199, 249, 214, 72, 211, 117, 185, 226, 89, 166, 137, 131, 176, 225, 204, 138, 114, 63, 62, 13, 97, 60, 87, 47, 192, 185, 141, 97, 11, 238, 236, 120, 149, 206, 150, 182, 83, 24, 46, 172, 60, 153, 151, 4, 199, 44, 59, 88, 100, 112, 72, 35, 53, 31, 217, 173, 127, 231, 214, 47, 251, 246, 43, 232, 43, 91, 97, 20, 18, 219, 106, 215, 22, 211, 69, 42, 1, 228, 72, 193, 191, 2, 15, 31, 206, 178, 53, 191, 11, 120, 109, 173, 94, 229, 244, 213, 93, 234, 20, 53, 161, 216, 20, 122, 224, 124, 185, 250, 131, 239, 91, 67, 17, 120, 243, 73, 88, 77, 107, 99, 196, 132, 22, 189, 5, 172, 68, 231, 188, 98, 148, 91, 218, 183, 2, 218, 28, 255, 0, 215, 49, 94, 133, 47, 129, 180, 219, 199, 198, 159, 168, 75, 19, 236, 194, 69, 114, 161, 247, 63, 251, 195, 24, 7, 232, 107, 42, 79, 0, 235, 202, 236, 162, 201, 88, 33, 56, 97, 60, 96, 28, 119, 0, 156, 254, 99, 53, 112, 175, 78, 123, 48, 113, 182, 231, 31, 246, 123, 98, 127, 227, 222, 33, 220, 124, 130, 154, 208, 91, 228, 127, 163, 68, 1, 227, 132, 21, 171, 117, 165, 221, 88, 133, 251, 85, 173, 196, 1, 243, 183, 205, 66, 155, 177, 215, 25, 28, 213, 86, 137, 56, 225, 178, 127, 74, 209, 73, 7, 33, 158, 97, 132, 117, 183, 64, 8, 254, 224, 166, 152, 96, 1, 143, 147, 22, 71, 79, 144, 115, 87, 68, 17, 134, 200, 220, 79, 211, 138, 65, 18, 14, 204, 114, 121, 205, 62, 100, 46, 70, 97, 234, 41, 26, 52, 101, 80, 46, 115, 192, 24, 244, 162, 165, 214, 2, 169, 132, 15, 126, 61, 58, 81, 77, 106, 103, 37, 102, 123, 239, 135, 35, 157, 124, 45, 164, 136, 85, 17, 77, 180, 95, 50, 16, 15, 49, 140, 158, 123, 254, 117, 105, 239, 221, 47, 81, 50, 241, 14, 2, 146, 167, 247, 135, 211, 56, 224, 126, 181, 202, 104, 94, 35, 67, 163, 105, 169, 109, 120, 214, 147, 199, 107, 26, 16, 192, 50, 203, 133, 30, 220, 116, 247, 245, 173, 70, 214, 245, 77, 177, 204, 154, 124, 119, 171, 23, 204, 211, 40, 14, 54, 237, 231, 40, 48, 123, 159, 152, 142, 220, 30, 121, 243, 253, 165, 164, 211, 52, 116, 91, 87, 59, 48, 248, 139, 205, 141, 76, 228, 224, 109, 92, 119, 227, 60, 159, 199, 215, 249, 86, 30, 163, 115, 109, 117, 226, 8, 108, 35, 242, 37, 146, 221, 26, 225, 213, 147, 37, 71, 220, 92, 113, 157, 217, 112, 195, 233, 89, 13, 227, 219, 89, 90, 68, 183, 182, 150, 7, 3, 40, 210, 73, 133, 206, 113, 200, 234, 63, 42, 111, 129, 117, 40, 52, 203, 173, 127, 80, 212, 47, 227, 251, 69, 236, 59, 98, 105, 3, 49, 5, 64, 231, 114, 13, 193, 119, 57, 24, 24, 32, 47, 208, 214, 86, 230, 118, 110, 193, 236, 228, 186, 25, 122, 129, 123, 45, 70, 120, 227, 144, 144, 142, 84, 28, 245, 230, 152, 250, 213, 234, 252, 203, 113, 32, 61, 185, 53, 213, 79, 227, 13, 45, 245, 169, 174, 32, 214, 222, 209, 83, 82, 89, 166, 243, 35, 101, 55, 49, 5, 81, 183, 40, 185, 194, 237, 108, 43, 0, 8, 112, 73, 206, 106, 132, 190, 41, 209, 239, 108, 164, 49, 93, 157, 62, 220, 218, 92, 68, 218, 98, 201, 48, 95, 48, 150, 100, 117, 41, 242, 176, 37, 130, 144, 216, 0, 12, 96, 140, 85, 170, 17, 238, 55, 39, 216, 202, 131, 94, 75, 150, 63, 109, 46, 95, 251, 224, 103, 243, 21, 185, 109, 226, 219, 27, 11, 53, 182, 142, 6, 96, 50, 90, 86, 56, 98, 114, 123, 118, 244, 252, 41, 250, 207, 141, 172, 6, 177, 117, 123, 111, 121, 13, 212, 13, 7, 151, 20, 35, 207, 38, 64, 100, 132, 186, 50, 200, 54, 40, 101, 87, 31, 40, 193, 25, 207, 56, 174, 91, 80, 214, 116, 151, 241, 117, 189, 213, 176, 146, 227, 77, 135, 236, 223, 36, 202, 55, 58, 34, 34, 178, 176, 60, 19, 242, 144, 123, 31, 165, 63, 96, 163, 46, 104, 176, 231, 186, 179, 59, 11, 63, 16, 232, 229, 195, 34, 67, 20, 153, 202, 179, 196, 50, 15, 168, 56, 253, 106, 75, 205, 70, 226, 96, 37, 177, 150, 25, 72, 60, 199, 145, 146, 62, 181, 155, 119, 226, 203, 56, 167, 185, 185, 26, 211, 94, 76, 110, 174, 167, 179, 34, 25, 51, 106, 141, 4, 138, 139, 185, 148, 17, 185, 154, 63, 148, 101, 70, 204, 213, 63, 16, 248, 191, 78, 188, 208, 31, 79, 211, 89, 151, 203, 190, 23, 17, 13, 133, 9, 71, 18, 59, 12, 99, 3, 99, 56, 76, 103, 157, 185, 28, 116, 183, 79, 221, 209, 137, 75, 83, 171, 182, 158, 87, 179, 89, 39, 140, 69, 32, 56, 42, 27, 119, 242, 172, 141, 91, 195, 154, 117, 253, 179, 170, 217, 66, 140, 78, 237, 209, 40, 141, 201, 233, 215, 191, 227, 197, 102, 105, 222, 51, 142, 219, 76, 181, 145, 245, 57, 127, 209, 237, 102, 130, 109, 52, 172, 135, 237, 18, 49, 125, 172, 24, 124, 184, 249, 198, 114, 65, 27, 56, 7, 138, 214, 31, 16, 172, 237, 206, 154, 103, 212, 98, 154, 117, 185, 84, 157, 237, 18, 85, 137, 96, 1, 65, 37, 88, 15, 155, 32, 240, 131, 7, 31, 74, 106, 10, 218, 177, 93, 167, 116, 121, 158, 183, 225, 171, 237, 29, 124, 199, 2, 91, 108, 175, 239, 64, 198, 9, 245, 92, 156, 115, 248, 116, 231, 154, 192, 119, 108, 103, 21, 235, 75, 226, 221, 59, 81, 37, 174, 222, 79, 49, 135, 44, 252, 254, 181, 200, 107, 218, 13, 140, 138, 247, 154, 76, 168, 114, 114, 208, 228, 1, 143, 246, 125, 62, 159, 203, 0, 27, 141, 91, 59, 50, 211, 185, 231, 218, 179, 18, 97, 207, 161, 35, 244, 162, 147, 87, 24, 146, 46, 49, 144, 104, 174, 165, 177, 140, 183, 61, 51, 76, 125, 14, 93, 10, 196, 79, 166, 7, 144, 66, 129, 164, 82, 17, 139, 109, 28, 228, 119, 206, 122, 228, 213, 139, 104, 172, 109, 239, 86, 230, 210, 234, 241, 25, 15, 200, 12, 235, 242, 250, 115, 142, 156, 142, 166, 185, 107, 27, 215, 143, 77, 182, 11, 192, 8, 163, 13, 207, 106, 209, 142, 243, 106, 238, 119, 140, 68, 56, 45, 140, 245, 227, 160, 175, 58, 113, 119, 58, 162, 209, 209, 207, 122, 151, 155, 197, 206, 159, 107, 116, 174, 49, 33, 95, 145, 156, 143, 83, 200, 235, 250, 213, 89, 173, 52, 87, 136, 32, 182, 187, 182, 99, 133, 218, 15, 191, 60, 146, 65, 254, 44, 113, 84, 77, 254, 39, 88, 24, 128, 219, 12, 140, 120, 194, 168, 29, 73, 29, 6, 41, 131, 92, 71, 130, 102, 11, 36, 138, 56, 140, 5, 225, 251, 238, 245, 11, 239, 83, 236, 167, 209, 15, 154, 8, 212, 22, 49, 139, 102, 130, 29, 82, 22, 66, 131, 229, 187, 140, 229, 134, 64, 42, 196, 47, 77, 185, 63, 95, 206, 178, 166, 208, 164, 85, 116, 150, 206, 4, 137, 78, 227, 37, 172, 138, 238, 113, 192, 42, 3, 110, 199, 61, 240, 7, 63, 74, 176, 186, 193, 154, 212, 31, 45, 34, 144, 161, 113, 243, 130, 3, 14, 137, 129, 200, 207, 175, 79, 110, 184, 167, 38, 182, 36, 66, 90, 222, 4, 119, 103, 37, 35, 4, 42, 97, 114, 160, 110, 201, 35, 62, 135, 61, 207, 165, 84, 41, 74, 251, 165, 253, 121, 18, 234, 46, 197, 120, 44, 96, 181, 158, 105, 111, 163, 185, 242, 96, 232, 10, 159, 45, 219, 32, 0, 95, 140, 41, 233, 193, 207, 60, 99, 181, 185, 164, 208, 27, 45, 109, 103, 114, 168, 146, 168, 105, 17, 75, 56, 30, 86, 8, 193, 147, 28, 200, 11, 114, 51, 131, 212, 99, 6, 218, 106, 22, 175, 18, 121, 86, 115, 151, 192, 195, 239, 0, 231, 60, 116, 3, 156, 123, 117, 165, 184, 150, 45, 140, 14, 231, 36, 124, 219, 148, 29, 185, 252, 73, 252, 185, 163, 218, 181, 165, 138, 246, 113, 122, 148, 45, 181, 125, 5, 164, 102, 154, 194, 84, 12, 200, 254, 94, 242, 112, 50, 185, 8, 73, 5, 122, 62, 11, 111, 224, 168, 234, 11, 25, 164, 107, 73, 245, 57, 222, 195, 72, 187, 146, 57, 36, 87, 182, 138, 66, 207, 242, 111, 218, 65, 10, 1, 59, 155, 10, 8, 110, 51, 140, 147, 205, 69, 45, 149, 165, 202, 22, 39, 112, 32, 114, 70, 71, 65, 208, 126, 191, 157, 86, 187, 89, 38, 177, 138, 201, 53, 11, 163, 106, 31, 116, 118, 237, 51, 4, 82, 114, 119, 5, 206, 1, 57, 110, 221, 207, 173, 92, 106, 69, 153, 186, 47, 163, 45, 71, 13, 180, 150, 240, 108, 211, 111, 167, 145, 145, 153, 138, 130, 170, 65, 99, 26, 149, 224, 255, 0, 30, 222, 122, 22, 249, 112, 58, 155, 114, 218, 105, 203, 21, 155, 29, 23, 84, 6, 91, 99, 242, 121, 12, 190, 123, 6, 220, 100, 141, 247, 113, 242, 21, 254, 22, 3, 208, 231, 53, 205, 3, 127, 98, 210, 8, 175, 101, 129, 122, 58, 231, 130, 118, 178, 156, 227, 131, 195, 48, 250, 18, 59, 213, 89, 53, 27, 215, 18, 180, 215, 211, 200, 74, 16, 229, 152, 157, 192, 182, 226, 15, 61, 219, 147, 234, 107, 84, 211, 216, 206, 81, 107, 114, 197, 222, 232, 46, 157, 2, 75, 26, 112, 232, 178, 174, 27, 105, 229, 115, 245, 4, 31, 124, 213, 121, 46, 222, 40, 138, 172, 132, 51, 12, 117, 198, 63, 250, 245, 154, 111, 89, 176, 0, 252, 77, 27, 217, 136, 231, 158, 79, 53, 74, 150, 186, 142, 50, 40, 234, 77, 151, 140, 103, 56, 6, 138, 110, 160, 49, 42, 244, 233, 218, 138, 221, 108, 103, 45, 206, 166, 202, 198, 242, 77, 38, 21, 77, 62, 225, 154, 85, 92, 74, 176, 28, 129, 143, 225, 207, 28, 250, 254, 88, 171, 131, 72, 212, 174, 12, 81, 27, 41, 130, 71, 194, 169, 194, 143, 174, 50, 50, 125, 207, 53, 233, 118, 87, 9, 113, 224, 109, 31, 78, 181, 153, 197, 192, 181, 137, 196, 179, 177, 242, 247, 236, 31, 47, 92, 237, 28, 123, 117, 34, 169, 197, 113, 119, 21, 250, 218, 234, 102, 20, 13, 251, 180, 153, 80, 237, 96, 15, 222, 27, 64, 237, 253, 225, 156, 17, 156, 18, 40, 114, 167, 179, 108, 207, 94, 135, 22, 254, 21, 241, 12, 158, 109, 215, 217, 100, 218, 204, 89, 221, 102, 83, 207, 29, 78, 238, 189, 56, 247, 30, 181, 145, 53, 148, 182, 178, 136, 231, 121, 224, 144, 12, 236, 101, 60, 231, 190, 127, 58, 247, 75, 171, 235, 40, 180, 169, 45, 45, 158, 85, 183, 70, 0, 74, 16, 159, 52, 16, 51, 193, 35, 63, 83, 211, 167, 181, 120, 215, 196, 29, 66, 225, 181, 171, 76, 60, 127, 45, 154, 128, 84, 30, 204, 216, 207, 169, 198, 63, 207, 53, 148, 161, 23, 240, 149, 25, 190, 165, 5, 183, 141, 156, 135, 223, 183, 24, 0, 17, 253, 69, 49, 224, 72, 88, 55, 154, 236, 1, 56, 61, 50, 61, 42, 231, 134, 188, 45, 171, 248, 136, 37, 196, 147, 125, 138, 201, 131, 109, 157, 212, 19, 33, 28, 97, 70, 70, 121, 234, 120, 28, 55, 82, 49, 93, 245, 255, 0, 132, 52, 207, 15, 8, 149, 45, 146, 102, 117, 49, 151, 159, 18, 51, 48, 96, 127, 141, 128, 200, 227, 230, 80, 56, 30, 230, 146, 161, 39, 187, 47, 157, 116, 71, 158, 67, 126, 144, 32, 71, 148, 128, 79, 5, 159, 159, 195, 156, 212, 208, 234, 134, 40, 10, 193, 112, 200, 129, 178, 203, 28, 164, 12, 245, 207, 7, 173, 119, 43, 118, 111, 226, 70, 55, 178, 229, 50, 187, 100, 131, 149, 199, 110, 91, 138, 174, 37, 157, 81, 149, 164, 129, 183, 124, 166, 33, 38, 9, 252, 8, 198, 63, 26, 211, 234, 106, 215, 184, 125, 97, 167, 107, 28, 116, 154, 186, 188, 91, 62, 94, 79, 39, 146, 115, 211, 233, 250, 85, 53, 187, 138, 89, 208, 75, 36, 168, 133, 192, 102, 69, 220, 224, 119, 192, 200, 201, 246, 200, 252, 43, 175, 186, 209, 180, 249, 192, 251, 70, 150, 188, 161, 0, 218, 176, 4, 19, 159, 155, 8, 79, 32, 250, 131, 210, 185, 205, 79, 193, 122, 133, 180, 45, 121, 165, 188, 247, 81, 199, 130, 98, 104, 138, 202, 153, 110, 48, 49, 135, 3, 229, 201, 28, 242, 126, 80, 1, 53, 43, 11, 202, 30, 221, 179, 49, 239, 44, 83, 96, 105, 103, 101, 195, 110, 85, 80, 8, 110, 113, 142, 121, 31, 119, 39, 142, 166, 170, 222, 37, 160, 185, 100, 87, 187, 49, 168, 59, 124, 200, 4, 109, 198, 113, 149, 220, 113, 208, 103, 159, 90, 216, 186, 187, 241, 149, 222, 155, 21, 133, 205, 189, 255, 0, 217, 35, 136, 66, 35, 91, 29, 159, 32, 8, 0, 37, 80, 22, 226, 52, 235, 253, 209, 239, 80, 92, 15, 18, 234, 18, 201, 53, 228, 55, 179, 79, 33, 203, 201, 58, 28, 183, 65, 201, 97, 232, 6, 61, 5, 90, 167, 109, 144, 185, 175, 187, 48, 124, 146, 24, 224, 16, 153, 227, 112, 231, 20, 236, 156, 18, 65, 227, 166, 43, 77, 252, 63, 171, 34, 153, 36, 182, 94, 155, 136, 19, 38, 127, 44, 230, 178, 156, 178, 177, 86, 1, 72, 200, 32, 142, 135, 211, 218, 134, 159, 82, 149, 186, 20, 239, 78, 101, 95, 247, 104, 164, 188, 57, 145, 122, 147, 183, 156, 209, 77, 108, 67, 220, 246, 205, 6, 107, 56, 180, 45, 53, 141, 205, 193, 100, 183, 66, 73, 95, 188, 118, 253, 222, 185, 199, 61, 177, 211, 29, 58, 92, 149, 172, 117, 91, 148, 123, 203, 69, 135, 201, 25, 223, 28, 210, 33, 3, 140, 131, 243, 99, 183, 92, 87, 144, 11, 237, 70, 198, 202, 21, 3, 102, 228, 227, 49, 143, 152, 96, 122, 143, 74, 146, 203, 89, 213, 4, 192, 67, 115, 20, 12, 71, 50, 20, 3, 3, 240, 25, 252, 133, 102, 233, 199, 91, 9, 38, 207, 101, 190, 146, 202, 27, 72, 138, 141, 173, 44, 142, 153, 220, 74, 224, 145, 215, 60, 15, 186, 184, 255, 0, 235, 215, 33, 171, 104, 145, 106, 158, 35, 211, 90, 88, 255, 0, 209, 213, 93, 238, 57, 32, 24, 147, 97, 35, 35, 145, 146, 248, 207, 189, 113, 183, 186, 238, 171, 43, 68, 39, 189, 134, 228, 32, 33, 24, 198, 27, 3, 190, 55, 40, 34, 186, 159, 6, 234, 247, 250, 157, 229, 212, 87, 50, 171, 172, 112, 16, 169, 180, 46, 208, 74, 131, 180, 12, 103, 144, 185, 255, 0, 116, 122, 85, 211, 132, 86, 151, 184, 56, 202, 59, 157, 54, 167, 175, 193, 161, 65, 1, 183, 243, 29, 188, 189, 177, 164, 74, 64, 138, 33, 192, 60, 224, 144, 113, 142, 58, 99, 175, 0, 30, 94, 95, 20, 76, 117, 20, 146, 225, 228, 158, 18, 236, 236, 231, 32, 49, 114, 8, 198, 113, 156, 99, 241, 207, 64, 120, 174, 185, 102, 183, 188, 179, 107, 91, 197, 105, 166, 45, 149, 86, 98, 2, 140, 112, 114, 48, 125, 121, 205, 115, 55, 94, 29, 178, 147, 82, 146, 20, 190, 152, 195, 28, 123, 188, 128, 115, 176, 182, 120, 244, 25, 32, 158, 7, 76, 125, 104, 105, 182, 164, 17, 93, 180, 104, 185, 167, 93, 233, 250, 229, 251, 65, 21, 196, 145, 149, 132, 177, 117, 192, 0, 246, 31, 55, 231, 192, 239, 215, 210, 238, 149, 190, 202, 250, 254, 9, 181, 77, 61, 111, 204, 111, 176, 44, 76, 192, 175, 251, 65, 134, 222, 84, 227, 25, 61, 125, 69, 115, 49, 203, 105, 97, 115, 246, 101, 185, 92, 48, 193, 40, 145, 167, 202, 65, 31, 121, 83, 183, 94, 15, 95, 198, 168, 218, 233, 151, 154, 198, 182, 209, 88, 220, 197, 144, 205, 182, 75, 135, 192, 198, 78, 208, 73, 228, 147, 254, 20, 220, 147, 104, 82, 147, 181, 174, 109, 155, 216, 222, 73, 12, 55, 209, 188, 106, 170, 51, 194, 167, 152, 70, 72, 7, 60, 174, 122, 119, 224, 250, 85, 175, 223, 36, 42, 242, 17, 134, 109, 163, 7, 147, 199, 233, 255, 0, 234, 174, 122, 227, 194, 122, 198, 159, 40, 73, 244, 253, 202, 236, 49, 34, 22, 216, 50, 1, 207, 108, 14, 189, 120, 224, 250, 87, 127, 109, 2, 219, 104, 113, 163, 197, 28, 182, 208, 224, 25, 85, 183, 40, 200, 228, 110, 29, 15, 35, 131, 220, 213, 41, 202, 246, 35, 125, 44, 114, 26, 212, 90, 154, 233, 159, 111, 177, 144, 132, 128, 159, 180, 130, 87, 133, 36, 109, 42, 8, 201, 228, 156, 242, 122, 142, 0, 4, 215, 32, 117, 189, 65, 135, 55, 12, 127, 224, 35, 31, 202, 189, 131, 72, 176, 140, 201, 61, 181, 206, 230, 130, 88, 202, 72, 21, 182, 238, 70, 92, 17, 144, 120, 224, 145, 193, 175, 21, 116, 17, 74, 234, 201, 38, 229, 98, 24, 15, 106, 115, 147, 178, 146, 123, 151, 11, 61, 44, 74, 117, 75, 194, 205, 137, 198, 91, 239, 54, 197, 25, 250, 156, 85, 50, 251, 152, 150, 36, 146, 73, 62, 167, 215, 154, 147, 203, 82, 189, 31, 119, 127, 122, 26, 2, 64, 249, 88, 126, 130, 179, 230, 190, 229, 242, 219, 98, 133, 201, 204, 128, 251, 81, 79, 189, 80, 178, 128, 51, 211, 191, 214, 138, 107, 97, 51, 98, 86, 184, 184, 211, 45, 222, 118, 217, 12, 105, 181, 1, 252, 191, 149, 102, 177, 37, 202, 175, 79, 173, 105, 95, 222, 164, 250, 109, 180, 113, 133, 85, 72, 149, 72, 7, 146, 64, 25, 39, 31, 90, 204, 7, 230, 5, 134, 7, 122, 86, 46, 110, 41, 37, 18, 125, 165, 2, 176, 228, 30, 135, 241, 173, 109, 19, 80, 109, 31, 90, 131, 84, 116, 47, 11, 101, 100, 218, 112, 64, 61, 113, 238, 51, 159, 194, 165, 125, 38, 63, 236, 249, 37, 7, 37, 80, 184, 39, 241, 61, 49, 86, 116, 155, 205, 57, 52, 211, 28, 194, 50, 217, 203, 110, 108, 16, 115, 199, 243, 164, 174, 157, 209, 164, 156, 57, 108, 206, 143, 87, 150, 38, 187, 183, 81, 116, 34, 126, 93, 36, 4, 136, 229, 83, 234, 71, 28, 254, 135, 242, 170, 87, 171, 123, 246, 167, 131, 118, 248, 176, 155, 210, 55, 31, 56, 57, 227, 61, 187, 131, 208, 254, 149, 141, 99, 226, 8, 35, 23, 54, 26, 132, 17, 221, 216, 249, 132, 160, 99, 181, 147, 156, 101, 24, 116, 200, 198, 71, 126, 253, 1, 27, 77, 166, 73, 60, 81, 182, 141, 125, 61, 218, 32, 8, 176, 164, 59, 229, 10, 114, 126, 224, 57, 227, 147, 192, 96, 50, 121, 230, 169, 197, 238, 182, 49, 78, 60, 150, 190, 163, 53, 47, 14, 65, 229, 91, 73, 97, 14, 38, 146, 85, 139, 15, 39, 4, 177, 192, 206, 227, 253, 226, 43, 127, 74, 177, 139, 70, 219, 114, 214, 46, 151, 140, 203, 18, 182, 207, 145, 25, 176, 57, 35, 140, 12, 231, 0, 212, 118, 186, 20, 122, 164, 48, 253, 178, 232, 92, 218, 184, 18, 8, 213, 124, 160, 220, 112, 24, 228, 158, 249, 234, 43, 84, 194, 137, 111, 54, 150, 1, 182, 211, 164, 70, 38, 53, 7, 247, 153, 56, 60, 250, 251, 245, 230, 139, 197, 202, 232, 148, 147, 58, 251, 13, 30, 202, 59, 119, 119, 136, 52, 210, 54, 233, 25, 219, 57, 62, 184, 233, 234, 113, 143, 231, 92, 117, 254, 173, 164, 104, 158, 33, 184, 134, 52, 253, 204, 129, 4, 207, 10, 150, 217, 40, 7, 130, 59, 124, 165, 122, 10, 230, 101, 211, 181, 75, 102, 251, 61, 175, 137, 47, 226, 182, 198, 17, 124, 198, 249, 64, 29, 56, 96, 63, 74, 171, 46, 154, 144, 73, 13, 168, 72, 227, 176, 142, 61, 207, 115, 52, 155, 64, 36, 156, 231, 143, 155, 129, 208, 15, 200, 85, 186, 139, 78, 84, 52, 146, 122, 187, 157, 189, 142, 185, 2, 199, 123, 172, 36, 104, 109, 173, 173, 140, 136, 38, 5, 124, 231, 232, 188, 1, 198, 73, 28, 158, 255, 0, 134, 124, 105, 148, 110, 195, 168, 224, 118, 173, 228, 254, 210, 241, 69, 233, 210, 180, 11, 105, 46, 227, 140, 249, 172, 56, 13, 33, 200, 77, 231, 56, 224, 23, 3, 216, 28, 156, 0, 113, 82, 127, 15, 248, 134, 218, 121, 96, 125, 58, 111, 50, 9, 210, 25, 99, 76, 49, 141, 152, 225, 3, 1, 208, 55, 240, 147, 195, 118, 39, 53, 21, 91, 123, 14, 54, 50, 246, 144, 120, 80, 51, 248, 10, 71, 82, 84, 28, 128, 123, 227, 189, 19, 180, 208, 78, 241, 186, 109, 146, 50, 85, 148, 174, 10, 145, 235, 158, 253, 170, 17, 116, 196, 46, 2, 245, 247, 53, 157, 153, 87, 69, 93, 67, 253, 122, 140, 99, 228, 29, 253, 205, 20, 203, 183, 243, 36, 7, 176, 95, 76, 81, 90, 45, 136, 101, 193, 24, 254, 200, 71, 35, 45, 230, 117, 232, 122, 84, 108, 21, 144, 30, 57, 244, 205, 20, 82, 36, 146, 57, 102, 216, 99, 18, 184, 136, 140, 237, 222, 113, 143, 74, 139, 202, 249, 64, 227, 7, 176, 162, 138, 46, 85, 132, 41, 130, 1, 239, 211, 252, 254, 85, 114, 211, 81, 158, 217, 203, 137, 55, 30, 131, 177, 28, 81, 69, 82, 109, 108, 67, 71, 71, 103, 227, 219, 235, 118, 27, 167, 105, 91, 104, 80, 110, 35, 89, 118, 140, 112, 6, 224, 72, 31, 74, 183, 47, 142, 140, 225, 67, 197, 19, 4, 200, 192, 243, 23, 39, 240, 60, 127, 42, 40, 170, 231, 186, 213, 5, 140, 249, 188, 103, 112, 202, 68, 81, 70, 15, 240, 238, 64, 219, 122, 244, 45, 156, 31, 122, 193, 188, 213, 46, 175, 91, 125, 204, 238, 224, 12, 13, 236, 78, 1, 162, 138, 158, 103, 107, 5, 135, 105, 247, 87, 86, 119, 37, 237, 103, 150, 9, 14, 50, 208, 185, 66, 54, 157, 195, 159, 102, 80, 126, 160, 82, 220, 95, 93, 221, 207, 36, 247, 119, 51, 77, 44, 132, 25, 30, 87, 44, 204, 64, 192, 36, 158, 164, 14, 40, 162, 160, 209, 108, 85, 224, 168, 228, 156, 228, 231, 28, 82, 18, 56, 238, 15, 3, 234, 104, 162, 153, 55, 41, 220, 0, 29, 113, 253, 218, 40, 162, 154, 216, 15, 255, 217]
  }
};

describe('Automated test: __search_coverDataUrl', () => {
  it('expected response. ID:pp83ik, for {"q":"krigerkattene","fields":["pid","title","creator","coverDataUrl117"],"limit":3}', (done) => {
    context.mockData = mockData;
    provider.execute('search', {"q":"krigerkattene","fields":["pid","title","creator","coverDataUrl117"],"limit":3}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "statusCode": 200,
  "data": [
    {
      "collection": [
        "775100-katalog:29602352",
        "775100-katalog:28949847",
        "775100-katalog:29024707",
        "775100-katalog:29283893",
        "775100-katalog:29333793",
        "775100-katalog:29496226",
        "775100-katalog:29227756",
        "775100-katalog:29288623",
        "775100-katalog:50926419",
        "775100-katalog:50926400",
        "870970-basis:29614636",
        "870970-basis:29614857",
        "870970-basis:50926427",
        "870970-basis:50926443"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29602352"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 6)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:28949847"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 1)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29024707"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 2)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29283893"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 3)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29333793"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 4)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29496226"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 5)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29227756"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (cd-mp3) (bind 1)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29288623"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (cd-mp3) (bind 2)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:50926419"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (cd-mp3) (bind 3)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:50926400"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (cd-mp3) (bind 4)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "870970-basis:29614636"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (net) (bind 1)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "870970-basis:29614857"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (net) (bind 2)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "870970-basis:50926427"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (net) (bind 3)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "870970-basis:50926443"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (net) (bind 4)"
          ],
          "workType": [
            "audiobook"
          ]
        }
      ],
      "acIdentifier": [
        "29602352|870970"
      ],
      "identifierISBN": [
        "9788771220353"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "source": [
        "Warrior cats"
      ],
      "dcTitle": [
        "Krigerkattene"
      ],
      "dcTitleFull": [
        "Krigerkattene. Bind 6, Den mørkeste time"
      ],
      "creatorAut": [
        "Erin Hunter"
      ],
      "creatorSort": [
        "Hunter, Erin"
      ],
      "subjectDK5Text": [
        "Skønlitteratur"
      ],
      "subjectDBCS": [
        "dyrefortællinger",
        "forræderi",
        "katte",
        "magtkamp",
        "venskab"
      ],
      "subjectGenre": [
        "dyrefortællinger"
      ],
      "subjectDBCN": [
        "for 10 år",
        "for 11 år",
        "for 7 år",
        "for 8 år",
        "for 9 år",
        "for højtlæsning"
      ],
      "subjectDK5": [
        "sk"
      ],
      "abstract": [
        "Da Tigerstjerne foreslår, at han bliver leder af alle klanerne i skoven, går Flodklanen med ham, men Vindklanen og Tordenklanen siger nej. Det bliver starten til det helt store slag om herredømmet i skoven. Tigerstjerne trækker de blodtørstige baggårdskatte fra Blodklanen med ind i kampen og føler sig sikker på sejren. Men det går anderledes, end han tror, og pludselig må alle fire klaner stå sammen om at bevare deres skov, som de kender den"
      ],
      "audienceAge": [
        "fra 7 år"
      ],
      "audience": [
        "børnematerialer"
      ],
      "version": [
        "1. udgave, 1. oplag (2012)"
      ],
      "publisher": [
        "Sohn"
      ],
      "contributorTrl": [
        "Jens Christiansen"
      ],
      "date": [
        "2012"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "extent": [
        "262 sider",
        "6 bind"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Erin Hunter"
      ],
      "pid": [
        "775100-katalog:29602352"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Krigerkattene"
      ],
      "titleFull": [
        "Krigerkattene"
      ],
      "type": [
        "Bog (bind 6)"
      ],
      "workType": [
        "book"
      ],
      "coverUrl117": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=59f7b3733316236e6931"
      ],
      "coverUrl207": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=270b640b35b03e0e3e2e"
      ],
      "coverUrl42": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=b7d99549a26e6b83e5c5"
      ],
      "coverUrl500": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=847acb0344111b7bf4b4"
      ],
      "coverUrlThumbnail": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=45c779ce75b86b4f6596"
      ],
      "coverUrlFull": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=df99d4c872e1d802bb72"
      ],
      "coverDataUrl117": "data:image/jpeg;base64,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"
    }
  ]
});
        done();
      })
      .catch(result => {
        fail({throw: result}, {
  "statusCode": 200,
  "data": [
    {
      "collection": [
        "775100-katalog:29602352",
        "775100-katalog:28949847",
        "775100-katalog:29024707",
        "775100-katalog:29283893",
        "775100-katalog:29333793",
        "775100-katalog:29496226",
        "775100-katalog:29227756",
        "775100-katalog:29288623",
        "775100-katalog:50926419",
        "775100-katalog:50926400",
        "870970-basis:29614636",
        "870970-basis:29614857",
        "870970-basis:50926427",
        "870970-basis:50926443"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29602352"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 6)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:28949847"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 1)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29024707"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 2)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29283893"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 3)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29333793"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 4)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29496226"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Bog (bind 5)"
          ],
          "workType": [
            "book"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29227756"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (cd-mp3) (bind 1)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:29288623"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (cd-mp3) (bind 2)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:50926419"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (cd-mp3) (bind 3)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "775100-katalog:50926400"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (cd-mp3) (bind 4)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "870970-basis:29614636"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (net) (bind 1)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "870970-basis:29614857"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (net) (bind 2)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "870970-basis:50926427"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (net) (bind 3)"
          ],
          "workType": [
            "audiobook"
          ]
        },
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "Erin Hunter"
          ],
          "pid": [
            "870970-basis:50926443"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Krigerkattene"
          ],
          "titleFull": [
            "Krigerkattene"
          ],
          "type": [
            "Lydbog (net) (bind 4)"
          ],
          "workType": [
            "audiobook"
          ]
        }
      ],
      "acIdentifier": [
        "29602352|870970"
      ],
      "identifierISBN": [
        "9788771220353"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "source": [
        "Warrior cats"
      ],
      "dcTitle": [
        "Krigerkattene"
      ],
      "dcTitleFull": [
        "Krigerkattene. Bind 6, Den mørkeste time"
      ],
      "creatorAut": [
        "Erin Hunter"
      ],
      "creatorSort": [
        "Hunter, Erin"
      ],
      "subjectDK5Text": [
        "Skønlitteratur"
      ],
      "subjectDBCS": [
        "dyrefortællinger",
        "forræderi",
        "katte",
        "magtkamp",
        "venskab"
      ],
      "subjectGenre": [
        "dyrefortællinger"
      ],
      "subjectDBCN": [
        "for 10 år",
        "for 11 år",
        "for 7 år",
        "for 8 år",
        "for 9 år",
        "for højtlæsning"
      ],
      "subjectDK5": [
        "sk"
      ],
      "abstract": [
        "Da Tigerstjerne foreslår, at han bliver leder af alle klanerne i skoven, går Flodklanen med ham, men Vindklanen og Tordenklanen siger nej. Det bliver starten til det helt store slag om herredømmet i skoven. Tigerstjerne trækker de blodtørstige baggårdskatte fra Blodklanen med ind i kampen og føler sig sikker på sejren. Men det går anderledes, end han tror, og pludselig må alle fire klaner stå sammen om at bevare deres skov, som de kender den"
      ],
      "audienceAge": [
        "fra 7 år"
      ],
      "audience": [
        "børnematerialer"
      ],
      "version": [
        "1. udgave, 1. oplag (2012)"
      ],
      "publisher": [
        "Sohn"
      ],
      "contributorTrl": [
        "Jens Christiansen"
      ],
      "date": [
        "2012"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "extent": [
        "262 sider",
        "6 bind"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Erin Hunter"
      ],
      "pid": [
        "775100-katalog:29602352"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Krigerkattene"
      ],
      "titleFull": [
        "Krigerkattene"
      ],
      "type": [
        "Bog (bind 6)"
      ],
      "workType": [
        "book"
      ],
      "coverUrl117": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=59f7b3733316236e6931"
      ],
      "coverUrl207": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=270b640b35b03e0e3e2e"
      ],
      "coverUrl42": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=b7d99549a26e6b83e5c5"
      ],
      "coverUrl500": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=847acb0344111b7bf4b4"
      ],
      "coverUrlThumbnail": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=45c779ce75b86b4f6596"
      ],
      "coverUrlFull": [
        "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=29602352&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=df99d4c872e1d802bb72"
      ],
      "coverDataUrl117": "data:image/jpeg;base64,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"
    }
  ]
});
        done();
      });
  });
});
