/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: search {"q":"hest"}

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
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>hest</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"2355\"},\"collectionCount\":{\"$\":\"10\"},\"more\":{\"$\":\"true\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72819675|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Den belgiske hest\",\"@\":\"dc\"},{\"$\":\"Den belgiske hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Henning Rasmussen\",\"@\":\"dc\"},{\"$\":\"Rasmussen, Henning\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"belgisk hest\",\"@\":\"dc\"},{\"$\":\"hesteavl\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1988\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 29-31\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Hippologisk tidsskrift, \\u00c5rg. 100, nr. 3 (1988)\",\"@\":\"dcterms\"},{\"$\":\"0018-201X\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72819675\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72819675\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72819675\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Henning Rasmussen\"},\"fedoraPid\":{\"$\":\"870971-tsart:72819675\"},\"identifier\":{\"$\":\"870971-tsart:72819675\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Hippologisk tidsskrift, \\u00c5rg. 100, nr. 3 (1988)\"},\"title\":{\"$\":\"Den belgiske hest\"},\"titleFull\":{\"$\":\"Den belgiske hest\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"2\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73458110|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Slaget om Sorte Hest. En lang, lang konflikt\",\"@\":\"dc\"},{\"$\":\"Slaget om Sorte Hest : En lang, lang konflikt\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Per Mikael Jensen\",\"@\":\"dc\"},{\"$\":\"Jensen, Per Mikael\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"71.637 Sorte Hest\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"BZ'ere\",\"@\":\"dc\"},{\"$\":\"Enkelte k\\u00f8benhavnske lokaliteters arkitekturhistorie\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Sorte Hest (boligkarre)\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Sorte Hest, Vesterbro, K\\u00f8benhavn\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1990\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Politiken, 1990-03-11\",\"@\":\"dcterms\"},{\"$\":\"0907-1814\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"spatial\":[{\"$\":\"K\\u00f8benhavn arkitektur\",\"@\":\"dcterms\"},{\"$\":\"Vesterbro arkitektur\",\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:73458110\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:73458110\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:73458110\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Per Mikael Jensen\"},\"fedoraPid\":{\"$\":\"870971-avis:73458110\"},\"identifier\":{\"$\":\"870971-avis:73458110\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Politiken, 1990-03-11\"},\"title\":{\"$\":\"Slaget om Sorte Hest. En lang, lang konflikt\"},\"titleFull\":{\"$\":\"Slaget om Sorte Hest. En lang, lang konflikt\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"3\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"8286|150043\",\"@\":\"ac\"},{\"$\":\"http:\\/\\/historiskatlas.dk\\/Hest_(8286)\",\"@type\":{\"$\":\"dcterms:URI\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Historisk Atlas\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Hest\",\"@\":\"dc\"},{\"$\":\"Hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Kunst\",\"@\":\"dc\"},{\"$\":\"Skulpturer\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Agnete Ester Votborg Madsen (1923-1977)\\nHest, u.\\u00e5.\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Historisk Atlas\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Netdokument\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"spatial\":[{\"$\":\"10.427599112429400000000000000,55.366856304806300000000000000\",\"@type\":{\"$\":\"kml:coordinates\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"150043-atlas:8286\"},\"primaryObjectIdentifier\":{\"$\":\"150043-atlas:8286\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2013-01-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"150043-atlas:8286\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"online\"},\"fedoraPid\":{\"$\":\"150043-atlas:8286\"},\"identifier\":{\"$\":\"150043-atlas:8286\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Hest\"},\"titleFull\":{\"$\":\"Hest\"},\"type\":{\"$\":\"Netdokument\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"4\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"11942|150033\",\"@\":\"ac\"},{\"$\":\"http:\\/\\/bibliotek.danske-dyr.dk\\/Sv%C3%A6r\\/dyr\\/Jysk%20hest\\/\",\"@type\":{\"$\":\"dcterms:URI\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Danske Dyr\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Jysk hest\",\"@\":\"dc\"},{\"$\":\"Jysk hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Den jyske hest\",\"@\":\"dcterms\"},{\"$\":\"den jydske hest\",\"@\":\"dcterms\"},{\"$\":\"Jydsk hest\",\"@\":\"dcterms\"},{\"$\":\"jydske heste\",\"@\":\"dcterms\"}],\"creator\":[{\"$\":\"danske-dyr.dk\",\"@type\":{\"$\":\"dkdcplus:com\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"danske-dyr.dk\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Zoologi\",\"@\":\"dc\"},{\"$\":\"Biologi\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"ConDidact A\\/S\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2009\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Netdokument\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"Dansk\",\"@\":\"dc\"},{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"rights\":[{\"$\":\"Copyright \\u00a9 2016 ConDidact A\\/S\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"150033-dandyr:11942\"},\"primaryObjectIdentifier\":{\"$\":\"150033-dandyr:11942\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2009-01-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"150033-dandyr:11942\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"danske-dyr.dk\"},\"fedoraPid\":{\"$\":\"150033-dandyr:11942\"},\"identifier\":{\"$\":\"150033-dandyr:11942\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Jysk hest\"},\"titleFull\":{\"$\":\"Jysk hest\"},\"type\":{\"$\":\"Netdokument\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"5\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"83321857|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Fare for indavl p\\u00e5 l\\u00e6ngere sigt. Den jydske hest i positiv udvikling\",\"@\":\"dc\"},{\"$\":\"Fare for indavl p\\u00e5 l\\u00e6ngere sigt : Den jydske hest i positiv udvikling\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Olav Rasmussen\",\"@\":\"dc\"},{\"$\":\"Rasmussen, Olav\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"den jydske hest\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"frederiksborgheste\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"heste\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"hesteavl\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"indavl\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Frederiksborgheste og den jydske hest\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1996\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 16-18\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Landsbladet Hest, 1996, nr. 4\",\"@\":\"dcterms\"},{\"$\":\"0906-6616\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:83321857\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:83321857\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:83321857\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Olav Rasmussen\"},\"fedoraPid\":{\"$\":\"870971-tsart:83321857\"},\"identifier\":{\"$\":\"870971-tsart:83321857\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Landsbladet Hest, 1996, nr. 4\"},\"title\":{\"$\":\"Fare for indavl p\\u00e5 l\\u00e6ngere sigt. Den jydske hest i positiv udvikling\"},\"titleFull\":{\"$\":\"Fare for indavl p\\u00e5 l\\u00e6ngere sigt. Den jydske hest i positiv udvikling\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"6\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73336317|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"H\\u00f8jt til hest\",\"@\":\"dc\"},{\"$\":\"H\\u00f8jt til hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1989\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Jyllands-posten, 1989-11-19\",\"@\":\"dcterms\"},{\"$\":\"0109-1182\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:73336317\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:73336317\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:73336317\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870971-avis:73336317\"},\"identifier\":{\"$\":\"870971-avis:73336317\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Jyllands-posten, 1989-11-19\"},\"title\":{\"$\":\"H\\u00f8jt til hest\"},\"titleFull\":{\"$\":\"H\\u00f8jt til hest\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"7\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72922190|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Boltskydning af hest\",\"@\":\"dc\"},{\"$\":\"Boltskydning af hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1988\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 548\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"mul\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Flere sprog\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Dansk veterin\\u00e6rtidsskrift, \\u00c5rg. 71, nr. 10 (1988)\",\"@\":\"dcterms\"},{\"$\":\"0106-6854\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72922190\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72922190\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72922190\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870971-tsart:72922190\"},\"identifier\":{\"$\":\"870971-tsart:72922190\"},\"language\":{\"$\":\"Flere sprog\"},\"partOf\":{\"$\":\"Dansk veterin\\u00e6rtidsskrift, \\u00c5rg. 71, nr. 10 (1988)\"},\"title\":{\"$\":\"Boltskydning af hest\"},\"titleFull\":{\"$\":\"Boltskydning af hest\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"8\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73528070|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Flertal st\\u00f8tter Juhl-J\\u00f8rgensens \\u00f8nskeseddel for Sorte Hest\",\"@\":\"dc\"},{\"$\":\"Flertal st\\u00f8tter Juhl-J\\u00f8rgensens \\u00f8nskeseddel for Sorte Hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Niels Rohleder\",\"@\":\"dc\"},{\"$\":\"Rohleder, Niels\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"71.637 Sorte Hest\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Axel Juhl-J\\u00f8rgensen\",\"@\":\"dc\"},{\"$\":\"Juhl-J\\u00f8rgensen, Axel\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Enkelte k\\u00f8benhavnske lokaliteters arkitekturhistorie\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Sorte Hest (boligkarre)\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1990\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Information, 1990-05-17\",\"@\":\"dcterms\"},{\"$\":\"1602-2572\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"spatial\":[{\"$\":\"K\\u00f8benhavn arkitektur\",\"@\":\"dcterms\"},{\"$\":\"Vesterbro arkitektur\",\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:73528070\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:73528070\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:73528070\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Niels Rohleder\"},\"fedoraPid\":{\"$\":\"870971-avis:73528070\"},\"identifier\":{\"$\":\"870971-avis:73528070\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Information, 1990-05-17\"},\"title\":{\"$\":\"Flertal st\\u00f8tter Juhl-J\\u00f8rgensens \\u00f8nskeseddel for Sorte Hest\"},\"titleFull\":{\"$\":\"Flertal st\\u00f8tter Juhl-J\\u00f8rgensens \\u00f8nskeseddel for Sorte Hest\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"9\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73150272|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Bryggerhesten - elsket og beundret dansk entertainer\",\"@\":\"dc\"},{\"$\":\"Bryggerhesten - elsket og beundret dansk entertainer\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Anna Panum\",\"@\":\"dc\"},{\"$\":\"Panum, Anna\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"bryggerheste\",\"@\":\"dc\"},{\"$\":\"hesteavl\",\"@\":\"dc\"},{\"$\":\"jysk hest\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Jysk hest\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1988\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 4-5\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Dyrene og os, \\u00c5rg. 4, nr. 2 (1988)\",\"@\":\"dcterms\"},{\"$\":\"0902-3879\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:73150272\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:73150272\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:73150272\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Anna Panum\"},\"fedoraPid\":{\"$\":\"870971-tsart:73150272\"},\"identifier\":{\"$\":\"870971-tsart:73150272\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Dyrene og os, \\u00c5rg. 4, nr. 2 (1988)\"},\"title\":{\"$\":\"Bryggerhesten - elsket og beundret dansk entertainer\"},\"titleFull\":{\"$\":\"Bryggerhesten - elsket og beundret dansk entertainer\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"10\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72819683|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Den jyske hest\",\"@\":\"dc\"},{\"$\":\"Den jyske hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Henning Rasmussen\",\"@\":\"dc\"},{\"$\":\"Rasmussen, Henning\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"heste\",\"@\":\"dc\"},{\"$\":\"hesteavl\",\"@\":\"dc\"},{\"$\":\"jysk hest\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1988\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 24-28\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Hippologisk tidsskrift, \\u00c5rg. 100, nr. 3 (1988)\",\"@\":\"dcterms\"},{\"$\":\"0018-201X\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72819683\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72819683\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72819683\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Henning Rasmussen\"},\"fedoraPid\":{\"$\":\"870971-tsart:72819683\"},\"identifier\":{\"$\":\"870971-tsart:72819683\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Hippologisk tidsskrift, \\u00c5rg. 100, nr. 3 (1988)\"},\"title\":{\"$\":\"Den jyske hest\"},\"titleFull\":{\"$\":\"Den jyske hest\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"40\"},\"fedoraRecordsRead\":{\"$\":\"0\"},\"time\":{\"$\":\"0.164911\"},\"trackingId\":{\"$\":\"2016-12-08T15:40:12:222748:7690\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>hest</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>10</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"2355\"},\"collectionCount\":{\"$\":\"10\"},\"more\":{\"$\":\"true\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72819675|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Den belgiske hest\",\"@\":\"dc\"},{\"$\":\"Den belgiske hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Henning Rasmussen\",\"@\":\"dc\"},{\"$\":\"Rasmussen, Henning\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"belgisk hest\",\"@\":\"dc\"},{\"$\":\"hesteavl\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1988\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 29-31\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Hippologisk tidsskrift, \\u00c5rg. 100, nr. 3 (1988)\",\"@\":\"dcterms\"},{\"$\":\"0018-201X\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72819675\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72819675\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72819675\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Henning Rasmussen\"},\"fedoraPid\":{\"$\":\"870971-tsart:72819675\"},\"identifier\":{\"$\":\"870971-tsart:72819675\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Hippologisk tidsskrift, \\u00c5rg. 100, nr. 3 (1988)\"},\"title\":{\"$\":\"Den belgiske hest\"},\"titleFull\":{\"$\":\"Den belgiske hest\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"2\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73458110|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Slaget om Sorte Hest. En lang, lang konflikt\",\"@\":\"dc\"},{\"$\":\"Slaget om Sorte Hest : En lang, lang konflikt\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Per Mikael Jensen\",\"@\":\"dc\"},{\"$\":\"Jensen, Per Mikael\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"71.637 Sorte Hest\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"BZ'ere\",\"@\":\"dc\"},{\"$\":\"Enkelte k\\u00f8benhavnske lokaliteters arkitekturhistorie\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Sorte Hest (boligkarre)\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Sorte Hest, Vesterbro, K\\u00f8benhavn\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1990\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Politiken, 1990-03-11\",\"@\":\"dcterms\"},{\"$\":\"0907-1814\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"spatial\":[{\"$\":\"K\\u00f8benhavn arkitektur\",\"@\":\"dcterms\"},{\"$\":\"Vesterbro arkitektur\",\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:73458110\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:73458110\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:73458110\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Per Mikael Jensen\"},\"fedoraPid\":{\"$\":\"870971-avis:73458110\"},\"identifier\":{\"$\":\"870971-avis:73458110\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Politiken, 1990-03-11\"},\"title\":{\"$\":\"Slaget om Sorte Hest. En lang, lang konflikt\"},\"titleFull\":{\"$\":\"Slaget om Sorte Hest. En lang, lang konflikt\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"3\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"8286|150043\",\"@\":\"ac\"},{\"$\":\"http:\\/\\/historiskatlas.dk\\/Hest_(8286)\",\"@type\":{\"$\":\"dcterms:URI\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Historisk Atlas\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Hest\",\"@\":\"dc\"},{\"$\":\"Hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Kunst\",\"@\":\"dc\"},{\"$\":\"Skulpturer\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Agnete Ester Votborg Madsen (1923-1977)\\nHest, u.\\u00e5.\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"Historisk Atlas\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Netdokument\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"spatial\":[{\"$\":\"10.427599112429400000000000000,55.366856304806300000000000000\",\"@type\":{\"$\":\"kml:coordinates\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"150043-atlas:8286\"},\"primaryObjectIdentifier\":{\"$\":\"150043-atlas:8286\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2013-01-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"150043-atlas:8286\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"online\"},\"fedoraPid\":{\"$\":\"150043-atlas:8286\"},\"identifier\":{\"$\":\"150043-atlas:8286\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Hest\"},\"titleFull\":{\"$\":\"Hest\"},\"type\":{\"$\":\"Netdokument\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"4\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"11942|150033\",\"@\":\"ac\"},{\"$\":\"http:\\/\\/bibliotek.danske-dyr.dk\\/Sv%C3%A6r\\/dyr\\/Jysk%20hest\\/\",\"@type\":{\"$\":\"dcterms:URI\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Danske Dyr\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Jysk hest\",\"@\":\"dc\"},{\"$\":\"Jysk hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Den jyske hest\",\"@\":\"dcterms\"},{\"$\":\"den jydske hest\",\"@\":\"dcterms\"},{\"$\":\"Jydsk hest\",\"@\":\"dcterms\"},{\"$\":\"jydske heste\",\"@\":\"dcterms\"}],\"creator\":[{\"$\":\"danske-dyr.dk\",\"@type\":{\"$\":\"dkdcplus:com\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"danske-dyr.dk\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Zoologi\",\"@\":\"dc\"},{\"$\":\"Biologi\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"publisher\":[{\"$\":\"ConDidact A\\/S\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2009\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Netdokument\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"Dansk\",\"@\":\"dc\"},{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"rights\":[{\"$\":\"Copyright \\u00a9 2016 ConDidact A\\/S\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"150033-dandyr:11942\"},\"primaryObjectIdentifier\":{\"$\":\"150033-dandyr:11942\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2009-01-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"150033-dandyr:11942\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"danske-dyr.dk\"},\"fedoraPid\":{\"$\":\"150033-dandyr:11942\"},\"identifier\":{\"$\":\"150033-dandyr:11942\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Jysk hest\"},\"titleFull\":{\"$\":\"Jysk hest\"},\"type\":{\"$\":\"Netdokument\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"5\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"83321857|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Fare for indavl p\\u00e5 l\\u00e6ngere sigt. Den jydske hest i positiv udvikling\",\"@\":\"dc\"},{\"$\":\"Fare for indavl p\\u00e5 l\\u00e6ngere sigt : Den jydske hest i positiv udvikling\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Olav Rasmussen\",\"@\":\"dc\"},{\"$\":\"Rasmussen, Olav\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"den jydske hest\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"frederiksborgheste\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"heste\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"hesteavl\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"indavl\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Frederiksborgheste og den jydske hest\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1996\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 16-18\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Landsbladet Hest, 1996, nr. 4\",\"@\":\"dcterms\"},{\"$\":\"0906-6616\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:83321857\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:83321857\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:83321857\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Olav Rasmussen\"},\"fedoraPid\":{\"$\":\"870971-tsart:83321857\"},\"identifier\":{\"$\":\"870971-tsart:83321857\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Landsbladet Hest, 1996, nr. 4\"},\"title\":{\"$\":\"Fare for indavl p\\u00e5 l\\u00e6ngere sigt. Den jydske hest i positiv udvikling\"},\"titleFull\":{\"$\":\"Fare for indavl p\\u00e5 l\\u00e6ngere sigt. Den jydske hest i positiv udvikling\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"6\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73336317|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"H\\u00f8jt til hest\",\"@\":\"dc\"},{\"$\":\"H\\u00f8jt til hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1989\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Jyllands-posten, 1989-11-19\",\"@\":\"dcterms\"},{\"$\":\"0109-1182\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:73336317\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:73336317\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:73336317\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870971-avis:73336317\"},\"identifier\":{\"$\":\"870971-avis:73336317\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Jyllands-posten, 1989-11-19\"},\"title\":{\"$\":\"H\\u00f8jt til hest\"},\"titleFull\":{\"$\":\"H\\u00f8jt til hest\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"7\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72922190|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Boltskydning af hest\",\"@\":\"dc\"},{\"$\":\"Boltskydning af hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1988\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 548\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"mul\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Flere sprog\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Dansk veterin\\u00e6rtidsskrift, \\u00c5rg. 71, nr. 10 (1988)\",\"@\":\"dcterms\"},{\"$\":\"0106-6854\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72922190\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72922190\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72922190\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"870971-tsart:72922190\"},\"identifier\":{\"$\":\"870971-tsart:72922190\"},\"language\":{\"$\":\"Flere sprog\"},\"partOf\":{\"$\":\"Dansk veterin\\u00e6rtidsskrift, \\u00c5rg. 71, nr. 10 (1988)\"},\"title\":{\"$\":\"Boltskydning af hest\"},\"titleFull\":{\"$\":\"Boltskydning af hest\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"8\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73528070|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Avisartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Flertal st\\u00f8tter Juhl-J\\u00f8rgensens \\u00f8nskeseddel for Sorte Hest\",\"@\":\"dc\"},{\"$\":\"Flertal st\\u00f8tter Juhl-J\\u00f8rgensens \\u00f8nskeseddel for Sorte Hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Niels Rohleder\",\"@\":\"dc\"},{\"$\":\"Rohleder, Niels\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"71.637 Sorte Hest\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Axel Juhl-J\\u00f8rgensen\",\"@\":\"dc\"},{\"$\":\"Juhl-J\\u00f8rgensen, Axel\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Enkelte k\\u00f8benhavnske lokaliteters arkitekturhistorie\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Sorte Hest (boligkarre)\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1990\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Avisartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Information, 1990-05-17\",\"@\":\"dcterms\"},{\"$\":\"1602-2572\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"spatial\":[{\"$\":\"K\\u00f8benhavn arkitektur\",\"@\":\"dcterms\"},{\"$\":\"Vesterbro arkitektur\",\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-avis:73528070\"},\"primaryObjectIdentifier\":{\"$\":\"870971-avis:73528070\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-avis:73528070\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Niels Rohleder\"},\"fedoraPid\":{\"$\":\"870971-avis:73528070\"},\"identifier\":{\"$\":\"870971-avis:73528070\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Information, 1990-05-17\"},\"title\":{\"$\":\"Flertal st\\u00f8tter Juhl-J\\u00f8rgensens \\u00f8nskeseddel for Sorte Hest\"},\"titleFull\":{\"$\":\"Flertal st\\u00f8tter Juhl-J\\u00f8rgensens \\u00f8nskeseddel for Sorte Hest\"},\"type\":{\"$\":\"Avisartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"9\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"73150272|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Bryggerhesten - elsket og beundret dansk entertainer\",\"@\":\"dc\"},{\"$\":\"Bryggerhesten - elsket og beundret dansk entertainer\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Anna Panum\",\"@\":\"dc\"},{\"$\":\"Panum, Anna\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"bryggerheste\",\"@\":\"dc\"},{\"$\":\"hesteavl\",\"@\":\"dc\"},{\"$\":\"jysk hest\",\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Jysk hest\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1988\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 4-5\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Dyrene og os, \\u00c5rg. 4, nr. 2 (1988)\",\"@\":\"dcterms\"},{\"$\":\"0902-3879\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:73150272\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:73150272\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:73150272\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Anna Panum\"},\"fedoraPid\":{\"$\":\"870971-tsart:73150272\"},\"identifier\":{\"$\":\"870971-tsart:73150272\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Dyrene og os, \\u00c5rg. 4, nr. 2 (1988)\"},\"title\":{\"$\":\"Bryggerhesten - elsket og beundret dansk entertainer\"},\"titleFull\":{\"$\":\"Bryggerhesten - elsket og beundret dansk entertainer\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"10\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"72819683|870971\",\"@\":\"ac\"}],\"source\":[{\"$\":\"Tidsskriftsartikler\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Den jyske hest\",\"@\":\"dc\"},{\"$\":\"Den jyske hest\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Henning Rasmussen\",\"@\":\"dc\"},{\"$\":\"Rasmussen, Henning\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.61\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Heste\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"heste\",\"@\":\"dc\"},{\"$\":\"hesteavl\",\"@\":\"dc\"},{\"$\":\"jysk hest\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"date\":[{\"$\":\"1988\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Tidsskriftsartikel\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"S. 24-28\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"isPartOf\":[{\"$\":\"Hippologisk tidsskrift, \\u00c5rg. 100, nr. 3 (1988)\",\"@\":\"dcterms\"},{\"$\":\"0018-201X\",\"@type\":{\"$\":\"dkdcplus:ISSN\",\"@\":\"xsi\"},\"@\":\"dcterms\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870971-tsart:72819683\"},\"primaryObjectIdentifier\":{\"$\":\"870971-tsart:72819683\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2005-03-01\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"870971-tsart:72819683\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Henning Rasmussen\"},\"fedoraPid\":{\"$\":\"870971-tsart:72819683\"},\"identifier\":{\"$\":\"870971-tsart:72819683\"},\"language\":{\"$\":\"Dansk\"},\"partOf\":{\"$\":\"Hippologisk tidsskrift, \\u00c5rg. 100, nr. 3 (1988)\"},\"title\":{\"$\":\"Den jyske hest\"},\"titleFull\":{\"$\":\"Den jyske hest\"},\"type\":{\"$\":\"Tidsskriftsartikel\"},\"workType\":{\"$\":\"article\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"40\"},\"fedoraRecordsRead\":{\"$\":\"0\"},\"time\":{\"$\":\"0.164492\"},\"trackingId\":{\"$\":\"2016-12-08T15:40:12:224436:16190\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}"
};

