'use strict';


import autoRequire from '../lib/AutoRequire.js';
import path from 'path';
import {expect} from 'chai';

describe('Testing the Events methods', () => {
  it('requires all files in folder', () => {
    const result = autoRequire(path.join(__dirname, 'autorequirefolder'), 'mock.js');
    expect(result).to.deep.equal(['mock one is required', 'mock two is required']);
  });
});
