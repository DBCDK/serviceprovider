/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: search {"q":"fisk","offset":10,"limit":20}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

const context = {
  "services": {
    "ddbcmsapi": "https://cmscontent.dbc.dk/",
    "moreinfo": "http://moreinfo.addi.dk/2.6/",
    "openagency": "http://openagency.addi.dk/2.24/",
    "openholdingstatus": "https://openholdingstatus.addi.dk/2.2/",
    "PRODopenorder": "https://openorder.addi.dk/2.7.1/",
    "openorder": "https://openorder.addi.dk/test_2.7.1/",
    "opensearch": "http://opensearch.addi.dk/b3.0_4.3/",
    "openuserstatus": "https://openuserstatus.addi.dk/1.4.1/",
    "rank": "https://xptest.dbc.dk/ms/rank/v1",
    "suggestpopular": "http://xptest.dbc.dk/ms/entity-pop/v1",
    "suggestcreator": "http://xptest.dbc.dk/ms/entity-suggest/v1/creator",
    "suggestlibrary": "http://xptest.dbc.dk/ms/entity-suggest/v1/library",
    "suggestsubject": "http://xptest.dbc.dk/ms/entity-suggest/v1/subject",
    "recommendurls": {
      "default": "https://xptest.dbc.dk/ms/recommend-cosim/v1",
      "popular": "https://xptest.dbc.dk/ms/recommend-pop/v1"
    },
    "communityservice": "http://localhost:4010/v1"
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
    "orderpolicyrequester": "190101",
    "orderSystem": "bibliotekdk"
  }
};
const provider = Provider();
const mockData = {
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>fisk</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>11</ns1:start>\\n      <ns1:stepValue>20</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"9948\"},\"collectionCount\":{\"$\":\"20\"},\"more\":{\"$\":\"true\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"11\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"51644557|870970\",\"@\":\"ac\"},{\"$\":\"9788799637416\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Adamsen's nordisk fisk\",\"@\":\"dc\"},{\"$\":\"Adamsen's nordisk fisk : p\\u00e5 den nemme m\\u00e5de\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Nordisk fisk\",\"@\":\"dcterms\"}],\"creator\":[{\"$\":\"Nina Marie Villadsen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Villadsen, Nina Marie\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"64.17\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"S\\u00e6rlige retter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fiskeretter\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kogeb\\u00f8ger\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"opskrifter\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Fiskeopskrifter som fx havkat, torsk, laks, bl\\u00e6ksprutte samt fotos og beskrivelse af dem\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Wiegaarden Media\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Adamsen's Fisk\",\"@type\":{\"$\":\"dkdcplus:dkops\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Wiegaarden Media\",\"@\":\"dc\"},{\"$\":\"Annette Boe \\u00d8stergaard\",\"@type\":{\"$\":\"dkdcplus:pht\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"date\":[{\"$\":\"2015\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"95 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:51644557\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:51644557\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2015-03-16\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:51644557\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Nina Marie Villadsen\"},\"fedoraPid\":{\"$\":\"870970-basis:51644557\"},\"identifier\":{\"$\":\"870970-basis:51644557\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Adamsen's nordisk fisk\"},\"titleFull\":{\"$\":\"Adamsen's nordisk fisk : p\\u00e5 den nemme m\\u00e5de\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"12\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"26111129|870970\",\"@\":\"ac\"},{\"$\":\"87-02-02636-8\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Fisk\",\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"De sm\\u00e5 fagb\\u00f8ger\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Anders Uldal\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Uldal, Anders\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 10 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 8 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 9 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"Indhold: Hvad er fisk? ; Den bl\\u00e5 fisk ; F\\u00f8de ; \\u00c6g og yngel ; Danske fisk ; Bruskfisk ; Giftige fisk ; Fladfisk ; \\u00c5l ; Elektrisk \\u00e5l ; Piratfisk ; M\\u00e6rkelige fisk ; Dybhavsfisk ; S\\u00f8heste ; Fiskeri\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"fra 8 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:age\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, 1. oplag (2006)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Gyldendal\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2006\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"36 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:26111129\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:26111129\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:26111129\"},{\"$\":\"870970-basis:26111129\"}]}}]},\"formattedCollection\":{\"briefDisplay\":null}},{\"collection\":{\"resultPosition\":{\"$\":\"13\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"80309988|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Stallingens menukort\",\"@\":\"dc\"},{\"$\":\"Stallingens menukort\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Steen Ulnits\",\"@\":\"dc\"},{\"$\":\"Ulnits, Steen\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"f\\u00f8devalg fisk\",\"@\":\"dc\"},{\"$\":\"f\\u00f8devalg stalling\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"stalling\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"F\\u00f8devalg\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1991\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 54-55\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk & fri, 1991, nr. 7\",\"@\":\"dcterms\"},{\"$\":\"0108-2000\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:80309988\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:80309988\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:80309988\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Steen Ulnits\"},\"fedoraPid\":{\"$\":\"870971-tsart:80309988\"},\"identifier\":{\"$\":\"870971-tsart:80309988\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk & fri, 1991, nr. 7\"},\"title\":{\"$\":\"Stallingens menukort\"},\"titleFull\":{\"$\":\"Stallingens menukort\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"14\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72160614|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Flugtadf\\u00e6rd hos fisk\",\"@\":\"dc\"},{\"$\":\"Flugtadf\\u00e6rd hos fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"CK.\",\"@\":\"dc\"},{\"$\":\"CK.\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"flugtadf\\u00e6rd fisk\",\"@\":\"dc\"},{\"$\":\"forurening fisk\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Reaktioner hos fisk der uds\\u00e6ttes for forurening\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1986\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 6\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Dansk fiskeri tidende, \\u00c5rg. 104, nr. 30 (1986)\",\"@\":\"dcterms\"},{\"$\":\"0011-6270\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72160614\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72160614\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72160614\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"CK.\"},\"fedoraPid\":{\"$\":\"870971-tsart:72160614\"},\"identifier\":{\"$\":\"870971-tsart:72160614\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Dansk fiskeri tidende, \\u00c5rg. 104, nr. 30 (1986)\"},\"title\":{\"$\":\"Flugtadf\\u00e6rd hos fisk\"},\"titleFull\":{\"$\":\"Flugtadf\\u00e6rd hos fisk\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"15\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72290755|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"R\\u00f8dsp\\u00e6tten - en popul\\u00e6r fisk - ogs\\u00e5 i k\\u00f8kkenet\",\"@\":\"dc\"},{\"$\":\"R\\u00f8dsp\\u00e6tten - en popul\\u00e6r fisk - ogs\\u00e5 i k\\u00f8kkenet\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fiskens biologi\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Lars Nielsen\",\"@\":\"dc\"},{\"$\":\"Nielsen, Lars\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"Pleuronectes platessa\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"r\\u00f8dsp\\u00e6tte\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Pleuronectes platessa\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1987\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 26-27\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk & fri, 1987, nr. 1\",\"@\":\"dcterms\"},{\"$\":\"0108-2000\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72290755\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72290755\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72290755\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Lars Nielsen\"},\"fedoraPid\":{\"$\":\"870971-tsart:72290755\"},\"identifier\":{\"$\":\"870971-tsart:72290755\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk & fri, 1987, nr. 1\"},\"title\":{\"$\":\"R\\u00f8dsp\\u00e6tten - en popul\\u00e6r fisk - ogs\\u00e5 i k\\u00f8kkenet\"},\"titleFull\":{\"$\":\"R\\u00f8dsp\\u00e6tten - en popul\\u00e6r fisk - ogs\\u00e5 i k\\u00f8kkenet\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"16\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"87572560|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"H\\u00f8jkvalitets frossen fisk\",\"@\":\"dc\"},{\"$\":\"H\\u00f8jkvalitets frossen fisk : en mulighed\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Jette Nielsen\",\"@\":\"dc\"},{\"$\":\"Nielsen, Jette\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Francisca Listov-Saabye\",\"@\":\"dc\"},{\"$\":\"Listov-Saabye, Francisca\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"66.85\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Slagteri. K\\u00f8d- og fiskeindustri\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fiskeindustri\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"frossen fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kvalitet\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"2003\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 4-5\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Alimenta, \\u00c5rg. 26, nr. 9 (2003)\",\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:87572560\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:87572560\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-02\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:87572560\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Jette Nielsen\"},\"fedoraPid\":{\"$\":\"870971-tsart:87572560\"},\"identifier\":{\"$\":\"870971-tsart:87572560\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Alimenta, \\u00c5rg. 26, nr. 9 (2003)\"},\"title\":{\"$\":\"H\\u00f8jkvalitets frossen fisk\"},\"titleFull\":{\"$\":\"H\\u00f8jkvalitets frossen fisk : en mulighed\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"17\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"24477592|870970\",\"@\":\"ac\"},{\"$\":\"87-90085-12-4\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Fisk\",\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Hanne B\\u00e5rris\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"B\\u00e5rris, Hanne\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 1. klasse\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 2. klasse\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 3. klasse\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"undervisningsmaterialer\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"P\\u00e5 omslaget: Id\\u00e9- og aktivitetsmappe om fisk\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Elephant\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2002\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"79 l\\u00f8sblade\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:24477592\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:24477592\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:24477592\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Hanne B\\u00e5rris\"},\"fedoraPid\":{\"$\":\"870970-basis:24477592\"},\"identifier\":{\"$\":\"870970-basis:24477592\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Fisk\"},\"titleFull\":{\"$\":\"Fisk\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"18\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"26190924|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Nemme og hurtige hverdagsretter med fisk\",\"@\":\"dc\"},{\"$\":\"Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk ; 1\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"64.17\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"S\\u00e6rlige retter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Fiskebranchens Oplysningsudvalg\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Fiskebranchens Oplysningsudvalg\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2006\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"127 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:26190924\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:26190924\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2006-03-28\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:26190924\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:26190924\"},\"identifier\":{\"$\":\"870970-basis:26190924\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Nemme og hurtige hverdagsretter med fisk\"},\"titleFull\":{\"$\":\"Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"19\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"25729706|870970\",\"@\":\"ac\"},{\"$\":\"87-00-76819-7\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Let og l\\u00e6kkert - fisk & skaldyr\",\"@\":\"dc\"},{\"$\":\"Let og l\\u00e6kkert - fisk & skaldyr\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Let og l\\u00e6kkert ; 27\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Fisk & skaldyr\",\"@\":\"dcterms\"},{\"$\":\"Fisk og skaldyr\",\"@\":\"dcterms\"},{\"$\":\"Let og l\\u00e6kkert - fisk og skaldyr\",\"@\":\"dcterms\"}],\"creator\":[{\"$\":\"Hanne Bloch\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Bloch, Hanne\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"64.17\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"S\\u00e6rlige retter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, 1. oplag\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Gyldendal\",\"@\":\"dc\"},{\"$\":\"for Coop Danmark\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2005\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"60 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:25729706\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:25729706\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-05-05\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:25729706\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Hanne Bloch\"},\"fedoraPid\":{\"$\":\"870970-basis:25729706\"},\"identifier\":{\"$\":\"870970-basis:25729706\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Let og l\\u00e6kkert - fisk & skaldyr\"},\"titleFull\":{\"$\":\"Let og l\\u00e6kkert - fisk & skaldyr\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"20\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"82068902|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"S\\u00e5rinfektioner hos fisk\",\"@\":\"dc\"},{\"$\":\"S\\u00e5rinfektioner hos fisk : forekomst, \\u00e5rsag og betydning\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Inger Dalsgaard\",\"@\":\"dc\"},{\"$\":\"Dalsgaard, Inger\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"fiskesygdomme\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"infektioner veterin\\u00e6rmedicin\",\"@\":\"dc\"},{\"$\":\"s\\u00e5rinfektioner veterin\\u00e6rmedicin\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1994\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 57-64\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk og hav, 1994 = Skrifter... nr. 45 (1994)\",\"@\":\"dcterms\"},{\"$\":\"0105-9211\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:82068902\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:82068902\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:82068902\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Inger Dalsgaard\"},\"fedoraPid\":{\"$\":\"870971-tsart:82068902\"},\"identifier\":{\"$\":\"870971-tsart:82068902\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk og hav, 1994 = Skrifter... nr. 45 (1994)\"},\"title\":{\"$\":\"S\\u00e5rinfektioner hos fisk\"},\"titleFull\":{\"$\":\"S\\u00e5rinfektioner hos fisk : forekomst, \\u00e5rsag og betydning\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"21\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72546555|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Masser af fisk i Moss\\u00f8\",\"@\":\"dc\"},{\"$\":\"Masser af fisk i Moss\\u00f8\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Lars Nielsen\",\"@\":\"dc\"},{\"$\":\"Nielsen, Lars\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Moss\\u00f8 fauna\",\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Kortl\\u00e6gning af fiskebestanden\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1987\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 20-22\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk & fri, 1987, nr. 7\",\"@\":\"dcterms\"},{\"$\":\"0108-2000\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72546555\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72546555\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72546555\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Lars Nielsen\"},\"fedoraPid\":{\"$\":\"870971-tsart:72546555\"},\"identifier\":{\"$\":\"870971-tsart:72546555\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk & fri, 1987, nr. 7\"},\"title\":{\"$\":\"Masser af fisk i Moss\\u00f8\"},\"titleFull\":{\"$\":\"Masser af fisk i Moss\\u00f8\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"22\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72546563|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Elektriske fisk: skabelse eller evolution?\",\"@\":\"dc\"},{\"$\":\"Elektriske fisk: skabelse eller evolution?\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Bent Vogel\",\"@\":\"dc\"},{\"$\":\"Vogel, Bent\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"elektriske fisk\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1987\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 19-21\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Origo, \\u00c5rg. 5, nr. 2 (1987)\",\"@\":\"dcterms\"},{\"$\":\"0109-6168\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72546563\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72546563\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72546563\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Bent Vogel\"},\"fedoraPid\":{\"$\":\"870971-tsart:72546563\"},\"identifier\":{\"$\":\"870971-tsart:72546563\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Origo, \\u00c5rg. 5, nr. 2 (1987)\"},\"title\":{\"$\":\"Elektriske fisk: skabelse eller evolution?\"},\"titleFull\":{\"$\":\"Elektriske fisk: skabelse eller evolution?\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"23\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73401518|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Nye navne p\\u00e5 kendte fisk\",\"@\":\"dc\"},{\"$\":\"Nye navne p\\u00e5 kendte fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Alf Stalsberg\",\"@\":\"dc\"},{\"$\":\"Stalsberg, Alf\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"fiskenavne\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"navne fisk\",\"@\":\"dc\"},{\"$\":\"terminologi fisk\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1989\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 313-315, 319-322\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Akvariebladet, \\u00c5rg. 21, nr. 9 (1989)\",\"@\":\"dcterms\"},{\"$\":\"0108-2396\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:73401518\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:73401518\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:73401518\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Alf Stalsberg\"},\"fedoraPid\":{\"$\":\"870971-tsart:73401518\"},\"identifier\":{\"$\":\"870971-tsart:73401518\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Akvariebladet, \\u00c5rg. 21, nr. 9 (1989)\"},\"title\":{\"$\":\"Nye navne p\\u00e5 kendte fisk\"},\"titleFull\":{\"$\":\"Nye navne p\\u00e5 kendte fisk\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"24\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"70921685|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Aflivning og rensning af fisk\",\"@\":\"dc\"},{\"$\":\"Aflivning og rensning af fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Knud Larsen\",\"@\":\"dc\"},{\"$\":\"Larsen, Knud\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"79.97\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Sportsfiskeri i alm.\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"aflivning fisk\",\"@\":\"dc\"},{\"$\":\"fiskeri\",\"@\":\"dc\"},{\"$\":\"lystfiskeri\",\"@\":\"dc\"},{\"$\":\"rensning fisk\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1982\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 48-49\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk & fri, 1982, nr. 2\",\"@\":\"dcterms\"},{\"$\":\"0108-2000\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:70921685\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:70921685\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:70921685\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Knud Larsen\"},\"fedoraPid\":{\"$\":\"870971-tsart:70921685\"},\"identifier\":{\"$\":\"870971-tsart:70921685\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk & fri, 1982, nr. 2\"},\"title\":{\"$\":\"Aflivning og rensning af fisk\"},\"titleFull\":{\"$\":\"Aflivning og rensning af fisk\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"25\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"87389677|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Frosne fisk kan sl\\u00e5 friske p\\u00e5 kvalitet\",\"@\":\"dc\"},{\"$\":\"Frosne fisk kan sl\\u00e5 friske p\\u00e5 kvalitet\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Jette Warrer Knudsen\",\"@\":\"dc\"},{\"$\":\"Warrer Knudsen, Jette\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"66.85\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Slagteri. K\\u00f8d- og fiskeindustri\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dybfrosne fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ern\\u00e6ring\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Ny dansk forskning viser, at frosne fisk kan have mindst lige s\\u00e5 h\\u00f8j kvalitet som nyfangne fisk\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"2003\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"F\\u00f8devarer, s. 2\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"B\\u00f8rsen, 2003-08-11\",\"@\":\"dcterms\"},{\"$\":\"0105-0729\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:87389677\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:87389677\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-02\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:87389677\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Jette Warrer Knudsen\"},\"fedoraPid\":{\"$\":\"870971-avis:87389677\"},\"identifier\":{\"$\":\"870971-avis:87389677\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"B\\u00f8rsen, 2003-08-11\"},\"title\":{\"$\":\"Frosne fisk kan sl\\u00e5 friske p\\u00e5 kvalitet\"},\"titleFull\":{\"$\":\"Frosne fisk kan sl\\u00e5 friske p\\u00e5 kvalitet\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"26\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"50686221|870970\",\"@\":\"ac\"},{\"$\":\"9788717043442\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"},{\"$\":\"Fish\",\"@\":\"dc\"}],\"title\":[{\"$\":\"Fisk og skaldyr\",\"@\":\"dc\"},{\"$\":\"Fisk og skaldyr\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Hurtig i k\\u00f8kkenet\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Fisk & skaldyr\",\"@\":\"dcterms\"},{\"$\":\"Hurtig i k\\u00f8kkenet - fisk og skaldyr\",\"@\":\"dcterms\"}],\"creator\":[{\"$\":\"Emma Lewis\",\"@type\":{\"$\":\"dkdcplus:dkops\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Lewis, Emma\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"64.17\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"S\\u00e6rlige retter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fiskeretter\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kogeb\\u00f8ger\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"opskrifter\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"skaldyr\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"skaldyrsretter\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"P\\u00e5 omslaget: 360 opskrifter p\\u00e5 10, 20, 30 minutter\",\"@\":\"dc\"},{\"$\":\"Indhold: Snacks ; Hverdagsretter ; Weekendretter ; Sunde retter ; G\\u00e6steretter\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. oplag (2013)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Nyt Nordisk Forlag Arnold Busck\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Emma Lewis\",\"@type\":{\"$\":\"dkdcplus:dkops\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Lars Thomas\",\"@type\":{\"$\":\"dkdcplus:trl\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"date\":[{\"$\":\"2013\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"288 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:50686221\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:50686221\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:50686221\"},{\"$\":\"870970-basis:50686221\"}]}}]},\"formattedCollection\":{\"briefDisplay\":null}},{\"collection\":{\"resultPosition\":{\"$\":\"27\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"74013864|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr\",\"@\":\"dc\"},{\"$\":\"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"J\\u00f8rgen M\\u00f8rup J\\u00f8rgensen\",\"@\":\"dc\"},{\"$\":\"M\\u00f8rup J\\u00f8rgensen, J\\u00f8rgen\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"den bl\\u00e5 fisk\",\"@\":\"dc\"},{\"$\":\"det elektrosensoriske sansesystem\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"sansefysiologi fisk\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Latimeria\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1991\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 303-308\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Naturens verden, 1991, nr. 8\",\"@\":\"dcterms\"},{\"$\":\"0028-0895\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:74013864\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:74013864\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:74013864\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"J\\u00f8rgen M\\u00f8rup J\\u00f8rgensen\"},\"fedoraPid\":{\"$\":\"870971-tsart:74013864\"},\"identifier\":{\"$\":\"870971-tsart:74013864\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Naturens verden, 1991, nr. 8\"},\"title\":{\"$\":\"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr\"},\"titleFull\":{\"$\":\"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"28\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"21676748|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Her lugter lidt af fisk\",\"@\":\"dc\"},{\"$\":\"Her lugter lidt af fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Shu-Bi-Dua\",\"@\":\"dc\"},{\"$\":\"Shu-Bi-Dua\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"78.794:5\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Rock (Beat). Moderne folkemusik (Folk)\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"shelf\":[{\"$\":\"Rock\",\"@type\":{\"$\":\"oss:musicshelf\",\"@\":\"xsi\"},\"@\":\"dkdcplus\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"CMC\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"CeeJay\",\"@\":\"dc\"},{\"$\":\"Lars Pedersen (f. 1970)\",\"@\":\"dc\"}],\"date\":[{\"$\":\"1997\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Cd (musik)\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"hasPart\":[{\"$\":\"Fisk (album version)\",\"@type\":{\"$\":\"dkdcplus:track\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"Fisk (Chief 1 remix)\",\"@type\":{\"$\":\"dkdcplus:track\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"Fisk (CeeJay remix)\",\"@type\":{\"$\":\"dkdcplus:track\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:21676748\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:21676748\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:21676748\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Shu-Bi-Dua\"},\"fedoraPid\":{\"$\":\"870970-basis:21676748\"},\"identifier\":{\"$\":\"870970-basis:21676748\"},\"title\":{\"$\":\"Her lugter lidt af fisk\"},\"titleFull\":{\"$\":\"Her lugter lidt af fisk\"},\"type\":{\"$\":\"Cd (musik)\"},\"workType\":{\"$\":\"music\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"29\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"42253235|870970\",\"@\":\"ac\"},{\"$\":\"87-89796-33-0\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Kend din fisk\",\"@\":\"dc\"},{\"$\":\"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk. Bind 2\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"f\\u00f8devarer\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"h\\u00e5ndb\\u00f8ger\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"skaldyr\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Et opslagsv\\u00e6rk, der kan tilf\\u00f8re kokke og andre en grundl\\u00e6ggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udf\\u00f8rligt for at fastholde kravet til kvalitet\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"HORESTA\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Kurt Prentow\",\"@\":\"dc\"},{\"$\":\"HORESTA\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2000\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"208 sider\",\"@\":\"dcterms\"},{\"$\":\"2 bind\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:42253235\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:42253235\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:42253235\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:42253235\"},\"identifier\":{\"$\":\"870970-basis:42253235\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kend din fisk\"},\"titleFull\":{\"$\":\"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk\"},\"type\":{\"$\":\"Bog (bind 2)\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"30\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"36406186|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"B\\u00f8r vi holde igen med fed fisk?\",\"@\":\"dc\"},{\"$\":\"B\\u00f8r vi holde igen med fed fisk?\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Philippe Grandjean\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Grandjean, Philippe\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Lotte Lauritzen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Lauritzen, Lotte\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"61.38\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Ern\\u00e6ring\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ern\\u00e6ring\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kost\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kviks\\u00f8lv\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kviks\\u00f8lvforurening\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sundhed\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Danskerne spiser mere fisk. I 2013 blev der solgt 1.100 tons flere ferske fisk end \\u00e5ret f\\u00f8r. Alligevel spiser f\\u00e5 fisk som hovedret to gange om ugen, s\\u00e5dan som F\\u00f8devarestyrelsen anbefaler. Men er det overhovedet sundt at spise fisk fra de forurenede have? Forskerne ser forskelligt p\\u00e5 det\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"2015\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"Sektion 4, s. 4\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Politiken, 2015-02-28\",\"@\":\"dcterms\"},{\"$\":\"0907-1814\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:36406186\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:36406186\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2015-03-02\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:36406186\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Philippe Grandjean\"},\"fedoraPid\":{\"$\":\"870971-avis:36406186\"},\"identifier\":{\"$\":\"870971-avis:36406186\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Politiken, 2015-02-28\"},\"title\":{\"$\":\"B\\u00f8r vi holde igen med fed fisk?\"},\"titleFull\":{\"$\":\"B\\u00f8r vi holde igen med fed fisk?\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"86\"},\"fedoraRecordsRead\":{\"$\":\"6\"},\"time\":{\"$\":\"0.793599\"},\"trackingId\":{\"$\":\"2017-05-10T13:46:13:742533:9814\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>fisk</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>11</ns1:start>\\n      <ns1:stepValue>20</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"9948\"},\"collectionCount\":{\"$\":\"20\"},\"more\":{\"$\":\"true\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"11\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"51644557|870970\",\"@\":\"ac\"},{\"$\":\"9788799637416\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Adamsen's nordisk fisk\",\"@\":\"dc\"},{\"$\":\"Adamsen's nordisk fisk : p\\u00e5 den nemme m\\u00e5de\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Nordisk fisk\",\"@\":\"dcterms\"}],\"creator\":[{\"$\":\"Nina Marie Villadsen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Villadsen, Nina Marie\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"64.17\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"S\\u00e6rlige retter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fiskeretter\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kogeb\\u00f8ger\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"opskrifter\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Fiskeopskrifter som fx havkat, torsk, laks, bl\\u00e6ksprutte samt fotos og beskrivelse af dem\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Wiegaarden Media\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Adamsen's Fisk\",\"@type\":{\"$\":\"dkdcplus:dkops\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Wiegaarden Media\",\"@\":\"dc\"},{\"$\":\"Annette Boe \\u00d8stergaard\",\"@type\":{\"$\":\"dkdcplus:pht\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"date\":[{\"$\":\"2015\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"95 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:51644557\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:51644557\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2015-03-16\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:51644557\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Nina Marie Villadsen\"},\"fedoraPid\":{\"$\":\"870970-basis:51644557\"},\"identifier\":{\"$\":\"870970-basis:51644557\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Adamsen's nordisk fisk\"},\"titleFull\":{\"$\":\"Adamsen's nordisk fisk : p\\u00e5 den nemme m\\u00e5de\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"12\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"26111129|870970\",\"@\":\"ac\"},{\"$\":\"87-02-02636-8\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Fisk\",\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"De sm\\u00e5 fagb\\u00f8ger\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Anders Uldal\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Uldal, Anders\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 10 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 8 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 9 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"Indhold: Hvad er fisk? ; Den bl\\u00e5 fisk ; F\\u00f8de ; \\u00c6g og yngel ; Danske fisk ; Bruskfisk ; Giftige fisk ; Fladfisk ; \\u00c5l ; Elektrisk \\u00e5l ; Piratfisk ; M\\u00e6rkelige fisk ; Dybhavsfisk ; S\\u00f8heste ; Fiskeri\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"fra 8 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:age\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, 1. oplag (2006)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Gyldendal\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2006\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"36 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:26111129\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:26111129\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:26111129\"},{\"$\":\"870970-basis:26111129\"}]}}]},\"formattedCollection\":{\"briefDisplay\":null}},{\"collection\":{\"resultPosition\":{\"$\":\"13\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"80309988|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Stallingens menukort\",\"@\":\"dc\"},{\"$\":\"Stallingens menukort\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Steen Ulnits\",\"@\":\"dc\"},{\"$\":\"Ulnits, Steen\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"f\\u00f8devalg fisk\",\"@\":\"dc\"},{\"$\":\"f\\u00f8devalg stalling\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"stalling\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"F\\u00f8devalg\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1991\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 54-55\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk & fri, 1991, nr. 7\",\"@\":\"dcterms\"},{\"$\":\"0108-2000\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:80309988\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:80309988\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:80309988\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Steen Ulnits\"},\"fedoraPid\":{\"$\":\"870971-tsart:80309988\"},\"identifier\":{\"$\":\"870971-tsart:80309988\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk & fri, 1991, nr. 7\"},\"title\":{\"$\":\"Stallingens menukort\"},\"titleFull\":{\"$\":\"Stallingens menukort\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"14\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72160614|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Flugtadf\\u00e6rd hos fisk\",\"@\":\"dc\"},{\"$\":\"Flugtadf\\u00e6rd hos fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"CK.\",\"@\":\"dc\"},{\"$\":\"CK.\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"flugtadf\\u00e6rd fisk\",\"@\":\"dc\"},{\"$\":\"forurening fisk\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Reaktioner hos fisk der uds\\u00e6ttes for forurening\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1986\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 6\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Dansk fiskeri tidende, \\u00c5rg. 104, nr. 30 (1986)\",\"@\":\"dcterms\"},{\"$\":\"0011-6270\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72160614\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72160614\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72160614\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"CK.\"},\"fedoraPid\":{\"$\":\"870971-tsart:72160614\"},\"identifier\":{\"$\":\"870971-tsart:72160614\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Dansk fiskeri tidende, \\u00c5rg. 104, nr. 30 (1986)\"},\"title\":{\"$\":\"Flugtadf\\u00e6rd hos fisk\"},\"titleFull\":{\"$\":\"Flugtadf\\u00e6rd hos fisk\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"15\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72290755|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"R\\u00f8dsp\\u00e6tten - en popul\\u00e6r fisk - ogs\\u00e5 i k\\u00f8kkenet\",\"@\":\"dc\"},{\"$\":\"R\\u00f8dsp\\u00e6tten - en popul\\u00e6r fisk - ogs\\u00e5 i k\\u00f8kkenet\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fiskens biologi\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Lars Nielsen\",\"@\":\"dc\"},{\"$\":\"Nielsen, Lars\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"Pleuronectes platessa\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"r\\u00f8dsp\\u00e6tte\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Pleuronectes platessa\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1987\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 26-27\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk & fri, 1987, nr. 1\",\"@\":\"dcterms\"},{\"$\":\"0108-2000\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72290755\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72290755\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72290755\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Lars Nielsen\"},\"fedoraPid\":{\"$\":\"870971-tsart:72290755\"},\"identifier\":{\"$\":\"870971-tsart:72290755\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk & fri, 1987, nr. 1\"},\"title\":{\"$\":\"R\\u00f8dsp\\u00e6tten - en popul\\u00e6r fisk - ogs\\u00e5 i k\\u00f8kkenet\"},\"titleFull\":{\"$\":\"R\\u00f8dsp\\u00e6tten - en popul\\u00e6r fisk - ogs\\u00e5 i k\\u00f8kkenet\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"16\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"87572560|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"H\\u00f8jkvalitets frossen fisk\",\"@\":\"dc\"},{\"$\":\"H\\u00f8jkvalitets frossen fisk : en mulighed\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Jette Nielsen\",\"@\":\"dc\"},{\"$\":\"Nielsen, Jette\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Francisca Listov-Saabye\",\"@\":\"dc\"},{\"$\":\"Listov-Saabye, Francisca\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"66.85\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Slagteri. K\\u00f8d- og fiskeindustri\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fiskeindustri\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"frossen fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kvalitet\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"2003\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 4-5\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Alimenta, \\u00c5rg. 26, nr. 9 (2003)\",\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:87572560\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:87572560\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-02\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:87572560\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Jette Nielsen\"},\"fedoraPid\":{\"$\":\"870971-tsart:87572560\"},\"identifier\":{\"$\":\"870971-tsart:87572560\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Alimenta, \\u00c5rg. 26, nr. 9 (2003)\"},\"title\":{\"$\":\"H\\u00f8jkvalitets frossen fisk\"},\"titleFull\":{\"$\":\"H\\u00f8jkvalitets frossen fisk : en mulighed\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"17\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"24477592|870970\",\"@\":\"ac\"},{\"$\":\"87-90085-12-4\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Fisk\",\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Hanne B\\u00e5rris\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"B\\u00e5rris, Hanne\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 1. klasse\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 2. klasse\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 3. klasse\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"undervisningsmaterialer\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"P\\u00e5 omslaget: Id\\u00e9- og aktivitetsmappe om fisk\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Elephant\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2002\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"79 l\\u00f8sblade\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:24477592\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:24477592\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:24477592\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Hanne B\\u00e5rris\"},\"fedoraPid\":{\"$\":\"870970-basis:24477592\"},\"identifier\":{\"$\":\"870970-basis:24477592\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Fisk\"},\"titleFull\":{\"$\":\"Fisk\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"18\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"26190924|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Nemme og hurtige hverdagsretter med fisk\",\"@\":\"dc\"},{\"$\":\"Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk ; 1\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"64.17\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"S\\u00e6rlige retter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Fiskebranchens Oplysningsudvalg\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Fiskebranchens Oplysningsudvalg\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2006\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"127 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:26190924\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:26190924\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2006-03-28\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:26190924\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:26190924\"},\"identifier\":{\"$\":\"870970-basis:26190924\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Nemme og hurtige hverdagsretter med fisk\"},\"titleFull\":{\"$\":\"Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"19\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"25729706|870970\",\"@\":\"ac\"},{\"$\":\"87-00-76819-7\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Let og l\\u00e6kkert - fisk & skaldyr\",\"@\":\"dc\"},{\"$\":\"Let og l\\u00e6kkert - fisk & skaldyr\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Let og l\\u00e6kkert ; 27\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Fisk & skaldyr\",\"@\":\"dcterms\"},{\"$\":\"Fisk og skaldyr\",\"@\":\"dcterms\"},{\"$\":\"Let og l\\u00e6kkert - fisk og skaldyr\",\"@\":\"dcterms\"}],\"creator\":[{\"$\":\"Hanne Bloch\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Bloch, Hanne\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"64.17\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"S\\u00e6rlige retter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, 1. oplag\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Gyldendal\",\"@\":\"dc\"},{\"$\":\"for Coop Danmark\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2005\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"60 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:25729706\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:25729706\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-05-05\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:25729706\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Hanne Bloch\"},\"fedoraPid\":{\"$\":\"870970-basis:25729706\"},\"identifier\":{\"$\":\"870970-basis:25729706\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Let og l\\u00e6kkert - fisk & skaldyr\"},\"titleFull\":{\"$\":\"Let og l\\u00e6kkert - fisk & skaldyr\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"20\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"82068902|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"S\\u00e5rinfektioner hos fisk\",\"@\":\"dc\"},{\"$\":\"S\\u00e5rinfektioner hos fisk : forekomst, \\u00e5rsag og betydning\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Inger Dalsgaard\",\"@\":\"dc\"},{\"$\":\"Dalsgaard, Inger\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"fiskesygdomme\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"infektioner veterin\\u00e6rmedicin\",\"@\":\"dc\"},{\"$\":\"s\\u00e5rinfektioner veterin\\u00e6rmedicin\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1994\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 57-64\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk og hav, 1994 = Skrifter... nr. 45 (1994)\",\"@\":\"dcterms\"},{\"$\":\"0105-9211\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:82068902\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:82068902\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:82068902\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Inger Dalsgaard\"},\"fedoraPid\":{\"$\":\"870971-tsart:82068902\"},\"identifier\":{\"$\":\"870971-tsart:82068902\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk og hav, 1994 = Skrifter... nr. 45 (1994)\"},\"title\":{\"$\":\"S\\u00e5rinfektioner hos fisk\"},\"titleFull\":{\"$\":\"S\\u00e5rinfektioner hos fisk : forekomst, \\u00e5rsag og betydning\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"21\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72546555|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Masser af fisk i Moss\\u00f8\",\"@\":\"dc\"},{\"$\":\"Masser af fisk i Moss\\u00f8\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Lars Nielsen\",\"@\":\"dc\"},{\"$\":\"Nielsen, Lars\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Moss\\u00f8 fauna\",\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Kortl\\u00e6gning af fiskebestanden\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1987\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 20-22\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk & fri, 1987, nr. 7\",\"@\":\"dcterms\"},{\"$\":\"0108-2000\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72546555\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72546555\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72546555\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Lars Nielsen\"},\"fedoraPid\":{\"$\":\"870971-tsart:72546555\"},\"identifier\":{\"$\":\"870971-tsart:72546555\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk & fri, 1987, nr. 7\"},\"title\":{\"$\":\"Masser af fisk i Moss\\u00f8\"},\"titleFull\":{\"$\":\"Masser af fisk i Moss\\u00f8\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"22\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72546563|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Elektriske fisk: skabelse eller evolution?\",\"@\":\"dc\"},{\"$\":\"Elektriske fisk: skabelse eller evolution?\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Bent Vogel\",\"@\":\"dc\"},{\"$\":\"Vogel, Bent\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"elektriske fisk\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1987\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 19-21\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Origo, \\u00c5rg. 5, nr. 2 (1987)\",\"@\":\"dcterms\"},{\"$\":\"0109-6168\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72546563\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72546563\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72546563\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Bent Vogel\"},\"fedoraPid\":{\"$\":\"870971-tsart:72546563\"},\"identifier\":{\"$\":\"870971-tsart:72546563\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Origo, \\u00c5rg. 5, nr. 2 (1987)\"},\"title\":{\"$\":\"Elektriske fisk: skabelse eller evolution?\"},\"titleFull\":{\"$\":\"Elektriske fisk: skabelse eller evolution?\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"23\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73401518|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Nye navne p\\u00e5 kendte fisk\",\"@\":\"dc\"},{\"$\":\"Nye navne p\\u00e5 kendte fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Alf Stalsberg\",\"@\":\"dc\"},{\"$\":\"Stalsberg, Alf\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Pisces\",\"@\":\"dc\"},{\"$\":\"chordater vertebrater\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"fiskenavne\",\"@\":\"dc\"},{\"$\":\"hvirveldyr\",\"@\":\"dc\"},{\"$\":\"navne fisk\",\"@\":\"dc\"},{\"$\":\"terminologi fisk\",\"@\":\"dc\"},{\"$\":\"vertebrater\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1989\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 313-315, 319-322\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Akvariebladet, \\u00c5rg. 21, nr. 9 (1989)\",\"@\":\"dcterms\"},{\"$\":\"0108-2396\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:73401518\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:73401518\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:73401518\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Alf Stalsberg\"},\"fedoraPid\":{\"$\":\"870971-tsart:73401518\"},\"identifier\":{\"$\":\"870971-tsart:73401518\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Akvariebladet, \\u00c5rg. 21, nr. 9 (1989)\"},\"title\":{\"$\":\"Nye navne p\\u00e5 kendte fisk\"},\"titleFull\":{\"$\":\"Nye navne p\\u00e5 kendte fisk\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"24\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"70921685|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Aflivning og rensning af fisk\",\"@\":\"dc\"},{\"$\":\"Aflivning og rensning af fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Knud Larsen\",\"@\":\"dc\"},{\"$\":\"Larsen, Knud\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"79.97\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Sportsfiskeri i alm.\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"aflivning fisk\",\"@\":\"dc\"},{\"$\":\"fiskeri\",\"@\":\"dc\"},{\"$\":\"lystfiskeri\",\"@\":\"dc\"},{\"$\":\"rensning fisk\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1982\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 48-49\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Fisk & fri, 1982, nr. 2\",\"@\":\"dcterms\"},{\"$\":\"0108-2000\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:70921685\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:70921685\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:70921685\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Knud Larsen\"},\"fedoraPid\":{\"$\":\"870971-tsart:70921685\"},\"identifier\":{\"$\":\"870971-tsart:70921685\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Fisk & fri, 1982, nr. 2\"},\"title\":{\"$\":\"Aflivning og rensning af fisk\"},\"titleFull\":{\"$\":\"Aflivning og rensning af fisk\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"25\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"87389677|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Frosne fisk kan sl\\u00e5 friske p\\u00e5 kvalitet\",\"@\":\"dc\"},{\"$\":\"Frosne fisk kan sl\\u00e5 friske p\\u00e5 kvalitet\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Jette Warrer Knudsen\",\"@\":\"dc\"},{\"$\":\"Warrer Knudsen, Jette\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"66.85\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Slagteri. K\\u00f8d- og fiskeindustri\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dybfrosne fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ern\\u00e6ring\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Ny dansk forskning viser, at frosne fisk kan have mindst lige s\\u00e5 h\\u00f8j kvalitet som nyfangne fisk\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"2003\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"F\\u00f8devarer, s. 2\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"B\\u00f8rsen, 2003-08-11\",\"@\":\"dcterms\"},{\"$\":\"0105-0729\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:87389677\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:87389677\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-02\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:87389677\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Jette Warrer Knudsen\"},\"fedoraPid\":{\"$\":\"870971-avis:87389677\"},\"identifier\":{\"$\":\"870971-avis:87389677\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"B\\u00f8rsen, 2003-08-11\"},\"title\":{\"$\":\"Frosne fisk kan sl\\u00e5 friske p\\u00e5 kvalitet\"},\"titleFull\":{\"$\":\"Frosne fisk kan sl\\u00e5 friske p\\u00e5 kvalitet\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"26\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"50686221|870970\",\"@\":\"ac\"},{\"$\":\"9788717043442\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"},{\"$\":\"Fish\",\"@\":\"dc\"}],\"title\":[{\"$\":\"Fisk og skaldyr\",\"@\":\"dc\"},{\"$\":\"Fisk og skaldyr\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Hurtig i k\\u00f8kkenet\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Fisk & skaldyr\",\"@\":\"dcterms\"},{\"$\":\"Hurtig i k\\u00f8kkenet - fisk og skaldyr\",\"@\":\"dcterms\"}],\"creator\":[{\"$\":\"Emma Lewis\",\"@type\":{\"$\":\"dkdcplus:dkops\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Lewis, Emma\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"64.17\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"S\\u00e6rlige retter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fiskeretter\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kogeb\\u00f8ger\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"opskrifter\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"skaldyr\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"skaldyrsretter\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"P\\u00e5 omslaget: 360 opskrifter p\\u00e5 10, 20, 30 minutter\",\"@\":\"dc\"},{\"$\":\"Indhold: Snacks ; Hverdagsretter ; Weekendretter ; Sunde retter ; G\\u00e6steretter\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. oplag (2013)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Nyt Nordisk Forlag Arnold Busck\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Emma Lewis\",\"@type\":{\"$\":\"dkdcplus:dkops\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Lars Thomas\",\"@type\":{\"$\":\"dkdcplus:trl\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"date\":[{\"$\":\"2013\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"288 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:50686221\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:50686221\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:50686221\"},{\"$\":\"870970-basis:50686221\"}]}}]},\"formattedCollection\":{\"briefDisplay\":null}},{\"collection\":{\"resultPosition\":{\"$\":\"27\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"74013864|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr\",\"@\":\"dc\"},{\"$\":\"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"J\\u00f8rgen M\\u00f8rup J\\u00f8rgensen\",\"@\":\"dc\"},{\"$\":\"M\\u00f8rup J\\u00f8rgensen, J\\u00f8rgen\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"den bl\\u00e5 fisk\",\"@\":\"dc\"},{\"$\":\"det elektrosensoriske sansesystem\",\"@\":\"dc\"},{\"$\":\"fisk\",\"@\":\"dc\"},{\"$\":\"sansefysiologi fisk\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Latimeria\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1991\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 303-308\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Naturens verden, 1991, nr. 8\",\"@\":\"dcterms\"},{\"$\":\"0028-0895\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:74013864\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:74013864\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:74013864\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"J\\u00f8rgen M\\u00f8rup J\\u00f8rgensen\"},\"fedoraPid\":{\"$\":\"870971-tsart:74013864\"},\"identifier\":{\"$\":\"870971-tsart:74013864\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Naturens verden, 1991, nr. 8\"},\"title\":{\"$\":\"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr\"},\"titleFull\":{\"$\":\"Elektroreceptorer hos Den bl\\u00e5 Fisk og andre hvirveldyr\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"28\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"21676748|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Her lugter lidt af fisk\",\"@\":\"dc\"},{\"$\":\"Her lugter lidt af fisk\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Shu-Bi-Dua\",\"@\":\"dc\"},{\"$\":\"Shu-Bi-Dua\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"78.794:5\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Rock (Beat). Moderne folkemusik (Folk)\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"shelf\":[{\"$\":\"Rock\",\"@type\":{\"$\":\"oss:musicshelf\",\"@\":\"xsi\"},\"@\":\"dkdcplus\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"CMC\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"CeeJay\",\"@\":\"dc\"},{\"$\":\"Lars Pedersen (f. 1970)\",\"@\":\"dc\"}],\"date\":[{\"$\":\"1997\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Cd (musik)\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"hasPart\":[{\"$\":\"Fisk (album version)\",\"@type\":{\"$\":\"dkdcplus:track\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"Fisk (Chief 1 remix)\",\"@type\":{\"$\":\"dkdcplus:track\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"Fisk (CeeJay remix)\",\"@type\":{\"$\":\"dkdcplus:track\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:21676748\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:21676748\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:21676748\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Shu-Bi-Dua\"},\"fedoraPid\":{\"$\":\"870970-basis:21676748\"},\"identifier\":{\"$\":\"870970-basis:21676748\"},\"title\":{\"$\":\"Her lugter lidt af fisk\"},\"titleFull\":{\"$\":\"Her lugter lidt af fisk\"},\"type\":{\"$\":\"Cd (musik)\"},\"workType\":{\"$\":\"music\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"29\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"42253235|870970\",\"@\":\"ac\"},{\"$\":\"87-89796-33-0\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Kend din fisk\",\"@\":\"dc\"},{\"$\":\"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk. Bind 2\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"58.6\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Fisk\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"f\\u00f8devarer\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"h\\u00e5ndb\\u00f8ger\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"skaldyr\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Et opslagsv\\u00e6rk, der kan tilf\\u00f8re kokke og andre en grundl\\u00e6ggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udf\\u00f8rligt for at fastholde kravet til kvalitet\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"HORESTA\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Kurt Prentow\",\"@\":\"dc\"},{\"$\":\"HORESTA\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2000\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"208 sider\",\"@\":\"dcterms\"},{\"$\":\"2 bind\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:42253235\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:42253235\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:42253235\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:42253235\"},\"identifier\":{\"$\":\"870970-basis:42253235\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kend din fisk\"},\"titleFull\":{\"$\":\"Kend din fisk : det store opslagsv\\u00e6rk om fisk & skaldyr for kokke og andre fagfolk\"},\"type\":{\"$\":\"Bog (bind 2)\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"30\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"36406186|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"B\\u00f8r vi holde igen med fed fisk?\",\"@\":\"dc\"},{\"$\":\"B\\u00f8r vi holde igen med fed fisk?\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Philippe Grandjean\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Grandjean, Philippe\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Lotte Lauritzen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Lauritzen, Lotte\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"61.38\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Ern\\u00e6ring\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ern\\u00e6ring\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fisk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kost\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kviks\\u00f8lv\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kviks\\u00f8lvforurening\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sundhed\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Danskerne spiser mere fisk. I 2013 blev der solgt 1.100 tons flere ferske fisk end \\u00e5ret f\\u00f8r. Alligevel spiser f\\u00e5 fisk som hovedret to gange om ugen, s\\u00e5dan som F\\u00f8devarestyrelsen anbefaler. Men er det overhovedet sundt at spise fisk fra de forurenede have? Forskerne ser forskelligt p\\u00e5 det\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"2015\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"Sektion 4, s. 4\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Politiken, 2015-02-28\",\"@\":\"dcterms\"},{\"$\":\"0907-1814\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:36406186\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:36406186\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2015-03-02\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:36406186\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Philippe Grandjean\"},\"fedoraPid\":{\"$\":\"870971-avis:36406186\"},\"identifier\":{\"$\":\"870971-avis:36406186\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Politiken, 2015-02-28\"},\"title\":{\"$\":\"B\\u00f8r vi holde igen med fed fisk?\"},\"titleFull\":{\"$\":\"B\\u00f8r vi holde igen med fed fisk?\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"71\"},\"fedoraRecordsRead\":{\"$\":\"33\"},\"time\":{\"$\":\"0.98374\"},\"trackingId\":{\"$\":\"2017-05-10T13:46:13:738226:30365\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}"
};

