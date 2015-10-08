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
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{"per":{"per":{"label":{"type":"a","key":null,"ref":null,"props":{"href":"/library/suggest?text=per","children":"Biblioteker"},"_owner":null,"_store":{}},"weight":0,"data":[{"imageComp":{"type":"div","key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"text":{"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h6","key":null,"ref":null,"props":{"children":""},"_owner":null,"_store":{}},{"type":"h6","key":null,"ref":null,"props":{"className":"subheader","children":[""," ","-"," ","0000"," ","by"]},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}},"href":"/library?id="}]}}}'); // eslint-disable-line

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
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{"per":{"per":{"label":{"type":"a","key":null,"ref":null,"props":{"href":"/library/suggest?text=per","children":"Biblioteker"},"_owner":null,"_store":{}},"weight":0,"data":[{"imageComp":{"type":"div","key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"text":{"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h6","key":null,"ref":null,"props":{"children":""},"_owner":null,"_store":{}},{"type":"h6","key":null,"ref":null,"props":{"className":"subheader","children":[""," ","-"," ",null," ","by"]},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}},"href":"/library?id="}]}}}'); // eslint-disable-line

    LibrarySuggest.onTextfieldUpdatedResponse({index: 'per', isEmpty: false, query: 'per', docs: [
      {
        library: {
          navn: '',
          adresse: '',
          id: ''
        }
      }
    ]});
    assert.equal(JSON.stringify(LibrarySuggest.store.data), '{"per":{"per":{"label":{"type":"a","key":null,"ref":null,"props":{"href":"/library/suggest?text=per","children":"Biblioteker"},"_owner":null,"_store":{}},"weight":0,"data":[{"imageComp":{"type":"div","key":null,"ref":null,"props":{},"_owner":null,"_store":{}},"text":{"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h6","key":null,"ref":null,"props":{"children":""},"_owner":null,"_store":{}},{"type":"h6","key":null,"ref":null,"props":{"className":"subheader","children":[""," ",""," ",null," ",null]},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}},"href":"/library?id="}]}}}'); // eslint-disable-line
  });
});
