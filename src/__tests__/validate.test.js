/**
 * @file
 * Testing the validate.js file
 */

import {assert} from 'chai';
import {deepEqual} from 'assert';
import {validateRequest, validateResponse} from '../validate';

describe('Testing the validate.js file', () => {
  it('Should return empty array (= no errors)', () => {
    const name = 'search';
    const params = {q: 'ost'};

    const result = validateRequest(name, params);
    assert.isArray(result);
    assert.lengthOf(result, 0);
  });

  it('Should return empty array (= no errors)', () => {
    const name = 'unknown_name';
    const params = {q: 'ost'};

    const result = validateRequest(name, params);
    assert.isArray(result);
    assert.lengthOf(result, 0);
  });

  it('Should return array of error', () => {
    const name = 'search';
    const params = {
      q: 'ost',
      test: 'hest'
    };
    const expected = [{"property":"instance","message":"additionalProperty \"test\" exists in instance when not allowed","schema":{"type":"object","required":["q"],"additionalProperties":false,"properties":{"fields":{"example":["title","creator","pid"],"description":"Which fields to return. Limiting the fields can also yield a performance improvement.\n\nThe entire list of possible fields can be seen on https://raw.githubusercontent.com/DBCDK/serviceprovider/master/doc/work-context.jsonld\n\nIf `fields` are omitted, only the collection-field, and the fields from DKABM and BriefDisplay is returned.\n","type":"array","items":{"type":"string"}},"access_token":{"type":"string","description":"Access token from the OAuth2 server","example":"qwerty"},"pretty":{"description":"whether to prettyprint the resulting json","type":"boolean","example":true},"timings":{"description":"whether to include timings in the resulting json","type":"boolean","example":true},"createTest":{"description":"name of test to create, or \"random\" for random name, or \"mockfile\" for writing mockfile.","type":"string","example":"random","noSwag":true},"callback":{"type":"string","noSwag":true},"q":{"example":"harry AND potter","description":"Query to search for. | The query is expressed in CQL, see https://en.wikipedia.org/wiki/Contextual_Query_Language\nA guide to CQL in danish, with list of the indexes available in this API is available on http://www.danbib.dk/broend3_soeg","type":"string"},"offset":{"example":0,"description":"Starting position in search result","type":"integer","minimum":0},"limit":{"example":10,"description":"maximum number of results returned","minimum":1,"maximum":50,"type":"integer"},"sort":{"example":"rank_title","description":"Order/ranking of results. This correspond to the `sort` parameter of opensearch, which, at the time of writing, can take values such as  `rank_title`, `rank_general`, `rank_main_title`, `rank_subject`, `rank_verification` (title and creator), `rank_creator`, `rank_none`, `date_descending`, `article_date_descending`, `acquisitionDate_descending`, and `random`.","type":"string"},"profile":{"example":"opac","description":"Optional search profile, it's passed directly to OpenSearch. In OpenSearch it's used to determine which works should be returned. The profile needs to be defined in VIP in order to use it.","type":"string"}}},"instance":{"q":"ost","test":"hest"},"name":"additionalProperties","argument":"test","stack":"instance additionalProperty \"test\" exists in instance when not allowed"}]; // eslint-disable-line
    const result = validateRequest(name, params);
    assert.isArray(result);
    assert.lengthOf(result, 1);
    deepEqual(expected, result);
  });
});

describe('Testing ValidateResponse', () => {
  it('Should return empty array (= no errors)', () => {
    const name = 'suggest';
    const response = [{term: 'Harry Potter og De Vises Sten'}, {term: 'Harry Potter og Hemmelighedernes Kammer'}];
    const result = validateResponse(name, response);
    assert.isArray(result);
    assert.lengthOf(result, 0);
  });
  it('Should return error array', () => {
    const name = 'suggest';
    const response = [{term: 1234}, {term: 'Harry Potter og Hemmelighedernes Kammer'}];
    const result = validateResponse(name, response);
    assert.isArray(result);
    assert.lengthOf(result, 1);
  });
  it('Should return error array caused by extra properties', () => {
    const name = 'suggest';
    const response = [{notSupported: true, term: 'Harry Potter og Hemmelighedernes Kammer'}];
    const result = validateResponse(name, response);
    assert.isArray(result);
    assert.lengthOf(result, 1);
  });
});
