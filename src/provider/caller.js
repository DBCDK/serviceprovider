'use strict';
/**
 * Calls to transformers, as well as requests to external services
 * are called through this file, which can spy on the results,
 * and optionally create unit-tests, look at timings etc.
 */
import request from 'request';
import {sendRequest} from '../services/HTTPClient.js';
import fs from 'fs';

// Flag that allows createTest endpoint parameter
let testDev = process.env.TEST_DEV; // eslint-disable-line no-process-env

let randomId = () => Math.random().toString(36).slice(2, 8);

/**
 * Utility function to write a unittest to a file.
 * The unit tests are typically saved `src/provider/__tests__/autotest_*.js`
 */
function saveTest(test) {
  let source = `  'use strict';
  import Provider from '../Provider.js';
  import {expect, assert} from 'chai';

  let provider = Provider();
  let mockData = ${JSON.stringify(test.mockData)}

  describe('Automated test of the ${test.name} endpoint', () => {
    it('expected response. ID:${test.requestId}, for ${JSON.stringify(test.params)}', (done) => {
      let context = ${JSON.stringify(test.context)};
      context.mockData = mockData;
      provider.execute("${test.name}", ${JSON.stringify(test.params)}, context)
        .then(result => {
          assert.deepEqual(result,
              ${JSON.stringify(test.result)});
          done();
        });
    })
  });`;
  fs.writeFile(`${__dirname}/__tests__/autotest_${test.name}_${Date.now()}.js`, source);
}

/**
 * This is a method on the context object,
 * which allows calling other transformers, and external endpoints.
 *
 * @param this the context
 * @param name the name of the endpoint
 * @param params the parameters to pass to the endpoint
 */
function call(name, params) {
  let promise, outerCall, startTime;

  let mockId = JSON.stringify([name, params]); // key for mock data
  this.mockData = this.mockData || Object.assign({}, this.data.mockData || {}); // used for recording/playing mock data
  let isRestCall = !this.transformerMap[name] && this.data[name] && this.data[name].url;
  if (!this.requestId) {
    this.requestId = randomId(); // identifier for request, useful for grepping etc.
    outerCall = true;
    this.createTest = params.createTest;
    this.timings = params.timings;
    this.externalCallsInProgress = 0;
    this.externalTiming = 0;
    startTime = Date.now();
  }

  if (this.transformerMap[name]) { // do call the actual transformer
    promise = this.transformerMap[name](params, this);

  }
  else if (isRestCall) { // make a request to an external service
    if (this.timings) {
      if (this.externalCallsInProgress === 0) {
        this.externalTiming -= Date.now();
      }
      ++this.externalCallsInProgress;
    }
    let url = this.data[name].url;
    if (this.mockData && this.mockData[mockId]) {
      promise = new Promise(resolve => resolve(this.mockData[mockId]));
    }
    else if (typeof params === 'string') {
      promise = new Promise((resolve, reject) =>
          request.post(url, {form: {xml: params}},
            (err, _, data) => err ? reject(err) : resolve(data)));
    }
    else if (typeof params === 'object') {
      promise = sendRequest(url, params);
    }
    else { // should never happen, can only occur if call is called with wrong parameters
      throw 'call error: wrong parameters to endpoint';
    }
  }
  else { // should never happen, - the endpoint does not exist (or has no endpoint-url defined in config)
    throw 'call error: no such endpoint';
  }

  return promise.then(result => {
    if (this.timings && isRestCall) {
      --this.externalCallsInProgress;
      if (this.externalCallsInProgress === 0) {
        this.externalTiming += Date.now();
      }
    }
    if (testDev && this.createTest) { // save mock-data / create text-code
      if (isRestCall) {
        this.mockData[mockId] = result;
      }
      if (outerCall) {
        delete params.createTest;
        saveTest({name: name, params: params,
          context: this.data,
          mockData: this.mockData, result: result,
          requestId: this.requestId});
      }
    }
    if (outerCall && params.timings) {
      result.timings = {
        total: Date.now() - startTime,
        external: this.externalTiming
      };
    }
    return result;
  });
}

/**
 * Add a call function to the context.
 */
export default function caller(transformerMap, contextData) {
  let context = {};
  context.data = contextData;
  context.transformerMap = transformerMap;
  context.call = call;
  return context;
}
