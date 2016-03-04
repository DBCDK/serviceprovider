'use strict';

import * as BaseSoapClient from 'dbc-node-basesoap-client';

/**
 * Constructs the object of parameters for search result request.
 *
 * @param {Object} value Object with parameters for getting a search result
 * @return {Promise}
 */
function getFacetResult(client, values) {
  const params = {
    query: values.query,
    stepValue: 0,
    start: 1,
    facets: values.facets
  };

  return client.request('search', params, null, true);
}

/**
 * Constructs the object of parameters for search result request.
 *
 * @param {Object} value Object with parameters for getting a search result
 * @return {Promise}
 */
function getSearchResult(client, values) {
  const params = {
    query: values.query,
    stepValue: values.stepValue,
    start: values.start,
    sort: values.sort,
    objectFormat: 'briefDisplay',
    facets: values.facets || {}
  };

  return client.request('search', params, null, true);
}

/**
 * Constructs the object of parameters for work request.
 *
 * @param {Object} value Object with parameters for getting a work
 * @return {Promise}
 */
function getWorkResult(client, values) {
  let opts = {};
  if (values.agency) {
    opts.agency = values.agency;
  }

  const params = {
    query: values.query,
    start: 1,
    stepValue: 1,
    allObjects: true,
    objectFormat: values.objectFormats || ['dkabm', 'briefDisplay'],
    relationData: values.getRelationData || 'full'
  };

  return client.request('search', params, opts, true);
}

/**
 * Setting the necessary paramerters for the client to be usable.
 * The wsdl is only set if wsdl is null to allow setting it through
 * environment variables.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */
export default function OpenSearch (config) {

  if (typeof config !== 'object') {
    throw new Error('A config object should be provided');
  }

  if (!config.wsdl) {
    throw new Error('A wsdl should be provided with the given config object');
  }

  if (!config.agency) {
    throw new Error('An agency should be provided with the given config object');
  }

  if (!config.profile) {
    throw new Error('An profile should be provided with the given config object');
  }


  const defaults = {
    agency: config.agency,
    profile: config.profile
  };

  const logger = config.logger || null;

  const opensearchClient = BaseSoapClient.client(config.wsdl, defaults, logger);

  return {
    getFacetResult: getFacetResult.bind(null, opensearchClient),
    getSearchResult: getSearchResult.bind(null, opensearchClient),
    getWorkResult: getWorkResult.bind(null, opensearchClient)
  };
}
