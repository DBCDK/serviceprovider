'use strict';

/**
 * @file
 * Testing the LibrarySuggest.store
 */
import {expect} from 'chai';
import LibrarySearch from '../LibrarySearch.store.js';

describe('Testing the LibrarySearch Store', () => {
  it('Test getInitialState', () => {
    expect(JSON.stringify(LibrarySearch.getInitialState())).to.equal(JSON.stringify({data: [], pending: false}));
  });

  it('Test getInitialState with undefined window setting', () => {
    window.QUERYSTRING_PROPS = 'undefined';
    expect(JSON.stringify(LibrarySearch.getInitialState())).to.equal(JSON.stringify({data: [], pending: false}));
  });

  it('Test getInitialState with window setting', () => {
    window.QUERYSTRING_PROPS = {text: 'per'};
    expect(JSON.stringify(LibrarySearch.getInitialState())).to.equal(JSON.stringify({data: [], pending: true}));
  });

  it('tests libraryQueryUpdatedResponse without agencies', () => {
    LibrarySearch.libraryQueryUpdatedResponse({});
    expect(JSON.stringify(LibrarySearch.store)).to.equal(JSON.stringify({data: [], pending: false}));
  });

  it('tests libraryQueryUpdatedResponse with agencies', () => {
    LibrarySearch.libraryQueryUpdatedResponse({agencies: []});
    expect(JSON.stringify(LibrarySearch.store)).to.equal(JSON.stringify({data: [], pending: false}));
    LibrarySearch.store = {data: [], pending: false};
  });
});
