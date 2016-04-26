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
let generatedTests = [];
let testDev = process.env.TEST_DEV;
console.log('testDev', testDev);

function call(name, params) {
  let promise;

  let mockId = JSON.stringify([name, params]);
  let outerCall = false;
  let startTime = Date.now();
  if(!this.requestId) {
    this.requestId = randomId();
    outerCall = true;
    if(this.createTest ) {
      this.mockRecord = {};
    }
  }

  let isRestCall = !this.transformerMap[name] && this[name] && this[name].url;

  if(this.transformerMap[name]) {
    promise = this.transformerMap[name](params, this);

  } else if(isRestCall) {
    let url = this[name].url;
    if(this.mockData) {
      if(!this.mockData[mockId]) {
        throw {error: 'missing mockdata', mockId: mockId};
      }
      promise = new Promise(this.mockData[mockId]);
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
    if(testDev && params.createTest) {
      if(mockId) {
        this.mockRecord[mockId] = result;
      }
      if(outerCall) {
        delete params.createTest;
        saveTest({name: name, params: params, context: this.prototype, 
          mockData: this.mockRecord, result: result});
      }
    }
    console.log(name, this.requestId, Date.now() - startTime, typeof result);
    return result;
  });
};

function saveTest(test) {
  let mockDataFile = __dirname + '/mockData.json';
  let mockData = JSON.parse(fs.readFileSync(mockDataFile, 'utf8'));
  Object.assign(mockData, test.mockData);
  let source = `'use strict';
  import Provider from '../Provider.js';
  import {expect, assert} from 'chai';
  import fs from 'fs';

  let mockData = JSON.parse(fs.readFileSync('../mockData.json'));
  let provider = Provider();

  describe('Automated test of the ${test.name} endpoint', () => {
    it('returns expected response for ${JSON.stringify(test.params)}', (done) => {
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
  fs.writeFile(mockDataFile, JSON.stringify(mockData, null, ""));
  fs.writeFile(`${__dirname}/__tests__/autotest_${test.name}_${Date.now()}.js`);
}
