'use strict';

import {assert} from 'chai';
import {rewriteCoverImageUrl} from '../../utils/CoverImage.util.js';

describe('Test the CoverImage.util file', () => {
  it('Should replace http://moreinfo.addi.dk/ when present in url', () => {
    const url = rewriteCoverImageUrl('http://moreinfo.addi.dk/teshest');
    assert.strictEqual(url, '/moreinfo/teshest', 'Got string as expected');
  });

  it('Should return the original URL when http://moreinfo.addi.dk/ is not present in URL', () => {
    const url = rewriteCoverImageUrl('http://localhost/teshest');
    assert.strictEqual(url, 'http://localhost/teshest', 'Got string as expected');
  });

  it('Should return the original URL when exactly http://moreinfo.addi.dk/ is not present in URL', () => {
    const url = rewriteCoverImageUrl('http://moreinfo.addi.dk');
    assert.strictEqual(url, 'http://moreinfo.addi.dk', 'Got string as expected');
  });
});
