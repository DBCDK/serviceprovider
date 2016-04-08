'use strict';

/**
 * @file
 * Basic service provider. Discovers and initializes the transforms.
 */

import Transform from './lib/Transforms';
import recommendTransformer from './neoRecommendTransform.js';
import {suggestTransformer} from './neoSuggest.js';
import coverImageTransformer from './neoCoverImageTransform.js';

/**
 * Initialization of the provider and the underlying services.
 *
 * @param {Object} config Object containing the necessary parameters.
 *
 * @api public
 */
export default function Provider() {

  /**
   * Object with all clients registered on the provider
   * @type {{}}
   */
  const clients = {};

  /**
   * Map of all transforms registered on the provider
   * @type {Map}
   */
  const transforms = new Map();

  /**
   * Structure containing all the new transformers.
   */
  const transformerMap = {
    getRecommendations: recommendTransformer(),
    getSuggestions: suggestTransformer(),
    getCoverImageNeo: coverImageTransformer()
  };

  /**
   * Method for registering a single transform
   * @param transform
   */
  function registerTransform(transformObject) {
    const name = transformObject.event();
    if (transforms.has(name)) {
      throw new Error(`Event '${name}' already registered`);
    }
    const transform = Transform(transformObject, clients);
    transforms.set(name, transform);

    return transform;
  }

  /**
   * Method for registering a service client
   *
   * @param name
   * @param client
   */
  function registerServiceClient(name, client) {
    if (clients[name]) {
      throw new Error(`Client '${name}' already registered`);
    }
    clients[name] = client;

    return clients;
  }

  function trigger(event, params, context) {
    return transforms.get(event).trigger(params, context);
  }

  // we are going to reimplement a simpler mechanism to call the transformers
  function execute(name, params, context) { // eslint-disable-line no-unused-vars
    return transformerMap[name](params, context);
  }

  function availableTransforms() {
    let result = [];
    for (let key of transforms.keys()) {
      result.push(key);
    }
    result.push('getSuggestions');
    result.push('getCoverImageNeo');
    return result;
  }

  function hasTransformer(name) {
    return transformerMap.hasOwnProperty(name);
  }

  return {
    registerTransform,
    registerServiceClient,
    availableTransforms,
    execute,
    trigger,
    hasTransformer
  };
}
