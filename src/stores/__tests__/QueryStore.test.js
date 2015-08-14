'use strict';

import {expect} from 'chai';
import QueryStore from '../QueryStore.store.js';
import queryAction from '../../actions/QueryUpdate.action.js';

describe('Test Reflux Query Store', () => {

  beforeEach(() => {
    QueryStore.onReset();
  });

  it('is empty', ()=> {
    let store = QueryStore.getInitialState();
    expect(store.query).to.have.length(0);
  });

  xit('is updated on action', (done)=> {
    // Test is currently disabled due to an inheritence problem. The state in QueryStore is apparently inherited from other tests, which makes this test go red.
    // Possible solutions: http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/ & https://github.com/kentor/react-flux-testing/blob/master/tests.webpack.js
    let queryData = [{value: 'test', type: 'text'}, {value: 'type', type: 'term.type'}];
    queryAction.update(queryData);

    // reflux actions are handled ayncronous and assertion of the udpated store is therefore wrapped in a timeout
    // function
    setTimeout(() => {
      let store = QueryStore.getInitialState();
      expect(store.query).to.equal(queryData);
      let cql = QueryStore.getCql();
      expect(cql).to.equal('(test) and term.type=(type)');
      done();
    }, 0);
  });
});
