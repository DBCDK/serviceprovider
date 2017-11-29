/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: user {}

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
    openuserstatus: 'https://openuserstatus.addi.dk/1.6.1/',
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
    collectionidentifiers: ''
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
  '["openuserstatus",{"qs":{"agencyId":"710100","userId":"XXXXX","userPincode":"XXXXX","authentication.groupIdAut":"XXXXX","authentication.passwordAut":"XXXXX","authentication.userIdAut":"XXXXX","action":"getUserStatus","outputType":"json"}}]':
    '{"getUserStatusResponse":{"userId":{"$":"XXXXX","@":"ous"},"userName":{"$":"Joe User","@":"ous"},"userAddress":{"$":"Randomstreet 21, 3. tv.","@":"ous"},"userPostalCode":{"$":"2400","@":"ous"},"userCountry":{"$":"DK","@":"ous"},"userMail":{"$":"email@example.com","@":"ous"},"userStatus":{"loanedItems":{"loan":[{"author":{"$":"Aakeson, Kim Fupz","@":"ous"},"bibliographicItemId":{"$":"87-562-8152-8","@":"ous"},"bibliographicRecordId":{"$":"22482882","@":"ous"},"edition":{"$":"1. udgave","@":"ous"},"pagination":{"$":"155 sider","@":"ous"},"publisher":{"$":"Carlsen 2003","@":"ous"},"mediumType":{"$":"Bog","@":"ous"},"title":{"$":"En \\u00a4helt anden historie og andre historier","@":"ous"},"dateDue":{"$":"2017-12-20T00:00:00+01:00","@":"ous"},"loanId":{"$":"3814186694","@":"ous"},"reminderLevel":{"$":"0","@":"ous"},"@":"ous"},{"author":{"$":"Lindgren, Astrid","@":"ous"},"bibliographicItemId":{"$":"9788702072877","@":"ous"},"bibliographicRecordId":{"$":"27409954","@":"ous"},"edition":{"$":"6. udgave","@":"ous"},"pagination":{"$":"115 sider","@":"ous"},"publisher":{"$":"Gyldendal 2010","@":"ous"},"language":{"$":"dan","@":"ous"},"mediumType":{"$":"Bog","@":"ous"},"title":{"$":"Emil fra L\\u00f8nneberg: Ved Kina Bodenhoff","@":"ous"},"dateDue":{"$":"2017-12-20T00:00:00+01:00","@":"ous"},"loanId":{"$":"4138050837","@":"ous"},"reminderLevel":{"$":"0","@":"ous"},"@":"ous"},{"author":{"$":"Reuter, Bjarne","@":"ous"},"bibliographicItemId":{"$":"9788702238310","@":"ous"},"bibliographicRecordId":{"$":"53387969","@":"ous"},"edition":{"$":"6. udgave","@":"ous"},"pagination":{"$":"103 sider","@":"ous"},"publisher":{"$":"Gyldendal 2017","@":"ous"},"mediumType":{"$":"Bog","@":"ous"},"title":{"$":"Os to, Oskar - for evigt: Ill. Ursula Seeberg","@":"ous"},"dateDue":{"$":"2017-12-20T00:00:00+01:00","@":"ous"},"loanId":{"$":"5161680615","@":"ous"},"reminderLevel":{"$":"0","@":"ous"},"@":"ous"},{"author":{"$":"Quist M\\u00f8ller, Flemming","@":"ous"},"bibliographicItemId":{"$":"87-01-17700-1","@":"ous"},"bibliographicRecordId":{"$":"07101554","@":"ous"},"edition":{"$":"3. udgave","@":"ous"},"pagination":{"$":"[28] sider","@":"ous"},"publisher":{"$":"[Gyldendal] 1990","@":"ous"},"mediumType":{"$":"Billedbog","@":"ous"},"title":{"$":"Bennys badekar","@":"ous"},"dateDue":{"$":"2017-12-20T00:00:00+01:00","@":"ous"},"loanId":{"$":"293565333","@":"ous"},"reminderLevel":{"$":"0","@":"ous"},"@":"ous"}],"loansCount":{"$":"4","@":"ous"},"@":"ous"},"orderedItems":{"order":[{"author":{"$":"Kirkegaard, Ole Lund","@":"ous"},"bibliographicItemId":{"$":"9788702149425","@":"ous"},"bibliographicRecordId":{"$":"50758125","@":"ous"},"edition":{"$":"10. udgave","@":"ous"},"pagination":{"$":"91 sider","@":"ous"},"publisher":{"$":"Gyldendal 2013","@":"ous"},"mediumType":{"$":"Bog","@":"ous"},"title":{"$":"Hodja fra Pjort","@":"ous"},"orderDate":{"$":"2017-11-19T13:53:18+01:00","@":"ous"},"orderId":{"$":"17836938","@":"ous"},"orderStatus":{"$":"","@":"ous"},"orderType":{"$":"normal","@":"ous"},"holdQueuePosition":{"$":"1","@":"ous"},"pickUpAgency":{"$":"DK-710100","@":"ous"},"@":"ous"},{"author":{"$":"Kirkegaard, Ole Lund","@":"ous"},"bibliographicItemId":{"$":"9788702020434","@":"ous"},"bibliographicRecordId":{"$":"24733165","@":"ous"},"edition":{"$":"5. udgave","@":"ous"},"pagination":{"$":"83 sider","@":"ous"},"publisher":{"$":"Gyldendal 2003","@":"ous"},"mediumType":{"$":"Bog","@":"ous"},"title":{"$":"Hodja fra Pjort","@":"ous"},"orderDate":{"$":"2017-11-19T13:54:10+01:00","@":"ous"},"orderId":{"$":"17836969","@":"ous"},"orderStatus":{"$":"","@":"ous"},"orderType":{"$":"normal","@":"ous"},"holdQueuePosition":{"$":"1","@":"ous"},"pickUpAgency":{"$":"DK-710100","@":"ous"},"@":"ous"},{"author":{"$":"Kirkegaard, Ole Lund","@":"ous"},"bibliographicItemId":{"$":"87-00-17801-2","@":"ous"},"bibliographicRecordId":{"$":"02004461","@":"ous"},"edition":{"$":"1. udgave","@":"ous"},"pagination":{"$":"98 sider","@":"ous"},"publisher":{"$":"Gyldendal 2002","@":"ous"},"mediumType":{"$":"Bog","@":"ous"},"title":{"$":"Hodja fra Pjort","@":"ous"},"orderDate":{"$":"2017-11-19T13:54:26+01:00","@":"ous"},"orderId":{"$":"17836977","@":"ous"},"orderStatus":{"$":"","@":"ous"},"orderType":{"$":"normal","@":"ous"},"holdQueuePosition":{"$":"1","@":"ous"},"pickUpAgency":{"$":"DK-710100","@":"ous"},"@":"ous"},{"author":{"$":"Lindgren, Astrid","@":"ous"},"bibliographicItemId":{"$":"9788700457966","@":"ous"},"bibliographicRecordId":{"$":"22764691","@":"ous"},"edition":{"$":"1. samlede udgave","@":"ous"},"pagination":{"$":"453 sider","@":"ous"},"publisher":{"$":"Gyldendal 2007","@":"ous"},"language":{"$":"dan","@":"ous"},"mediumType":{"$":"Bog","@":"ous"},"title":{"$":"Bogen om Emil fra L\\u00f8nneberg: samlet udgave med alle historierne om Emil fra L\\u00f8nneberg","@":"ous"},"orderDate":{"$":"2017-11-29T16:03:28+01:00","@":"ous"},"orderId":{"$":"18180802","@":"ous"},"orderStatus":{"$":"Active","@":"ous"},"orderType":{"$":"normal","@":"ous"},"holdQueuePosition":{"$":"1","@":"ous"},"pickUpAgency":{"$":"DK-710100","@":"ous"},"@":"ous"}],"ordersCount":{"$":"4","@":"ous"},"@":"ous"},"@":"ous"},"@":"ous"},"@namespaces":{"ous":"http:\\/\\/oss.dbc.dk\\/ns\\/openuserstatus"}}'
};

