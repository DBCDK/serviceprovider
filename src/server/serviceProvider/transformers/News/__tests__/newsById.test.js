'use strict';
import {expect} from 'chai';
import NewsTransform from '../getNewsById.transform.js';
import newsByIdResponse from './data/newsByIdReponse.js';

describe('Test NewsById transform', () => {
  it('Trigger getNewsById', () => {

    const response = NewsTransform.responseTransform(newsByIdResponse);
    const expected = {
      id: 'id1',
      nid: 1,
      title: 'title 1',
      lead: 'lead 1',
      body: '<p>body 1</p>',
      image: null
    };
    expect(response).to.deep.equal(expected);
  });

  it('Trigger getNewsById no results', () => {
    const response = NewsTransform.responseTransform({}, {node: 123});
    expect(response).to.deep.equal({nid: 123, error: 'unknown id'});
  });
});

