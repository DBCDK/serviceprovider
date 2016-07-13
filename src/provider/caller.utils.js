'use strict';

import fs from 'fs';
import request from 'request';

// Flag that allows createTest endpoint parameter
export const testDev = process.env.TEST_DEV; // eslint-disable-line no-process-env
export const mockFileName = process.env.MOCK_FILE; // eslint-disable-line no-process-env
let _mockFile;

// Load mock-data if requested via environment
if (mockFileName) {
  if (fs.existsSync(mockFileName)) {
    _mockFile = JSON.parse(fs.readFileSync(mockFileName));
  } else {
    _mockFile = {};
  }
}

export function promiseRequest(req) {
  return new Promise((resolve, reject) => {
    request(req, (err, res) => err ? reject(err) : resolve(res));
  });
}

/**
 * randomId
 * @returns {String}
 */
export const randomId = () => Math.random().toString(36).slice(2, 8);

// function for escaping special regex characters
const regexEscape = s => s.replace(/[\\[\](\|)*?+.^$]/g, c => '\\' + c);

// these keys in entries in config contains information that needs to be removed from the test
const blacklist = ['id', 'pin', 'ddbcmsapipassword', 'salt', 'authid', 'authpassword', 'authgroupid', 'userpin', 'userid', 'password', 'group', 'user'];

/**
 * remove sensitive data from a string.
 * The sensitive data is paswords etc. given through the context.
 */
function censor(str, context) {
  // Identify strings that needs to be redacted
  const forbidden = {};
  function blackListIterator(key, subkey) {
    if (context[key][subkey]) {
      forbidden[context[key][subkey]] = true;
    }
  }

  for (const key in context) { // eslint-disable-line guard-for-in
    if (context.hasOwnProperty(key)) {
      blacklist.forEach(blackListIterator.bind(null, key));
    }
  }

  // construct regex for global replacement in string
  const re = new RegExp('(' + Object.keys(forbidden).map(regexEscape).join('|') + ')', 'g');
  str = str.replace(re, 'XXXXX');

  // remove ncipPassword in results from openagency
  str = str.replace(/,\\"ncipPassword\\":{[^}]*}/g, '');
  return str;
}


/**
 * Utility function to write a unittest to a file.
 * The unit tests are typically saved `src/provider/__tests__/autotest_*.js`
 */
export function saveTest(test) {
  if (test.createTest === 'mockfile') {
    fs.writeFileSync(mockFileName, censor(JSON.stringify(_mockFile, null, 2), test.context));
    return;
  }

  const cleanedContext = {};
  for (const key1 in test.context) {
    cleanedContext[key1] = Object.assign({}, test.context[key1]);
    for (const key2 in cleanedContext[key1]) {
      if (blacklist.indexOf(key2) !== -1) {
        cleanedContext[key1][key2] = 'XXXXX';
      }
    }
  }

  let source = `/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props, indent */
// Request: ${test.name} ${JSON.stringify(test.params)}
'use strict';
import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = ${JSON.stringify(cleanedContext, null, 2)};`;
  source += censor(`
let provider = Provider();
let mockData = ${JSON.stringify(test.mockData, null, 2)};

describe('Automated test: ${test.filename}', () => {
  it('expected response. ID:${test.requestId}, for ${JSON.stringify(test.params)}', (done) => {
    context.mockData = mockData;
    provider.execute('${test.name}', ${JSON.stringify(test.params)}, context)
      .then(result => {
        assert.deepEqual(result,
            ${JSON.stringify(test.result, null, 2)});
        done();
      })
      .catch(result => {
        fail({throw: result}, ${JSON.stringify(test.result, null, 2)});
        done();
      });
  });
});
`, test.context);
  fs.writeFile(`${__dirname}/../transformers/__tests__/${test.filename}.js`, source);
}

export const mockFile = _mockFile;