describe('Automated test: __search_simple', () => {
  it('expected response. ID:u17tma, for {"q":"hest"}', (done) => {
    context.mockData = mockData;
    provider.execute('search', {"q":"hest"}, context)
      .then(result => {
        assert.deepEqual(result,
            {
  "statusCode": 200,
  "data": [
    {
      "collection": [
        "870971-tsart:72819675"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Henning Rasmussen"
          ],
          "pid": [
            "870971-tsart:72819675"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
          ],
          "title": [
            "Den belgiske hest"
          ],
          "titleFull": [
            "Den belgiske hest"
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
        "72819675|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Den belgiske hest"
      ],
      "dcTitleFull": [
        "Den belgiske hest"
      ],
      "dcCreator": [
        "Henning Rasmussen"
      ],
      "creatorSort": [
        "Rasmussen, Henning"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "subject": [
        "belgisk hest",
        "hesteavl"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1988"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 29-31"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
      ],
      "isPartOfISSN": [
        "0018-201X"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Henning Rasmussen"
      ],
      "pid": [
        "870971-tsart:72819675"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
      ],
      "title": [
        "Den belgiske hest"
      ],
      "titleFull": [
        "Den belgiske hest"
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
        "870971-avis:73458110"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Per Mikael Jensen"
          ],
          "pid": [
            "870971-avis:73458110"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Politiken, 1990-03-11"
          ],
          "title": [
            "Slaget om Sorte Hest. En lang, lang konflikt"
          ],
          "titleFull": [
            "Slaget om Sorte Hest. En lang, lang konflikt"
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
        "73458110|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Slaget om Sorte Hest. En lang, lang konflikt"
      ],
      "dcTitleFull": [
        "Slaget om Sorte Hest : En lang, lang konflikt"
      ],
      "dcCreator": [
        "Per Mikael Jensen"
      ],
      "creatorSort": [
        "Jensen, Per Mikael"
      ],
      "subjectDK5": [
        "71.637 Sorte Hest"
      ],
      "subject": [
        "BZ'ere",
        "Sorte Hest (boligkarre)"
      ],
      "subjectDK5Text": [
        "Enkelte københavnske lokaliteters arkitekturhistorie"
      ],
      "abstract": [
        "Sorte Hest, Vesterbro, København"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1990"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Politiken, 1990-03-11"
      ],
      "isPartOfISSN": [
        "0907-1814"
      ],
      "spatial": [
        "København arkitektur",
        "Vesterbro arkitektur"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Per Mikael Jensen"
      ],
      "pid": [
        "870971-avis:73458110"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Politiken, 1990-03-11"
      ],
      "title": [
        "Slaget om Sorte Hest. En lang, lang konflikt"
      ],
      "titleFull": [
        "Slaget om Sorte Hest. En lang, lang konflikt"
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
        "150043-atlas:8286"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "online"
          ],
          "pid": [
            "150043-atlas:8286"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Hest"
          ],
          "titleFull": [
            "Hest"
          ],
          "type": [
            "Netdokument"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "8286|150043"
      ],
      "identifierURI": [
        "http://historiskatlas.dk/Hest_(8286)"
      ],
      "acSource": [
        "Historisk Atlas"
      ],
      "dcTitle": [
        "Hest"
      ],
      "dcTitleFull": [
        "Hest"
      ],
      "subject": [
        "Kunst",
        "Skulpturer"
      ],
      "abstract": [
        "Agnete Ester Votborg Madsen (1923-1977)\nHest, u.å."
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "Historisk Atlas"
      ],
      "typeBibDKType": [
        "Netdokument"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "spatialCoordinates": [
        "10.427599112429400000000000000,55.366856304806300000000000000"
      ],
      "accessType": [
        "online"
      ],
      "pid": [
        "150043-atlas:8286"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Hest"
      ],
      "titleFull": [
        "Hest"
      ],
      "type": [
        "Netdokument"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "150033-dandyr:11942"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "danske-dyr.dk"
          ],
          "pid": [
            "150033-dandyr:11942"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Jysk hest"
          ],
          "titleFull": [
            "Jysk hest"
          ],
          "type": [
            "Netdokument"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "11942|150033"
      ],
      "identifierURI": [
        "http://bibliotek.danske-dyr.dk/Sv%C3%A6r/dyr/Jysk%20hest/"
      ],
      "acSource": [
        "Danske Dyr"
      ],
      "dcTitle": [
        "Jysk hest"
      ],
      "dcTitleFull": [
        "Jysk hest"
      ],
      "alternative": [
        "Den jyske hest",
        "den jydske hest",
        "Jydsk hest",
        "jydske heste"
      ],
      "creatorCom": [
        "danske-dyr.dk"
      ],
      "creatorSort": [
        "danske-dyr.dk"
      ],
      "subject": [
        "Zoologi",
        "Biologi"
      ],
      "audience": [
        "børnematerialer"
      ],
      "publisher": [
        "ConDidact A/S"
      ],
      "date": [
        "2009"
      ],
      "typeBibDKType": [
        "Netdokument"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "languageISO6392": [
        "dan"
      ],
      "rights": [
        "Copyright © 2016 ConDidact A/S"
      ],
      "accessType": [
        "online"
      ],
      "creator": [
        "danske-dyr.dk"
      ],
      "pid": [
        "150033-dandyr:11942"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Jysk hest"
      ],
      "titleFull": [
        "Jysk hest"
      ],
      "type": [
        "Netdokument"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870971-tsart:83321857"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Olav Rasmussen"
          ],
          "pid": [
            "870971-tsart:83321857"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Landsbladet Hest, 1996, nr. 4"
          ],
          "title": [
            "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
          ],
          "titleFull": [
            "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
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
        "83321857|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
      ],
      "dcTitleFull": [
        "Fare for indavl på længere sigt : Den jydske hest i positiv udvikling"
      ],
      "dcCreator": [
        "Olav Rasmussen"
      ],
      "creatorSort": [
        "Rasmussen, Olav"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "subjectDBCF": [
        "den jydske hest",
        "frederiksborgheste",
        "heste",
        "hesteavl",
        "indavl"
      ],
      "abstract": [
        "Frederiksborgheste og den jydske hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1996"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 16-18"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Landsbladet Hest, 1996, nr. 4"
      ],
      "isPartOfISSN": [
        "0906-6616"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Olav Rasmussen"
      ],
      "pid": [
        "870971-tsart:83321857"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Landsbladet Hest, 1996, nr. 4"
      ],
      "title": [
        "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
      ],
      "titleFull": [
        "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
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
        "870971-avis:73336317"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870971-avis:73336317"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Jyllands-posten, 1989-11-19"
          ],
          "title": [
            "Højt til hest"
          ],
          "titleFull": [
            "Højt til hest"
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
        "73336317|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Højt til hest"
      ],
      "dcTitleFull": [
        "Højt til hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1989"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Jyllands-posten, 1989-11-19"
      ],
      "isPartOfISSN": [
        "0109-1182"
      ],
      "accessType": [
        "physical"
      ],
      "pid": [
        "870971-avis:73336317"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Jyllands-posten, 1989-11-19"
      ],
      "title": [
        "Højt til hest"
      ],
      "titleFull": [
        "Højt til hest"
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
        "870971-tsart:72922190"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870971-tsart:72922190"
          ],
          "language": [
            "Flere sprog"
          ],
          "partOf": [
            "Dansk veterinærtidsskrift, Årg. 71, nr. 10 (1988)"
          ],
          "title": [
            "Boltskydning af hest"
          ],
          "titleFull": [
            "Boltskydning af hest"
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
        "72922190|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Boltskydning af hest"
      ],
      "dcTitleFull": [
        "Boltskydning af hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1988"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 548"
      ],
      "languageISO6392": [
        "mul"
      ],
      "dcLanguage": [
        "Flere sprog"
      ],
      "isPartOf": [
        "Dansk veterinærtidsskrift, Årg. 71, nr. 10 (1988)"
      ],
      "isPartOfISSN": [
        "0106-6854"
      ],
      "accessType": [
        "physical"
      ],
      "pid": [
        "870971-tsart:72922190"
      ],
      "language": [
        "Flere sprog"
      ],
      "partOf": [
        "Dansk veterinærtidsskrift, Årg. 71, nr. 10 (1988)"
      ],
      "title": [
        "Boltskydning af hest"
      ],
      "titleFull": [
        "Boltskydning af hest"
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
        "870971-avis:73528070"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Niels Rohleder"
          ],
          "pid": [
            "870971-avis:73528070"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Information, 1990-05-17"
          ],
          "title": [
            "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
          ],
          "titleFull": [
            "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
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
        "73528070|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
      ],
      "dcTitleFull": [
        "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
      ],
      "dcCreator": [
        "Niels Rohleder"
      ],
      "creatorSort": [
        "Rohleder, Niels"
      ],
      "subjectDK5": [
        "71.637 Sorte Hest"
      ],
      "subject": [
        "Axel Juhl-Jørgensen",
        "Sorte Hest (boligkarre)"
      ],
      "subjectSort": [
        "Juhl-Jørgensen, Axel"
      ],
      "subjectDK5Text": [
        "Enkelte københavnske lokaliteters arkitekturhistorie"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1990"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Information, 1990-05-17"
      ],
      "isPartOfISSN": [
        "1602-2572"
      ],
      "spatial": [
        "København arkitektur",
        "Vesterbro arkitektur"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Niels Rohleder"
      ],
      "pid": [
        "870971-avis:73528070"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Information, 1990-05-17"
      ],
      "title": [
        "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
      ],
      "titleFull": [
        "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
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
        "870971-tsart:73150272"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Anna Panum"
          ],
          "pid": [
            "870971-tsart:73150272"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Dyrene og os, Årg. 4, nr. 2 (1988)"
          ],
          "title": [
            "Bryggerhesten - elsket og beundret dansk entertainer"
          ],
          "titleFull": [
            "Bryggerhesten - elsket og beundret dansk entertainer"
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
        "73150272|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Bryggerhesten - elsket og beundret dansk entertainer"
      ],
      "dcTitleFull": [
        "Bryggerhesten - elsket og beundret dansk entertainer"
      ],
      "dcCreator": [
        "Anna Panum"
      ],
      "creatorSort": [
        "Panum, Anna"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "subject": [
        "bryggerheste",
        "hesteavl",
        "jysk hest"
      ],
      "abstract": [
        "Jysk hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1988"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
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
        "Dyrene og os, Årg. 4, nr. 2 (1988)"
      ],
      "isPartOfISSN": [
        "0902-3879"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Anna Panum"
      ],
      "pid": [
        "870971-tsart:73150272"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Dyrene og os, Årg. 4, nr. 2 (1988)"
      ],
      "title": [
        "Bryggerhesten - elsket og beundret dansk entertainer"
      ],
      "titleFull": [
        "Bryggerhesten - elsket og beundret dansk entertainer"
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
        "870971-tsart:72819683"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Henning Rasmussen"
          ],
          "pid": [
            "870971-tsart:72819683"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
          ],
          "title": [
            "Den jyske hest"
          ],
          "titleFull": [
            "Den jyske hest"
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
        "72819683|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Den jyske hest"
      ],
      "dcTitleFull": [
        "Den jyske hest"
      ],
      "dcCreator": [
        "Henning Rasmussen"
      ],
      "creatorSort": [
        "Rasmussen, Henning"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "subject": [
        "heste",
        "hesteavl",
        "jysk hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1988"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 24-28"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
      ],
      "isPartOfISSN": [
        "0018-201X"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Henning Rasmussen"
      ],
      "pid": [
        "870971-tsart:72819683"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
      ],
      "title": [
        "Den jyske hest"
      ],
      "titleFull": [
        "Den jyske hest"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
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
        "870971-tsart:72819675"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Henning Rasmussen"
          ],
          "pid": [
            "870971-tsart:72819675"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
          ],
          "title": [
            "Den belgiske hest"
          ],
          "titleFull": [
            "Den belgiske hest"
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
        "72819675|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Den belgiske hest"
      ],
      "dcTitleFull": [
        "Den belgiske hest"
      ],
      "dcCreator": [
        "Henning Rasmussen"
      ],
      "creatorSort": [
        "Rasmussen, Henning"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "subject": [
        "belgisk hest",
        "hesteavl"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1988"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 29-31"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
      ],
      "isPartOfISSN": [
        "0018-201X"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Henning Rasmussen"
      ],
      "pid": [
        "870971-tsart:72819675"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
      ],
      "title": [
        "Den belgiske hest"
      ],
      "titleFull": [
        "Den belgiske hest"
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
        "870971-avis:73458110"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Per Mikael Jensen"
          ],
          "pid": [
            "870971-avis:73458110"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Politiken, 1990-03-11"
          ],
          "title": [
            "Slaget om Sorte Hest. En lang, lang konflikt"
          ],
          "titleFull": [
            "Slaget om Sorte Hest. En lang, lang konflikt"
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
        "73458110|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Slaget om Sorte Hest. En lang, lang konflikt"
      ],
      "dcTitleFull": [
        "Slaget om Sorte Hest : En lang, lang konflikt"
      ],
      "dcCreator": [
        "Per Mikael Jensen"
      ],
      "creatorSort": [
        "Jensen, Per Mikael"
      ],
      "subjectDK5": [
        "71.637 Sorte Hest"
      ],
      "subject": [
        "BZ'ere",
        "Sorte Hest (boligkarre)"
      ],
      "subjectDK5Text": [
        "Enkelte københavnske lokaliteters arkitekturhistorie"
      ],
      "abstract": [
        "Sorte Hest, Vesterbro, København"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1990"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Politiken, 1990-03-11"
      ],
      "isPartOfISSN": [
        "0907-1814"
      ],
      "spatial": [
        "København arkitektur",
        "Vesterbro arkitektur"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Per Mikael Jensen"
      ],
      "pid": [
        "870971-avis:73458110"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Politiken, 1990-03-11"
      ],
      "title": [
        "Slaget om Sorte Hest. En lang, lang konflikt"
      ],
      "titleFull": [
        "Slaget om Sorte Hest. En lang, lang konflikt"
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
        "150043-atlas:8286"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "online"
          ],
          "pid": [
            "150043-atlas:8286"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Hest"
          ],
          "titleFull": [
            "Hest"
          ],
          "type": [
            "Netdokument"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "8286|150043"
      ],
      "identifierURI": [
        "http://historiskatlas.dk/Hest_(8286)"
      ],
      "acSource": [
        "Historisk Atlas"
      ],
      "dcTitle": [
        "Hest"
      ],
      "dcTitleFull": [
        "Hest"
      ],
      "subject": [
        "Kunst",
        "Skulpturer"
      ],
      "abstract": [
        "Agnete Ester Votborg Madsen (1923-1977)\nHest, u.å."
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "publisher": [
        "Historisk Atlas"
      ],
      "typeBibDKType": [
        "Netdokument"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "spatialCoordinates": [
        "10.427599112429400000000000000,55.366856304806300000000000000"
      ],
      "accessType": [
        "online"
      ],
      "pid": [
        "150043-atlas:8286"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Hest"
      ],
      "titleFull": [
        "Hest"
      ],
      "type": [
        "Netdokument"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "150033-dandyr:11942"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "online"
          ],
          "creator": [
            "danske-dyr.dk"
          ],
          "pid": [
            "150033-dandyr:11942"
          ],
          "language": [
            "Dansk"
          ],
          "title": [
            "Jysk hest"
          ],
          "titleFull": [
            "Jysk hest"
          ],
          "type": [
            "Netdokument"
          ],
          "workType": [
            "book"
          ]
        }
      ],
      "acIdentifier": [
        "11942|150033"
      ],
      "identifierURI": [
        "http://bibliotek.danske-dyr.dk/Sv%C3%A6r/dyr/Jysk%20hest/"
      ],
      "acSource": [
        "Danske Dyr"
      ],
      "dcTitle": [
        "Jysk hest"
      ],
      "dcTitleFull": [
        "Jysk hest"
      ],
      "alternative": [
        "Den jyske hest",
        "den jydske hest",
        "Jydsk hest",
        "jydske heste"
      ],
      "creatorCom": [
        "danske-dyr.dk"
      ],
      "creatorSort": [
        "danske-dyr.dk"
      ],
      "subject": [
        "Zoologi",
        "Biologi"
      ],
      "audience": [
        "børnematerialer"
      ],
      "publisher": [
        "ConDidact A/S"
      ],
      "date": [
        "2009"
      ],
      "typeBibDKType": [
        "Netdokument"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "languageISO6392": [
        "dan"
      ],
      "rights": [
        "Copyright © 2016 ConDidact A/S"
      ],
      "accessType": [
        "online"
      ],
      "creator": [
        "danske-dyr.dk"
      ],
      "pid": [
        "150033-dandyr:11942"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Jysk hest"
      ],
      "titleFull": [
        "Jysk hest"
      ],
      "type": [
        "Netdokument"
      ],
      "workType": [
        "book"
      ]
    },
    {
      "collection": [
        "870971-tsart:83321857"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Olav Rasmussen"
          ],
          "pid": [
            "870971-tsart:83321857"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Landsbladet Hest, 1996, nr. 4"
          ],
          "title": [
            "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
          ],
          "titleFull": [
            "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
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
        "83321857|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
      ],
      "dcTitleFull": [
        "Fare for indavl på længere sigt : Den jydske hest i positiv udvikling"
      ],
      "dcCreator": [
        "Olav Rasmussen"
      ],
      "creatorSort": [
        "Rasmussen, Olav"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "subjectDBCF": [
        "den jydske hest",
        "frederiksborgheste",
        "heste",
        "hesteavl",
        "indavl"
      ],
      "abstract": [
        "Frederiksborgheste og den jydske hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1996"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "format": [
        "illustreret"
      ],
      "extent": [
        "S. 16-18"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Landsbladet Hest, 1996, nr. 4"
      ],
      "isPartOfISSN": [
        "0906-6616"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Olav Rasmussen"
      ],
      "pid": [
        "870971-tsart:83321857"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Landsbladet Hest, 1996, nr. 4"
      ],
      "title": [
        "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
      ],
      "titleFull": [
        "Fare for indavl på længere sigt. Den jydske hest i positiv udvikling"
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
        "870971-avis:73336317"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870971-avis:73336317"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Jyllands-posten, 1989-11-19"
          ],
          "title": [
            "Højt til hest"
          ],
          "titleFull": [
            "Højt til hest"
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
        "73336317|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Højt til hest"
      ],
      "dcTitleFull": [
        "Højt til hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1989"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Jyllands-posten, 1989-11-19"
      ],
      "isPartOfISSN": [
        "0109-1182"
      ],
      "accessType": [
        "physical"
      ],
      "pid": [
        "870971-avis:73336317"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Jyllands-posten, 1989-11-19"
      ],
      "title": [
        "Højt til hest"
      ],
      "titleFull": [
        "Højt til hest"
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
        "870971-tsart:72922190"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "pid": [
            "870971-tsart:72922190"
          ],
          "language": [
            "Flere sprog"
          ],
          "partOf": [
            "Dansk veterinærtidsskrift, Årg. 71, nr. 10 (1988)"
          ],
          "title": [
            "Boltskydning af hest"
          ],
          "titleFull": [
            "Boltskydning af hest"
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
        "72922190|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Boltskydning af hest"
      ],
      "dcTitleFull": [
        "Boltskydning af hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1988"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 548"
      ],
      "languageISO6392": [
        "mul"
      ],
      "dcLanguage": [
        "Flere sprog"
      ],
      "isPartOf": [
        "Dansk veterinærtidsskrift, Årg. 71, nr. 10 (1988)"
      ],
      "isPartOfISSN": [
        "0106-6854"
      ],
      "accessType": [
        "physical"
      ],
      "pid": [
        "870971-tsart:72922190"
      ],
      "language": [
        "Flere sprog"
      ],
      "partOf": [
        "Dansk veterinærtidsskrift, Årg. 71, nr. 10 (1988)"
      ],
      "title": [
        "Boltskydning af hest"
      ],
      "titleFull": [
        "Boltskydning af hest"
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
        "870971-avis:73528070"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Niels Rohleder"
          ],
          "pid": [
            "870971-avis:73528070"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Information, 1990-05-17"
          ],
          "title": [
            "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
          ],
          "titleFull": [
            "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
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
        "73528070|870971"
      ],
      "acSource": [
        "Avisartikler"
      ],
      "dcTitle": [
        "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
      ],
      "dcTitleFull": [
        "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
      ],
      "dcCreator": [
        "Niels Rohleder"
      ],
      "creatorSort": [
        "Rohleder, Niels"
      ],
      "subjectDK5": [
        "71.637 Sorte Hest"
      ],
      "subject": [
        "Axel Juhl-Jørgensen",
        "Sorte Hest (boligkarre)"
      ],
      "subjectSort": [
        "Juhl-Jørgensen, Axel"
      ],
      "subjectDK5Text": [
        "Enkelte københavnske lokaliteters arkitekturhistorie"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1990"
      ],
      "typeBibDKType": [
        "Avisartikel"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Information, 1990-05-17"
      ],
      "isPartOfISSN": [
        "1602-2572"
      ],
      "spatial": [
        "København arkitektur",
        "Vesterbro arkitektur"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Niels Rohleder"
      ],
      "pid": [
        "870971-avis:73528070"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Information, 1990-05-17"
      ],
      "title": [
        "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
      ],
      "titleFull": [
        "Flertal støtter Juhl-Jørgensens ønskeseddel for Sorte Hest"
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
        "870971-tsart:73150272"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Anna Panum"
          ],
          "pid": [
            "870971-tsart:73150272"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Dyrene og os, Årg. 4, nr. 2 (1988)"
          ],
          "title": [
            "Bryggerhesten - elsket og beundret dansk entertainer"
          ],
          "titleFull": [
            "Bryggerhesten - elsket og beundret dansk entertainer"
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
        "73150272|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Bryggerhesten - elsket og beundret dansk entertainer"
      ],
      "dcTitleFull": [
        "Bryggerhesten - elsket og beundret dansk entertainer"
      ],
      "dcCreator": [
        "Anna Panum"
      ],
      "creatorSort": [
        "Panum, Anna"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "subject": [
        "bryggerheste",
        "hesteavl",
        "jysk hest"
      ],
      "abstract": [
        "Jysk hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1988"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
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
        "Dyrene og os, Årg. 4, nr. 2 (1988)"
      ],
      "isPartOfISSN": [
        "0902-3879"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Anna Panum"
      ],
      "pid": [
        "870971-tsart:73150272"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Dyrene og os, Årg. 4, nr. 2 (1988)"
      ],
      "title": [
        "Bryggerhesten - elsket og beundret dansk entertainer"
      ],
      "titleFull": [
        "Bryggerhesten - elsket og beundret dansk entertainer"
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
        "870971-tsart:72819683"
      ],
      "collectionDetails": [
        {
          "accessType": [
            "physical"
          ],
          "creator": [
            "Henning Rasmussen"
          ],
          "pid": [
            "870971-tsart:72819683"
          ],
          "language": [
            "Dansk"
          ],
          "partOf": [
            "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
          ],
          "title": [
            "Den jyske hest"
          ],
          "titleFull": [
            "Den jyske hest"
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
        "72819683|870971"
      ],
      "acSource": [
        "Tidsskriftsartikler"
      ],
      "dcTitle": [
        "Den jyske hest"
      ],
      "dcTitleFull": [
        "Den jyske hest"
      ],
      "dcCreator": [
        "Henning Rasmussen"
      ],
      "creatorSort": [
        "Rasmussen, Henning"
      ],
      "subjectDK5": [
        "63.61"
      ],
      "subjectDK5Text": [
        "Heste"
      ],
      "subject": [
        "heste",
        "hesteavl",
        "jysk hest"
      ],
      "audience": [
        "voksenmaterialer"
      ],
      "date": [
        "1988"
      ],
      "typeBibDKType": [
        "Tidsskriftsartikel"
      ],
      "extent": [
        "S. 24-28"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "isPartOf": [
        "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
      ],
      "isPartOfISSN": [
        "0018-201X"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Henning Rasmussen"
      ],
      "pid": [
        "870971-tsart:72819683"
      ],
      "language": [
        "Dansk"
      ],
      "partOf": [
        "Hippologisk tidsskrift, Årg. 100, nr. 3 (1988)"
      ],
      "title": [
        "Den jyske hest"
      ],
      "titleFull": [
        "Den jyske hest"
      ],
      "type": [
        "Tidsskriftsartikel"
      ],
      "workType": [
        "article"
      ]
    }
  ]
});
        done();
      });
  });
});
