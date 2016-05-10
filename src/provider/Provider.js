'use strict';

/**
 * @file
 * Basic service provider. Discovers and initializes the transforms.
 */

import suggestTransformer from './suggest.js';
import coverImageTransformer from './neoCoverImageTransform.js';
import openSearchWorkTransformer from './neoOpenSearchWorkTransformer.js';
import facetTransformer from './facets';
import searchTransformer from './search';
import librariesTransformer from './libraries';
import userTransformer from './user';
import orderTransformer from './order';
import workTransformer from './neoWorkTransformer';
import availabilityTransformer from './availability';
import {ddbcms, news, events} from './ddbcms';
import caller from './caller';
import {testTransformer} from './testTransformer.js';
import recommendTransformer from './recommend';

/**
 * Initialization of the provider and the underlying services.
 *
 * @param {Object} config Object containing the necessary parameters.
 *
 * @api public
 */
export default function Provider() {
  /**
   * Structure containing all the new transformers.
   */
  const transformerMap = {
    ddbcms: ddbcms,
    events: events,
    news: news,
    search: searchTransformer,
    libraries: librariesTransformer,
    facets: facetTransformer,
    recommend: recommendTransformer,
    suggest: suggestTransformer,
    getCoverImageNeo: coverImageTransformer,
    getOpenSearchWorkNeo: openSearchWorkTransformer,
    user: userTransformer,
    order: orderTransformer,
    work: workTransformer,
    test: testTransformer,
    availability: availabilityTransformer
  };

  // we are going to reimplement a simpler mechanism to call the transformers
  function execute(name, params, context) { // eslint-disable-line no-unused-vars
    return caller(transformerMap, context).call(name, params);
  }

  function availableTransforms() {
    return Object.keys(transformerMap);
  }

  function hasTransformer(name) {
    return transformerMap.hasOwnProperty(name);
  }

  return {
    availableTransforms,
    execute,
    hasTransformer
  };
}
