'use strict';
/* eslint-disable */

import {assert} from 'chai';
import * as mocks from './popsuggest.mock.js';
import PopSuggestTransform from '../popsuggest.transform.js';

describe('Test PopSuggest transform', () => {

  it('respond correctly on errors', () => {
    const obj = {error: {statusCode: '500', statusMessage: 'statusMessage'}};
    const expected = '{"error":true,"statusCode":"500","statusMessage":"statusMessage"}';

    const response = JSON.stringify(PopSuggestTransform.responseTransform(obj, 'query'));
    assert.equal(response, expected, 'got object as expected');
  });

  it('should respond correctly on results from suggest service', () => {
    const obj = mocks.harryTitle;
    const expected = '{"index":"display.title","docs":[{"pid":"870970-basis:22252852"},{"pid":"870970-basis:25197879"},{"pid":"870970-basis:22639862"},{"pid":"870970-basis:29317003"},{"pid":"870970-basis:23227932"}],"query":"query"}'; // eslint-disable-line max-len

    const response = JSON.stringify(PopSuggestTransform.responseTransform(obj, 'query'));
    assert.equal(response, expected, 'got object as expected');
  });

  it('should respond correctly on results from entity-suggest service (creator)', () => {
    const obj = mocks.harryCreator;
    const expected = {
      index: "display.creator",
      docs: [ { text: "Harry Nilsson" }, { text: "Harry Belafonte" } ],
      query: 'harry'
    };
    const response = PopSuggestTransform.responseTransform(obj, 'harry');
    assert.deepEqual(response, expected, 'got object as expected');
  });

  it('should respond correctly on results from entity-suggest service (subject)', () => {
    const obj = mocks.harrySubject;
    const expected = { index: 'term.subject',
      docs: [ { text: 'harry' }, { text: 'harry potter' } ],
      query: 'harry'};

    const response = PopSuggestTransform.responseTransform(obj, 'harry');
    assert.deepEqual(response, expected, 'got object as expected');
  });
});
