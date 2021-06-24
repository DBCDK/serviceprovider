const fs = require('fs');
const request = require('request');

// Flag that allows createTest endpoint parameter
const testDev = process.env.TEST_DEV; // eslint-disable-line no-process-env
const mockFileName = process.env.MOCK_FILE; // eslint-disable-line no-process-env
let mockFile;

// Load mock-data if requested via environment
if (mockFileName) {
  if (fs.existsSync(mockFileName)) {
    mockFile = JSON.parse(fs.readFileSync(mockFileName));
  } else {
    mockFile = {};
  }
}

function promiseRequest(req) {
  return new Promise((resolve, reject) => {
    request(req, (err, res, data) => (err ? reject(err) : resolve(data)));
  });
}

/**
 * randomId
 * @returns {String}
 */
const randomId = () =>
  Math.random()
    .toString(36)
    .slice(2, 8);

// function for escaping special regex characters
const regexEscape = s => s.replace(/[\\[\](\|)*?+.^$]/g, c => '\\' + c);

// these keys in entries in config contains information that are not secret
const whitelist = {
  services: {
    ddbcmsapi: true,
    moreinfo: true,
    openagency: true,
    openformat: true,
    holdingsitems: true,
    workpresentation: true,
    infomediaservice: true,
    openholdingstatus: true,
    PRODopenorder: true,
    openorder: true,
    opensearch: true,
    openuserstatus: true,
    rank: true,
    suggest: true,
    recommend: true,
    performance: true,
    cicero: true
  },
  access: ['moreinfo', 'infomedia'],
  cicero: {
    'DK-725300': {}
  },
  search: {
    agency: true,
    profile: true,
    collectionidentifiers: true
  },
  netpunkt: {},
  user: {
    id: true,
    libraryId: true,
    agency: true,
    isil: true
  },
  app: {
    orderpolicyrequester: true,
    orderSystem: true,
    ips: true
  }
};

/**
 * remove sensitive data from a string.
 * The sensitive data is paswords etc. given through the context.
 */
function censor(str, context) {
  // Identify strings that needs to be redacted
  const forbidden = {};
  for (const key in context) {
    for (const subkey in context[key]) {
      if (typeof context[key][subkey] === 'object') {
        for (const subsubkey in context[key][subkey]) {
          if (
            !whitelist[key] ||
            !whitelist[key][subkey] ||
            !whitelist[key][subkey][subsubkey]
          ) {
            forbidden[context[key][subkey][subsubkey]] = true;
          }
        }
      }
      if (!whitelist[key] || !whitelist[key][subkey]) {
        forbidden[context[key][subkey]] = true;
      }
    }
  }

  // construct regex for global replacement in string
  const re = new RegExp(
    '(' +
      Object.keys(forbidden)
        .map(regexEscape)
        .join('|') +
      ')',
    'g'
  );
  str = str.replace(re, 'XXXXX');

  // remove ncipPassword in results from openagency
  str = str.replace(/,\\"ncipPassword\\":{[^}]*}/g, '');
  return str;
}

/**
 * Utility function to write a unittest to a file.
 * The unit tests are typically saved `src/provider/__tests__/autotest_*.js`
 */
function saveTest(test) {
  if (test.createTest === 'mockfile') {
    fs.writeFileSync(
      mockFileName,
      censor(JSON.stringify(mockFile, null, 2), test.context)
    );
    return;
  }

  const cleanedContext = {};
  for (const key1 in test.context) {
    cleanedContext[key1] = Object.assign({}, test.context[key1]);
    for (const key2 in cleanedContext[key1]) {
      if (!whitelist[key1] || !whitelist[key1][key2]) {
        cleanedContext[key1][key2] = 'XXXXX';
      } else if (typeof cleanedContext[key1][key2] === 'object') {
        cleanedContext[key1][key2] = Object.assign(
          {},
          test.context[key1][key2]
        );
        for (const key3 in cleanedContext[key1][key2]) {
          if (!whitelist[key1][key2][key3]) {
            cleanedContext[key1][key2][key3] = 'XXXXX';
          }
        }
      }
    }
  }

  const threeMonthsFromNow = new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  // sort mock data by key in order to avoid large diff when regenerating tests
  const mockData = {};
  const mockKeys = Object.keys(test.mockData);
  mockKeys.sort();
  for (const key of mockKeys) {
    mockData[key] = test.mockData[key];
  }

  let source = censor(
    `// AUTOTEST GENERATOR: ${JSON.stringify({
      endpoint: test.name,
      params: test.params
    })}
//
//
// AUTOMATED UNIT TEST
// DO NOT EDIT
//
//
const endpoint = ${JSON.stringify(test.name)};
const params = ${JSON.stringify(test.params)};

const expected = ${JSON.stringify(test.result)};

const context = ${JSON.stringify(cleanedContext)};
const mockData = ${JSON.stringify(mockData)};

import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';
const provider = Provider();

describe('Automated test: ${test.filename}', () => {
  it('has same result as recorded (in ${test.filename})', () => {
    assert(Date.now() < +new Date('${threeMonthsFromNow}'), 'Please recreate the automatically generated unit tests, such that the mock data does not come out of sync with the actual services. See README.md for details.');
    context.mockData = mockData;
    return provider.execute(endpoint, params, context)
      .then(result => {
        assert.deepEqual(result, expected);
      })
  });
});
`,
    test.context
  );

  // remove timings in mocked data, to avoid big diff when regenerating test
  source = source
    .replace(
      /\\"time\\":{\\"\$\\":\\"\d+[.]\d+\\"}/g,
      `\\"time\\":{\\"$\\":\\"0.1\\"}`
    )
    .replace(/\\"time\\": \d+}/g, `\\"time\\": 10}`)
    .replace(/\\"stime\\": \d+,/g, `\\"stime\\": 10,`)
    .replace(/\\"qtime\\": \d+,/g, `\\"qtime\\": 10,`)
    .replace(
      /\\"trackingId\\":{\\"\$\\":\\"[^"]+"}/g,
      `\\"trackingId\\":{\\"$\\":\\"os:2017-12-24...\\"}`
    );

  fs.writeFile(
    `${__dirname}/../transformers/__tests__/${test.filename}.js`,
    source,
    err => {
      if (err) throw err;
      console.log('The file has been saved!');
    }
  );
}

module.exports = {
  testDev,
  mockFileName,
  mockFile,
  promiseRequest,
  randomId,
  saveTest
};
