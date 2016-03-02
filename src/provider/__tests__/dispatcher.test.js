'use strict';

/**
 * @file Testing the Dispatcher class in dispatcher.js
 */
import Dispatcher from '../lib/Dispatcher.js';
import Transform from '../lib/Transforms.js';
import sinon from 'sinon';
import {expect} from 'chai';

describe('Testing the methods in the Dispatcher object', () => {

  /**
   * Connection Mock
   * @type {{}}
   */
  const connectionMock = {
    on(event, cb) {
      cb([]);
    },
    emit: sinon.stub()
  };

  /**
   * Socket Mock
   * @type {{}}
   */
  const socketMock = {
    on(event, cb) {
      cb(connectionMock);
    }
  };

  const testTransform = Transform({
    event() {
      return 'testEvent';
    },
    requestTransform(event, params) {
      params.push('requestTransform');
      return Promise.resolve(params);
    },
    responseTransform(event, params) {
      params.push('responseTransform');
      return params;
    }
  });

  it('tests something', (done) => {
    Dispatcher([testTransform], console, socketMock);
    expect(connectionMock.emit.called).to.be.equal(false);
    setTimeout(() => {
      expect(connectionMock.emit.calledWith('testEventResponse', ['requestTransform', 'responseTransform'])).to.be.equal(true);
      done();
    }, 0);
  });
});
