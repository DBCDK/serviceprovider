'use strict';

/**
 * @file Testing the provider
 */
import Provider from '../Provider.js';
import {expect, assert} from 'chai';

const loggerMock = {
  log: () => {
  },
  error: () => {
  }
};

describe('Testing methods on the Provider', () => {

  it('assert methods are accessible', () => {
    assert.isNotNull(Provider);
    assert.isFunction(Provider);
    assert.isNotNull(Provider({}, loggerMock).registerTransform);
    assert.isFunction(Provider({}, loggerMock).registerTransform);
  });

  it('Test the constructor method', () => {
    expect(() => Provider({}, loggerMock)).to.not.throw(Error);
  });

  it('Test the registerTransform method', () => {
    let provider = Provider({}, loggerMock);
    let test = {
      event() {
        return 'testEvent';
      },
      requestTransform: true,
      responseTransform: true,
      someMethod() {
      }
    };
    expect(provider.registerTransform(test)).to.have.keys([
      'callServiceClient',
      'clients',
      'event',
      'logger',
      'requestTransform',
      'responseTransform',
      'someMethod',
      'trigger'
    ]);
  });

  it('Test the registerServiceClient method', () => {
    let client = {
      test: () => {
        return 'testClientMethod';
      }
    };
    const provider = Provider(loggerMock);
    expect(() => provider.registerServiceClient('test', client)).to.not.throw(Error);
    expect(() => provider.registerServiceClient('test', client)).to.throw(Error);

    const clients = provider.registerServiceClient('test2', client);
    expect(clients).to.have.keys(['test', 'test2']);
  });

  describe('Test the trigger function', () => {
    const provider = Provider(loggerMock);
    // No event has been reqistered
    it('Throws an error on unsupported events', () => {
      expect(() => provider.trigger('testEvent', {test: 'testEvent is triggered'})).to.throw(Error);
    });

    it('Triggers an event', (done) => {
      provider.registerTransform({
        event() {
          return 'testEvent';
        },
        requestTransform(event, request) {
          return Promise.resolve(request);
        },
        responseTransform(event, response) {
          return response.test;
        }
      });
      let trigger = provider.trigger('testEvent', {test: 'testEvent is triggered'});
      expect(trigger).to.have.length(1);
      trigger[0].then((result) => {
        expect(result).to.be.equal('testEvent is triggered');
        done();
      }).catch(err => done(err));
    });
  });

  describe('Test callServiceClient method', () => {
    let assertString = 'Client test method was called';

    var testClient = {
      testGoodMethod(params) {
        return Promise.resolve(params);
      },
      testBadMethod(params) {
        return Promise.reject(params);
      }
    };
    var testTransform = {
      event() {
        return 'testCallClientEvent';
      },
      requestTransform(event, method) {
        return this.callServiceClient('testClient', method, assertString);
      },
      responseTransform(response) {
        return response;
      }
    };
    const provider = Provider({services: {testClient: {}}}, loggerMock);
    provider.registerServiceClient('testClient', testClient);
    provider.registerTransform(testTransform);

    it('should call method on client', () => {

      provider.trigger('testCallClientEvent', 'testGoodMethod')[0].then((value)=> {
        expect(value).to.be.equal(assertString);
      });
    });

    it('should catch error', (done) => {
      provider.trigger('testCallClientEvent', 'testBadMethod')[0].then(()=> {
        done(new Error('Promise should fail'));
      }).catch((value)=> {
        expect(value).to.be.equal(assertString);
        done();
      });
    });
  });
});
