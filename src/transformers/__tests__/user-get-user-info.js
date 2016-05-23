/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: user {"pretty":true}
'use strict';
import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let provider = Provider();
let mockData = {"[\"userstatus\",{\"qs\":{\"agencyId\":\"DK-100451\",\"userId\":\"XXXXX\",\"userPincode\":\"XXXXX\",\"authentication.groupIdAut\":\"XXXXX\",\"authentication.passwordAut\":\"XXXXX\",\"authentication.userIdAut\":\"XXXXX\",\"action\":\"getUserStatus\",\"outputType\":\"json\"}}]":"{\"getUserStatusResponse\":{\"userId\":{\"$\":\"XXXXX\",\"@\":\"ous\"},\"userStatus\":{\"loanedItems\":{\"loan\":[{\"title\":{\"$\":\"Motor - 2014, 08\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-03-18T00:00:00+01:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"NCIPMDAxOXwyMDE0MDgwMXx8TW90b3J8fDIwMTQsIDA4fA==\",\"@\":\"ous\"},\"@\":\"ous\"},{\"title\":{\"$\":\"Motor - 2014, 12\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-03-18T00:00:00+01:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"NCIPMDAxOXwyMDE0MTIwMXx8TW90b3J8fDIwMTQsIDEyfA==\",\"@\":\"ous\"},\"@\":\"ous\"},{\"title\":{\"$\":\"Motor - 2014, 02\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-03-18T00:00:00+01:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"NCIPMDAxOXwyMDE0MDIwMXx8TW90b3J8fDIwMTQsIDAyfA==\",\"@\":\"ous\"},\"@\":\"ous\"},{\"title\":{\"$\":\"Komputer for alle - 2014, 01\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-03-18T00:00:00+01:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"NCIPMDAxOXwyMDE0MDEyfHxLb21wdXRlciBmb3IgYWxsZXx8MjAxNCwgMDF8\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Holst, Hanne-Vibeke\",\"@\":\"ous\"},\"title\":{\"$\":\"Det \\u00b7virkelige liv\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-03-18T00:00:00+01:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"NCIPMDAxOXwwMDAwMDEzMTg4fEhvbHN0LCBIYW5uZS1WaWJla2V8RGV0ICZtaWRkb3Q7dmlya2VsaWdlIGxpdnx8fA==\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Rosen, Michael\",\"@\":\"ous\"},\"title\":{\"$\":\"Smut\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-03-18T00:00:00+01:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw=\",\"@\":\"ous\"},\"@\":\"ous\"},{\"title\":{\"$\":\"9900.\",\"@\":\"ous\"},\"dateDue\":{\"$\":\"2016-06-20T00:00:00+02:00\",\"@\":\"ous\"},\"loanId\":{\"$\":\"NCIPMDAxOXw5OTAwfHw5OTAwLnx8\",\"@\":\"ous\"},\"@\":\"ous\"}],\"loansCount\":{\"$\":\"7\",\"@\":\"ous\"},\"@\":\"ous\"},\"orderedItems\":{\"order\":[{\"author\":{\"$\":\"Lange, Karina\",\"@\":\"ous\"},\"title\":{\"$\":\"Hvis din hest er d\\u00f8d - s\\u00e5 st\\u00e5 af\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2015-05-19T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"NCIPMDAxOXwxOS0wNS0yMDE1IDE0OjI1OjAxfExhbmdlLCBLYXJpbmF8SHZpcyBkaW4gaGVzdCBlciBkJm9zbGFzaDtkIC0gcyZhcmluZzsgc3QmYXJpbmc7IGFmfHx8MQ==\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-100451\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Villadsen, Ole H.\",\"@\":\"ous\"},\"title\":{\"$\":\"Livet p\\u00e5 Skagen omkring \\u00e5r 1900\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2015-08-12T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"NCIPMDAxOXwxMi0wOC0yMDE1IDA5OjI1OjAxfFZpbGxhZHNlbiwgT2xlIEgufExpdmV0IHAmYXJpbmc7IFNrYWdlbiBvbWtyaW5nICZhcmluZztyIDE5MDB8fHwx\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-100451\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Lange, Karina\",\"@\":\"ous\"},\"title\":{\"$\":\"Hvis din hest er d\\u00f8d - s\\u00e5 st\\u00e5 af\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-02-19T00:00:00+01:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"NCIPMDAxOXwxOS0wMi0yMDE2IDEzOjU1OjAyfExhbmdlLCBLYXJpbmF8SHZpcyBkaW4gaGVzdCBlciBkJm9zbGFzaDtkIC0gcyZhcmluZzsgc3QmYXJpbmc7IGFmfHx8MQ==\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"holdQueuePosition\":{\"$\":\"1\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-100451\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Lange, Karina\",\"@\":\"ous\"},\"title\":{\"$\":\"Hvis din hest er d\\u00f8d - s\\u00e5 st\\u00e5 af\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-20T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"NCIPMDAxOXwyMC0wNS0yMDE2IDE0OjE4OjE5fExhbmdlLCBLYXJpbmF8SHZpcyBkaW4gaGVzdCBlciBkJm9zbGFzaDtkIC0gcyZhcmluZzsgc3QmYXJpbmc7IGFmfHx8\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"pickUpDate\":{\"$\":\"2016-05-20T00:00:00+02:00\",\"@\":\"ous\"},\"pickUpExpiryDate\":{\"$\":\"2016-05-30T00:00:00+02:00\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-100451\",\"@\":\"ous\"},\"@\":\"ous\"},{\"author\":{\"$\":\"Wahl, Mats\",\"@\":\"ous\"},\"title\":{\"$\":\"Tyv er ikke det v\\u00e6rste!\",\"@\":\"ous\"},\"orderDate\":{\"$\":\"2016-05-20T00:00:00+02:00\",\"@\":\"ous\"},\"orderId\":{\"$\":\"NCIPMDAxOXwyMC0wNS0yMDE2IDE0OjI0OjM5fFdhaGwsIE1hdHN8VHl2IGVyIGlra2UgZGV0IHYmYWVsaWc7cnN0ZSF8fHw=\",\"@\":\"ous\"},\"orderStatus\":{\"$\":\"In process\",\"@\":\"ous\"},\"orderType\":{\"$\":\"Hold\",\"@\":\"ous\"},\"pickUpDate\":{\"$\":\"2016-05-20T00:00:00+02:00\",\"@\":\"ous\"},\"pickUpExpiryDate\":{\"$\":\"2016-05-30T00:00:00+02:00\",\"@\":\"ous\"},\"pickUpAgency\":{\"$\":\"DK-100451\",\"@\":\"ous\"},\"@\":\"ous\"}],\"ordersCount\":{\"$\":\"5\",\"@\":\"ous\"},\"@\":\"ous\"},\"@\":\"ous\"},\"@\":\"ous\"},\"@namespaces\":{\"ous\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus\"}}"};

