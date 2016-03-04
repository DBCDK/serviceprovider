'use strict';

/**
 * @file Testing the Transform class in Transforms.js
 */
import Transform from '../lib/Transforms.js';
import {expect} from 'chai';

describe('Testing Validate Transform', () => {

  it('Test Validate Transform', () => {
    let event = function() {
    };

    let test = {services: []};
    expect(() => Transform(test)).to.throw(Error);

    test = {};
    expect(() => Transform(test)).to.throw(Error);

    test = {event};
    expect(() => Transform(test)).to.throw(Error);

    test = {event, requestTransform: true};
    expect(() => Transform(test)).to.throw(Error);

    test = {event, requestTransform: true, responseTransform: true};
    expect(() => Transform(test)).to.not.throw(Error);

    expect(Transform(test)).to.have.keys([
      'callServiceClient',
      'clients',
      'event',
      'logger',
      'requestTransform',
      'responseTransform',
      'trigger'
    ]);
  });

  it('Triggers event on transform', (done) => {
    const transform = Transform({
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

    const expected = 'test transform trigger';
    transform.trigger({test: expected})[0].then((result) => {
      expect(result).to.be.equal(expected);
      done();
    }).catch(err => done(err));
  });
});
