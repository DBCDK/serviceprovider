/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: search {"q":"ost","fields":["pid","creator","coverUrlFull"],"limit":3}

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.6/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/2.7.1/","TESTopenorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.4.1/","rank":"https://xptest.dbc.dk/ms/rank/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject","recommendurls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"search":{"agency":"775100","profile":"opac","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"agency":"100451","id":"XXXXX","pin":"XXXXX","salt":"XXXXX"},"app":{"clientid":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101"}};
let provider = Provider();
let mockData = {"[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\" xmlns:ns1=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <ns1:searchRequest>\\n      <ns1:query>ost</ns1:query>\\n      <ns1:agency>775100</ns1:agency>\\n      <ns1:profile>opac</ns1:profile>\\n      <ns1:start>1</ns1:start>\\n      <ns1:stepValue>3</ns1:stepValue>\\n      \\n      <ns1:collectionType>work-1</ns1:collectionType>\\n      <ns1:allObjects>1</ns1:allObjects>\\n      <ns1:objectFormat>briefDisplay</ns1:objectFormat>\\n      <ns1:objectFormat>dkabm</ns1:objectFormat>\\n      <ns1:outputType>json</ns1:outputType>\\n    </ns1:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\\n\"]":"{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"153\"},\"collectionCount\":{\"$\":\"3\"},\"more\":{\"$\":\"true\"},\"searchResult\":[{\"collection\":{\"resultPosition\":{\"$\":\"1\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"27400337|870970\",\"@\":\"ac\"},{\"$\":\"9788799164516\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Spis dig sund - \\u00e6g, m\\u00e6lk, ost\",\"@\":\"dc\"},{\"$\":\"Spis dig sund - \\u00e6g, m\\u00e6lk, ost\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Spis dig sund - \\u00e6g, m\\u00e6lk & ost\",\"@\":\"dcterms\"},{\"$\":\"\\u00c6g m\\u00e6lk ost\",\"@\":\"dcterms\"},{\"$\":\"Spis dig sund - \\u00e6g, m\\u00e6lk og ost\",\"@\":\"dcterms\"}],\"subject\":[{\"$\":\"64.14\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Di\\u00e6tmadlavning\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"kogeb\\u00f8ger\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"m\\u00e6lk\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"opskrifter\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ost\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"slankeretter\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"\\u00e6g\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, [1. oplag] (2008)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"De Danske V\\u00e6gtkonsulenter\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Inge Kauffeldt\",\"@\":\"dc\"},{\"$\":\"Helle Kleist\",\"@\":\"dc\"},{\"$\":\"De Danske V\\u00e6gtkonsulenter\",\"@\":\"dc\"}],\"date\":[{\"$\":\"2008\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"123 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:27400337\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:27400337\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:27400337\"},{\"$\":\"870970-basis:27400337\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"830370-katalog:27400337\"},\"identifier\":{\"$\":\"775100-katalog:27400337\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Spis dig sund - \\u00e6g, m\\u00e6lk, ost\"},\"titleFull\":{\"$\":\"Spis dig sund - \\u00e6g, m\\u00e6lk, ost\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"2\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"29130612|870970\",\"@\":\"ac\"},{\"$\":\"9788799293643\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Bogen om ost\",\"@\":\"dc\"},{\"$\":\"Bogen om ost : mild moden mangfoldig : lav din egen ost\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.7\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Mejeribrug\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fremstilling\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"opskrifter\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ost\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ostefremstilling\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"audience\":[{\"$\":\"voksenmaterialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udgave, 1. oplag (2011)\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Niche\",\"@\":\"dc\"}],\"contributor\":[{\"$\":\"Kirsten Iversen\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Lone Hind\\u00f8\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Peer Kj\\u00e6r Andersen\",\"@type\":{\"$\":\"dkdcplus:dktek\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Vagn Juhl-Larsen\",\"@type\":{\"$\":\"dkdcplus:edt\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Gunnar Knuds\\u00f8\\u00f8 Jensen\",\"@type\":{\"$\":\"dkdcplus:ill\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"date\":[{\"$\":\"2011\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret i farver\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"135 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:29130612\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:29130612\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:29130612\"},{\"$\":\"870970-basis:29130612\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"fedoraPid\":{\"$\":\"830370-katalog:29130612\"},\"identifier\":{\"$\":\"775100-katalog:29130612\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Bogen om ost\"},\"titleFull\":{\"$\":\"Bogen om ost : mild moden mangfoldig : lav din egen ost\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}},{\"collection\":{\"resultPosition\":{\"$\":\"3\"},\"numberOfObjects\":{\"$\":\"1\"},\"object\":[{\"record\":{\"identifier\":[{\"$\":\"06468853|870970\",\"@\":\"ac\"},{\"$\":\"87-7545-199-9\",\"@type\":{\"$\":\"dkdcplus:ISBN\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"source\":[{\"$\":\"Bibliotekskatalog\",\"@\":\"ac\"}],\"title\":[{\"$\":\"Ost, sm\\u00f8r og surm\\u00e6lksprodukter til husbehov\",\"@\":\"dc\"},{\"$\":\"Ost, sm\\u00f8r og surm\\u00e6lksprodukter til husbehov\",\"@type\":{\"$\":\"dkdcplus:full\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Skarv's b\\u00f8ger om praktisk \\u00f8kologi\",\"@type\":{\"$\":\"dkdcplus:series\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"alternative\":[{\"$\":\"Ost m. m. til husbehov\",\"@\":\"dcterms\"}],\"creator\":[{\"$\":\"Ingrid Dam\",\"@type\":{\"$\":\"dkdcplus:aut\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dam, Ingrid\",\"@type\":{\"$\":\"oss:sort\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"subject\":[{\"$\":\"63.7\",\"@type\":{\"$\":\"dkdcplus:DK5\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Mejeribrug\",\"@type\":{\"$\":\"dkdcplus:DK5-Text\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"fremstilling\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"opskrifter\",\"@type\":{\"$\":\"dkdcplus:DBCO\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ost\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"ostefremstilling\",\"@type\":{\"$\":\"dkdcplus:DBCF\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"abstract\":[{\"$\":\"Om hjemmefremstilling af oste\",\"@\":\"dcterms\"}],\"description\":[{\"$\":\"Rygtitel: Ost m. m. til husbehov\",\"@\":\"dc\"}],\"audience\":[{\"$\":\"b\\u00f8rnematerialer\",\"@\":\"dcterms\"}],\"version\":[{\"$\":\"1. udg., 1. opl.\",\"@\":\"dkdcplus\"}],\"publisher\":[{\"$\":\"Skarv\",\"@\":\"dc\"},{\"$\":\"eksp. DBK\",\"@\":\"dc\"}],\"date\":[{\"$\":\"1986\",\"@\":\"dc\"}],\"type\":[{\"$\":\"Bog\",\"@type\":{\"$\":\"dkdcplus:BibDK-Type\",\"@\":\"xsi\"},\"@\":\"dc\"}],\"format\":[{\"$\":\"illustreret\",\"@\":\"dc\"}],\"extent\":[{\"$\":\"72 sider\",\"@\":\"dcterms\"}],\"language\":[{\"$\":\"dan\",\"@type\":{\"$\":\"dcterms:ISO639-2\",\"@\":\"xsi\"},\"@\":\"dc\"},{\"$\":\"Dansk\",\"@\":\"dc\"}],\"@\":\"dkabm\"},\"identifier\":{\"$\":\"775100-katalog:06468853\"},\"primaryObjectIdentifier\":{\"$\":\"870970-basis:06468853\"},\"recordStatus\":{\"$\":\"active\"},\"formatsAvailable\":{\"format\":[{\"$\":\"dkabm\"},{\"$\":\"marcxchange\"}]},\"objectsAvailable\":{\"identifier\":[{\"$\":\"775100-katalog:06468853\"},{\"$\":\"870970-basis:06468853\"}]}}]},\"formattedCollection\":{\"briefDisplay\":{\"manifestation\":[{\"accessType\":{\"$\":\"physical\"},\"creator\":{\"$\":\"Ingrid Dam\"},\"fedoraPid\":{\"$\":\"830190-katalog:8775451999\"},\"identifier\":{\"$\":\"775100-katalog:06468853\"},\"language\":{\"$\":\"Dansk\"},\"title\":{\"$\":\"Ost, sm\\u00f8r og surm\\u00e6lksprodukter til husbehov\"},\"titleFull\":{\"$\":\"Ost, sm\\u00f8r og surm\\u00e6lksprodukter til husbehov\"},\"type\":{\"$\":\"Bog\"},\"workType\":{\"$\":\"book\"}}]}}}],\"facetResult\":null,\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"6\"},\"fedoraRecordsRead\":{\"$\":\"18\"},\"time\":{\"$\":\"0.403755\"},\"trackingId\":{\"$\":\"2016-05-30T21:08:13:008425:28111\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}","[\"moreinfo\",{\"qs\":{\"action\":\"moreInfo\",\"authenticationUser\":\"XXXXX\",\"authenticationGroup\":\"XXXXX\",\"authenticationPassword\":\"XXXXX\",\"pidList\":\"775100-katalog:27400337|775100-katalog:29130612|775100-katalog:06468853\",\"outputType\":\"json\"}}]":"{\"moreInfoResponse\":{\"requestStatus\":{\"statusEnum\":{\"$\":\"ok\",\"@\":\"mi\"},\"errorText\":{\"$\":\"\",\"@\":\"mi\"},\"@\":\"mi\"},\"identifierInformation\":[{\"identifierKnown\":{\"$\":\"true\",\"@\":\"mi\"},\"identifier\":{\"pid\":{\"$\":\"775100-katalog:27400337\",\"@\":\"mi\"},\"@\":\"mi\"},\"coverImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=27400337&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=bd886ac561f304b7843b\",\"@imageSize\":{\"$\":\"detail_117\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=27400337&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=7dbb51cfc62843c10301\",\"@imageSize\":{\"$\":\"detail_207\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=27400337&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=9cc72c7b085acab31f47\",\"@imageSize\":{\"$\":\"detail_42\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=27400337&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=0ee1e4b5aafbbbb81758\",\"@imageSize\":{\"$\":\"detail_500\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=27400337&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=e1592b3fc99799c3ebc2\",\"@imageSize\":{\"$\":\"thumbnail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=27400337&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=c657537d238ab022b740\",\"@imageSize\":{\"$\":\"detail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"}],\"@\":\"mi\"},{\"identifierKnown\":{\"$\":\"true\",\"@\":\"mi\"},\"identifier\":{\"pid\":{\"$\":\"775100-katalog:29130612\",\"@\":\"mi\"},\"@\":\"mi\"},\"backImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=bagside_117&bibliotek=870970&source_id=870970&key=89907a47b28d7ac5a365\",\"@imageSize\":{\"$\":\"detail_117\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=bagside_207&bibliotek=870970&source_id=870970&key=f2c322fc3e99024d6a9d\",\"@imageSize\":{\"$\":\"detail_207\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=bagside_42&bibliotek=870970&source_id=870970&key=1d2a182cff161937c15f\",\"@imageSize\":{\"$\":\"detail_42\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=bagside_500&bibliotek=870970&source_id=870970&key=4824c7d30ecf6f05f29f\",\"@imageSize\":{\"$\":\"detail_500\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=bagside_lille&bibliotek=870970&source_id=870970&key=862dc7b9e109ce5b07c4\",\"@imageSize\":{\"$\":\"thumbnail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=bagside_stor&bibliotek=870970&source_id=870970&key=f4dfab9569c40e84150c\",\"@imageSize\":{\"$\":\"detail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"}],\"backPage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=bagside_pdf&bibliotek=870970&source_id=870970&key=11c716332cd918551ae0\",\"@\":\"mi\"}],\"coverImage\":[{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=forside_117&bibliotek=870970&source_id=870970&key=73b26bf7a1235462b198\",\"@imageSize\":{\"$\":\"detail_117\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=forside_207&bibliotek=870970&source_id=870970&key=2ac5f8f1101de4d76cfa\",\"@imageSize\":{\"$\":\"detail_207\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=forside_42&bibliotek=870970&source_id=870970&key=47152073d0763c44852c\",\"@imageSize\":{\"$\":\"detail_42\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=forside_500&bibliotek=870970&source_id=870970&key=e28589d0170b9edb39db\",\"@imageSize\":{\"$\":\"detail_500\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=forside_lille&bibliotek=870970&source_id=870970&key=8ca2ddb03fe671d80c1d\",\"@imageSize\":{\"$\":\"thumbnail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"},{\"$\":\"http:\\/\\/moreinfo.addi.dk\\/2.6\\/more_info_get.php?lokalid=29130612&attachment_type=forside_stor&bibliotek=870970&source_id=870970&key=42f09fc19dbc52301274\",\"@imageSize\":{\"$\":\"detail\",\"@\":\"mi\"},\"@imageFormat\":{\"$\":\"jpeg\",\"@\":\"mi\"},\"@\":\"mi\"}],\"@\":\"mi\"},{\"identifierKnown\":{\"$\":\"true\",\"@\":\"mi\"},\"identifier\":{\"pid\":{\"$\":\"775100-katalog:06468853\",\"@\":\"mi\"},\"@\":\"mi\"},\"@\":\"mi\"}],\"@\":\"mi\"},\"@namespaces\":{\"mi\":\"http:\\/\\/oss.dbc.dk\\/ns\\/moreinfo\"}}\n"};

