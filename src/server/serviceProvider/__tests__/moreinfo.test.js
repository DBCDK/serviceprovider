'use strict';

/* eslint-disable */

import {expect, assert} from 'chai';

const prep = require('../transformers/moreinfo/CoverImage.transform.js');

describe('Test transform of MoreInfo responses', () => {
  it('Check positive response', function () {

    let response = {
      'requestStatus': {'statusEnum': 'ok', 'errorText': {}},
      'identifierInformation': [{
        'identifierKnown': true,
        'identifier': {'faust': '22629344'},
        'coverImage': [{
          'attributes': {'imageSize': 'detail_117', 'imageFormat': 'jpeg'},
          '$value': 'http://moreinfo.addi.dk/2.1/more_info_get.php?id=24571249&type=forside_117&key=b6ca88a99e95e515c4ec'
        }, {
          'attributes': {'imageSize': 'detail_207', 'imageFormat': 'jpeg'},
          '$value': 'http://moreinfo.addi.dk/2.1/more_info_get.php?id=24571249&type=forside_207&key=3d564190fe80cb5a4fac'
        }, {
          'attributes': {'imageSize': 'detail_42', 'imageFormat': 'jpeg'},
          '$value': 'http://moreinfo.addi.dk/2.1/more_info_get.php?id=24571249&type=forside_42&key=24b2b60b36c21ffaca9d'
        }, {
          'attributes': {'imageSize': 'detail_500', 'imageFormat': 'jpeg'},
          '$value': 'http://moreinfo.addi.dk/2.1/more_info_get.php?id=24571249&type=forside_500&key=661a92dd3ce513876192'
        }, {
          'attributes': {'imageSize': 'thumbnail', 'imageFormat': 'jpeg'},
          '$value': 'http://moreinfo.addi.dk/2.1/more_info_get.php?id=24571249&type=forside_lille&key=bc4acb089437c9fe2699'
        }, {
          'attributes': {'imageSize': 'detail', 'imageFormat': 'jpeg'},
          '$value': 'http://moreinfo.addi.dk/2.1/more_info_get.php?id=24571249&type=forside_stor&key=90e8f3d68d1edff2ea6e'
        }]
      }]
    };
    let result = prep.responseTransform(response, ['identifiers']);
    expect(result.result.images).to.have.length(6);

  });
  it('Check negative response', function () {

    let response = {
      'requestStatus': {'statusEnum': 'ok', 'errorText': {}},
      'identifierInformation': [{'identifierKnown': false, 'identifier': {'faust': '12345678'}}]
    };

    assert.equal(JSON.stringify(prep.responseTransform(response)), JSON.stringify({'result': {images: []}}), 'No cover image found');

  });
  it('Check authentication error', function () {

    let response = {'requestStatus': {'statusEnum': 'authentication_error', 'errorText': 'Unknown user'}};

    expect(prep.responseTransform(response).result).to.be.deep.equal({
      errorcode: 1,
      errormessage: 'Authentication error',
      serviceerror: ''
    });
  });

});

/* eslint-enable */
