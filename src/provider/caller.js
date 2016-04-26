'use strict';
import request from 'request';
import {sendRequest} from '../services/HTTPClient.js';

export default function caller(transformerMap, context) {
  context = Object.create(context);
  context.transformerMap = transformerMap;
  context.call = call;
  return context;
}

function call(name, params) {
  this.createTest = true;
  let outerCall = false;
  if(!this.requestId) {
    this.requestId = Math.random().toString(36).slice(2,8);
    outerCall = true;
  }

  let startTime = Date.now();
  let prom;
  let mockId;
  if(this.createTest && !this.mockData) {
    this.mockData = {};
  }

  if(this.transformerMap[name]) {
    prom = this.transformerMap[name](params, this);
  } else if(this[name] && this[name].url) {
    let url = this[name].url;
    if(this.mockData) {
      mockId = JSON.stringify([name, params]);
    }
    if(this.mockData && this.mockData[mockId]) {
      prom = new Promise(this.mockData[mockId]);
    } else if(typeof params === 'string') {
      prom = new Promise((resolve, reject) => 
          request.post(url, {form: {xml: params}}, 
            (err, _, data) => err ? reject(err) : resolve(data)));
    } else if(typeof params === 'object') {
      prom = sendRequest(url, params);
    } else {
      throw 'call error'
    }
  } else {
    throw 'call error'
  }
  prom.then(result => {
    if(this.createTest) {
      if(mockId) {
        this.mockData[mockId] = result;
      }
      if(outerCall) {
        createTest(name, params, context, result);
      }
    }
    console.log(name, this.requestId, Date.now() - startTime, typeof result);
    return result;
  });
  return prom;
};
function createTest(name, params, context, result) {
}
