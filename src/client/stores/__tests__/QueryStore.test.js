'use strict';

import {assert, expect} from 'chai';

import QueryStore from '../QueryStore.store.js';
import queryAction from '../../actions/QueryUpdate.action.js';

describe('Test the QueryStore', () => {

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create(); // eslint-disable-line no-undef
    QueryStore.store = {};
    QueryStore.onReset();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('is empty', ()=> {
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

  it('onAdd should call triggerOnQueryChange', () => {
    const spy = sandbox.spy(QueryStore, 'triggerOnQueryChange');
    QueryStore.onAdd({value: 'test', type: 'text'});
    assert.isTrue(spy.called, 'triggerOnQueryChange was called');
  });

  it('onLoadMore Should call onNextPage and increase page number', () => {
    const spy = sandbox.spy(QueryStore, 'onNextPage');
    const startPage = QueryStore.store.page;

    QueryStore.onLoadMore();

    assert.isTrue(spy.called, 'onNextPage was called');
    assert.equal(QueryStore.store.page, startPage + 1, 'Page was increased');
  });

  it('onNextPage Should call triggerOnQueryChange and increase pagenumber', () => {
    const spy = sandbox.spy(QueryStore, 'onNextPage');
    const startPage = QueryStore.store.page;

    QueryStore.onNextPage();

    assert.isTrue(spy.called, 'onNextPage was called');
    assert.equal(QueryStore.store.page, startPage + 1, 'Page was increased');
  });

  it('onPrevPage Should call triggerOnQueryChange and decrease pagenumber', () => {
    const spy = sandbox.spy(QueryStore, 'onPrevPage');
    const startPage = QueryStore.store.page;

    QueryStore.onPrevPage();

    assert.isTrue(spy.called, 'onNextPage was called');
    assert.equal(QueryStore.store.page, startPage - 1, 'Page was decreased');
  });

  it('Should values on store object', () => {
    const inputValue = 'test';
    QueryStore.onChangedInput(inputValue);

    assert.isFalse(QueryStore.store.queryHasChanged, 'queryHasChanged is false');
    assert.equal(QueryStore.store.inputValue, inputValue, 'inputValue did match');
  });
});