describe('Automated test: search_coverUrl_limit', () => {
  it('expected response. ID:x1by5o, for {"q":"ost","fields":["pid","creator","coverUrlFull"],"limit":3}', (done) => {
    context.mockData = mockData;
    provider.execute('search', {"q":"ost","fields":["pid","creator","coverUrlFull"],"limit":3}, context)
      .then(result => {
        assert.deepEqual(result,
          {"statusCode":200,"data":[{"collection":["775100-katalog:27400337"],"collectionDetails":[{"accessType":["physical"],"pid":["775100-katalog:27400337"],"language":["Dansk"],"title":["Spis dig sund - æg, mælk, ost"],"titleFull":["Spis dig sund - æg, mælk, ost"],"type":["Bog"],"workType":["book"]}],"acIdentifier":["70912694|870971"],"acSource":["Tidsskriftsartikler"],"dcTitle":["Ost!"],"dcTitleFull":["Ost!"],"subjectDK5":["63.7"],"subjectDK5Text":["Mejeribrug"],"subject":["handel ost","ost","ostehandel"],"abstract":["Ostehandel"],"audience":["voksenmaterialer"],"date":["1982"],"typeBibDKType":["Tidsskriftsartikel"],"extent":["S. 25-30, 33-34, 36, 38-40, 42"],"languageISO6392":["dan"],"dcLanguage":["Dansk"],"isPartOf":["Frit købmandskab, 1982, nr. 1"],"isPartOfISSN":["0901-2745"],"accessType":["physical"],"pid":["870971-tsart:70912694"],"language":["Dansk"],"partOf":["Frit købmandskab, 1982, nr. 1"],"title":["Ost!"],"titleFull":["Ost!"],"type":["Tidsskriftsartikel"],"workType":["article"]},{"collection":["775100-katalog:29130612"],"collectionDetails":[{"accessType":["physical"],"pid":["775100-katalog:29130612"],"language":["Dansk"],"title":["Bogen om ost"],"titleFull":["Bogen om ost : mild moden mangfoldig : lav din egen ost"],"type":["Bog"],"workType":["book"]}],"acIdentifier":["35841458|870971"],"acSource":["Avisartikler"],"dcTitle":["Danskerne gider ikke mager ost : Ost er langt bedre end sit ry"],"dcTitleFull":["Danskerne gider ikke mager ost : Ost er langt bedre end sit ry"],"creatorAut":["Lars Dahlager"],"creatorSort":["Dahlager, Lars"],"subjectDK5":["63.7"],"subjectDK5Text":["Mejeribrug"],"subjectDBCF":["fedtfattig ost","mager ost","ost"],"abstract":["Blot hver syvende ost, der bliver solgt Danmark er af en mager type"],"audience":["voksenmaterialer"],"date":["2013"],"typeBibDKType":["Avisartikel"],"format":["illustreret"],"extent":["Sektion 4, s. 8-10"],"languageISO6392":["dan"],"dcLanguage":["Dansk"],"isPartOf":["Politiken, 2013-12-08"],"isPartOfISSN":["0907-1814"],"accessType":["online"],"creator":["Lars Dahlager"],"pid":["870971-avis:35841458"],"language":["Dansk"],"partOf":["Politiken, 2013-12-08"],"title":["Danskerne gider ikke mager ost : Ost er langt bedre end sit ry"],"titleFull":["Danskerne gider ikke mager ost. Ost er langt bedre end sit ry"],"type":["Avisartikel"],"workType":["article"]},{"collection":["775100-katalog:06468853"],"collectionDetails":[{"accessType":["physical"],"creator":["Ingrid Dam"],"pid":["775100-katalog:06468853"],"language":["Dansk"],"title":["Ost, smør og surmælksprodukter til husbehov"],"titleFull":["Ost, smør og surmælksprodukter til husbehov"],"type":["Bog"],"workType":["book"]}],"acIdentifier":["85743503|870971"],"acSource":["Avisartikler"],"dcTitle":["Økologisk ost som i gamle dage"],"dcTitleFull":["Økologisk ost som i gamle dage"],"dcCreator":["Dorrit Saietz"],"creatorSort":["Saietz, Dorrit"],"subjectDK5":["63.7"],"subjectDK5Text":["Mejeribrug"],"subjectDBCF":["ost","økologisk ost"],"abstract":["Smagstest af økologisk ost"],"audience":["voksenmaterialer"],"date":["2000"],"typeBibDKType":["Avisartikel"],"extent":["S. 14"],"languageISO6392":["dan"],"dcLanguage":["Dansk"],"isPartOf":["Aktuelt, 2000-09-25"],"isPartOfISSN":["1397-6354"],"accessType":["online"],"creator":["Dorrit Saietz"],"pid":["870971-avis:85743503"],"language":["Dansk"],"partOf":["Aktuelt, 2000-09-25"],"title":["Økologisk ost som i gamle dage"],"titleFull":["Økologisk ost som i gamle dage"],"type":["Avisartikel"],"workType":["article"]}]});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":[{"collection":["775100-katalog:27400337"],"collectionDetails":[{"accessType":["physical"],"pid":["775100-katalog:27400337"],"language":["Dansk"],"title":["Spis dig sund - æg, mælk, ost"],"titleFull":["Spis dig sund - æg, mælk, ost"],"type":["Bog"],"workType":["book"]}],"acIdentifier":["70912694|870971"],"acSource":["Tidsskriftsartikler"],"dcTitle":["Ost!"],"dcTitleFull":["Ost!"],"subjectDK5":["63.7"],"subjectDK5Text":["Mejeribrug"],"subject":["handel ost","ost","ostehandel"],"abstract":["Ostehandel"],"audience":["voksenmaterialer"],"date":["1982"],"typeBibDKType":["Tidsskriftsartikel"],"extent":["S. 25-30, 33-34, 36, 38-40, 42"],"languageISO6392":["dan"],"dcLanguage":["Dansk"],"isPartOf":["Frit købmandskab, 1982, nr. 1"],"isPartOfISSN":["0901-2745"],"accessType":["physical"],"pid":["870971-tsart:70912694"],"language":["Dansk"],"partOf":["Frit købmandskab, 1982, nr. 1"],"title":["Ost!"],"titleFull":["Ost!"],"type":["Tidsskriftsartikel"],"workType":["article"]},{"collection":["775100-katalog:29130612"],"collectionDetails":[{"accessType":["physical"],"pid":["775100-katalog:29130612"],"language":["Dansk"],"title":["Bogen om ost"],"titleFull":["Bogen om ost : mild moden mangfoldig : lav din egen ost"],"type":["Bog"],"workType":["book"]}],"acIdentifier":["35841458|870971"],"acSource":["Avisartikler"],"dcTitle":["Danskerne gider ikke mager ost : Ost er langt bedre end sit ry"],"dcTitleFull":["Danskerne gider ikke mager ost : Ost er langt bedre end sit ry"],"creatorAut":["Lars Dahlager"],"creatorSort":["Dahlager, Lars"],"subjectDK5":["63.7"],"subjectDK5Text":["Mejeribrug"],"subjectDBCF":["fedtfattig ost","mager ost","ost"],"abstract":["Blot hver syvende ost, der bliver solgt Danmark er af en mager type"],"audience":["voksenmaterialer"],"date":["2013"],"typeBibDKType":["Avisartikel"],"format":["illustreret"],"extent":["Sektion 4, s. 8-10"],"languageISO6392":["dan"],"dcLanguage":["Dansk"],"isPartOf":["Politiken, 2013-12-08"],"isPartOfISSN":["0907-1814"],"accessType":["online"],"creator":["Lars Dahlager"],"pid":["870971-avis:35841458"],"language":["Dansk"],"partOf":["Politiken, 2013-12-08"],"title":["Danskerne gider ikke mager ost : Ost er langt bedre end sit ry"],"titleFull":["Danskerne gider ikke mager ost. Ost er langt bedre end sit ry"],"type":["Avisartikel"],"workType":["article"]},{"collection":["775100-katalog:06468853"],"collectionDetails":[{"accessType":["physical"],"creator":["Ingrid Dam"],"pid":["775100-katalog:06468853"],"language":["Dansk"],"title":["Ost, smør og surmælksprodukter til husbehov"],"titleFull":["Ost, smør og surmælksprodukter til husbehov"],"type":["Bog"],"workType":["book"]}],"acIdentifier":["85743503|870971"],"acSource":["Avisartikler"],"dcTitle":["Økologisk ost som i gamle dage"],"dcTitleFull":["Økologisk ost som i gamle dage"],"dcCreator":["Dorrit Saietz"],"creatorSort":["Saietz, Dorrit"],"subjectDK5":["63.7"],"subjectDK5Text":["Mejeribrug"],"subjectDBCF":["ost","økologisk ost"],"abstract":["Smagstest af økologisk ost"],"audience":["voksenmaterialer"],"date":["2000"],"typeBibDKType":["Avisartikel"],"extent":["S. 14"],"languageISO6392":["dan"],"dcLanguage":["Dansk"],"isPartOf":["Aktuelt, 2000-09-25"],"isPartOfISSN":["1397-6354"],"accessType":["online"],"creator":["Dorrit Saietz"],"pid":["870971-avis:85743503"],"language":["Dansk"],"partOf":["Aktuelt, 2000-09-25"],"title":["Økologisk ost som i gamle dage"],"titleFull":["Økologisk ost som i gamle dage"],"type":["Avisartikel"],"workType":["article"]}]});
        done();
      });
  });
});