describe('Automated test of the user endpoint', () => {
  it('expected response. ID:5e90wt, for {"pretty":true}', (done) => {
    let context = {"app":{"collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"opensearch":{"url":"http://opensearch.addi.dk/b3.0_4.2/","agency":"775100","profile":"opac"},"moreinfo":{"url":"http://moreinfo.addi.dk/2.1/","user":"XXXXX","group":"XXXXX","password":"XXXXX"},"entitysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1","libraryType":"folkebibliotek"},"popsuggest":{"url":"http://xptest.dbc.dk/ms/entity-pop/v1"},"creatorsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator"},"librarysuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","librarytype":"folkebibliotek"},"subjectsuggest":{"url":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject"},"orderpolicy":{"url":"https://openorder.addi.dk/test_2.7.1/","servicerequester":"190101"},"userstatus":{"salt":"XXXXX","url":"https://openuserstatus.addi.dk/1.4.1/","userid":"XXXXX","userpin":"XXXXX","useragency":"DK-100451","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"recommend":{"urls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"openagency":{"url":"http://openagency.addi.dk/2.24/","agency":"775100"},"ddbcms":{"url":"http://rest.filmstriben.dbc.inlead.dk/web/","agency":"775100","password":"XXXXX"},"openholdingstatus":{"url":"https://openholdingstatus.addi.dk/2.2/","authgroupid":"XXXXX","authpassword":"XXXXX","authid":"XXXXX"},"rank":{"url":"http://xp-p02.dbc.dk/rank"}};
    context.mockData = mockData;
    provider.execute('user', {"pretty":true}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":[{"id":"zeEOALqmSuy+ysfz0zYbna0CgwtrhewG","loans":[{"loanId":"NCIPMDAxOXwyMDE0MDgwMXx8TW90b3J8fDIwMTQsIDA4fA==","dueDate":"2016-03-18T00:00:00+01:00","title":"Motor - 2014, 08"},{"loanId":"NCIPMDAxOXwyMDE0MTIwMXx8TW90b3J8fDIwMTQsIDEyfA==","dueDate":"2016-03-18T00:00:00+01:00","title":"Motor - 2014, 12"},{"loanId":"NCIPMDAxOXwyMDE0MDIwMXx8TW90b3J8fDIwMTQsIDAyfA==","dueDate":"2016-03-18T00:00:00+01:00","title":"Motor - 2014, 02"},{"loanId":"NCIPMDAxOXwyMDE0MDEyfHxLb21wdXRlciBmb3IgYWxsZXx8MjAxNCwgMDF8","dueDate":"2016-03-18T00:00:00+01:00","title":"Komputer for alle - 2014, 01"},{"loanId":"NCIPMDAxOXwwMDAwMDEzMTg4fEhvbHN0LCBIYW5uZS1WaWJla2V8RGV0ICZtaWRkb3Q7dmlya2VsaWdlIGxpdnx8fA==","dueDate":"2016-03-18T00:00:00+01:00","title":"Det ·virkelige liv","author":"Holst, Hanne-Vibeke"},{"loanId":"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw=","dueDate":"2016-03-18T00:00:00+01:00","title":"Smut","author":"Rosen, Michael"},{"loanId":"NCIPMDAxOXw5OTAwfHw5OTAwLnx8","dueDate":"2016-06-20T00:00:00+02:00","title":"9900."}],"orders":[{"title":"Hvis din hest er død - så stå af","orderId":"Hold:NCIPMDAxOXwxOS0wNS0yMDE1IDE0OjI1OjAxfExhbmdlLCBLYXJpbmF8SHZpcyBkaW4gaGVzdCBlciBkJm9zbGFzaDtkIC0gcyZhcmluZzsgc3QmYXJpbmc7IGFmfHx8MQ==","orderDate":"2015-05-19T00:00:00+02:00","status":"In process","library":"DK-100451","holdQueuePosition":"1","author":"Lange, Karina"},{"title":"Livet på Skagen omkring år 1900","orderId":"Hold:NCIPMDAxOXwxMi0wOC0yMDE1IDA5OjI1OjAxfFZpbGxhZHNlbiwgT2xlIEgufExpdmV0IHAmYXJpbmc7IFNrYWdlbiBvbWtyaW5nICZhcmluZztyIDE5MDB8fHwx","orderDate":"2015-08-12T00:00:00+02:00","status":"In process","library":"DK-100451","holdQueuePosition":"1","author":"Villadsen, Ole H."},{"title":"Hvis din hest er død - så stå af","orderId":"Hold:NCIPMDAxOXwxOS0wMi0yMDE2IDEzOjU1OjAyfExhbmdlLCBLYXJpbmF8SHZpcyBkaW4gaGVzdCBlciBkJm9zbGFzaDtkIC0gcyZhcmluZzsgc3QmYXJpbmc7IGFmfHx8MQ==","orderDate":"2016-02-19T00:00:00+01:00","status":"In process","library":"DK-100451","holdQueuePosition":"1","author":"Lange, Karina"},{"title":"Hvis din hest er død - så stå af","orderId":"Hold:NCIPMDAxOXwyMC0wNS0yMDE2IDE0OjE4OjE5fExhbmdlLCBLYXJpbmF8SHZpcyBkaW4gaGVzdCBlciBkJm9zbGFzaDtkIC0gcyZhcmluZzsgc3QmYXJpbmc7IGFmfHx8","orderDate":"2016-05-20T00:00:00+02:00","status":"In process","library":"DK-100451","author":"Lange, Karina"},{"title":"Tyv er ikke det værste!","orderId":"Hold:NCIPMDAxOXwyMC0wNS0yMDE2IDE0OjI0OjM5fFdhaGwsIE1hdHN8VHl2IGVyIGlra2UgZGV0IHYmYWVsaWc7cnN0ZSF8fHw=","orderDate":"2016-05-20T00:00:00+02:00","status":"In process","library":"DK-100451","author":"Wahl, Mats"}],"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/"}]});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":[{"id":"zeEOALqmSuy+ysfz0zYbna0CgwtrhewG","loans":[{"loanId":"NCIPMDAxOXwyMDE0MDgwMXx8TW90b3J8fDIwMTQsIDA4fA==","dueDate":"2016-03-18T00:00:00+01:00","title":"Motor - 2014, 08"},{"loanId":"NCIPMDAxOXwyMDE0MTIwMXx8TW90b3J8fDIwMTQsIDEyfA==","dueDate":"2016-03-18T00:00:00+01:00","title":"Motor - 2014, 12"},{"loanId":"NCIPMDAxOXwyMDE0MDIwMXx8TW90b3J8fDIwMTQsIDAyfA==","dueDate":"2016-03-18T00:00:00+01:00","title":"Motor - 2014, 02"},{"loanId":"NCIPMDAxOXwyMDE0MDEyfHxLb21wdXRlciBmb3IgYWxsZXx8MjAxNCwgMDF8","dueDate":"2016-03-18T00:00:00+01:00","title":"Komputer for alle - 2014, 01"},{"loanId":"NCIPMDAxOXwwMDAwMDEzMTg4fEhvbHN0LCBIYW5uZS1WaWJla2V8RGV0ICZtaWRkb3Q7dmlya2VsaWdlIGxpdnx8fA==","dueDate":"2016-03-18T00:00:00+01:00","title":"Det ·virkelige liv","author":"Holst, Hanne-Vibeke"},{"loanId":"NCIPMDAxOXwwMDAwMDMyNDg0fFJvc2VuLCBNaWNoYWVsfFNtdXR8fHw=","dueDate":"2016-03-18T00:00:00+01:00","title":"Smut","author":"Rosen, Michael"},{"loanId":"NCIPMDAxOXw5OTAwfHw5OTAwLnx8","dueDate":"2016-06-20T00:00:00+02:00","title":"9900."}],"orders":[{"title":"Hvis din hest er død - så stå af","orderId":"Hold:NCIPMDAxOXwxOS0wNS0yMDE1IDE0OjI1OjAxfExhbmdlLCBLYXJpbmF8SHZpcyBkaW4gaGVzdCBlciBkJm9zbGFzaDtkIC0gcyZhcmluZzsgc3QmYXJpbmc7IGFmfHx8MQ==","orderDate":"2015-05-19T00:00:00+02:00","status":"In process","library":"DK-100451","holdQueuePosition":"1","author":"Lange, Karina"},{"title":"Livet på Skagen omkring år 1900","orderId":"Hold:NCIPMDAxOXwxMi0wOC0yMDE1IDA5OjI1OjAxfFZpbGxhZHNlbiwgT2xlIEgufExpdmV0IHAmYXJpbmc7IFNrYWdlbiBvbWtyaW5nICZhcmluZztyIDE5MDB8fHwx","orderDate":"2015-08-12T00:00:00+02:00","status":"In process","library":"DK-100451","holdQueuePosition":"1","author":"Villadsen, Ole H."},{"title":"Hvis din hest er død - så stå af","orderId":"Hold:NCIPMDAxOXwxOS0wMi0yMDE2IDEzOjU1OjAyfExhbmdlLCBLYXJpbmF8SHZpcyBkaW4gaGVzdCBlciBkJm9zbGFzaDtkIC0gcyZhcmluZzsgc3QmYXJpbmc7IGFmfHx8MQ==","orderDate":"2016-02-19T00:00:00+01:00","status":"In process","library":"DK-100451","holdQueuePosition":"1","author":"Lange, Karina"},{"title":"Hvis din hest er død - så stå af","orderId":"Hold:NCIPMDAxOXwyMC0wNS0yMDE2IDE0OjE4OjE5fExhbmdlLCBLYXJpbmF8SHZpcyBkaW4gaGVzdCBlciBkJm9zbGFzaDtkIC0gcyZhcmluZzsgc3QmYXJpbmc7IGFmfHx8","orderDate":"2016-05-20T00:00:00+02:00","status":"In process","library":"DK-100451","author":"Lange, Karina"},{"title":"Tyv er ikke det værste!","orderId":"Hold:NCIPMDAxOXwyMC0wNS0yMDE2IDE0OjI0OjM5fFdhaGwsIE1hdHN8VHl2IGVyIGlra2UgZGV0IHYmYWVsaWc7cnN0ZSF8fHw=","orderDate":"2016-05-20T00:00:00+02:00","status":"In process","library":"DK-100451","author":"Wahl, Mats"}],"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/"}]});
        done();
      });
  });
});
