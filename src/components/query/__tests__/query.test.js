'use strict';
import {expect} from 'chai';
//const sinon = require('sinon');
import {sinon} from 'sinon';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import Query from '../Query.component.js';
import QueryStore from '../../../stores/QueryStore.store.js';

describe('Test the Query component', () => {
  it('should update url', ()=> {
    //sinon.spy(history, 'pushState');
    QueryStore.getInitialState().search = '?test=hest';
    let element = React.createElement(Query);
    let dom = TestUtils.renderIntoDocument(element);
    console.log(history.pushState.calledOnce);
    console.log(window.location, QueryStore.getInitialState());

  });
});
