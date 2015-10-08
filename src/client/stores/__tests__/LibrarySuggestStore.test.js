'use strict';

/**
 * @file
 * Testing the LibrarySuggest.store
 */
import {assert, expect} from 'chai';
import LibrarySuggest from '../LibrarySuggest.store';

describe('Testing the LibrarySuggest Store', () => {
  it('Test getInitialState', () => {
    expect(JSON.stringify(LibrarySuggest.getInitialState())).to.equal(JSON.stringify({data: {}, pending: false}));
  });

  it('test onTextfieldUpdatedResponse', () => {
    LibrarySuggest.store.data = {
      per: {}
    };

    LibrarySuggest.onTextfieldUpdatedResponse({index: 'per', isEmpty: true});
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{}');

    LibrarySuggest.onTextfieldUpdatedResponse({index: 'per', isEmpty: false});
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{}');

    LibrarySuggest.onTextfieldUpdatedResponse({index: 'this is supposed to log', isEmpty: false, error: true});
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{}');

    LibrarySuggest.onTextfieldUpdatedResponse({index: 'per', isEmpty: false, query: 'per', docs: []});
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{"per":{"per":{}}}');

    LibrarySuggest.onTextfieldUpdatedResponse({index: 'per', isEmpty: false, query: 'per', docs: [
      {
        library: {
          navn: '',
          adresse: '',
          postnr: '0000',
          by: 'by',
          id: ''
        }
      }
    ]});
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{"per":{"per":{"label":{"type":"a","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"href":"/library/suggest?text=per","children":"Biblioteker"},"originalProps":{"href":"/library/suggest?text=per","children":"Biblioteker"}}},"weight":0,"data":[{"imageComp":{"type":"div","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{},"originalProps":{}}},"text":{"type":"div","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"children":[{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"children":""},"originalProps":{"children":""}}},{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"className":"subheader","children":[""," ","-"," ","0000"," ","by"]},"originalProps":{"className":"subheader","children":[""," ","-"," ","0000"," ","by"]}}}]},"originalProps":{"children":[{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"children":""},"originalProps":{"children":""}}},{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"className":"subheader","children":[""," ","-"," ","0000"," ","by"]},"originalProps":{"className":"subheader","children":[""," ","-"," ","0000"," ","by"]}}}]}}},"href":"/library?id="}]}}}'); // eslint-disable-line

    LibrarySuggest.onTextfieldUpdatedResponse({index: 'per', isEmpty: false, query: 'per', docs: [
      {
        library: {
          navn: '',
          adresse: '',
          by: 'by',
          id: ''
        }
      }
    ]});
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{"per":{"per":{"label":{"type":"a","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"href":"/library/suggest?text=per","children":"Biblioteker"},"originalProps":{"href":"/library/suggest?text=per","children":"Biblioteker"}}},"weight":0,"data":[{"imageComp":{"type":"div","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{},"originalProps":{}}},"text":{"type":"div","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"children":[{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"children":""},"originalProps":{"children":""}}},{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"className":"subheader","children":[""," ","-"," ",null," ","by"]},"originalProps":{"className":"subheader","children":[""," ","-"," ",null," ","by"]}}}]},"originalProps":{"children":[{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"children":""},"originalProps":{"children":""}}},{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"className":"subheader","children":[""," ","-"," ",null," ","by"]},"originalProps":{"className":"subheader","children":[""," ","-"," ",null," ","by"]}}}]}}},"href":"/library?id="}]}}}'); // eslint-disable-line

    LibrarySuggest.onTextfieldUpdatedResponse({index: 'per', isEmpty: false, query: 'per', docs: [
      {
        library: {
          navn: '',
          adresse: '',
          id: ''
        }
      }
    ]});
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{"per":{"per":{"label":{"type":"a","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"href":"/library/suggest?text=per","children":"Biblioteker"},"originalProps":{"href":"/library/suggest?text=per","children":"Biblioteker"}}},"weight":0,"data":[{"imageComp":{"type":"div","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{},"originalProps":{}}},"text":{"type":"div","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"children":[{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"children":""},"originalProps":{"children":""}}},{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"className":"subheader","children":[""," ",""," ",null," ",null]},"originalProps":{"className":"subheader","children":[""," ",""," ",null," ",null]}}}]},"originalProps":{"children":[{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"children":""},"originalProps":{"children":""}}},{"type":"h6","key":null,"ref":null,"_owner":null,"_context":{},"_store":{"props":{"className":"subheader","children":[""," ",""," ",null," ",null]},"originalProps":{"className":"subheader","children":[""," ",""," ",null," ",null]}}}]}}},"href":"/library?id="}]}}}'); // eslint-disable-line
  });
});
