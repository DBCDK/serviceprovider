'use strict';

import Recommendations from '../RankedRecommendation.client.js';
import {expect} from 'chai'; // eslint-disable-line

describe('Test method getRecommendations', () => {
  it('throws error if config is not correct', () => {
    expect(Recommendations).to.throw(Error);
    expect(() => Recommendations({})).to.throw(Error);
  });

  it('returns methods on init', () => {
    const recommendations = Recommendations({endpoint: 'test'});
    expect(recommendations.getRecommendations).to.be.method; // eslint-disable-line no-unused-expressions
  });

  it('Dummy test', (done) => {
    let endpoint = 'http://xp-p02.dbc.dk:8017/recommend-ranked';
    let client = Recommendations({endpoint}, ['rec.collectionIdentifier:775100-katalog']); // eslint-disable-line

    const likes = [ // eslint-disable-line
      '870970-basis:29626081', // The recommendations
      '870970-basis:42307963',
      '870970-basis:26488303',
      '870970-basis:29008736',
      '870970-basis:25801253',
      '870970-basis:25490487',
      '870970-basis:43266403',
      '870970-basis:40456775',
      '870970-basis:25254996',
      '870970-basis:20414642',
      '870970-basis:27088988',
      '870970-basis:23202182',
      '870970-basis:43847546',
      '870970-basis:44777010'
    ];

    done();

    /*
    client.getPersonalRecommendations({like: likes})
      .then((response) => {
        console.log(response); // eslint-disable-line
        expect(response.result.length).to.equal(100);
        expect(response.result[0][0]).to.equal('870970-basis:28751176');
        done();
      })
      .catch((err) => {
        done(err);
      });
    /**/
  });
});
