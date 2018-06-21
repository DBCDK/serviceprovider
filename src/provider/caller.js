/**
 * Calls to transformers, as well as requests to external services
 * are called through this file, which can spy on the results,
 * and optionally create unit-tests, look at timings etc.
 */
import * as BaseSoapClient from 'dbc-node-basesoap-client';
import {log} from '../utils';
import {
  testDev,
  mockFile,
  mockFileName,
  randomId,
  saveTest,
  promiseRequest
} from './caller.utils';
import moment from 'moment';

class Context {
  constructor(transformerMap, data) {
    this.data = data;
    this.transformerMap = transformerMap;
    this.callsInProgress = 0;
    this.mockData =
      mockFile || (data.mockData ? Object.assign({}, data.mockData) : {});
    this.externalCallsInProgress = 0;
    this.externalTiming = 0;
    this.startTime = Date.now();
    this.requestId = randomId();
  }

  _rectifyDateFormats(dataObj, fieldname = '') {
    // Iterate through object or array to fix dates.
    if (typeof dataObj === 'object' && Array.isArray(dataObj)) {
      dataObj = dataObj.map(item => this._rectifyDateFormats(item), fieldname);
    } else if (typeof dataObj === 'object' && dataObj) {
      Object.keys(dataObj).forEach(key => {
        dataObj[key] = this._rectifyDateFormats(dataObj[key], key);
      });
    } else if (typeof dataObj === 'string') {
      // We could include additional date/datetime formats here.
      try {
        // moment(dataObj, true).isValid();
        const date = moment(
          dataObj,
          ['YYYY-MM-DD', 'YYYY-MM-DD HH:MM:SS'],
          true
        );
        if (date.isValid()) {
          dataObj = date.format();
        }
      } catch (err) {
        // Parsing failed
      } // eslint-disable-line
    }

    return dataObj;
  }

  _callToPromise(type, name, params, mockId) {
    if (type !== 'transformer' && this.mockData[mockId]) {
      return Promise.resolve(this.mockData[mockId]);
    }

    let promise;
    const url = this.data.services[name] || name;
    switch (type) {
      case 'transformer': {
        promise = this.transformerMap[name](params, this).then(response =>
          this._rectifyDateFormats(response)
        );
        break;
      }

      case 'soapstring': {
        promise = promiseRequest({
          method: 'POST',
          url: url,
          form: {xml: params}
        });
        break;
      }

      case 'request': {
        params.url = url;
        promise = promiseRequest(params);
        break;
      }

      case 'basesoap': {
        const wsdl = `${this.data.services[name]}/${name}.wsdl`;
        const client = BaseSoapClient.client(wsdl, params.config, null);
        promise = client.request(params.action, params.params, params.options);
        break;
      }

      default: {
        promise = Promise.reject(new Error('unknown type!'));
        break;
      }
    }

    if (type !== 'transformer') {
      promise.catch(e => {
        log.error('Error calling underlying service', {type, name, params});
        throw e;
      });
    }

    return promise;
  }

  _handleAutoTests(type, name, params, mockId, result) {
    if ((this.createTest || mockFileName) && type !== 'transformer') {
      this.mockData[mockId] = result;
    }

    if (this.createTest && this.callsInProgress === 0) {
      // save mock-data / create text-code
      delete params.createTest;
      delete params.access_token;

      saveTest({
        filename: this.createTest,
        createTest: this.createTest,
        name: name,
        params: params,
        context: this.data,
        mockData: this.mockData,
        result: result,
        requestId: this.requestId
      });

      result.createTest = this.createTest;
    }
  }

  _handleCallPromiseResult(type, name, params, mockId, result) {
    log.trace(type, {name, params, result});

    --this.callsInProgress;

    if (type !== 'transformer') {
      --this.externalCallsInProgress;

      if (this.externalCallsInProgress === 0) {
        this.externalTiming += Date.now();
      }
    }

    if (testDev) {
      this._handleAutoTests(type, name, params, mockId, result);
    }

    if (this.callsInProgress === 0 && params.timings) {
      result.timings = {
        total: Date.now() - this.startTime,
        external: this.externalTiming
      };
    }

    if (this.externalCallsInProgress === 0 && type === 'transformer') {
      log.info('transformer-done', {
        name,
        paramsStr: JSON.stringify(params),
        timings: {
          total: Date.now() - this.startTime,
          external: this.externalTiming
        },
        clientId: this.data && this.data.app && this.data.app.clientId,
        statusCode: result.statusCode
      });
    }

    return result;
  }

  /**
   * Private method.
   *
   * This function is responsible for dispatching to transformers,
   * and different kind of api-requests. And also optionally
   * record timings and mock-data, and replay mock-data.
   *
   * @param {string} type transformer, soapstring or basesoap
   * @param {string} name of service (or url)
   * @param {Object} params parameters for service
   * @returns {Promise} promise with result
   */
  _call(type, name, params) {
    log.debug(type, {name, params});
    // take information about whether to create test/timings from outer call
    if (this.callsInProgress === 0) {
      this.createTest = params.createTest;
      this.timings = params.timings;
    }

    ++this.callsInProgress;

    const mockId = JSON.stringify([name, params]); // key for mock data

    if (type !== 'transformer') {
      if (this.externalCallsInProgress === 0) {
        this.externalTiming -= Date.now();
      }

      ++this.externalCallsInProgress;
    }

    return this._callToPromise(type, name, params, mockId).then(
      result =>
        this._handleCallPromiseResult(type, name, params, mockId, result), // resolve
      result => {
        throw this._handleCallPromiseResult(type, name, params, mockId, result);
      } // reject
    );
  }

  /**
   * This is a method on the context object,
   * which allows calling other transformers, and external endpoints.
   *
   * @param name the name of the endpoint
   * @param params the parameters to pass to the endpoint
   * @returns {Promise}
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
    return this._call('request', name, {qs: params}).then(s => ({
      data: JSON.parse(s)
    }));
  }

  request(name, params) {
    return this._call('request', name, params);
  }

  soapstring(name, params) {
    return this._call('soapstring', name, params);
  }

  /**
   * Wraps an object in a class that makes it easy to get a subobject, og
   * specific value.
   *
   * examples of usage:
   *
   *    let c = new Context(context);
   *    c.get('rank.url')); // return string value
   *    c.get('rank'); // returns object
   *
   * @param {object} context the context object to wrap
   */
  get(key, strict = false) {
    const keys = key.split('.');
    const value = keys.reduce((o, name) => o && o[name], this.data);

    if (strict && typeof value === 'undefined') {
      throw new Error(`Context error: Attempt to query "${key}" failed.`);
    }

    return value;
  }
}

/**
 * Add a call function to the context.
 */
export default function caller(transformerMap, contextData) {
  return new Context(transformerMap, contextData);
}
