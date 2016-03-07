'use strict';

import Recommendations from '../Recommendation.client.js';
import {expect} from 'chai';

describe('Test method getRecommendations', () => {
  it('throws error if config is not correct', () => {
    expect(Recommendations).to.throw(Error);
    expect(() => Recommendations({})).to.throw(Error);
  });

  it('returns methods on init', () => {
    const recommendations = Recommendations({endpoint: 'test'});
    expect(recommendations.getRecommendations).to.be.method; // eslint-disable-line no-unused-expressions
  });


  it('catch wrong parameters - likes is not an array', (done) => {
    let endpoint = 'dummy_endpoint';
    let client = Recommendations({endpoint});
    const params = {likes: {}, dislikes: []};
    client.getRecommendations(params)
      .catch((response) => {
        expect(response.statusMessage).to.equal('Parameters \'like\' and \'dislike\' should be arrays. I.e. { like: [], dislike: [] }');
        done();
      });
  });

  it('catch wrong parameters - dislikes is not an array', (done) => {
    let endpoint = 'dummy_endpoint';
    let client = Recommendations({endpoint});
    const params = {likes: [], dislikes: {}};
    client.getRecommendations(params)
      .catch((response) => {
        expect(response.statusMessage).to.equal('Parameters \'like\' and \'dislike\' should be arrays. I.e. { like: [], dislike: [] }');
        done();
      });
  });

  it('catch wrong parameters', (done) => {
    let endpoint = 'dummy_endpoint';
    let client = Recommendations({endpoint});
    const params = 'this should be an object';
    client.getRecommendations(params)
      .catch((response) => {
        expect(response.statusMessage).to.equal('Parameters should be an objet that contains both a like and a dislike parameter. I.e. { like: [], dislike: [] }');
        done();
      });
  });
});
