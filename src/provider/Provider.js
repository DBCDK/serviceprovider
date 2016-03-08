'use strict';

/**
 * @file
 * Basic service provider. Discovers and initializes the transforms.
 */

import Transform from './lib/Transforms';

/**
 * Initialization of the provider and the underlying services.
 *
 * @param {Object} config Object containing the necessary parameters.
 * @param {Object} logger logger object with methods for logging.
 *
 * @api public
 */
export default function Provider(logger) {

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
   * Method for registering a single transform
   * @param transform
   */
  function registerTransform(transformObject) {
    const name = transformObject.event();
    if (transforms.has(name)) {
      throw new Error(`Event '${name}' already registered`);
    }
    const transform = Transform(transformObject, clients, logger);
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

  function availableTransforms() {
    return transforms.keys();
  }

  return {
    registerTransform,
    registerServiceClient,
    availableTransforms,
    trigger
  };
}
