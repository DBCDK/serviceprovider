/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: search {"q":"hest","limit":5}

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
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>hest</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>5</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"4819\"},\"collectionCount\":{\"$\":\"5\"},\"more\":{\"$\":\"true\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"49307411|870970\",\"@\":\"ac\"},{\"$\":\"1603-3388\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Hest\",\"@\":\"dc\"},{\"$\":\"Hest : avl ... fodring, livsstil\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"M\\u00e5nedsmagasinet Hest\",\"@\":\"dcterms\"},{\"$\":\"Magasinet Hest\",\"@\":\"dcterms\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"Officielt organ for Videncenter for Landbrug, Heste\",\"@\":\"dc\"},{\"$\":\"Forts\\u00e6ttelse af: Landsbladet Hest\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"LandbrugsMedierne\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Videncenter for Landbrug Heste\",\"@\":\"dc\"},{\"$\":\"Landscentret Heste\",\"@\":\"dc\"},{\"$\":\"Landsudvalget for Heste\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2011\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskrift\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:49307411\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:49307411\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-02\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:49307411\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:49307411\"},\"identifier\":{\"$\":\"870970-basis:49307411\"},\"title\":{\"$\":\"Hest\"},\"titleFull\":{\"$\":\"Hest : avl ... fodring, livsstil\"},\"type\":{\"$\":\"Tidsskrift\"},\"workType\":{\"$\":\"other\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"2\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"36978724|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Det kunne have v\\u00e6ret v\\u00e6rre\",\"@\":\"dc\"},{\"$\":\"Det kunne have v\\u00e6ret v\\u00e6rre\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Mette E. Neerlin\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Neerlin, Mette E.\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"99.4 Neerlin, Mette E.\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Biografier af enkelte personer\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Hest, hest, tiger, tiger\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Mette E. Neerlin\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Neerlin, Mette E.\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"b\\u00f8rnelitteratur\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dansk litteratur\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ungdomslitteratur\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"I anledning af at hun har modtaget Skriverprisen for sin bog 'Hest, hest, tiger, tiger'\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"2016\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 28-30\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"L\\u00e6sep\\u00e6dagogen, \\u00c5rg. 64, nr. 2 (2016)\",\"@\":\"dcterms\"},{\"$\":\"0106-5092\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:36978724\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:36978724\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2016-05-31\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:36978724\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Mette E. Neerlin\"},\"fedoraPid\":{\"$\":\"870971-tsart:36978724\"},\"identifier\":{\"$\":\"870971-tsart:36978724\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"L\\u00e6sep\\u00e6dagogen, \\u00c5rg. 64, nr. 2 (2016)\"},\"title\":{\"$\":\"Det kunne have v\\u00e6ret v\\u00e6rre\"},\"titleFull\":{\"$\":\"Det kunne have v\\u00e6ret v\\u00e6rre\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"3\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"09060103|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"\\\"Samarbejdet Sorte Hest\\\"\",\"@\":\"dc\"},{\"$\":\"\\\"Samarbejdet Sorte Hest\\\"\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"71.95637 Mekanisk Musikmuseum\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"71.95637 Sorte Hest\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Enkelte lokaliteter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Forslag til anvendelse af \\\"Sorte Hest\\\" og \\\"Mekanisk Musikmuseum\\\", udarbejdet af en gruppe arkitektstuderende efter forslag fra \\\"Samarbejdet Sorte Hest\\\", en sammenslutning af en r\\u00e6kke lokalgrupper p\\u00e5 Vesterbro\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"s.n.\",\"@\":\"dc\"}],\"date\":[{\"$\":\"1990\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"11 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:09060103\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:09060103\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:09060103\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:09060103\"},\"identifier\":{\"$\":\"870970-basis:09060103\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"\\\"Samarbejdet Sorte Hest\\\"\"},\"titleFull\":{\"$\":\"\\\"Samarbejdet Sorte Hest\\\"\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"4\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"26994527|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Nu og da i Hvide Hest\",\"@\":\"dc\"},{\"$\":\"Nu og da i Hvide Hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"46.37 Hvide Hest\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Enkelte lokaliteter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Hvide Hest\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Anne Mousten\",\"@\":\"dc\"},{\"$\":\"Hvide Hest forening\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2007\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret (nogle i farver)\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"64 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:26994527\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:26994527\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2007-10-30\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:26994527\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:26994527\"},\"identifier\":{\"$\":\"870970-basis:26994527\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Nu og da i Hvide Hest\"},\"titleFull\":{\"$\":\"Nu og da i Hvide Hest\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"5\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"20898151|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Buller og ... min hest\",\"@\":\"dc\"},{\"$\":\"Buller og ... min hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Min hest\",\"@\":\"dcterms\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"Varianttitel: Min hest\",\"@\":\"dc\"},{\"$\":\"Forts\\u00e6ttelse af: Min hest (Bagsv\\u00e6rd : 1972)\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Interpresse\",\"@\":\"dc\"}],\"date\":[{\"$\":\"1994\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskrift\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"Alle illustreret i farver\",\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:20898151\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:20898151\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:20898151\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:20898151\"},\"identifier\":{\"$\":\"870970-basis:20898151\"},\"title\":{\"$\":\"Buller og ... min hest\"},\"titleFull\":{\"$\":\"Buller og ... min hest\"},\"type\":{\"$\":\"Tidsskrift\"},\"workType\":{\"$\":\"other\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"21\"},\"fedoraRecordsRead\":{\"$\":\"3\"},\"time\":{\"$\":\"0.541541\"},\"trackingId\":{\"$\":\"2017-05-10T13:42:39:329114:21520\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>hest</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>5</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"4819\"},\"collectionCount\":{\"$\":\"5\"},\"more\":{\"$\":\"true\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"49307411|870970\",\"@\":\"ac\"},{\"$\":\"1603-3388\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Hest\",\"@\":\"dc\"},{\"$\":\"Hest : avl ... fodring, livsstil\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"M\\u00e5nedsmagasinet Hest\",\"@\":\"dcterms\"},{\"$\":\"Magasinet Hest\",\"@\":\"dcterms\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"Officielt organ for Videncenter for Landbrug, Heste\",\"@\":\"dc\"},{\"$\":\"Forts\\u00e6ttelse af: Landsbladet Hest\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"LandbrugsMedierne\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Videncenter for Landbrug Heste\",\"@\":\"dc\"},{\"$\":\"Landscentret Heste\",\"@\":\"dc\"},{\"$\":\"Landsudvalget for Heste\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2011\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskrift\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:49307411\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:49307411\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-02\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:49307411\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:49307411\"},\"identifier\":{\"$\":\"870970-basis:49307411\"},\"title\":{\"$\":\"Hest\"},\"titleFull\":{\"$\":\"Hest : avl ... fodring, livsstil\"},\"type\":{\"$\":\"Tidsskrift\"},\"workType\":{\"$\":\"other\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"2\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"36978724|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Det kunne have v\\u00e6ret v\\u00e6rre\",\"@\":\"dc\"},{\"$\":\"Det kunne have v\\u00e6ret v\\u00e6rre\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Mette E. Neerlin\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Neerlin, Mette E.\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"99.4 Neerlin, Mette E.\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Biografier af enkelte personer\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Hest, hest, tiger, tiger\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Mette E. Neerlin\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Neerlin, Mette E.\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"b\\u00f8rnelitteratur\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"dansk litteratur\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ungdomslitteratur\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"I anledning af at hun har modtaget Skriverprisen for sin bog 'Hest, hest, tiger, tiger'\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"2016\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 28-30\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"L\\u00e6sep\\u00e6dagogen, \\u00c5rg. 64, nr. 2 (2016)\",\"@\":\"dcterms\"},{\"$\":\"0106-5092\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:36978724\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:36978724\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2016-05-31\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:36978724\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Mette E. Neerlin\"},\"fedoraPid\":{\"$\":\"870971-tsart:36978724\"},\"identifier\":{\"$\":\"870971-tsart:36978724\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"L\\u00e6sep\\u00e6dagogen, \\u00c5rg. 64, nr. 2 (2016)\"},\"title\":{\"$\":\"Det kunne have v\\u00e6ret v\\u00e6rre\"},\"titleFull\":{\"$\":\"Det kunne have v\\u00e6ret v\\u00e6rre\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"3\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"09060103|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"\\\"Samarbejdet Sorte Hest\\\"\",\"@\":\"dc\"},{\"$\":\"\\\"Samarbejdet Sorte Hest\\\"\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"71.95637 Mekanisk Musikmuseum\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"71.95637 Sorte Hest\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Enkelte lokaliteter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Forslag til anvendelse af \\\"Sorte Hest\\\" og \\\"Mekanisk Musikmuseum\\\", udarbejdet af en gruppe arkitektstuderende efter forslag fra \\\"Samarbejdet Sorte Hest\\\", en sammenslutning af en r\\u00e6kke lokalgrupper p\\u00e5 Vesterbro\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"s.n.\",\"@\":\"dc\"}],\"date\":[{\"$\":\"1990\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"11 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:09060103\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:09060103\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:09060103\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:09060103\"},\"identifier\":{\"$\":\"870970-basis:09060103\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"\\\"Samarbejdet Sorte Hest\\\"\"},\"titleFull\":{\"$\":\"\\\"Samarbejdet Sorte Hest\\\"\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"4\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"26994527|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Nu og da i Hvide Hest\",\"@\":\"dc\"},{\"$\":\"Nu og da i Hvide Hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"46.37 Hvide Hest\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Enkelte lokaliteter\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Hvide Hest\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Anne Mousten\",\"@\":\"dc\"},{\"$\":\"Hvide Hest forening\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2007\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret (nogle i farver)\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"64 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:26994527\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:26994527\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2007-10-30\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:26994527\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:26994527\"},\"identifier\":{\"$\":\"870970-basis:26994527\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Nu og da i Hvide Hest\"},\"titleFull\":{\"$\":\"Nu og da i Hvide Hest\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"5\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"20898151|870970\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Buller og ... min hest\",\"@\":\"dc\"},{\"$\":\"Buller og ... min hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Min hest\",\"@\":\"dcterms\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"Varianttitel: Min hest\",\"@\":\"dc\"},{\"$\":\"Forts\\u00e6ttelse af: Min hest (Bagsv\\u00e6rd : 1972)\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Interpresse\",\"@\":\"dc\"}],\"date\":[{\"$\":\"1994\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskrift\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"Alle illustreret i farver\",\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:20898151\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:20898151\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870970-basis:20898151\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870970-basis:20898151\"},\"identifier\":{\"$\":\"870970-basis:20898151\"},\"title\":{\"$\":\"Buller og ... min hest\"},\"titleFull\":{\"$\":\"Buller og ... min hest\"},\"type\":{\"$\":\"Tidsskrift\"},\"workType\":{\"$\":\"other\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"5\"},\"fedoraRecordsRead\":{\"$\":\"19\"},\"time\":{\"$\":\"0.704009\"},\"trackingId\":{\"$\":\"2017-05-10T13:42:39:331033:28457\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}"
};

