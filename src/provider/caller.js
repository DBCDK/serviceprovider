'use strict';
import request from 'request';
import {sendRequest} from '../services/HTTPClient.js';
import fs from 'fs';
import utils from '../utils';

export default function caller(transformerMap, context) {
  context = Object.create(context);
  context.transformerMap = transformerMap;
  context.call = call;
  return context;
}

let randomId = () => Math.random().toString(36).slice(2,8); 
let testDev = process.env.TEST_DEV;

function call(name, params) {
  let promise;

  let mockId = JSON.stringify([name, params]);
  let outerCall = false;
  let startTime = Date.now();
  this.mockData = this.mockData || {};
  this.createTest = this.createTest || params.createTest;
  if(!this.requestId) {
    this.requestId = randomId();
    outerCall = true;
  }

  let isRestCall = !this.transformerMap[name] && this[name] && this[name].url;

  if(this.transformerMap[name]) {
    promise = this.transformerMap[name](params, this);

  } else if(isRestCall) {
    let url = this[name].url;
    if(this.mockData && this.mockData[mockId]) {
      promise = new Promise(resolve => resolve(this.mockData[mockId]));
    } else if(typeof params === 'string') {
      promise = new Promise((resolve, reject) => 
          request.post(url, {form: {xml: params}}, 
            (err, _, data) => err ? reject(err) : resolve(data)));
    } else if(typeof params === 'object') {
      promise = sendRequest(url, params);
    } else {
      throw 'call error'
    }
  } else {
    throw 'call error'
  }

  return promise.then(result => {
    if(testDev && this.createTest) {
      if(isRestCall) {
        this.mockData[mockId] = result;
      }
      if(outerCall) {
        delete params.createTest;
        saveTest({name: name, params: params, 
          context: Object.getPrototypeOf(this), 
          mockData: this.mockData, result: result,
          requestId: this.requestId});
      }
    }
    return result;
  });
};

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
