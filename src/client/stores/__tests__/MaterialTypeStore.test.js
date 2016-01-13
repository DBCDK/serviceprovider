'use strict';

/**
 * @file
 * Testing the MaterialType.store
 */
import {expect} from 'chai';
import MaterialTypeStore from '../MaterialType.store.js';

describe('Testing the MaterialType Store', () => {
  it('Test getInitialState', () => {
    expect(
      JSON.stringify(
        MaterialTypeStore.getInitialState()
      )
    ).to.equal(
      '{"categories":[],"translations":{"music":"Musik","movie":"Film","literature":"Bøger","game":"Spil","periodica":"Tidsskrifter","track":"Tracks","article":"Artikler","sheetmusic":"Noder","map":"Kort","review":"Anmeldelser","bookdescription":"Bogbeskrivelser"}}' // eslint-disable-line
    );
  });

  it('Test translations of categories', () => {
    MaterialTypeStore.onResponse(MaterialTypeStore)({
      pending: false,
      info: {
        facets: [{
          type: 'term',
          displayValue: 'music'
        }, {
          type: 'term',
          displayValue: 'per'
        }]
      }
    });

    expect(
      JSON.stringify(
        MaterialTypeStore.store
      )
    ).to.equal(
      '{' +
        '"categories":[],' +
        '"translations":{' +
          '"music":"Musik",' +
          '"movie":"Film",' +
          '"literature":"Bøger",' +
          '"game":"Spil",' +
          '"periodica":"Tidsskrifter",' +
          '"track":"Tracks",' +
          '"article":"Artikler",' +
          '"sheetmusic":"Noder",' +
          '"map":"Kort",' +
          '"review":"Anmeldelser",' +
          '"bookdescription":"Bogbeskrivelser"' +
        '}' +
      '}'
    );
  });
});