describe('Automated test: search-with-parse-errors', () => {
  it('expected response. ID:hgz0dm, for {"q":"fisk","offset":10,"limit":20}', (done) => {
    context.mockData = mockData;
    provider.execute('search', {"q":"fisk","offset":10,"limit":20}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "statusCode": 200,
  "data": [
    {
      "collection": [
        "870970-basis:51644557"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Nina Marie Villadsen"
          ],
          "pid": [
            "870970-basis:51644557"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Adamsen's nordisk fisk"
          ],
          "titleFull": [
            "Adamsen's nordisk fisk : på den nemme måde"
          ],
          "type": [
            "Bog"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "51644557|870970"
      ],
      "identifierISBN": [
        "9788799637416"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Adamsen's nordisk fisk"
      ],
      "dcTitleFull": [
        "Adamsen's nordisk fisk : på den nemme måde"
      ],
      "alternative": [
        "Nordisk fisk"
      ],
      "creatorAut": [
        "Nina Marie Villadsen"
      ],
      "creatorSort": [
        "Villadsen, Nina Marie"
      ],
      "subjectDK5": [
        "64.17"
      ],
      "subjectDK5Text": [
        "Særlige retter"
      ],
      "subjectDBCF": [
        "fisk",
        "fiskeretter"
      ],
      "subjectDBCO": [
        "kogebøger",
        "opskrifter"
      ],
      "abstract": [
        "Fiskeopskrifter som fx havkat, torsk, laks, blæksprutte samt fotos og beskrivelse af dem"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "version": [
        "1. udgave"
      ],
      "publisher": [
        "Wiegaarden Media"
      ],
      "contributorDkops": [
        "Adamsen's Fisk"
      ],
      "contributor": [
        "Wiegaarden Media"
      ],
      "contributorPht": [
        "Annette Boe Østergaard"
      ],
      "date": [
        "2015"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "95 sider"
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
        "Nina Marie Villadsen"
      ],
      "pid": [
        "870970-basis:51644557"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Adamsen's nordisk fisk"
      ],
      "titleFull": [
        "Adamsen's nordisk fisk : på den nemme måde"
      ],
      "type": [
        "Bog"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "775100-katalog:26111129"
      ],
      "collectionDetails": [],
      "acIdentifier": [
        "26111129|870970"
      ],
      "identifierISBN": [
        "87-02-02636-8"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Fisk"
      ],
      "dcTitleFull": [
        "Fisk"
      ],
      "titleSeries": [
        "De små fagbøger"
      ],
      "creatorAut": [
        "Anders Uldal"
      ],
      "creatorSort": [
        "Uldal, Anders"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subjectDBCF": [
        "fisk"
      ],
      "subjectDBCN": [
        "for 10 år",
        "for 8 år",
        "for 9 år"
      ],
      "description": [
        "Indhold: Hvad er fisk? ; Den blå fisk ; Føde ; Æg og yngel ; Danske fisk ; Bruskfisk ; Giftige fisk ; Fladfisk ; Ål ; Elektrisk ål ; Piratfisk ; Mærkelige fisk ; Dybhavsfisk ; Søheste ; Fiskeri"
      ],
      "audienceAge": [
        "fra 8 år"
      ],
      "audience": [
        "børnematerialer"
      ],
      "version": [
        "1. udgave, 1. oplag (2006)"
      ],
      "publisher": [
        "Gyldendal"
      ],
      "date": [
        "2006"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "36 sider"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ]
    },
    {
      "collection": [
        "870971-tsart:80309988"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Steen Ulnits"
          ],
          "pid": [
            "870971-tsart:80309988"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk & fri, 1991, nr. 7"
          ],
          "title": [
            "Stallingens menukort"
          ],
          "titleFull": [
            "Stallingens menukort"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "80309988|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Stallingens menukort"
      ],
      "dcTitleFull": [
        "Stallingens menukort"
      ],
      "dcCreator": [
        "Steen Ulnits"
      ],
      "creatorSort": [
        "Ulnits, Steen"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "fødevalg fisk",
        "fødevalg stalling",
        "hvirveldyr",
        "stalling",
        "vertebrater"
      ],
      "abstract": [
        "Fødevalg"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1991"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 54-55"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk & fri, 1991, nr. 7"
      ],
      "isPartOfISSN": [
        "0108-2000"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Steen Ulnits"
      ],
      "pid": [
        "870971-tsart:80309988"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk & fri, 1991, nr. 7"
      ],
      "title": [
        "Stallingens menukort"
      ],
      "titleFull": [
        "Stallingens menukort"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:72160614"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "CK."
          ],
          "pid": [
            "870971-tsart:72160614"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Dansk fiskeri tidende, Årg. 104, nr. 30 (1986)"
          ],
          "title": [
            "Flugtadfærd hos fisk"
          ],
          "titleFull": [
            "Flugtadfærd hos fisk"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "72160614|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Flugtadfærd hos fisk"
      ],
      "dcTitleFull": [
        "Flugtadfærd hos fisk"
      ],
      "dcCreator": [
        "CK."
      ],
      "creatorSort": [
        "CK."
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "flugtadfærd fisk",
        "forurening fisk",
        "hvirveldyr",
        "vertebrater"
      ],
      "abstract": [
        "Reaktioner hos fisk der udsættes for forurening"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1986"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 6"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Dansk fiskeri tidende, Årg. 104, nr. 30 (1986)"
      ],
      "isPartOfISSN": [
        "0011-6270"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "CK."
      ],
      "pid": [
        "870971-tsart:72160614"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Dansk fiskeri tidende, Årg. 104, nr. 30 (1986)"
      ],
      "title": [
        "Flugtadfærd hos fisk"
      ],
      "titleFull": [
        "Flugtadfærd hos fisk"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:72290755"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Lars Nielsen"
          ],
          "pid": [
            "870971-tsart:72290755"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk & fri, 1987, nr. 1"
          ],
          "title": [
            "Rødspætten - en populær fisk - også i køkkenet"
          ],
          "titleFull": [
            "Rødspætten - en populær fisk - også i køkkenet"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "72290755|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Rødspætten - en populær fisk - også i køkkenet"
      ],
      "dcTitleFull": [
        "Rødspætten - en populær fisk - også i køkkenet"
      ],
      "titleSeries": [
        "Fiskens biologi"
      ],
      "dcCreator": [
        "Lars Nielsen"
      ],
      "creatorSort": [
        "Nielsen, Lars"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "Pleuronectes platessa",
        "chordater vertebrater",
        "fisk",
        "hvirveldyr",
        "rødspætte",
        "vertebrater"
      ],
      "abstract": [
        "Pleuronectes platessa"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1987"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 26-27"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk & fri, 1987, nr. 1"
      ],
      "isPartOfISSN": [
        "0108-2000"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Lars Nielsen"
      ],
      "pid": [
        "870971-tsart:72290755"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk & fri, 1987, nr. 1"
      ],
      "title": [
        "Rødspætten - en populær fisk - også i køkkenet"
      ],
      "titleFull": [
        "Rødspætten - en populær fisk - også i køkkenet"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:87572560"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Jette Nielsen"
          ],
          "pid": [
            "870971-tsart:87572560"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Alimenta, Årg. 26, nr. 9 (2003)"
          ],
          "title": [
            "Højkvalitets frossen fisk"
          ],
          "titleFull": [
            "Højkvalitets frossen fisk : en mulighed"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "87572560|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Højkvalitets frossen fisk"
      ],
      "dcTitleFull": [
        "Højkvalitets frossen fisk : en mulighed"
      ],
      "dcCreator": [
        "Jette Nielsen",
        "Francisca Listov-Saabye"
      ],
      "creatorSort": [
        "Nielsen, Jette",
        "Listov-Saabye, Francisca"
      ],
      "subjectDK5": [
        "66.85"
      ],
      "subjectDK5Text": [
        "Slagteri. Kød- og fiskeindustri"
      ],
      "subjectDBCF": [
        "fisk",
        "fiskeindustri",
        "frossen fisk",
        "kvalitet"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "2003"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 4-5"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Alimenta, Årg. 26, nr. 9 (2003)"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Jette Nielsen"
      ],
      "pid": [
        "870971-tsart:87572560"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Alimenta, Årg. 26, nr. 9 (2003)"
      ],
      "title": [
        "Højkvalitets frossen fisk"
      ],
      "titleFull": [
        "Højkvalitets frossen fisk : en mulighed"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870970-basis:24477592"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Hanne Bårris"
          ],
          "pid": [
            "870970-basis:24477592"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Fisk"
          ],
          "titleFull": [
            "Fisk"
          ],
          "type": [
            "Bog"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "24477592|870970"
      ],
      "identifierISBN": [
        "87-90085-12-4"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Fisk"
      ],
      "dcTitleFull": [
        "Fisk"
      ],
      "creatorAut": [
        "Hanne Bårris"
      ],
      "creatorSort": [
        "Bårris, Hanne"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subjectDBCF": [
        "fisk"
      ],
      "subjectDBCN": [
        "for 1. klasse",
        "for 2. klasse",
        "for 3. klasse"
      ],
      "subjectDBCO": [
        "undervisningsmaterialer"
      ],
      "description": [
        "På omslaget: Idé- og aktivitetsmappe om fisk"
      ],
      "audience": [
        "børnematerialer"
      ],
      "publisher": [
        "Elephant"
      ],
      "date": [
        "2002"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "79 løsblade"
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
        "Hanne Bårris"
      ],
      "pid": [
        "870970-basis:24477592"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Fisk"
      ],
      "titleFull": [
        "Fisk"
      ],
      "type": [
        "Bog"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870970-basis:26190924"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:26190924"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Nemme og hurtige hverdagsretter med fisk"
          ],
          "titleFull": [
            "Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen"
          ],
          "type": [
            "Bog"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "26190924|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Nemme og hurtige hverdagsretter med fisk"
      ],
      "dcTitleFull": [
        "Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen"
      ],
      "titleSeries": [
        "Fisk ; 1"
      ],
      "subjectDK5": [
        "64.17"
      ],
      "subjectDK5Text": [
        "Særlige retter"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "Fiskebranchens Oplysningsudvalg"
      ],
      "contributor": [
        "Fiskebranchens Oplysningsudvalg"
      ],
      "date": [
        "2006"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "127 sider"
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
      "pid": [
        "870970-basis:26190924"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Nemme og hurtige hverdagsretter med fisk"
      ],
      "titleFull": [
        "Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen"
      ],
      "type": [
        "Bog"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870970-basis:25729706"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Hanne Bloch"
          ],
          "pid": [
            "870970-basis:25729706"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Let og lækkert - fisk & skaldyr"
          ],
          "titleFull": [
            "Let og lækkert - fisk & skaldyr"
          ],
          "type": [
            "Bog"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "25729706|870970"
      ],
      "identifierISBN": [
        "87-00-76819-7"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Let og lækkert - fisk & skaldyr"
      ],
      "dcTitleFull": [
        "Let og lækkert - fisk & skaldyr"
      ],
      "titleSeries": [
        "Let og lækkert ; 27"
      ],
      "alternative": [
        "Fisk & skaldyr",
        "Fisk og skaldyr",
        "Let og lækkert - fisk og skaldyr"
      ],
      "creatorAut": [
        "Hanne Bloch"
      ],
      "creatorSort": [
        "Bloch, Hanne"
      ],
      "subjectDK5": [
        "64.17"
      ],
      "subjectDK5Text": [
        "Særlige retter"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "version": [
        "1. udgave, 1. oplag"
      ],
      "publisher": [
        "Gyldendal",
        "for Coop Danmark"
      ],
      "date": [
        "2005"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "60 sider"
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
        "Hanne Bloch"
      ],
      "pid": [
        "870970-basis:25729706"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Let og lækkert - fisk & skaldyr"
      ],
      "titleFull": [
        "Let og lækkert - fisk & skaldyr"
      ],
      "type": [
        "Bog"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870971-tsart:82068902"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Inger Dalsgaard"
          ],
          "pid": [
            "870971-tsart:82068902"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk og hav, 1994 = Skrifter... nr. 45 (1994)"
          ],
          "title": [
            "Sårinfektioner hos fisk"
          ],
          "titleFull": [
            "Sårinfektioner hos fisk : forekomst, årsag og betydning"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "82068902|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Sårinfektioner hos fisk"
      ],
      "dcTitleFull": [
        "Sårinfektioner hos fisk : forekomst, årsag og betydning"
      ],
      "dcCreator": [
        "Inger Dalsgaard"
      ],
      "creatorSort": [
        "Dalsgaard, Inger"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "fiskesygdomme",
        "hvirveldyr",
        "infektioner veterinærmedicin",
        "sårinfektioner veterinærmedicin",
        "vertebrater"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1994"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 57-64"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk og hav, 1994 = Skrifter... nr. 45 (1994)"
      ],
      "isPartOfISSN": [
        "0105-9211"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Inger Dalsgaard"
      ],
      "pid": [
        "870971-tsart:82068902"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk og hav, 1994 = Skrifter... nr. 45 (1994)"
      ],
      "title": [
        "Sårinfektioner hos fisk"
      ],
      "titleFull": [
        "Sårinfektioner hos fisk : forekomst, årsag og betydning"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:72546555"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Lars Nielsen"
          ],
          "pid": [
            "870971-tsart:72546555"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk & fri, 1987, nr. 7"
          ],
          "title": [
            "Masser af fisk i Mossø"
          ],
          "titleFull": [
            "Masser af fisk i Mossø"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "72546555|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Masser af fisk i Mossø"
      ],
      "dcTitleFull": [
        "Masser af fisk i Mossø"
      ],
      "dcCreator": [
        "Lars Nielsen"
      ],
      "creatorSort": [
        "Nielsen, Lars"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Mossø fauna",
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "hvirveldyr",
        "vertebrater"
      ],
      "abstract": [
        "Kortlægning af fiskebestanden"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1987"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 20-22"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk & fri, 1987, nr. 7"
      ],
      "isPartOfISSN": [
        "0108-2000"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Lars Nielsen"
      ],
      "pid": [
        "870971-tsart:72546555"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk & fri, 1987, nr. 7"
      ],
      "title": [
        "Masser af fisk i Mossø"
      ],
      "titleFull": [
        "Masser af fisk i Mossø"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:72546563"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Bent Vogel"
          ],
          "pid": [
            "870971-tsart:72546563"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Origo, Årg. 5, nr. 2 (1987)"
          ],
          "title": [
            "Elektriske fisk: skabelse eller evolution?"
          ],
          "titleFull": [
            "Elektriske fisk: skabelse eller evolution?"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "72546563|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Elektriske fisk: skabelse eller evolution?"
      ],
      "dcTitleFull": [
        "Elektriske fisk: skabelse eller evolution?"
      ],
      "dcCreator": [
        "Bent Vogel"
      ],
      "creatorSort": [
        "Vogel, Bent"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "elektriske fisk",
        "fisk",
        "hvirveldyr",
        "vertebrater"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1987"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 19-21"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Origo, Årg. 5, nr. 2 (1987)"
      ],
      "isPartOfISSN": [
        "0109-6168"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Bent Vogel"
      ],
      "pid": [
        "870971-tsart:72546563"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Origo, Årg. 5, nr. 2 (1987)"
      ],
      "title": [
        "Elektriske fisk: skabelse eller evolution?"
      ],
      "titleFull": [
        "Elektriske fisk: skabelse eller evolution?"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:73401518"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Alf Stalsberg"
          ],
          "pid": [
            "870971-tsart:73401518"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Akvariebladet, Årg. 21, nr. 9 (1989)"
          ],
          "title": [
            "Nye navne på kendte fisk"
          ],
          "titleFull": [
            "Nye navne på kendte fisk"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "73401518|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Nye navne på kendte fisk"
      ],
      "dcTitleFull": [
        "Nye navne på kendte fisk"
      ],
      "dcCreator": [
        "Alf Stalsberg"
      ],
      "creatorSort": [
        "Stalsberg, Alf"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "fiskenavne",
        "hvirveldyr",
        "navne fisk",
        "terminologi fisk",
        "vertebrater"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1989"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 313-315, 319-322"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Akvariebladet, Årg. 21, nr. 9 (1989)"
      ],
      "isPartOfISSN": [
        "0108-2396"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Alf Stalsberg"
      ],
      "pid": [
        "870971-tsart:73401518"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Akvariebladet, Årg. 21, nr. 9 (1989)"
      ],
      "title": [
        "Nye navne på kendte fisk"
      ],
      "titleFull": [
        "Nye navne på kendte fisk"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:70921685"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Knud Larsen"
          ],
          "pid": [
            "870971-tsart:70921685"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk & fri, 1982, nr. 2"
          ],
          "title": [
            "Aflivning og rensning af fisk"
          ],
          "titleFull": [
            "Aflivning og rensning af fisk"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "70921685|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Aflivning og rensning af fisk"
      ],
      "dcTitleFull": [
        "Aflivning og rensning af fisk"
      ],
      "dcCreator": [
        "Knud Larsen"
      ],
      "creatorSort": [
        "Larsen, Knud"
      ],
      "subjectDK5": [
        "79.97"
      ],
      "subjectDK5Text": [
        "Sportsfiskeri i alm."
      ],
      "subject": [
        "aflivning fisk",
        "fiskeri",
        "lystfiskeri",
        "rensning fisk"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1982"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 48-49"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk & fri, 1982, nr. 2"
      ],
      "isPartOfISSN": [
        "0108-2000"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Knud Larsen"
      ],
      "pid": [
        "870971-tsart:70921685"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk & fri, 1982, nr. 2"
      ],
      "title": [
        "Aflivning og rensning af fisk"
      ],
      "titleFull": [
        "Aflivning og rensning af fisk"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-avis:87389677"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Jette Warrer Knudsen"
          ],
          "pid": [
            "870971-avis:87389677"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Børsen, 2003-08-11"
          ],
          "title": [
            "Frosne fisk kan slå friske på kvalitet"
          ],
          "titleFull": [
            "Frosne fisk kan slå friske på kvalitet"
          ],
          "type": [
            "Avisartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "87389677|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Frosne fisk kan slå friske på kvalitet"
      ],
      "dcTitleFull": [
        "Frosne fisk kan slå friske på kvalitet"
      ],
      "dcCreator": [
        "Jette Warrer Knudsen"
      ],
      "creatorSort": [
        "Warrer Knudsen, Jette"
      ],
      "subjectDK5": [
        "66.85"
      ],
      "subjectDK5Text": [
        "Slagteri. Kød- og fiskeindustri"
      ],
      "subjectDBCF": [
        "dybfrosne fisk",
        "ernæring",
        "fisk"
      ],
      "abstract": [
        "Ny dansk forskning viser, at frosne fisk kan have mindst lige så høj kvalitet som nyfangne fisk"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "2003"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "extent": [
        "Fødevarer, s. 2"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Børsen, 2003-08-11"
      ],
      "isPartOfISSN": [
        "0105-0729"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Jette Warrer Knudsen"
      ],
      "pid": [
        "870971-avis:87389677"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Børsen, 2003-08-11"
      ],
      "title": [
        "Frosne fisk kan slå friske på kvalitet"
      ],
      "titleFull": [
        "Frosne fisk kan slå friske på kvalitet"
      ],
      "type": [
        "Avisartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "775100-katalog:50686221"
      ],
      "collectionDetails": [],
      "acIdentifier": [
        "50686221|870970"
      ],
      "identifierISBN": [
        "9788717043442"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "source": [
        "Fish"
      ],
      "dcTitle": [
        "Fisk og skaldyr"
      ],
      "dcTitleFull": [
        "Fisk og skaldyr"
      ],
      "titleSeries": [
        "Hurtig i køkkenet"
      ],
      "alternative": [
        "Fisk & skaldyr",
        "Hurtig i køkkenet - fisk og skaldyr"
      ],
      "creatorDkops": [
        "Emma Lewis"
      ],
      "creatorSort": [
        "Lewis, Emma"
      ],
      "subjectDK5": [
        "64.17"
      ],
      "subjectDK5Text": [
        "Særlige retter"
      ],
      "subjectDBCF": [
        "fisk",
        "fiskeretter",
        "skaldyr",
        "skaldyrsretter"
      ],
      "subjectDBCO": [
        "kogebøger",
        "opskrifter"
      ],
      "description": [
        "På omslaget: 360 opskrifter på 10, 20, 30 minutter",
        "Indhold: Snacks ; Hverdagsretter ; Weekendretter ; Sunde retter ; Gæsteretter"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "version": [
        "1. oplag (2013)"
      ],
      "publisher": [
        "Nyt Nordisk Forlag Arnold Busck"
      ],
      "contributorDkops": [
        "Emma Lewis"
      ],
      "contributorTrl": [
        "Lars Thomas"
      ],
      "date": [
        "2013"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "288 sider"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ]
    },
    {
      "collection": [
        "870971-tsart:74013864"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Jørgen Mørup Jørgensen"
          ],
          "pid": [
            "870971-tsart:74013864"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Naturens verden, 1991, nr. 8"
          ],
          "title": [
            "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
          ],
          "titleFull": [
            "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "74013864|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
      ],
      "dcTitleFull": [
        "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
      ],
      "dcCreator": [
        "Jørgen Mørup Jørgensen"
      ],
      "creatorSort": [
        "Mørup Jørgensen, Jørgen"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "den blå fisk",
        "det elektrosensoriske sansesystem",
        "fisk",
        "sansefysiologi fisk"
      ],
      "abstract": [
        "Latimeria"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1991"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 303-308"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Naturens verden, 1991, nr. 8"
      ],
      "isPartOfISSN": [
        "0028-0895"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Jørgen Mørup Jørgensen"
      ],
      "pid": [
        "870971-tsart:74013864"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Naturens verden, 1991, nr. 8"
      ],
      "title": [
        "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
      ],
      "titleFull": [
        "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870970-basis:21676748"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Shu-Bi-Dua"
          ],
          "pid": [
            "870970-basis:21676748"
          ],
          "title": [
            "Her lugter lidt af fisk"
          ],
          "titleFull": [
            "Her lugter lidt af fisk"
          ],
          "type": [
            "Cd (musik)"
          ],
          "workType": [
            "music"
          ]
        }
      ],
      "acIdentifier": [
        "21676748|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Her lugter lidt af fisk"
      ],
      "dcTitleFull": [
        "Her lugter lidt af fisk"
      ],
      "dcCreator": [
        "Shu-Bi-Dua"
      ],
      "creatorSort": [
        "Shu-Bi-Dua"
      ],
      "subjectDK5": [
        "78.794:5"
      ],
      "subjectDK5Text": [
        "Rock (Beat). Moderne folkemusik (Folk)"
      ],
      "shelfMusicshelf": [
        "Rock"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "CMC"
      ],
      "contributor": [
        "CeeJay",
        "Lars Pedersen (f. 1970)"
      ],
      "date": [
        "1997"
      ],
      "typeBibDKType": [
        "Cd (musik)"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "hasPartTrack": [
        "Fisk (album version)",
        "Fisk (Chief 1 remix)",
        "Fisk (CeeJay remix)"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Shu-Bi-Dua"
      ],
      "pid": [
        "870970-basis:21676748"
      ],
      "title": [
        "Her lugter lidt af fisk"
      ],
      "titleFull": [
        "Her lugter lidt af fisk"
      ],
      "type": [
        "Cd (musik)"
      ],
      "workType": [
        "music"
      ]
    },
    {
      "collection": [
        "870970-basis:42253235"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:42253235"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Kend din fisk"
          ],
          "titleFull": [
            "Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk"
          ],
          "type": [
            "Bog (bind 2)"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "42253235|870970"
      ],
      "identifierISBN": [
        "87-89796-33-0"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Kend din fisk"
      ],
      "dcTitleFull": [
        "Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk. Bind 2"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subjectDBCF": [
        "fisk",
        "fødevarer",
        "håndbøger",
        "skaldyr"
      ],
      "abstract": [
        "Et opslagsværk, der kan tilføre kokke og andre en grundlæggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udførligt for at fastholde kravet til kvalitet"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "HORESTA"
      ],
      "contributor": [
        "Kurt Prentow",
        "HORESTA"
      ],
      "date": [
        "2000"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "208 sider",
        "2 bind"
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
      "pid": [
        "870970-basis:42253235"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Kend din fisk"
      ],
      "titleFull": [
        "Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk"
      ],
      "type": [
        "Bog (bind 2)"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870971-avis:36406186"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Philippe Grandjean"
          ],
          "pid": [
            "870971-avis:36406186"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Politiken, 2015-02-28"
          ],
          "title": [
            "Bør vi holde igen med fed fisk?"
          ],
          "titleFull": [
            "Bør vi holde igen med fed fisk?"
          ],
          "type": [
            "Avisartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "36406186|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Bør vi holde igen med fed fisk?"
      ],
      "dcTitleFull": [
        "Bør vi holde igen med fed fisk?"
      ],
      "creatorAut": [
        "Philippe Grandjean",
        "Lotte Lauritzen"
      ],
      "creatorSort": [
        "Grandjean, Philippe",
        "Lauritzen, Lotte"
      ],
      "subjectDK5": [
        "61.38"
      ],
      "subjectDK5Text": [
        "Ernæring"
      ],
      "subjectDBCF": [
        "ernæring",
        "fisk",
        "kost",
        "kviksølv",
        "kviksølvforurening",
        "sundhed"
      ],
      "abstract": [
        "Danskerne spiser mere fisk. I 2013 blev der solgt 1.100 tons flere ferske fisk end året før. Alligevel spiser få fisk som hovedret to gange om ugen, sådan som Fødevarestyrelsen anbefaler. Men er det overhovedet sundt at spise fisk fra de forurenede have? Forskerne ser forskelligt på det"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "2015"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "Sektion 4, s. 4"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Politiken, 2015-02-28"
      ],
      "isPartOfISSN": [
        "0907-1814"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Philippe Grandjean"
      ],
      "pid": [
        "870971-avis:36406186"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Politiken, 2015-02-28"
      ],
      "title": [
        "Bør vi holde igen med fed fisk?"
      ],
      "titleFull": [
        "Bør vi holde igen med fed fisk?"
      ],
      "type": [
        "Avisartikel"
      ],
      "workType": [
        "article"
      ]
    }
  ],
  "error": [
    "No data found on object(s): 775100-katalog:26111129",
    "No data found on object(s): 775100-katalog:50686221"
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
        "870970-basis:51644557"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Nina Marie Villadsen"
          ],
          "pid": [
            "870970-basis:51644557"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Adamsen's nordisk fisk"
          ],
          "titleFull": [
            "Adamsen's nordisk fisk : på den nemme måde"
          ],
          "type": [
            "Bog"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "51644557|870970"
      ],
      "identifierISBN": [
        "9788799637416"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Adamsen's nordisk fisk"
      ],
      "dcTitleFull": [
        "Adamsen's nordisk fisk : på den nemme måde"
      ],
      "alternative": [
        "Nordisk fisk"
      ],
      "creatorAut": [
        "Nina Marie Villadsen"
      ],
      "creatorSort": [
        "Villadsen, Nina Marie"
      ],
      "subjectDK5": [
        "64.17"
      ],
      "subjectDK5Text": [
        "Særlige retter"
      ],
      "subjectDBCF": [
        "fisk",
        "fiskeretter"
      ],
      "subjectDBCO": [
        "kogebøger",
        "opskrifter"
      ],
      "abstract": [
        "Fiskeopskrifter som fx havkat, torsk, laks, blæksprutte samt fotos og beskrivelse af dem"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "version": [
        "1. udgave"
      ],
      "publisher": [
        "Wiegaarden Media"
      ],
      "contributorDkops": [
        "Adamsen's Fisk"
      ],
      "contributor": [
        "Wiegaarden Media"
      ],
      "contributorPht": [
        "Annette Boe Østergaard"
      ],
      "date": [
        "2015"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "95 sider"
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
        "Nina Marie Villadsen"
      ],
      "pid": [
        "870970-basis:51644557"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Adamsen's nordisk fisk"
      ],
      "titleFull": [
        "Adamsen's nordisk fisk : på den nemme måde"
      ],
      "type": [
        "Bog"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "775100-katalog:26111129"
      ],
      "collectionDetails": [],
      "acIdentifier": [
        "26111129|870970"
      ],
      "identifierISBN": [
        "87-02-02636-8"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Fisk"
      ],
      "dcTitleFull": [
        "Fisk"
      ],
      "titleSeries": [
        "De små fagbøger"
      ],
      "creatorAut": [
        "Anders Uldal"
      ],
      "creatorSort": [
        "Uldal, Anders"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subjectDBCF": [
        "fisk"
      ],
      "subjectDBCN": [
        "for 10 år",
        "for 8 år",
        "for 9 år"
      ],
      "description": [
        "Indhold: Hvad er fisk? ; Den blå fisk ; Føde ; Æg og yngel ; Danske fisk ; Bruskfisk ; Giftige fisk ; Fladfisk ; Ål ; Elektrisk ål ; Piratfisk ; Mærkelige fisk ; Dybhavsfisk ; Søheste ; Fiskeri"
      ],
      "audienceAge": [
        "fra 8 år"
      ],
      "audience": [
        "børnematerialer"
      ],
      "version": [
        "1. udgave, 1. oplag (2006)"
      ],
      "publisher": [
        "Gyldendal"
      ],
      "date": [
        "2006"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "36 sider"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ]
    },
    {
      "collection": [
        "870971-tsart:80309988"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Steen Ulnits"
          ],
          "pid": [
            "870971-tsart:80309988"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk & fri, 1991, nr. 7"
          ],
          "title": [
            "Stallingens menukort"
          ],
          "titleFull": [
            "Stallingens menukort"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "80309988|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Stallingens menukort"
      ],
      "dcTitleFull": [
        "Stallingens menukort"
      ],
      "dcCreator": [
        "Steen Ulnits"
      ],
      "creatorSort": [
        "Ulnits, Steen"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "fødevalg fisk",
        "fødevalg stalling",
        "hvirveldyr",
        "stalling",
        "vertebrater"
      ],
      "abstract": [
        "Fødevalg"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1991"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 54-55"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk & fri, 1991, nr. 7"
      ],
      "isPartOfISSN": [
        "0108-2000"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Steen Ulnits"
      ],
      "pid": [
        "870971-tsart:80309988"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk & fri, 1991, nr. 7"
      ],
      "title": [
        "Stallingens menukort"
      ],
      "titleFull": [
        "Stallingens menukort"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:72160614"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "CK."
          ],
          "pid": [
            "870971-tsart:72160614"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Dansk fiskeri tidende, Årg. 104, nr. 30 (1986)"
          ],
          "title": [
            "Flugtadfærd hos fisk"
          ],
          "titleFull": [
            "Flugtadfærd hos fisk"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "72160614|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Flugtadfærd hos fisk"
      ],
      "dcTitleFull": [
        "Flugtadfærd hos fisk"
      ],
      "dcCreator": [
        "CK."
      ],
      "creatorSort": [
        "CK."
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "flugtadfærd fisk",
        "forurening fisk",
        "hvirveldyr",
        "vertebrater"
      ],
      "abstract": [
        "Reaktioner hos fisk der udsættes for forurening"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1986"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 6"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Dansk fiskeri tidende, Årg. 104, nr. 30 (1986)"
      ],
      "isPartOfISSN": [
        "0011-6270"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "CK."
      ],
      "pid": [
        "870971-tsart:72160614"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Dansk fiskeri tidende, Årg. 104, nr. 30 (1986)"
      ],
      "title": [
        "Flugtadfærd hos fisk"
      ],
      "titleFull": [
        "Flugtadfærd hos fisk"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:72290755"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Lars Nielsen"
          ],
          "pid": [
            "870971-tsart:72290755"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk & fri, 1987, nr. 1"
          ],
          "title": [
            "Rødspætten - en populær fisk - også i køkkenet"
          ],
          "titleFull": [
            "Rødspætten - en populær fisk - også i køkkenet"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "72290755|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Rødspætten - en populær fisk - også i køkkenet"
      ],
      "dcTitleFull": [
        "Rødspætten - en populær fisk - også i køkkenet"
      ],
      "titleSeries": [
        "Fiskens biologi"
      ],
      "dcCreator": [
        "Lars Nielsen"
      ],
      "creatorSort": [
        "Nielsen, Lars"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "Pleuronectes platessa",
        "chordater vertebrater",
        "fisk",
        "hvirveldyr",
        "rødspætte",
        "vertebrater"
      ],
      "abstract": [
        "Pleuronectes platessa"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1987"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 26-27"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk & fri, 1987, nr. 1"
      ],
      "isPartOfISSN": [
        "0108-2000"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Lars Nielsen"
      ],
      "pid": [
        "870971-tsart:72290755"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk & fri, 1987, nr. 1"
      ],
      "title": [
        "Rødspætten - en populær fisk - også i køkkenet"
      ],
      "titleFull": [
        "Rødspætten - en populær fisk - også i køkkenet"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:87572560"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Jette Nielsen"
          ],
          "pid": [
            "870971-tsart:87572560"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Alimenta, Årg. 26, nr. 9 (2003)"
          ],
          "title": [
            "Højkvalitets frossen fisk"
          ],
          "titleFull": [
            "Højkvalitets frossen fisk : en mulighed"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "87572560|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Højkvalitets frossen fisk"
      ],
      "dcTitleFull": [
        "Højkvalitets frossen fisk : en mulighed"
      ],
      "dcCreator": [
        "Jette Nielsen",
        "Francisca Listov-Saabye"
      ],
      "creatorSort": [
        "Nielsen, Jette",
        "Listov-Saabye, Francisca"
      ],
      "subjectDK5": [
        "66.85"
      ],
      "subjectDK5Text": [
        "Slagteri. Kød- og fiskeindustri"
      ],
      "subjectDBCF": [
        "fisk",
        "fiskeindustri",
        "frossen fisk",
        "kvalitet"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "2003"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 4-5"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Alimenta, Årg. 26, nr. 9 (2003)"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Jette Nielsen"
      ],
      "pid": [
        "870971-tsart:87572560"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Alimenta, Årg. 26, nr. 9 (2003)"
      ],
      "title": [
        "Højkvalitets frossen fisk"
      ],
      "titleFull": [
        "Højkvalitets frossen fisk : en mulighed"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870970-basis:24477592"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Hanne Bårris"
          ],
          "pid": [
            "870970-basis:24477592"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Fisk"
          ],
          "titleFull": [
            "Fisk"
          ],
          "type": [
            "Bog"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "24477592|870970"
      ],
      "identifierISBN": [
        "87-90085-12-4"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Fisk"
      ],
      "dcTitleFull": [
        "Fisk"
      ],
      "creatorAut": [
        "Hanne Bårris"
      ],
      "creatorSort": [
        "Bårris, Hanne"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subjectDBCF": [
        "fisk"
      ],
      "subjectDBCN": [
        "for 1. klasse",
        "for 2. klasse",
        "for 3. klasse"
      ],
      "subjectDBCO": [
        "undervisningsmaterialer"
      ],
      "description": [
        "På omslaget: Idé- og aktivitetsmappe om fisk"
      ],
      "audience": [
        "børnematerialer"
      ],
      "publisher": [
        "Elephant"
      ],
      "date": [
        "2002"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "79 løsblade"
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
        "Hanne Bårris"
      ],
      "pid": [
        "870970-basis:24477592"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Fisk"
      ],
      "titleFull": [
        "Fisk"
      ],
      "type": [
        "Bog"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870970-basis:26190924"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:26190924"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Nemme og hurtige hverdagsretter med fisk"
          ],
          "titleFull": [
            "Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen"
          ],
          "type": [
            "Bog"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "26190924|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Nemme og hurtige hverdagsretter med fisk"
      ],
      "dcTitleFull": [
        "Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen"
      ],
      "titleSeries": [
        "Fisk ; 1"
      ],
      "subjectDK5": [
        "64.17"
      ],
      "subjectDK5Text": [
        "Særlige retter"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "Fiskebranchens Oplysningsudvalg"
      ],
      "contributor": [
        "Fiskebranchens Oplysningsudvalg"
      ],
      "date": [
        "2006"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "127 sider"
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
      "pid": [
        "870970-basis:26190924"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Nemme og hurtige hverdagsretter med fisk"
      ],
      "titleFull": [
        "Nemme og hurtige hverdagsretter med fisk : fisk 2 gange om ugen"
      ],
      "type": [
        "Bog"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870970-basis:25729706"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Hanne Bloch"
          ],
          "pid": [
            "870970-basis:25729706"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Let og lækkert - fisk & skaldyr"
          ],
          "titleFull": [
            "Let og lækkert - fisk & skaldyr"
          ],
          "type": [
            "Bog"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "25729706|870970"
      ],
      "identifierISBN": [
        "87-00-76819-7"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Let og lækkert - fisk & skaldyr"
      ],
      "dcTitleFull": [
        "Let og lækkert - fisk & skaldyr"
      ],
      "titleSeries": [
        "Let og lækkert ; 27"
      ],
      "alternative": [
        "Fisk & skaldyr",
        "Fisk og skaldyr",
        "Let og lækkert - fisk og skaldyr"
      ],
      "creatorAut": [
        "Hanne Bloch"
      ],
      "creatorSort": [
        "Bloch, Hanne"
      ],
      "subjectDK5": [
        "64.17"
      ],
      "subjectDK5Text": [
        "Særlige retter"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "version": [
        "1. udgave, 1. oplag"
      ],
      "publisher": [
        "Gyldendal",
        "for Coop Danmark"
      ],
      "date": [
        "2005"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "60 sider"
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
        "Hanne Bloch"
      ],
      "pid": [
        "870970-basis:25729706"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Let og lækkert - fisk & skaldyr"
      ],
      "titleFull": [
        "Let og lækkert - fisk & skaldyr"
      ],
      "type": [
        "Bog"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870971-tsart:82068902"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Inger Dalsgaard"
          ],
          "pid": [
            "870971-tsart:82068902"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk og hav, 1994 = Skrifter... nr. 45 (1994)"
          ],
          "title": [
            "Sårinfektioner hos fisk"
          ],
          "titleFull": [
            "Sårinfektioner hos fisk : forekomst, årsag og betydning"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "82068902|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Sårinfektioner hos fisk"
      ],
      "dcTitleFull": [
        "Sårinfektioner hos fisk : forekomst, årsag og betydning"
      ],
      "dcCreator": [
        "Inger Dalsgaard"
      ],
      "creatorSort": [
        "Dalsgaard, Inger"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "fiskesygdomme",
        "hvirveldyr",
        "infektioner veterinærmedicin",
        "sårinfektioner veterinærmedicin",
        "vertebrater"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1994"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 57-64"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk og hav, 1994 = Skrifter... nr. 45 (1994)"
      ],
      "isPartOfISSN": [
        "0105-9211"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Inger Dalsgaard"
      ],
      "pid": [
        "870971-tsart:82068902"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk og hav, 1994 = Skrifter... nr. 45 (1994)"
      ],
      "title": [
        "Sårinfektioner hos fisk"
      ],
      "titleFull": [
        "Sårinfektioner hos fisk : forekomst, årsag og betydning"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:72546555"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Lars Nielsen"
          ],
          "pid": [
            "870971-tsart:72546555"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk & fri, 1987, nr. 7"
          ],
          "title": [
            "Masser af fisk i Mossø"
          ],
          "titleFull": [
            "Masser af fisk i Mossø"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "72546555|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Masser af fisk i Mossø"
      ],
      "dcTitleFull": [
        "Masser af fisk i Mossø"
      ],
      "dcCreator": [
        "Lars Nielsen"
      ],
      "creatorSort": [
        "Nielsen, Lars"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Mossø fauna",
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "hvirveldyr",
        "vertebrater"
      ],
      "abstract": [
        "Kortlægning af fiskebestanden"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1987"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 20-22"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk & fri, 1987, nr. 7"
      ],
      "isPartOfISSN": [
        "0108-2000"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Lars Nielsen"
      ],
      "pid": [
        "870971-tsart:72546555"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk & fri, 1987, nr. 7"
      ],
      "title": [
        "Masser af fisk i Mossø"
      ],
      "titleFull": [
        "Masser af fisk i Mossø"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:72546563"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Bent Vogel"
          ],
          "pid": [
            "870971-tsart:72546563"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Origo, Årg. 5, nr. 2 (1987)"
          ],
          "title": [
            "Elektriske fisk: skabelse eller evolution?"
          ],
          "titleFull": [
            "Elektriske fisk: skabelse eller evolution?"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "72546563|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Elektriske fisk: skabelse eller evolution?"
      ],
      "dcTitleFull": [
        "Elektriske fisk: skabelse eller evolution?"
      ],
      "dcCreator": [
        "Bent Vogel"
      ],
      "creatorSort": [
        "Vogel, Bent"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "elektriske fisk",
        "fisk",
        "hvirveldyr",
        "vertebrater"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1987"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 19-21"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Origo, Årg. 5, nr. 2 (1987)"
      ],
      "isPartOfISSN": [
        "0109-6168"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Bent Vogel"
      ],
      "pid": [
        "870971-tsart:72546563"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Origo, Årg. 5, nr. 2 (1987)"
      ],
      "title": [
        "Elektriske fisk: skabelse eller evolution?"
      ],
      "titleFull": [
        "Elektriske fisk: skabelse eller evolution?"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:73401518"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Alf Stalsberg"
          ],
          "pid": [
            "870971-tsart:73401518"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Akvariebladet, Årg. 21, nr. 9 (1989)"
          ],
          "title": [
            "Nye navne på kendte fisk"
          ],
          "titleFull": [
            "Nye navne på kendte fisk"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "73401518|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Nye navne på kendte fisk"
      ],
      "dcTitleFull": [
        "Nye navne på kendte fisk"
      ],
      "dcCreator": [
        "Alf Stalsberg"
      ],
      "creatorSort": [
        "Stalsberg, Alf"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "Pisces",
        "chordater vertebrater",
        "fisk",
        "fiskenavne",
        "hvirveldyr",
        "navne fisk",
        "terminologi fisk",
        "vertebrater"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1989"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 313-315, 319-322"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Akvariebladet, Årg. 21, nr. 9 (1989)"
      ],
      "isPartOfISSN": [
        "0108-2396"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Alf Stalsberg"
      ],
      "pid": [
        "870971-tsart:73401518"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Akvariebladet, Årg. 21, nr. 9 (1989)"
      ],
      "title": [
        "Nye navne på kendte fisk"
      ],
      "titleFull": [
        "Nye navne på kendte fisk"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-tsart:70921685"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Knud Larsen"
          ],
          "pid": [
            "870971-tsart:70921685"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Fisk & fri, 1982, nr. 2"
          ],
          "title": [
            "Aflivning og rensning af fisk"
          ],
          "titleFull": [
            "Aflivning og rensning af fisk"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "70921685|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Aflivning og rensning af fisk"
      ],
      "dcTitleFull": [
        "Aflivning og rensning af fisk"
      ],
      "dcCreator": [
        "Knud Larsen"
      ],
      "creatorSort": [
        "Larsen, Knud"
      ],
      "subjectDK5": [
        "79.97"
      ],
      "subjectDK5Text": [
        "Sportsfiskeri i alm."
      ],
      "subject": [
        "aflivning fisk",
        "fiskeri",
        "lystfiskeri",
        "rensning fisk"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1982"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 48-49"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Fisk & fri, 1982, nr. 2"
      ],
      "isPartOfISSN": [
        "0108-2000"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Knud Larsen"
      ],
      "pid": [
        "870971-tsart:70921685"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Fisk & fri, 1982, nr. 2"
      ],
      "title": [
        "Aflivning og rensning af fisk"
      ],
      "titleFull": [
        "Aflivning og rensning af fisk"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870971-avis:87389677"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Jette Warrer Knudsen"
          ],
          "pid": [
            "870971-avis:87389677"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Børsen, 2003-08-11"
          ],
          "title": [
            "Frosne fisk kan slå friske på kvalitet"
          ],
          "titleFull": [
            "Frosne fisk kan slå friske på kvalitet"
          ],
          "type": [
            "Avisartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "87389677|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Frosne fisk kan slå friske på kvalitet"
      ],
      "dcTitleFull": [
        "Frosne fisk kan slå friske på kvalitet"
      ],
      "dcCreator": [
        "Jette Warrer Knudsen"
      ],
      "creatorSort": [
        "Warrer Knudsen, Jette"
      ],
      "subjectDK5": [
        "66.85"
      ],
      "subjectDK5Text": [
        "Slagteri. Kød- og fiskeindustri"
      ],
      "subjectDBCF": [
        "dybfrosne fisk",
        "ernæring",
        "fisk"
      ],
      "abstract": [
        "Ny dansk forskning viser, at frosne fisk kan have mindst lige så høj kvalitet som nyfangne fisk"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "2003"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "extent": [
        "Fødevarer, s. 2"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Børsen, 2003-08-11"
      ],
      "isPartOfISSN": [
        "0105-0729"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Jette Warrer Knudsen"
      ],
      "pid": [
        "870971-avis:87389677"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Børsen, 2003-08-11"
      ],
      "title": [
        "Frosne fisk kan slå friske på kvalitet"
      ],
      "titleFull": [
        "Frosne fisk kan slå friske på kvalitet"
      ],
      "type": [
        "Avisartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "775100-katalog:50686221"
      ],
      "collectionDetails": [],
      "acIdentifier": [
        "50686221|870970"
      ],
      "identifierISBN": [
        "9788717043442"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "source": [
        "Fish"
      ],
      "dcTitle": [
        "Fisk og skaldyr"
      ],
      "dcTitleFull": [
        "Fisk og skaldyr"
      ],
      "titleSeries": [
        "Hurtig i køkkenet"
      ],
      "alternative": [
        "Fisk & skaldyr",
        "Hurtig i køkkenet - fisk og skaldyr"
      ],
      "creatorDkops": [
        "Emma Lewis"
      ],
      "creatorSort": [
        "Lewis, Emma"
      ],
      "subjectDK5": [
        "64.17"
      ],
      "subjectDK5Text": [
        "Særlige retter"
      ],
      "subjectDBCF": [
        "fisk",
        "fiskeretter",
        "skaldyr",
        "skaldyrsretter"
      ],
      "subjectDBCO": [
        "kogebøger",
        "opskrifter"
      ],
      "description": [
        "På omslaget: 360 opskrifter på 10, 20, 30 minutter",
        "Indhold: Snacks ; Hverdagsretter ; Weekendretter ; Sunde retter ; Gæsteretter"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "version": [
        "1. oplag (2013)"
      ],
      "publisher": [
        "Nyt Nordisk Forlag Arnold Busck"
      ],
      "contributorDkops": [
        "Emma Lewis"
      ],
      "contributorTrl": [
        "Lars Thomas"
      ],
      "date": [
        "2013"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "288 sider"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ]
    },
    {
      "collection": [
        "870971-tsart:74013864"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Jørgen Mørup Jørgensen"
          ],
          "pid": [
            "870971-tsart:74013864"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Naturens verden, 1991, nr. 8"
          ],
          "title": [
            "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
          ],
          "titleFull": [
            "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
          ],
          "type": [
            "Tidsskriftsartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "74013864|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
      ],
      "dcTitleFull": [
        "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
      ],
      "dcCreator": [
        "Jørgen Mørup Jørgensen"
      ],
      "creatorSort": [
        "Mørup Jørgensen, Jørgen"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subject": [
        "den blå fisk",
        "det elektrosensoriske sansesystem",
        "fisk",
        "sansefysiologi fisk"
      ],
      "abstract": [
        "Latimeria"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1991"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 303-308"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Naturens verden, 1991, nr. 8"
      ],
      "isPartOfISSN": [
        "0028-0895"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Jørgen Mørup Jørgensen"
      ],
      "pid": [
        "870971-tsart:74013864"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Naturens verden, 1991, nr. 8"
      ],
      "title": [
        "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
      ],
      "titleFull": [
        "Elektroreceptorer hos Den blå Fisk og andre hvirveldyr"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    },
    {
      "collection": [
        "870970-basis:21676748"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Shu-Bi-Dua"
          ],
          "pid": [
            "870970-basis:21676748"
          ],
          "title": [
            "Her lugter lidt af fisk"
          ],
          "titleFull": [
            "Her lugter lidt af fisk"
          ],
          "type": [
            "Cd (musik)"
          ],
          "workType": [
            "music"
          ]
        }
      ],
      "acIdentifier": [
        "21676748|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Her lugter lidt af fisk"
      ],
      "dcTitleFull": [
        "Her lugter lidt af fisk"
      ],
      "dcCreator": [
        "Shu-Bi-Dua"
      ],
      "creatorSort": [
        "Shu-Bi-Dua"
      ],
      "subjectDK5": [
        "78.794:5"
      ],
      "subjectDK5Text": [
        "Rock (Beat). Moderne folkemusik (Folk)"
      ],
      "shelfMusicshelf": [
        "Rock"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "CMC"
      ],
      "contributor": [
        "CeeJay",
        "Lars Pedersen (f. 1970)"
      ],
      "date": [
        "1997"
      ],
      "typeBibDKType": [
        "Cd (musik)"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "hasPartTrack": [
        "Fisk (album version)",
        "Fisk (Chief 1 remix)",
        "Fisk (CeeJay remix)"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Shu-Bi-Dua"
      ],
      "pid": [
        "870970-basis:21676748"
      ],
      "title": [
        "Her lugter lidt af fisk"
      ],
      "titleFull": [
        "Her lugter lidt af fisk"
      ],
      "type": [
        "Cd (musik)"
      ],
      "workType": [
        "music"
      ]
    },
    {
      "collection": [
        "870970-basis:42253235"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:42253235"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Kend din fisk"
          ],
          "titleFull": [
            "Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk"
          ],
          "type": [
            "Bog (bind 2)"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "42253235|870970"
      ],
      "identifierISBN": [
        "87-89796-33-0"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Kend din fisk"
      ],
      "dcTitleFull": [
        "Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk. Bind 2"
      ],
      "subjectDK5": [
        "58.6"
      ],
      "subjectDK5Text": [
        "Fisk"
      ],
      "subjectDBCF": [
        "fisk",
        "fødevarer",
        "håndbøger",
        "skaldyr"
      ],
      "abstract": [
        "Et opslagsværk, der kan tilføre kokke og andre en grundlæggende viden om fisk og skaldyr, idet vejen fra hav til bord beskrives udførligt for at fastholde kravet til kvalitet"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "HORESTA"
      ],
      "contributor": [
        "Kurt Prentow",
        "HORESTA"
      ],
      "date": [
        "2000"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "208 sider",
        "2 bind"
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
      "pid": [
        "870970-basis:42253235"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Kend din fisk"
      ],
      "titleFull": [
        "Kend din fisk : det store opslagsværk om fisk & skaldyr for kokke og andre fagfolk"
      ],
      "type": [
        "Bog (bind 2)"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870971-avis:36406186"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Philippe Grandjean"
          ],
          "pid": [
            "870971-avis:36406186"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Politiken, 2015-02-28"
          ],
          "title": [
            "Bør vi holde igen med fed fisk?"
          ],
          "titleFull": [
            "Bør vi holde igen med fed fisk?"
          ],
          "type": [
            "Avisartikel"
          ],
          "workType": [
            "article"
          ]
        }
      ],
      "acIdentifier": [
        "36406186|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Bør vi holde igen med fed fisk?"
      ],
      "dcTitleFull": [
        "Bør vi holde igen med fed fisk?"
      ],
      "creatorAut": [
        "Philippe Grandjean",
        "Lotte Lauritzen"
      ],
      "creatorSort": [
        "Grandjean, Philippe",
        "Lauritzen, Lotte"
      ],
      "subjectDK5": [
        "61.38"
      ],
      "subjectDK5Text": [
        "Ernæring"
      ],
      "subjectDBCF": [
        "ernæring",
        "fisk",
        "kost",
        "kviksølv",
        "kviksølvforurening",
        "sundhed"
      ],
      "abstract": [
        "Danskerne spiser mere fisk. I 2013 blev der solgt 1.100 tons flere ferske fisk end året før. Alligevel spiser få fisk som hovedret to gange om ugen, sådan som Fødevarestyrelsen anbefaler. Men er det overhovedet sundt at spise fisk fra de forurenede have? Forskerne ser forskelligt på det"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "2015"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "Sektion 4, s. 4"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Politiken, 2015-02-28"
      ],
      "isPartOfISSN": [
        "0907-1814"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Philippe Grandjean"
      ],
      "pid": [
        "870971-avis:36406186"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Politiken, 2015-02-28"
      ],
      "title": [
        "Bør vi holde igen med fed fisk?"
      ],
      "titleFull": [
        "Bør vi holde igen med fed fisk?"
      ],
      "type": [
        "Avisartikel"
      ],
      "workType": [
        "article"
      ]
    }
  ],
  "error": [
    "No data found on object(s): 775100-katalog:26111129",
    "No data found on object(s): 775100-katalog:50686221"
  ]
});
        done();
      });
  });
});
