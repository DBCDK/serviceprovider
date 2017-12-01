/**
 * @file
 * Description...
 */
import {assert} from 'chai';
import * as IsilUtils from './../isil.utils';

describe('Testing the methods in isil.utils.js', () => {
  it('ISIL from ID', () => {
    const id = '726500';
    const expected = 'DK-726500';

    const result = IsilUtils.getIsilFromId(id);
    assert.equal(result, expected);
  });

  it('ISIL from ISIL', () => {
    const id = 'DK-726500';
    const expected = 'DK-726500';

    const result = IsilUtils.getIsilFromId(id);
    assert.equal(result, expected);
  });

  it('Object should be returned if not a string', () => {
    const id = {};
    const expected = {};

    const result = IsilUtils.getIsilFromId(id);
    assert.equal(typeof result, typeof expected);
  });

  it('ID from ISIL', () => {
    const isil = 'DK-726500';
    const expected = '726500';

    const result = IsilUtils.getIdFromIsil(isil);
    assert.equal(result, expected);
  });

  it('ID from ID', () => {
    const isil = '726500';
    const expected = '726500';

    const result = IsilUtils.getIdFromIsil(isil);
    assert.equal(result, expected);
  });

  it('Object should be returned if not a string', () => {
    const isil = {};
    const expected = {};

    const result = IsilUtils.getIdFromIsil(isil);
    assert.equal(typeof result, typeof expected);
  });
});
