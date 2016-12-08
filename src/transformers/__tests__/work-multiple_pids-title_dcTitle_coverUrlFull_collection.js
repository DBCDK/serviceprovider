/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: work {"fields":["title","dcTitle","coverUrlFull","collection"],"pids":["775100-katalog:42946400","870970-basis:28448716"]}

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
  "[\"moreinfo\",{\"qs\":{\"action\":\"moreInfo\",\"authenticationUser\":\"XXXXX\",\"authenticationGroup\":\"XXXXX\",\"authenticationPassword\":\"XXXXX\",\"pidList\":\"775100-katalog:42946400|870970-basis:28448716\",\"outputType\":\"json\"}}]": "{\"moreInfoResponse\":{\"requestStatus\":{\"statusEnum\":{\"$\":\"ok\",\"@\":\"mi\"},\"errorText\":{\"$\":\"\",\"@\":\"mi\"},\"@\":\"mi\"},\"identifierInformation\":[{\"identifierKnown\":{\"$\":\"true\",\"@\":\"mi\"},\"identifier\":{\"pid\":{\"$\":\"775100-katalog:42946400\",\"@\":\"mi\"},\"@\":\"mi\"},\"@\":\"mi\"},{\"identifierKnown\":{\"$\":\"true\",\"@\":\"mi\"},\"identifier\":{\"pid\":{\"$\":\"870970-basis:28448716\",\"@\":\"mi\"},\"@\":\"mi\"},\"backImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=5d1f6ee2bf32672d8d93\",\"@imageSize\":{\"$\":\"detail_117\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=90e51eafe54eeafd7ec4\",\"@imageSize\":{\"$\":\"detail_207\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=7769c5a02321646b2199\",\"@imageSize\":{\"$\":\"detail_42\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=64a788af50b469c6649d\",\"@imageSize\":{\"$\":\"detail_500\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=e71e7794eec119cd1853\",\"@imageSize\":{\"$\":\"thumbnail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=bb7533c6bff4f6d1a805\",\"@imageSize\":{\"$\":\"detail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"}],\"backPage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=9718f1f0ff9ea4abd764\",\"@\":\"mi\"}],\"coverImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=52b1f9008c9a48025539\",\"@imageSize\":{\"$\":\"detail_117\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=49e76203f58067543dc0\",\"@imageSize\":{\"$\":\"detail_207\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=de53c47296fe14486bfe\",\"@imageSize\":{\"$\":\"detail_42\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=4b14292ba2eefa47a153\",\"@imageSize\":{\"$\":\"detail_500\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=8ec5fbf733882b874ae7\",\"@imageSize\":{\"$\":\"thumbnail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=9903214ba068f866c285\",\"@imageSize\":{\"$\":\"detail\"},\"@imageFormat\":{\"$\":\"jpeg\"},\"@\":\"mi\"}],\"@\":\"mi\"}],\"@\":\"mi\"},\"@namespaces\":{\"mi\":\"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo\"}}\n",
  "[\"opensearch\",{\"qs\":{\"action\":\"getObject\",\"identifier\":[\"775100-katalog:42946400\",\"870970-basis:28448716\"],\"agency\":\"775100\",\"profile\":\"opac\",\"outputType\":\"json\",\"objectFormat\":[\"briefDisplay\",\"dkabm\"]}}]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"2\"},\"collectionCount\":{\"$\":\"2\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"42946400|870970\",\"@\":\"ac\"},{\"$\":\"0-596-00048-0\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"JavaScript\",\"@\":\"dc\"},{\"$\":\"JavaScript : the definitive guide\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"David Flanagan\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Flanagan, David\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"19.6532 JavaScript\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Enkelte programmeringssprog\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"JavaScript\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"programmering\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"programmeringssprog\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"websider\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"P\\u00e5 omslaget: Activate your web pages\",\"@\":\"dc\"},{\"$\":\"P\\u00e5 ryggen: Covers JavaScript 1.5\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"4. edition\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"O'Reilly\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2002\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"xvii, 916 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"eng\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Engelsk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:42946400\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:42946400\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:42946400\"},{\"$\":\"870970-basis:42946400\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"David Flanagan\"},\"fedoraPid\":{\"$\":\"870970-basis:42946400\"},\"identifier\":{\"$\":\"775100-katalog:42946400\"},\"language\":{\"$\":\"Engelsk\"},\"title\":{\"$\":\"JavaScript\"},\"titleFull\":{\"$\":\"JavaScript : the definitive guide\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"2\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"28448716|870970\",\"@\":\"ac\"},{\"$\":\"9788758808994\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Kadavermarch\",\"@\":\"dc\"},{\"$\":\"Kadavermarch\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Dennis J\\u00fcrgensen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"J\\u00fcrgensen, Dennis\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 13 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 14 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 15 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 16 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:genre\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"splatter\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"zombier\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\\"Isslottet\\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"3. udgave\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Tellerup.dk\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2010\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"379 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"870970-basis:28448716\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:28448716\"},\"recordStatus\":{\"$\":\"active\"},\"creationDate\":{\"$\":\"2010-09-28\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:28448716\"},{\"$\":\"870970-basis:28448716\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"870970-basis:28448716\"},\"identifier\":{\"$\":\"870970-basis:28448716\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}}],\"facetResult\":{\"$\":\"\"},\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"7\"},\"fedoraRecordsRead\":{\"$\":\"5\"},\"time\":{\"$\":\"0.09025\"},\"trackingId\":{\"$\":\"2016-12-08T15:15:58:983954:21899\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=775100-katalog:42946400</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"1\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"42946400|870970\",\"@\":\"ac\"},{\"$\":\"0-596-00048-0\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"JavaScript\",\"@\":\"dc\"},{\"$\":\"JavaScript : the definitive guide\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"David Flanagan\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Flanagan, David\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"19.6532 JavaScript\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Enkelte programmeringssprog\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"JavaScript\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"programmering\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"programmeringssprog\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"websider\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"P\\u00e5 omslaget: Activate your web pages\",\"@\":\"dc\"},{\"$\":\"P\\u00e5 ryggen: Covers JavaScript 1.5\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"4. edition\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"O'Reilly\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2002\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"xvii, 916 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"eng\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Engelsk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:42946400\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:42946400\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:42946400\"},{\"$\":\"870970-basis:42946400\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"David Flanagan\"},\"fedoraPid\":{\"$\":\"870970-basis:42946400\"},\"identifier\":{\"$\":\"775100-katalog:42946400\"},\"language\":{\"$\":\"Engelsk\"},\"title\":{\"$\":\"JavaScript\"},\"titleFull\":{\"$\":\"JavaScript : the definitive guide\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"5\"},\"fedoraRecordsRead\":{\"$\":\"1\"},\"time\":{\"$\":\"0.138049\"},\"trackingId\":{\"$\":\"2016-12-08T15:15:58:984138:24588\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=775100-katalog:42946400</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"1\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"42946400|870970\",\"@\":\"ac\"},{\"$\":\"0-596-00048-0\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"JavaScript\",\"@\":\"dc\"},{\"$\":\"JavaScript : the definitive guide\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"David Flanagan\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Flanagan, David\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"19.6532 JavaScript\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Enkelte programmeringssprog\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"JavaScript\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"programmering\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"programmeringssprog\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"websider\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"description\":[{\"$\":\"P\\u00e5 omslaget: Activate your web pages\",\"@\":\"dc\"},{\"$\":\"P\\u00e5 ryggen: Covers JavaScript 1.5\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"4. edition\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"O'Reilly\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2002\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"xvii, 916 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"eng\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Engelsk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:42946400\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:42946400\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:42946400\"},{\"$\":\"870970-basis:42946400\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"David Flanagan\"},\"fedoraPid\":{\"$\":\"870970-basis:42946400\"},\"identifier\":{\"$\":\"775100-katalog:42946400\"},\"language\":{\"$\":\"Engelsk\"},\"title\":{\"$\":\"JavaScript\"},\"titleFull\":{\"$\":\"JavaScript : the definitive guide\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"2\"},\"fedoraRecordsRead\":{\"$\":\"6\"},\"time\":{\"$\":\"0.184748\"},\"trackingId\":{\"$\":\"2016-12-08T15:15:58:989632:30385\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=870970-basis:28448716</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>0</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"1\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"28448716|870970\",\"@\":\"ac\"},{\"$\":\"9788758808994\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Kadavermarch\",\"@\":\"dc\"},{\"$\":\"Kadavermarch\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Dennis J\\u00fcrgensen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"J\\u00fcrgensen, Dennis\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 13-16 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:genre\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"splatter\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"zombier\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\\"Isslottet\\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"fra 13 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:age\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"3. udgave, 1. oplag (2010)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Tellerup.dk\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2010\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"379 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:28448716\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:28448716\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:28448716\"},{\"$\":\"870970-basis:28448716\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"870970-basis:28448716\"},\"identifier\":{\"$\":\"775100-katalog:28448716\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"6\"},\"fedoraRecordsRead\":{\"$\":\"0\"},\"time\":{\"$\":\"0.189392\"},\"trackingId\":{\"$\":\"2016-12-08T15:15:58:984775:28943\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}",
  "[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>rec.id=870970-basis:28448716</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>1</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]": "{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"1\"},\"collectionCount\":{\"$\":\"1\"},\"more\":{\"$\":\"false\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"6\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"28448716|870970\",\"@\":\"ac\"},{\"$\":\"9788758808994\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Kadavermarch\",\"@\":\"dc\"},{\"$\":\"Kadavermarch\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"creator\":[{\"$\":\"Dennis J\\u00fcrgensen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"J\\u00fcrgensen, Dennis\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"Sk\\u00f8nlitteratur\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"for 13-16 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:DBCN\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"gys\",\"@type\":{\"$\":\"dkdcplus:genre\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"sk\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"splatter\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"zombier\",\"@type\":{\"$\":\"dkdcplus:DBCS\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Rundt om p\\u00e5 jorden genopst\\u00e5r de d\\u00f8de som k\\u00f8d\\u00e6dende zombier pga. gensplejsnings-eksperimenter. Bagm\\u00e6ndene - en lille gruppe internationale velhavere - har forskanset sig p\\u00e5 \\\"Isslottet\\\" i det nordvestlige Sj\\u00e6lland. Da fattigr\\u00f8vene opdager det, starter en blodig kamp for overlevelse\",\"@\":\"dcterms\"}],\"audience\":[{\"$\":\"fra 13 \\u00e5r\",\"@type\":{\"$\":\"dkdcplus:age\",\"@\":\"xsi\"},\"@\":\"dcterms\"},{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"3. udgave, 1. oplag (2010)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Tellerup.dk\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2010\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"extent\":[{\"$\":\"379 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:28448716\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:28448716\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:28448716\"},{\"$\":\"870970-basis:28448716\"}]}},{\"identifier\":{\"$\":\"775100-katalog:24340627\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:07286406\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:29302049\"},\"creationDate\":{\"$\":\"2012-04-26\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"775100-katalog:24793591\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}},{\"identifier\":{\"$\":\"870970-basis:27502563\"},\"creationDate\":{\"$\":\"2008-11-11\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"810015-katalog:008052928\"},\"identifier\":{\"$\":\"775100-katalog:28448716\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"810015-katalog:002467325\"},\"identifier\":{\"$\":\"775100-katalog:24340627\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"810010-katalog:000615413\"},\"identifier\":{\"$\":\"775100-katalog:07286406\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"870970-basis:29302049\"},\"identifier\":{\"$\":\"870970-basis:29302049\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Ebog\"},\"workType\":{\"$\":\"book\"}},{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"870970-basis:24793591\"},\"identifier\":{\"$\":\"775100-katalog:24793591\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Lydbog (cd)\"},\"workType\":{\"$\":\"audiobook\"}},{\"accessType\":{\"$\":\"online\"},\"creator\":{\"$\":\"Dennis J\\u00fcrgensen\"},\"fedoraPid\":{\"$\":\"870970-basis:27502563\"},\"identifier\":{\"$\":\"870970-basis:27502563\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Kadavermarch\"},\"titleFull\":{\"$\":\"Kadavermarch\"},\"type\":{\"$\":\"Lydbog (net)\"},\"workType\":{\"$\":\"audiobook\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"10\"},\"fedoraRecordsRead\":{\"$\":\"28\"},\"time\":{\"$\":\"0.418129\"},\"trackingId\":{\"$\":\"2016-12-08T15:15:58:983984:20488\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}"
};

