'use strict';
/**
 * Calls to transformers, as well as requests to external services
 * are called through this file, which can spy on the results,
 * and optionally create unit-tests, look at timings etc.
 */
import request from 'request';
import * as BaseSoapClient from 'dbc-node-basesoap-client';
import fs from 'fs';

// Flag that allows createTest endpoint parameter
let testDev = process.env.TEST_DEV; // eslint-disable-line no-process-env
let mockFileName = process.env.MOCK_FILE; // eslint-disable-line no-process-env
let mockFile;

// Load mock-data if requested via environment
if (mockFileName) {
  if (fs.existsSync(mockFileName)) {
    mockFile = JSON.parse(fs.readFileSync(mockFileName));
  } else {
    mockFile = {};
  }
}


let randomId = () => Math.random().toString(36).slice(2, 8);

// function for escaping special regex characters
let regexEscape = s => s.replace(/[\\[\](\|)*?+.^$]/g, c => '\\' + c);
// these keys in entries in config contains information that needs to be removed from the test
let blacklist = ['salt', 'authid', 'authpassword', 'authgroupid', 'userpin', 'userid', 'password', 'group', 'user'];
/**
 * remove sensitive data from a string.
 * The sensitive data is paswords etc. given through the context.
 */
function censor(str, context) {
  // Identify strings that needs to be redacted
  let forbidden = {};
  for (let key in context) { // eslint-disable-line guard-for-in
    for (let i = 0; i < blacklist.length; ++i) {
      let word = context[key][blacklist[i]];
      if (word) {
        forbidden[word] = true;
      }
    }
  }
  // construct regex for global replacement in string
  let re = new RegExp('(' + Object.keys(forbidden).map(regexEscape).join('|') + ')', 'g');
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
  if (mockFile) {
    fs.writeFileSync(mockFileName, censor(JSON.stringify(mockFile, null, 2), test.context));
    return;
  }
  let source = `/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
'use strict';
import Provider from '../Provider.js';
import {assert, fail} from 'chai';

let provider = Provider();
let mockData = ${JSON.stringify(test.mockData)};

describe('Automated test of the ${test.name} endpoint', () => {
  it('expected response. ID:${test.requestId}, for ${JSON.stringify(test.params)}', (done) => {
    let context = ${JSON.stringify(test.context)};
    context.mockData = mockData;
    provider.execute('${test.name}', ${JSON.stringify(test.params)}, context)
      .then(result => {
        assert.deepEqual(result,
            ${JSON.stringify(test.result)});
        done();
      })
      .catch(result => {
        fail({throw: result}, ${JSON.stringify(test.result)});
        done();
      });
  });
});
`;
  source = censor(source, test.context);
  fs.writeFile(`${__dirname}/__tests__/autotest_${test.name}_${test.requestId}.js`, source);
}

class Context {
  constructor(transformerMap, data) {
    this.data = data;
    this.transformerMap = transformerMap;
    this.callsInProgress = 0;
    this.mockData = mockFile || (data.mockData ? Object.assign({}, data.mockData) : {});
    this.externalCallsInProgress = 0;
    this.externalTiming = 0;
    this.startTime = Date.now();
    this.requestId = randomId();
  }

  /**
   * Private method.
   *
   * This function is responsible for dispatching to transformers,
   * and different kind of api-requests. And also optionally
   * record timings and mock-data, and replay mock-data.
   *
   * @param type transformer, soapstring or basesoap
   * @param name name of service (or url)
   * @param params parameters for service
   * @returns promise with result
   */
  _call(type, name, params) {
    // take information about whether to create test/timings from outer call
    if (this.callsInProgress === 0) {
      this.createTest = params.createTest;
      this.timings = params.timings;
    }
    ++this.callsInProgress;

    let promise, mockId;

    if (type === 'transformer') {
      promise = this.transformerMap[name](params, this);
    }
    else {
      let url = (this.data[name] && this.data[name].url) || name;

      if (this.externalCallsInProgress === 0) {
        this.externalTiming -= Date.now();
      }
      ++this.externalCallsInProgress;

      mockId = JSON.stringify([name, params]); // key for mock data
      if (this.mockData[mockId]) {
        promise = new Promise(resolve => resolve(this.mockData[mockId]));
      } else if (type === 'soapstring') {
        promise = new Promise((resolve, reject) =>
            request.post(url, {form: {xml: params}},
              (err, _, data) => err ? reject(err) : resolve(data)));
      } else if (type === 'request') {
        promise = new Promise((resolve, reject) =>
          request(url, params, (err, response, data) =>
              (err || response.statusCode !== 200)
              ? reject(err || response)
              : resolve(data)));
      } else if (type === 'basesoap') {
        if (this.data[name].url) {
          url = this.data[name].url + '/' + name + '.wsdl';
        }
        let client = BaseSoapClient.client(url, params.config, null);
        promise = client.request(params.action, params.params, params.options);
      }
    }

    return promise.then(result => {
      --this.callsInProgress;
      if (type !== 'transformer') {
        --this.externalCallsInProgress;
        if (this.externalCallsInProgress === 0) {
          this.externalTiming += Date.now();
        }
      }
      if (testDev && (this.createTest || mockFileName) && type !== 'transformer') {
        this.mockData[mockId] = result;
      }
      if (testDev && this.createTest) { // save mock-data / create text-code
        if (this.callsInProgress === 0) {
          delete params.createTest;
          saveTest({name: name, params: params,
            context: this.data,
            mockData: this.mockData, result: result,
            requestId: this.requestId});
          result.createTest = this.requestId;
        }
      }
      if (this.callsInProgress === 0 && params.timings) {
        result.timings = {
          total: Date.now() - this.startTime,
          external: this.externalTiming
        };
      }
      return result;
    });
  }

  /**
   * This is a method on the context object,
   * which allows calling other transformers, and external endpoints.
   *
   * @param this the context
   * @param name the name of the endpoint
   * @param params the parameters to pass to the endpoint
   */
  call(name, params) {
    if (this.transformerMap[name]) {
      return this.transformer(name, params);
    }
    if (typeof params === 'object') {
      return this.query(name, params);
    }
    return this.soapstring(name, params);
  }

  transformer(name, params) {
    return this._call('transformer', name, params);
  }

  basesoap(name, params) {
    return this._call('basesoap', name, params);
  }

  query(name, params) {
    return this._call('request', name, {qs: params})
          .then(s => ({data: JSON.parse(s)}));
  }
  request(name, params) {
    return this._call('request', name, params);
  }
  soapstring(name, params) {
    return this._call('soapstring', name, params);
  }
}

/**
 * Add a call function to the context.
 */
export default function caller(transformerMap, contextData) {
  return new Context(transformerMap, contextData);
}
