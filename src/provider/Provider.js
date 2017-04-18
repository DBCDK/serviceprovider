

/**
 * @file
 * Basic service provider. Discovers and initializes the transforms.
 */

import suggestTransformer from '../transformers/suggest.js';
import facetTransformer from '../transformers/facets';
import searchTransformer from '../transformers/search';
import metasearchTransformer from '../transformers/metasearch';
import librariesTransformer from '../transformers/libraries';
import userTransformer from '../transformers/user';
import renewTransformer from '../transformers/renew';
import orderTransformer from '../transformers/order';
import workTransformer from '../transformers/work';
import availabilityTransformer from '../transformers/availability';
import {ddbcms, news, events} from '../transformers/ddbcms';
import caller from './caller';
import {testTransformer} from '../transformers/testTransformer.js';
import recommendTransformer from '../transformers/recommend';
import rankTransformer from '../transformers/rank';

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
    renew: renewTransformer,
    search: searchTransformer,
    metasearch: metasearchTransformer,
    libraries: librariesTransformer,
    facets: facetTransformer,
    recommend: recommendTransformer,
    rank: rankTransformer,
    suggest: suggestTransformer,
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