describe('Automated test: __work-multiple_pids-title_dcTitle_coverUrlFull_collection', () => {
  it('expected response. ID:jpxnze, for {"fields":["title","dcTitle","coverUrlFull","collection"],"pids":["775100-katalog:42946400","870970-basis:28448716"]}', (done) => {
    context.mockData = mockData;
    provider.execute('work', {
      "fields": ["title", "dcTitle", "coverUrlFull", "collection"],
      "pids": ["775100-katalog:42946400", "870970-basis:28448716"]
    }, context)
      .then(result => {
        assert.deepEqual(result,
          {
            "statusCode": 200,
            "data": [
              {
                "acIdentifier": [
                  "42946400|870970"
                ],
                "identifierISBN": [
                  "0-596-00048-0"
                ],
                "acSource": [
                  "Bibliotekskatalog"
                ],
                "dcTitle": [
                  "JavaScript"
                ],
                "dcTitleFull": [
                  "JavaScript : the definitive guide"
                ],
                "creatorAut": [
                  "David Flanagan"
                ],
                "creatorSort": [
                  "Flanagan, David"
                ],
                "subjectDK5": [
                  "19.6532 JavaScript"
                ],
                "subjectDK5Text": [
                  "Enkelte programmeringssprog"
                ],
                "subjectDBCF": [
                  "JavaScript",
                  "programmering",
                  "programmeringssprog",
                  "websider"
                ],
                "description": [
                  "På omslaget: Activate your web pages",
                  "På ryggen: Covers JavaScript 1.5"
                ],
                "audience": [
                  "voksenmaterialer"
                ],
                "version": [
                  "4. edition"
                ],
                "publisher": [
                  "O'Reilly"
                ],
                "date": [
                  "2002"
                ],
                "typeBibDKType": [
                  "Bog"
                ],
                "extent": [
                  "xvii, 916 sider"
                ],
                "languageISO6392": [
                  "eng"
                ],
                "dcLanguage": [
                  "Engelsk"
                ],
                "accessType": [
                  "physical"
                ],
                "creator": [
                  "David Flanagan"
                ],
                "fedoraPid": [
                  "870970-basis:42946400"
                ],
                "pid": [
                  "775100-katalog:42946400"
                ],
                "language": [
                  "Engelsk"
                ],
                "title": [
                  "JavaScript"
                ],
                "titleFull": [
                  "JavaScript : the definitive guide"
                ],
                "type": [
                  "Bog"
                ],
                "workType": [
                  "book"
                ],
                "collection": [
                  "775100-katalog:42946400"
                ],
                "collectionDetails": [
                  {
                    "accessType": [
                      "physical"
                    ],
                    "creator": [
                      "David Flanagan"
                    ],
                    "pid": [
                      "775100-katalog:42946400"
                    ],
                    "language": [
                      "Engelsk"
                    ],
                    "title": [
                      "JavaScript"
                    ],
                    "titleFull": [
                      "JavaScript : the definitive guide"
                    ],
                    "type": [
                      "Bog"
                    ],
                    "workType": [
                      "book"
                    ]
                  }
                ]
              },
              {
                "coverUrl117": [
                  "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=52b1f9008c9a48025539"
                ],
                "coverUrl207": [
                  "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=49e76203f58067543dc0"
                ],
                "coverUrl42": [
                  "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=de53c47296fe14486bfe"
                ],
                "coverUrl500": [
                  "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=4b14292ba2eefa47a153"
                ],
                "coverUrlThumbnail": [
                  "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=8ec5fbf733882b874ae7"
                ],
                "coverUrlFull": [
                  "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=9903214ba068f866c285"
                ],
                "acIdentifier": [
                  "28448716|870970"
                ],
                "identifierISBN": [
                  "9788758808994"
                ],
                "acSource": [
                  "Bibliotekskatalog"
                ],
                "dcTitle": [
                  "Kadavermarch"
                ],
                "dcTitleFull": [
                  "Kadavermarch"
                ],
                "creatorAut": [
                  "Dennis Jürgensen"
                ],
                "creatorSort": [
                  "Jürgensen, Dennis"
                ],
                "subjectDK5Text": [
                  "Skønlitteratur"
                ],
                "subjectDBCN": [
                  "for 13 år",
                  "for 14 år",
                  "for 15 år",
                  "for 16 år"
                ],
                "subjectDBCS": [
                  "gys",
                  "splatter",
                  "zombier"
                ],
                "subjectGenre": [
                  "gys"
                ],
                "subjectDK5": [
                  "sk"
                ],
                "abstract": [
                  "Rundt om på jorden genopstår de døde som kødædende zombier pga. gensplejsnings-eksperimenter. Bagmændene - en lille gruppe internationale velhavere - har forskanset sig på \"Isslottet\" i det nordvestlige Sjælland. Da fattigrøvene opdager det, starter en blodig kamp for overlevelse"
                ],
                "audience": [
                  "børnematerialer"
                ],
                "version": [
                  "3. udgave"
                ],
                "publisher": [
                  "Tellerup.dk"
                ],
                "date": [
                  "2010"
                ],
                "typeBibDKType": [
                  "Bog"
                ],
                "extent": [
                  "379 sider"
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
                  "Dennis Jürgensen"
                ],
                "fedoraPid": [
                  "870970-basis:28448716"
                ],
                "pid": [
                  "870970-basis:28448716"
                ],
                "language": [
                  "Dansk"
                ],
                "title": [
                  "Kadavermarch"
                ],
                "titleFull": [
                  "Kadavermarch"
                ],
                "type": [
                  "Bog"
                ],
                "workType": [
                  "book"
                ],
                "collection": [
                  "775100-katalog:28448716",
                  "775100-katalog:24340627",
                  "775100-katalog:07286406",
                  "870970-basis:29302049",
                  "775100-katalog:24793591",
                  "870970-basis:27502563"
                ],
                "collectionDetails": [
                  {
                    "accessType": [
                      "physical"
                    ],
                    "creator": [
                      "Dennis Jürgensen"
                    ],
                    "pid": [
                      "775100-katalog:28448716"
                    ],
                    "language": [
                      "Dansk"
                    ],
                    "title": [
                      "Kadavermarch"
                    ],
                    "titleFull": [
                      "Kadavermarch"
                    ],
                    "type": [
                      "Bog"
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
                      "Dennis Jürgensen"
                    ],
                    "pid": [
                      "775100-katalog:24340627"
                    ],
                    "language": [
                      "Dansk"
                    ],
                    "title": [
                      "Kadavermarch"
                    ],
                    "titleFull": [
                      "Kadavermarch"
                    ],
                    "type": [
                      "Bog"
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
                      "Dennis Jürgensen"
                    ],
                    "pid": [
                      "775100-katalog:07286406"
                    ],
                    "language": [
                      "Dansk"
                    ],
                    "title": [
                      "Kadavermarch"
                    ],
                    "titleFull": [
                      "Kadavermarch"
                    ],
                    "type": [
                      "Bog"
                    ],
                    "workType": [
                      "book"
                    ]
                  },
                  {
                    "accessType": [
                      "online"
                    ],
                    "creator": [
                      "Dennis Jürgensen"
                    ],
                    "pid": [
                      "870970-basis:29302049"
                    ],
                    "language": [
                      "Dansk"
                    ],
                    "title": [
                      "Kadavermarch"
                    ],
                    "titleFull": [
                      "Kadavermarch"
                    ],
                    "type": [
                      "Ebog"
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
                      "Dennis Jürgensen"
                    ],
                    "pid": [
                      "775100-katalog:24793591"
                    ],
                    "language": [
                      "Dansk"
                    ],
                    "title": [
                      "Kadavermarch"
                    ],
                    "titleFull": [
                      "Kadavermarch"
                    ],
                    "type": [
                      "Lydbog (cd)"
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
                      "Dennis Jürgensen"
                    ],
                    "pid": [
                      "870970-basis:27502563"
                    ],
                    "language": [
                      "Dansk"
                    ],
                    "title": [
                      "Kadavermarch"
                    ],
                    "titleFull": [
                      "Kadavermarch"
                    ],
                    "type": [
                      "Lydbog (net)"
                    ],
                    "workType": [
                      "audiobook"
                    ]
                  }
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
              "acIdentifier": [
                "42946400|870970"
              ],
              "identifierISBN": [
                "0-596-00048-0"
              ],
              "acSource": [
                "Bibliotekskatalog"
              ],
              "dcTitle": [
                "JavaScript"
              ],
              "dcTitleFull": [
                "JavaScript : the definitive guide"
              ],
              "creatorAut": [
                "David Flanagan"
              ],
              "creatorSort": [
                "Flanagan, David"
              ],
              "subjectDK5": [
                "19.6532 JavaScript"
              ],
              "subjectDK5Text": [
                "Enkelte programmeringssprog"
              ],
              "subjectDBCF": [
                "JavaScript",
                "programmering",
                "programmeringssprog",
                "websider"
              ],
              "description": [
                "På omslaget: Activate your web pages",
                "På ryggen: Covers JavaScript 1.5"
              ],
              "audience": [
                "voksenmaterialer"
              ],
              "version": [
                "4. edition"
              ],
              "publisher": [
                "O'Reilly"
              ],
              "date": [
                "2002"
              ],
              "typeBibDKType": [
                "Bog"
              ],
              "extent": [
                "xvii, 916 sider"
              ],
              "languageISO6392": [
                "eng"
              ],
              "dcLanguage": [
                "Engelsk"
              ],
              "accessType": [
                "physical"
              ],
              "creator": [
                "David Flanagan"
              ],
              "fedoraPid": [
                "870970-basis:42946400"
              ],
              "pid": [
                "775100-katalog:42946400"
              ],
              "language": [
                "Engelsk"
              ],
              "title": [
                "JavaScript"
              ],
              "titleFull": [
                "JavaScript : the definitive guide"
              ],
              "type": [
                "Bog"
              ],
              "workType": [
                "book"
              ],
              "collection": [
                "775100-katalog:42946400"
              ],
              "collectionDetails": [
                {
                  "accessType": [
                    "physical"
                  ],
                  "creator": [
                    "David Flanagan"
                  ],
                  "pid": [
                    "775100-katalog:42946400"
                  ],
                  "language": [
                    "Engelsk"
                  ],
                  "title": [
                    "JavaScript"
                  ],
                  "titleFull": [
                    "JavaScript : the definitive guide"
                  ],
                  "type": [
                    "Bog"
                  ],
                  "workType": [
                    "book"
                  ]
                }
              ]
            },
            {
              "coverUrl117": [
                "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=52b1f9008c9a48025539"
              ],
              "coverUrl207": [
                "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=49e76203f58067543dc0"
              ],
              "coverUrl42": [
                "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=de53c47296fe14486bfe"
              ],
              "coverUrl500": [
                "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=4b14292ba2eefa47a153"
              ],
              "coverUrlThumbnail": [
                "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=8ec5fbf733882b874ae7"
              ],
              "coverUrlFull": [
                "//moreinfo.addi.dk/2.6/more_info_get.php?lokalid=28448716&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=9903214ba068f866c285"
              ],
              "acIdentifier": [
                "28448716|870970"
              ],
              "identifierISBN": [
                "9788758808994"
              ],
              "acSource": [
                "Bibliotekskatalog"
              ],
              "dcTitle": [
                "Kadavermarch"
              ],
              "dcTitleFull": [
                "Kadavermarch"
              ],
              "creatorAut": [
                "Dennis Jürgensen"
              ],
              "creatorSort": [
                "Jürgensen, Dennis"
              ],
              "subjectDK5Text": [
                "Skønlitteratur"
              ],
              "subjectDBCN": [
                "for 13 år",
                "for 14 år",
                "for 15 år",
                "for 16 år"
              ],
              "subjectDBCS": [
                "gys",
                "splatter",
                "zombier"
              ],
              "subjectGenre": [
                "gys"
              ],
              "subjectDK5": [
                "sk"
              ],
              "abstract": [
                "Rundt om på jorden genopstår de døde som kødædende zombier pga. gensplejsnings-eksperimenter. Bagmændene - en lille gruppe internationale velhavere - har forskanset sig på \"Isslottet\" i det nordvestlige Sjælland. Da fattigrøvene opdager det, starter en blodig kamp for overlevelse"
              ],
              "audience": [
                "børnematerialer"
              ],
              "version": [
                "3. udgave"
              ],
              "publisher": [
                "Tellerup.dk"
              ],
              "date": [
                "2010"
              ],
              "typeBibDKType": [
                "Bog"
              ],
              "extent": [
                "379 sider"
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
                "Dennis Jürgensen"
              ],
              "fedoraPid": [
                "870970-basis:28448716"
              ],
              "pid": [
                "870970-basis:28448716"
              ],
              "language": [
                "Dansk"
              ],
              "title": [
                "Kadavermarch"
              ],
              "titleFull": [
                "Kadavermarch"
              ],
              "type": [
                "Bog"
              ],
              "workType": [
                "book"
              ],
              "collection": [
                "775100-katalog:28448716",
                "775100-katalog:24340627",
                "775100-katalog:07286406",
                "870970-basis:29302049",
                "775100-katalog:24793591",
                "870970-basis:27502563"
              ],
              "collectionDetails": [
                {
                  "accessType": [
                    "physical"
                  ],
                  "creator": [
                    "Dennis Jürgensen"
                  ],
                  "pid": [
                    "775100-katalog:28448716"
                  ],
                  "language": [
                    "Dansk"
                  ],
                  "title": [
                    "Kadavermarch"
                  ],
                  "titleFull": [
                    "Kadavermarch"
                  ],
                  "type": [
                    "Bog"
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
                    "Dennis Jürgensen"
                  ],
                  "pid": [
                    "775100-katalog:24340627"
                  ],
                  "language": [
                    "Dansk"
                  ],
                  "title": [
                    "Kadavermarch"
                  ],
                  "titleFull": [
                    "Kadavermarch"
                  ],
                  "type": [
                    "Bog"
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
                    "Dennis Jürgensen"
                  ],
                  "pid": [
                    "775100-katalog:07286406"
                  ],
                  "language": [
                    "Dansk"
                  ],
                  "title": [
                    "Kadavermarch"
                  ],
                  "titleFull": [
                    "Kadavermarch"
                  ],
                  "type": [
                    "Bog"
                  ],
                  "workType": [
                    "book"
                  ]
                },
                {
                  "accessType": [
                    "online"
                  ],
                  "creator": [
                    "Dennis Jürgensen"
                  ],
                  "pid": [
                    "870970-basis:29302049"
                  ],
                  "language": [
                    "Dansk"
                  ],
                  "title": [
                    "Kadavermarch"
                  ],
                  "titleFull": [
                    "Kadavermarch"
                  ],
                  "type": [
                    "Ebog"
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
                    "Dennis Jürgensen"
                  ],
                  "pid": [
                    "775100-katalog:24793591"
                  ],
                  "language": [
                    "Dansk"
                  ],
                  "title": [
                    "Kadavermarch"
                  ],
                  "titleFull": [
                    "Kadavermarch"
                  ],
                  "type": [
                    "Lydbog (cd)"
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
                    "Dennis Jürgensen"
                  ],
                  "pid": [
                    "870970-basis:27502563"
                  ],
                  "language": [
                    "Dansk"
                  ],
                  "title": [
                    "Kadavermarch"
                  ],
                  "titleFull": [
                    "Kadavermarch"
                  ],
                  "type": [
                    "Lydbog (net)"
                  ],
                  "workType": [
                    "audiobook"
                  ]
                }
              ]
            }
          ]
        });
        done();
      });
  });
});
