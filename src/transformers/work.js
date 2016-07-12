'use strict';

import moreinfo21 from './moreinfo-2.1';
import moreinfo26 from './moreinfo';
import openSearchWorkTransformer from './opensearchGetObject';
import searchTransformer from './opensearchSearch';
import {checkResponseForErrorCodes, collectDataFromServices, handleFieldsRequest, populateEnvelopeData} from './utils/work.utils';
import _ from 'lodash';
import {log} from '../utils';

const requestMethod = {
  MOREINFO: 'moreinfo',
  SEARCH: 'search',
  GETOBJECT: 'getobject'
};

export function workRequest(request) {
  const state = {};
  if (_.has(request, 'pids') && request.pids.length > 0) {
    state.pid = request.pids[0]; // saves pid for use in responder.
    state.pids = request.pids;
  }

  let transformedRequests = {};

  if (_.has(request, 'fields')) {
    transformedRequests = handleFieldsRequest(request, transformedRequests);
  }
  else {
    // Default:
    // Return dkabm, briefdisplay and relations from getObject
    // This should be default behaviour for getObject with no fields!
    transformedRequests.getobject = request;
  }
  return {
    transformedRequest: transformedRequests,
    state: state
  };
}

export function workResponse(response, context, state) { // eslint-disable-line no-unused-vars
  let envelope = {
    statusCode: 200,
  };

  // loop over at most three promises (getObject, search and moreInfo):
  for (let i = 0; i < response.length; i++) {
    const resp = response[i];

    // evaluate the statusCode for getObject and moreInfo
    const errornous = checkResponseForErrorCodes(resp);
    if (errornous) {
      // Setting error envelope if found!
      envelope = errornous;
      break;
    }

    // Set number of data elements if not done in previous iteration
    if (!envelope.data) {
      // Damn, this feel hacked.
      // But if you just do 'let x = Array(3).fill({})', you will get an array with the same
      // object three times. So if you add to x[0], you will also add to x[1] and x[2].
      // Not exactly what I expected.
      if (resp.data || (resp.length > 0 && resp[0].data)) {
        envelope = populateEnvelopeData(resp, envelope);
      }
      else {
        // Here be dragons!
        // The response does not contain any data - I don't think this is a good thing,
        // but i cant be certain. It might be that the call just returned no data - ie nothing was found.
        // To be sure, i'll return 'ok', and empty data.
        envelope.data = [];
        return envelope;
      }
    }

    const service = state.services[i];
    envelope = collectDataFromServices(service, resp, envelope);
  }

  return envelope;
}

export default (request, context) => {
  if (!request.pids || request.pids.length === 0) {
    const error = {
      statusCode: 400,
      error: '\'pids\' not present in request'
    };

    return Promise.resolve(error);
  }

  const {transformedRequest: params, state: state} = workRequest(request);

  const services = []; // state-data for knowing which servies is called and in which order.
  const promises = [];

  if (_.has(params, requestMethod.MOREINFO)) {
    // query moreinfo through its transformer.

    // HACK: This is a hack to be able to switch between moreinfo 2.1 and 2.6 just by changing the url in the context.
    const moreinfoUrl = context.get('services.moreinfo');
    log.info('moreinfoUrl: ' + moreinfoUrl);
    const moreInfoPromise = moreinfoUrl.includes('2.1') ? moreinfo21(params.moreinfo, context) : moreinfo26(params.moreinfo, context);

    promises.push(moreInfoPromise);
    services.push(requestMethod.MOREINFO);
  }

  if (_.has(params, requestMethod.GETOBJECT)) {
    // query opensearch through getObject method
    const getObjectPromise = openSearchWorkTransformer(params.getobject, context);
    promises.push(getObjectPromise);
    services.push(requestMethod.GETOBJECT);
  }

  if (_.has(params, requestMethod.SEARCH)) {
    // query opensearch through search method
    const searchPromises = [];
    for (let i = 0; i < params.search.length; i++) {
      const prom = searchTransformer(params.search[i], context);
      searchPromises.push(prom);
    }
    promises.push(Promise.all(searchPromises));
    services.push(requestMethod.SEARCH);
  }

  state.services = services;

  return Promise.all(promises).then(body => {
    return workResponse(body, context, state);
  }).then(result => {
    const dataUrls = (request.fields || []).filter(key => key.startsWith('coverDataUrl'));
    if (dataUrls.length === 0) {
      return result;
    }
    let requests = [];
    for (const field of dataUrls) {
      for (let i = 0; i < result.data.length; ++i) {
        const url = (result.data[i][field.replace('coverDataUrl', 'coverUrl')] || [])[0];
        if (url) {
          requests.push({
            url,
            field,
            i
          });
        }
      }
    }
    requests = requests.map(req =>
      context.request('http:' + req.url, {encoding: null}).then(o => {
        result.data[req.i][req.field] = `data:image/jpeg;base64,${new Buffer(o, 'binary').toString('base64')}`;
      }));

    return Promise.all(requests).then(any => result);
  });
};