describe('Automated test: search-no-errors', () => {
  it('expected response. ID:y4m66h, for {"q":"hest","limit":5}', (done) => {
    context.mockData = mockData;
    provider.execute('search', {"q":"hest","limit":5}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "statusCode": 200,
  "data": [
    {
      "collection": [
        "870970-basis:49307411"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:49307411"
          ],
          "title": [
            "Hest"
          ],
          "titleFull": [
            "Hest : avl ... fodring, livsstil"
          ],
          "type": [
            "Tidsskrift"
          ],
          "workType": [
            "other"
          ]
        }
      ],
      "acIdentifier": [
        "49307411|870970"
      ],
      "identifierISSN": [
        "1603-3388"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Hest"
      ],
      "dcTitleFull": [
        "Hest : avl ... fodring, livsstil"
      ],
      "alternative": [
        "Månedsmagasinet Hest",
        "Magasinet Hest"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "description": [
        "Officielt organ for Videncenter for Landbrug, Heste"
      ],
      "descriptionSeries": [
        "Fortsættelse af: Landsbladet Hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "LandbrugsMedierne"
      ],
      "contributor": [
        "Videncenter for Landbrug Heste",
        "Landscentret Heste",
        "Landsudvalget for Heste"
      ],
      "date": [
        "2011"
      ],
      "typeBibDKType": [
        "Tidsskrift"
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
        "870970-basis:49307411"
      ],
      "title": [
        "Hest"
      ],
      "titleFull": [
        "Hest : avl ... fodring, livsstil"
      ],
      "type": [
        "Tidsskrift"
      ],
      "workType": [
        "other"
      ]
    },
    {
      "collection": [
        "870971-tsart:36978724"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Mette E. Neerlin"
          ],
          "pid": [
            "870971-tsart:36978724"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Læsepædagogen, Årg. 64, nr. 2 (2016)"
          ],
          "title": [
            "Det kunne have været værre"
          ],
          "titleFull": [
            "Det kunne have været værre"
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
        "36978724|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Det kunne have været værre"
      ],
      "dcTitleFull": [
        "Det kunne have været værre"
      ],
      "creatorAut": [
        "Mette E. Neerlin"
      ],
      "creatorSort": [
        "Neerlin, Mette E."
      ],
      "subjectDK5": [
        "99.4 Neerlin, Mette E."
      ],
      "subjectDK5Text": [
        "Biografier af enkelte personer"
      ],
      "subjectDBCF": [
        "Hest, hest, tiger, tiger",
        "Mette E. Neerlin",
        "børnelitteratur",
        "dansk litteratur",
        "ungdomslitteratur"
      ],
      "subjectSort": [
        "Neerlin, Mette E."
      ],
      "description": [
        "I anledning af at hun har modtaget Skriverprisen for sin bog 'Hest, hest, tiger, tiger'"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "2016"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 28-30"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Læsepædagogen, Årg. 64, nr. 2 (2016)"
      ],
      "isPartOfISSN": [
        "0106-5092"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Mette E. Neerlin"
      ],
      "pid": [
        "870971-tsart:36978724"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Læsepædagogen, Årg. 64, nr. 2 (2016)"
      ],
      "title": [
        "Det kunne have været værre"
      ],
      "titleFull": [
        "Det kunne have været værre"
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
        "870970-basis:09060103"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:09060103"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "\"Samarbejdet Sorte Hest\""
          ],
          "titleFull": [
            "\"Samarbejdet Sorte Hest\""
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
        "09060103|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "\"Samarbejdet Sorte Hest\""
      ],
      "dcTitleFull": [
        "\"Samarbejdet Sorte Hest\""
      ],
      "subjectDK5": [
        "71.95637 Mekanisk Musikmuseum",
        "71.95637 Sorte Hest"
      ],
      "subjectDK5Text": [
        "Enkelte lokaliteter"
      ],
      "abstract": [
        "Forslag til anvendelse af \"Sorte Hest\" og \"Mekanisk Musikmuseum\", udarbejdet af en gruppe arkitektstuderende efter forslag fra \"Samarbejdet Sorte Hest\", en sammenslutning af en række lokalgrupper på Vesterbro"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "s.n."
      ],
      "date": [
        "1990"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "11 sider"
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
        "870970-basis:09060103"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "\"Samarbejdet Sorte Hest\""
      ],
      "titleFull": [
        "\"Samarbejdet Sorte Hest\""
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
        "870970-basis:26994527"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:26994527"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Nu og da i Hvide Hest"
          ],
          "titleFull": [
            "Nu og da i Hvide Hest"
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
        "26994527|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Nu og da i Hvide Hest"
      ],
      "dcTitleFull": [
        "Nu og da i Hvide Hest"
      ],
      "subjectDK5": [
        "46.37 Hvide Hest"
      ],
      "subjectDK5Text": [
        "Enkelte lokaliteter"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "Hvide Hest"
      ],
      "contributor": [
        "Anne Mousten",
        "Hvide Hest forening"
      ],
      "date": [
        "2007"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret (nogle i farver)"
      ],
      "extent": [
        "64 sider"
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
        "870970-basis:26994527"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Nu og da i Hvide Hest"
      ],
      "titleFull": [
        "Nu og da i Hvide Hest"
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
        "870970-basis:20898151"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:20898151"
          ],
          "title": [
            "Buller og ... min hest"
          ],
          "titleFull": [
            "Buller og ... min hest"
          ],
          "type": [
            "Tidsskrift"
          ],
          "workType": [
            "other"
          ]
        }
      ],
      "acIdentifier": [
        "20898151|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Buller og ... min hest"
      ],
      "dcTitleFull": [
        "Buller og ... min hest"
      ],
      "alternative": [
        "Min hest"
      ],
      "subjectDK5Text": [
        "Skønlitteratur"
      ],
      "subjectDK5": [
        "sk"
      ],
      "description": [
        "Varianttitel: Min hest"
      ],
      "descriptionSeries": [
        "Fortsættelse af: Min hest (Bagsværd : 1972)"
      ],
      "audience": [
        "børnematerialer"
      ],
      "publisher": [
        "Interpresse"
      ],
      "date": [
        "1994"
      ],
      "typeBibDKType": [
        "Tidsskrift"
      ],
      "format": [
        "Alle illustreret i farver"
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
        "870970-basis:20898151"
      ],
      "title": [
        "Buller og ... min hest"
      ],
      "titleFull": [
        "Buller og ... min hest"
      ],
      "type": [
        "Tidsskrift"
      ],
      "workType": [
        "other"
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
        "870970-basis:49307411"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:49307411"
          ],
          "title": [
            "Hest"
          ],
          "titleFull": [
            "Hest : avl ... fodring, livsstil"
          ],
          "type": [
            "Tidsskrift"
          ],
          "workType": [
            "other"
          ]
        }
      ],
      "acIdentifier": [
        "49307411|870970"
      ],
      "identifierISSN": [
        "1603-3388"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Hest"
      ],
      "dcTitleFull": [
        "Hest : avl ... fodring, livsstil"
      ],
      "alternative": [
        "Månedsmagasinet Hest",
        "Magasinet Hest"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "description": [
        "Officielt organ for Videncenter for Landbrug, Heste"
      ],
      "descriptionSeries": [
        "Fortsættelse af: Landsbladet Hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "LandbrugsMedierne"
      ],
      "contributor": [
        "Videncenter for Landbrug Heste",
        "Landscentret Heste",
        "Landsudvalget for Heste"
      ],
      "date": [
        "2011"
      ],
      "typeBibDKType": [
        "Tidsskrift"
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
        "870970-basis:49307411"
      ],
      "title": [
        "Hest"
      ],
      "titleFull": [
        "Hest : avl ... fodring, livsstil"
      ],
      "type": [
        "Tidsskrift"
      ],
      "workType": [
        "other"
      ]
    },
    {
      "collection": [
        "870971-tsart:36978724"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Mette E. Neerlin"
          ],
          "pid": [
            "870971-tsart:36978724"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Læsepædagogen, Årg. 64, nr. 2 (2016)"
          ],
          "title": [
            "Det kunne have været værre"
          ],
          "titleFull": [
            "Det kunne have været værre"
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
        "36978724|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Det kunne have været værre"
      ],
      "dcTitleFull": [
        "Det kunne have været værre"
      ],
      "creatorAut": [
        "Mette E. Neerlin"
      ],
      "creatorSort": [
        "Neerlin, Mette E."
      ],
      "subjectDK5": [
        "99.4 Neerlin, Mette E."
      ],
      "subjectDK5Text": [
        "Biografier af enkelte personer"
      ],
      "subjectDBCF": [
        "Hest, hest, tiger, tiger",
        "Mette E. Neerlin",
        "børnelitteratur",
        "dansk litteratur",
        "ungdomslitteratur"
      ],
      "subjectSort": [
        "Neerlin, Mette E."
      ],
      "description": [
        "I anledning af at hun har modtaget Skriverprisen for sin bog 'Hest, hest, tiger, tiger'"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "2016"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 28-30"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Læsepædagogen, Årg. 64, nr. 2 (2016)"
      ],
      "isPartOfISSN": [
        "0106-5092"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Mette E. Neerlin"
      ],
      "pid": [
        "870971-tsart:36978724"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Læsepædagogen, Årg. 64, nr. 2 (2016)"
      ],
      "title": [
        "Det kunne have været værre"
      ],
      "titleFull": [
        "Det kunne have været værre"
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
        "870970-basis:09060103"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:09060103"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "\"Samarbejdet Sorte Hest\""
          ],
          "titleFull": [
            "\"Samarbejdet Sorte Hest\""
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
        "09060103|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "\"Samarbejdet Sorte Hest\""
      ],
      "dcTitleFull": [
        "\"Samarbejdet Sorte Hest\""
      ],
      "subjectDK5": [
        "71.95637 Mekanisk Musikmuseum",
        "71.95637 Sorte Hest"
      ],
      "subjectDK5Text": [
        "Enkelte lokaliteter"
      ],
      "abstract": [
        "Forslag til anvendelse af \"Sorte Hest\" og \"Mekanisk Musikmuseum\", udarbejdet af en gruppe arkitektstuderende efter forslag fra \"Samarbejdet Sorte Hest\", en sammenslutning af en række lokalgrupper på Vesterbro"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "s.n."
      ],
      "date": [
        "1990"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "11 sider"
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
        "870970-basis:09060103"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "\"Samarbejdet Sorte Hest\""
      ],
      "titleFull": [
        "\"Samarbejdet Sorte Hest\""
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
        "870970-basis:26994527"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:26994527"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Nu og da i Hvide Hest"
          ],
          "titleFull": [
            "Nu og da i Hvide Hest"
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
        "26994527|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Nu og da i Hvide Hest"
      ],
      "dcTitleFull": [
        "Nu og da i Hvide Hest"
      ],
      "subjectDK5": [
        "46.37 Hvide Hest"
      ],
      "subjectDK5Text": [
        "Enkelte lokaliteter"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "Hvide Hest"
      ],
      "contributor": [
        "Anne Mousten",
        "Hvide Hest forening"
      ],
      "date": [
        "2007"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret (nogle i farver)"
      ],
      "extent": [
        "64 sider"
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
        "870970-basis:26994527"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Nu og da i Hvide Hest"
      ],
      "titleFull": [
        "Nu og da i Hvide Hest"
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
        "870970-basis:20898151"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870970-basis:20898151"
          ],
          "title": [
            "Buller og ... min hest"
          ],
          "titleFull": [
            "Buller og ... min hest"
          ],
          "type": [
            "Tidsskrift"
          ],
          "workType": [
            "other"
          ]
        }
      ],
      "acIdentifier": [
        "20898151|870970"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Buller og ... min hest"
      ],
      "dcTitleFull": [
        "Buller og ... min hest"
      ],
      "alternative": [
        "Min hest"
      ],
      "subjectDK5Text": [
        "Skønlitteratur"
      ],
      "subjectDK5": [
        "sk"
      ],
      "description": [
        "Varianttitel: Min hest"
      ],
      "descriptionSeries": [
        "Fortsættelse af: Min hest (Bagsværd : 1972)"
      ],
      "audience": [
        "børnematerialer"
      ],
      "publisher": [
        "Interpresse"
      ],
      "date": [
        "1994"
      ],
      "typeBibDKType": [
        "Tidsskrift"
      ],
      "format": [
        "Alle illustreret i farver"
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
        "870970-basis:20898151"
      ],
      "title": [
        "Buller og ... min hest"
      ],
      "titleFull": [
        "Buller og ... min hest"
      ],
      "type": [
        "Tidsskrift"
      ],
      "workType": [
        "other"
      ]
    }
  ]
});
        done();
      });
  });
});
