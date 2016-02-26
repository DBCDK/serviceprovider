'use strict';
import {expect} from 'chai';

import NewsTransform from '../getNewsList.transform.js';
import newsListResponse from './data/newslistReponse.js';

describe('Test NewsById transform', () => {
  it('Trigger getNewsById', () => {

    const response = NewsTransform.responseTransform(newsListResponse);
    const expected = [{
      id: 'id1',
      nid: 1,
      title: 'title 1',
      lead: 'lead 1',
      body: '<p>body 1</p>',
      image: null
    }, {
      id: 'id2',
      nid: 2,
      title: 'title 2',
      lead: 'lead 2',
      body: '<p>body 2</p>',
      image: 'imagedata'
    }];
    expect(response).to.deep.equal(expected);
  });

  it('Trigger getNewsById no results', () => {
    const response = NewsTransform.responseTransform({});
    expect(response).to.deep.equal([]);
  });
});
