'use strict';

import {assert} from 'chai';
import {timeSince} from '../Time.util.js';

describe('Test the Time.util file', () => {
  it('Should calculate years since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2012-10-01T11:26:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '3 år', 'Got string as expected');
  });

  it('Should calculate months since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-07-01T11:26:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '3 måneder', 'Got string as expected');
  });

  it('Should calculate days since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-10-01T11:26:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '3 dage', 'Got string as expected');
  });

  it('Should calculate hours since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-10-04T08:26:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '3 timer', 'Got string as expected');
  });

  it('Should calculate minutes since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-10-04T11:23:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '3 minutter', 'Got string as expected');
  });

  it('Should calculate seconds since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-10-04T11:26:33.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '3 sekunder', 'Got string as expected');
  });

  it('Should calculate years since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2014-10-01T11:26:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '1 år', 'Got string as expected');
  });

  it('Should calculate months since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-09-01T11:26:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '1 måned', 'Got string as expected');
  });

  it('Should calculate days since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-10-03T11:26:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '1 dag', 'Got string as expected');
  });

  it('Should calculate hours since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-10-04T10:26:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '1 time', 'Got string as expected');
  });

  it('Should calculate minutes since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-10-04T11:25:36.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '1 minut', 'Got string as expected');
  });

  it('Should calculate seconds since ISO-Date correctly', () => {
    const toDateString = '2015-10-04T11:26:36.000Z';
    const fromDateString = '2015-10-04T11:26:35.000Z';
    const timeSinceString = timeSince(fromDateString, toDateString);
    assert.strictEqual(timeSinceString, '1 sekund', 'Got string as expected');
  });
});
