/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: search {"q":"krigerkattene","fields":["pid","creator","coverUrlFull"],"limit":3}

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
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>krigerkattene</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>3</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"14\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"14\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"29602352|870970\",\"@\":\"ac\"},{\"$\":\"9788771220353\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"},{\"$\":\"Warrior cats\",\"@\":\"dc\"}],\"title\":[{\"$\":\"Krigerkattene\",\"@\":\"dc\"},{\"$\":\"Krigerkattene. Bind 6, Den m\\u00f8rkeste time\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Erin Hunter\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Hunter, Erin\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dyrefort\\u00e6llinger\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dyrefort\\u00e6llinger\",\"@type\":{\"$\":\"dkdcplus:genre\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 10 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 11 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 7 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 8 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 9 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for h\\u00f8jtl\\u00e6sning\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"forr\\u00e6deri\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"katte\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"magtkamp\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"venskab\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Da Tigerstjerne foresl\\u00e5r, at han bliver leder af alle klanerne i skoven, g\\u00e5r Flodklanen med ham, men Vindklanen og Tordenklanen siger nej. Det bliver starten til det helt store slag om herred\\u00f8mmet i skoven. Tigerstjerne tr\\u00e6kker de blodt\\u00f8rstige bagg\\u00e5rdskatte fra Blodklanen med ind i kampen og f\\u00f8ler sig sikker p\\u00e5 sejren. Men det g\\u00e5r anderledes, end han tror, og pludselig m\\u00e5 alle fire klaner st\\u00e5 sammen om at bevare deres skov, som de kender den\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"fra 7 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:age\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, 1. oplag (2012)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Sohn\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Jens Christiansen\",\"@type\":{\"$\":\"dkdcplus:trl\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"date\":[{\"$\":\"2012\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"262 sider\",\"@\":\"dcterms\"},{\"$\":\"6 bind\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:29602352\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:29602352\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:29602352\"},{\"$\":\"870970-basis:29602352\"}]}},{\"identifier\":{\"$\":\"775100-katalog:28949847\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29024707\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29283893\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29333793\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29496226\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29227756\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29288623\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:50926419\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:50926400\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29614636\"},\"creationDate\":{\"$\":\"2012-11-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29614857\"},\"creationDate\":{\"$\":\"2012-11-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:50926427\"},\"creationDate\":{\"$\":\"2014-01-23\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:50926443\"},\"creationDate\":{\"$\":\"2014-01-23\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008506844__1\"},\"identifier\":{\"$\":\"775100-katalog:29602352\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 6)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008209967__1\"},\"identifier\":{\"$\":\"775100-katalog:28949847\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 1)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008213211__1\"},\"identifier\":{\"$\":\"775100-katalog:29024707\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 2)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008462346__1\"},\"identifier\":{\"$\":\"775100-katalog:29283893\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 3)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008461956__1\"},\"identifier\":{\"$\":\"775100-katalog:29333793\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 4)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"810015-katalog:008487410__1\"},\"identifier\":{\"$\":\"775100-katalog:29496226\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 5)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29227756\"},\"identifier\":{\"$\":\"775100-katalog:29227756\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 1)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29288623\"},\"identifier\":{\"$\":\"775100-katalog:29288623\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 2)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926419\"},\"identifier\":{\"$\":\"775100-katalog:50926419\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 3)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926400\"},\"identifier\":{\"$\":\"775100-katalog:50926400\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 4)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29614636\"},\"identifier\":{\"$\":\"870970-basis:29614636\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 1)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29614857\"},\"identifier\":{\"$\":\"870970-basis:29614857\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 2)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926427\"},\"identifier\":{\"$\":\"870970-basis:50926427\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 3)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926443\"},\"identifier\":{\"$\":\"870970-basis:50926443\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 4)\"},\"workType\":{\"$\":\"audiobook\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"78\"},\"fedoraRecordsRead\":{\"$\":\"6\"},\"time\":{\"$\":\"0.711818\"},\"trackingId\":{\"$\":\"2016-12-08T15:37:01:954254:12203\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>krigerkattene</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>3</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"14\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"14\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"29602352|870970\",\"@\":\"ac\"},{\"$\":\"9788771220353\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"},{\"$\":\"Warrior cats\",\"@\":\"dc\"}],\"title\":[{\"$\":\"Krigerkattene\",\"@\":\"dc\"},{\"$\":\"Krigerkattene. Bind 6, Den m\\u00f8rkeste time\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Erin Hunter\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Hunter, Erin\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dyrefort\\u00e6llinger\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dyrefort\\u00e6llinger\",\"@type\":{\"$\":\"dkdcplus:genre\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 10 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 11 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 7 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 8 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 9 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for h\\u00f8jtl\\u00e6sning\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"forr\\u00e6deri\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"katte\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"magtkamp\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"venskab\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Da Tigerstjerne foresl\\u00e5r, at han bliver leder af alle klanerne i skoven, g\\u00e5r Flodklanen med ham, men Vindklanen og Tordenklanen siger nej. Det bliver starten til det helt store slag om herred\\u00f8mmet i skoven. Tigerstjerne tr\\u00e6kker de blodt\\u00f8rstige bagg\\u00e5rdskatte fra Blodklanen med ind i kampen og f\\u00f8ler sig sikker p\\u00e5 sejren. Men det g\\u00e5r anderledes, end han tror, og pludselig m\\u00e5 alle fire klaner st\\u00e5 sammen om at bevare deres skov, som de kender den\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"fra 7 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:age\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, 1. oplag (2012)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Sohn\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Jens Christiansen\",\"@type\":{\"$\":\"dkdcplus:trl\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"date\":[{\"$\":\"2012\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"262 sider\",\"@\":\"dcterms\"},{\"$\":\"6 bind\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:29602352\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:29602352\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:29602352\"},{\"$\":\"870970-basis:29602352\"}]}},{\"identifier\":{\"$\":\"775100-katalog:28949847\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29024707\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29283893\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29333793\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29496226\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29227756\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:29288623\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:50926419\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:50926400\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29614636\"},\"creationDate\":{\"$\":\"2012-11-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29614857\"},\"creationDate\":{\"$\":\"2012-11-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:50926427\"},\"creationDate\":{\"$\":\"2014-01-23\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:50926443\"},\"creationDate\":{\"$\":\"2014-01-23\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29602352\"},\"identifier\":{\"$\":\"775100-katalog:29602352\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 6)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:28949847\"},\"identifier\":{\"$\":\"775100-katalog:28949847\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 1)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29024707\"},\"identifier\":{\"$\":\"775100-katalog:29024707\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 2)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29283893\"},\"identifier\":{\"$\":\"775100-katalog:29283893\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 3)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29333793\"},\"identifier\":{\"$\":\"775100-katalog:29333793\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 4)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29496226\"},\"identifier\":{\"$\":\"775100-katalog:29496226\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Bog (bind 5)\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29227756\"},\"identifier\":{\"$\":\"775100-katalog:29227756\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 1)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29288623\"},\"identifier\":{\"$\":\"775100-katalog:29288623\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 2)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926419\"},\"identifier\":{\"$\":\"775100-katalog:50926419\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 3)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926400\"},\"identifier\":{\"$\":\"775100-katalog:50926400\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (cd-mp3) (bind 4)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29614636\"},\"identifier\":{\"$\":\"870970-basis:29614636\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 1)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:29614857\"},\"identifier\":{\"$\":\"870970-basis:29614857\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 2)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926427\"},\"identifier\":{\"$\":\"870970-basis:50926427\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 3)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Erin Hunter\"},\"fedoraPid\":{\"$\":\"870970-basis:50926443\"},\"identifier\":{\"$\":\"870970-basis:50926443\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Krigerkattene\"},\"titleFull\":{\"$\":\"Krigerkattene\"},\"type\":{\"$\":\"Lydbog (net) (bind 4)\"},\"workType\":{\"$\":\"audiobook\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"15\"},\"fedoraRecordsRead\":{\"$\":\"71\"},\"time\":{\"$\":\"0.900682\"},\"trackingId\":{\"$\":\"2016-12-08T15:37:01:960812:13366\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"moreinfo\",{\"qs\":{\"action\":\"moreInfo\",\"authenticationUser\":\"XXXXX\",\"authenticationGroup\":\"XXXXX\",\"authenticationPassword\":\"XXXXX\",\"pidList\":\"775100-katalog:29602352\",\"outputType\":\"json\"}}]": "{\"moreInfoResponse\":{\"requestStatus\":{\"statusEnum\":{\"$\":\"ok\",\"@\":\"mi\"},\"errorText\":{\"$\":\"\",\"@\":\"mi\"},\"@\":\"mi\"},\"identifierInformation\":[{\"identifierKnown\":{\"$\":\"true\",\"@\":\"mi\"},\"identifier\":{\"pid\":{\"$\":\"775100-katalog:29602352\",\"@\":\"mi\"},\"@\":\"mi\"},\"backImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=c12ee161a714070a3b16\",\"@imageSize\":{\"$\":\"detail_117\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=5905106fab9c5a89629b\",\"@imageSize\":{\"$\":\"detail_207\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=fd660dd4da6865f4536a\",\"@imageSize\":{\"$\":\"detail_42\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=b87f0bb87bb814d6ca8c\",\"@imageSize\":{\"$\":\"detail_500\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=bfe8314dd0b605c3f75c\",\"@imageSize\":{\"$\":\"thumbnail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=2949bf053a55f2a8d82b\",\"@imageSize\":{\"$\":\"detail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"}],\"backPage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=3c812b4d81bf6b4ad5f6\",\"@\":\"mi\"}],\"coverImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=59f7b3733316236e6931\",\"@imageSize\":{\"$\":\"detail_117\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=270b640b35b03e0e3e2e\",\"@imageSize\":{\"$\":\"detail_207\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=b7d99549a26e6b83e5c5\",\"@imageSize\":{\"$\":\"detail_42\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=847acb0344111b7bf4b4\",\"@imageSize\":{\"$\":\"detail_500\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=45c779ce75b86b4f6596\",\"@imageSize\":{\"$\":\"thumbnail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29602352&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=df99d4c872e1d802bb72\",\"@imageSize\":{\"$\":\"detail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"}],\"@\":\"mi\"}],\"@\":\"mi\"},\"@namespaces\":{\"mi\":\"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo\"}}\n"
};

describe('Automated test: __search_coverUrl_limit', () => {
  it('expected response. ID:wj490s, for {"q":"krigerkattene","fields":["pid","creator","coverUrlFull"],"limit":3}', (done) => {
    context.mockData = mockData;
    provider.execute('search', {"q":"krigerkattene","fields":["pid","creator","coverUrlFull"],"limit":3}, context)
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
      ]
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
      ]
    }
  ]
});
        done();
      });
  });
});