describe('Automated test: user-get-user-info', () => {
  it('expected response. ID:e4lul3, for {}', done => {
    context.mockData = mockData;
    provider
      .execute('user', {}, context)
      .then(result => {
        console.log('IDIDID', result.data.id);
        assert.deepEqual(result, {
          statusCode: 200,
          data: {
            id: 'foervg55pADXBKzi3h8jYjnYqYNfI9a3',
            name: 'Joe User',
            address: 'Randomstreet 21, 3. tv.',
            postalCode: '2400',
            mail: 'email@example.com',
            loans: [
              {
                loanId: '3814186694',
                dueDate: '2017-12-20T00:00:00+01:00',
                title: 'En ¤helt anden historie og andre historier',
                creator: 'Aakeson, Kim Fupz',
                materialId: '87-562-8152-8',
                titleId: '22482882'
              },
              {
                loanId: '4138050837',
                dueDate: '2017-12-20T00:00:00+01:00',
                title: 'Emil fra Lønneberg: Ved Kina Bodenhoff',
                creator: 'Lindgren, Astrid',
                materialId: '9788702072877',
                titleId: '27409954'
              },
              {
                loanId: '5161680615',
                dueDate: '2017-12-20T00:00:00+01:00',
                title: 'Os to, Oskar - for evigt: Ill. Ursula Seeberg',
                creator: 'Reuter, Bjarne',
                materialId: '9788702238310',
                titleId: '53387969'
              },
              {
                loanId: '293565333',
                dueDate: '2017-12-20T00:00:00+01:00',
                title: 'Bennys badekar',
                creator: 'Quist Møller, Flemming',
                materialId: '87-01-17700-1',
                titleId: '07101554'
              }
            ],
            orders: [
              {
                orderId: 'normal:17836938',
                status: '',
                pickUpAgency: 'DK-710100',
                holdQueuePosition: '1',
                creator: 'Kirkegaard, Ole Lund',
                title: 'Hodja fra Pjort',
                orderDate: '2017-11-19T13:53:18+01:00',
                titleId: '50758125'
              },
              {
                orderId: 'normal:17836969',
                status: '',
                pickUpAgency: 'DK-710100',
                holdQueuePosition: '1',
                creator: 'Kirkegaard, Ole Lund',
                title: 'Hodja fra Pjort',
                orderDate: '2017-11-19T13:54:10+01:00',
                titleId: '24733165'
              },
              {
                orderId: 'normal:17836977',
                status: '',
                pickUpAgency: 'DK-710100',
                holdQueuePosition: '1',
                creator: 'Kirkegaard, Ole Lund',
                title: 'Hodja fra Pjort',
                orderDate: '2017-11-19T13:54:26+01:00',
                titleId: '02004461'
              },
              {
                orderId: 'normal:18180802',
                status: 'Active',
                pickUpAgency: 'DK-710100',
                holdQueuePosition: '1',
                creator: 'Lindgren, Astrid',
                title:
                  'Bogen om Emil fra Lønneberg: samlet udgave med alle historierne om Emil fra Lønneberg',
                orderDate: '2017-11-29T16:03:28+01:00',
                titleId: '22764691'
              }
            ],
            debt: [],
            ddbcmsapi: 'https://cmscontent.dbc.dk/'
          }
        });
        done();
      })
      .catch(result => {
        fail(
          {throw: result},
          {
            statusCode: 200,
            data: {
              id: 'foervg55pADXBKzi3h8jYjnYqYNfI9a3',
              name: 'Joe User',
              address: 'Randomstreet 21, 3. tv.',
              postalCode: '2400',
              mail: 'email@example.com',
              loans: [
                {
                  loanId: '3814186694',
                  dueDate: '2017-12-20T00:00:00+01:00',
                  title: 'En ¤helt anden historie og andre historier',
                  creator: 'Aakeson, Kim Fupz',
                  materialId: '87-562-8152-8',
                  titleId: '22482882'
                },
                {
                  loanId: '4138050837',
                  dueDate: '2017-12-20T00:00:00+01:00',
                  title: 'Emil fra Lønneberg: Ved Kina Bodenhoff',
                  creator: 'Lindgren, Astrid',
                  materialId: '9788702072877',
                  titleId: '27409954'
                },
                {
                  loanId: '5161680615',
                  dueDate: '2017-12-20T00:00:00+01:00',
                  title: 'Os to, Oskar - for evigt: Ill. Ursula Seeberg',
                  creator: 'Reuter, Bjarne',
                  materialId: '9788702238310',
                  titleId: '53387969'
                },
                {
                  loanId: '293565333',
                  dueDate: '2017-12-20T00:00:00+01:00',
                  title: 'Bennys badekar',
                  creator: 'Quist Møller, Flemming',
                  materialId: '87-01-17700-1',
                  titleId: '07101554'
                }
              ],
              orders: [
                {
                  orderId: 'normal:17836938',
                  status: '',
                  pickUpAgency: 'DK-710100',
                  holdQueuePosition: '1',
                  creator: 'Kirkegaard, Ole Lund',
                  title: 'Hodja fra Pjort',
                  orderDate: '2017-11-19T13:53:18+01:00',
                  titleId: '50758125'
                },
                {
                  orderId: 'normal:17836969',
                  status: '',
                  pickUpAgency: 'DK-710100',
                  holdQueuePosition: '1',
                  creator: 'Kirkegaard, Ole Lund',
                  title: 'Hodja fra Pjort',
                  orderDate: '2017-11-19T13:54:10+01:00',
                  titleId: '24733165'
                },
                {
                  orderId: 'normal:17836977',
                  status: '',
                  pickUpAgency: 'DK-710100',
                  holdQueuePosition: '1',
                  creator: 'Kirkegaard, Ole Lund',
                  title: 'Hodja fra Pjort',
                  orderDate: '2017-11-19T13:54:26+01:00',
                  titleId: '02004461'
                },
                {
                  orderId: 'normal:18180802',
                  status: 'Active',
                  pickUpAgency: 'DK-710100',
                  holdQueuePosition: '1',
                  creator: 'Lindgren, Astrid',
                  title:
                    'Bogen om Emil fra Lønneberg: samlet udgave med alle historierne om Emil fra Lønneberg',
                  orderDate: '2017-11-29T16:03:28+01:00',
                  titleId: '22764691'
                }
              ],
              debt: [],
              ddbcmsapi: 'https://cmscontent.dbc.dk/'
            }
          }
        );
        done();
      });
  });
});
