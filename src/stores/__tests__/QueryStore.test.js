'use strict';
import {expect} from 'chai';
import QueryStore from '../QueryStore.store.js';
import queryAction from '../../actions/QueryUpdate.action.js';

describe('Test Reflux Query Store', () => {
  it('is empty', ()=> {
    QueryStore.onReset();
    let store = QueryStore.getInitialState();
    expect(store.query).to.have.length(0);
  });

  it('is updated on action', (done)=> {
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
