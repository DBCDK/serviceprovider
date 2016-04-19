'use strict';

/**
 * @file
 * Basic service provider. Discovers and initializes the transforms.
 */

import recommendTransformer from './neoRecommendTransform.js';
import {suggestTransformer} from './neoSuggest.js';
import coverImageTransformer from './neoCoverImageTransform.js';
import openSearchWorkTransformer from './neoOpenSearchWorkTransformer.js';
import facetTransformer from './facets';
import searchTransformer from './search';
import workTransformer from './neoWorkTransformer';

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
    search: searchTransformer,
    facets: facetTransformer,
    getRecommendations: recommendTransformer(),
    getSuggestions: suggestTransformer(),
    getCoverImageNeo: coverImageTransformer(),
    getOpenSearchWorkNeo: openSearchWorkTransformer(),
    work: workTransformer()
  };

  // we are going to reimplement a simpler mechanism to call the transformers
  function execute(name, params, context) { // eslint-disable-line no-unused-vars
    return transformerMap[name](params, context);
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
