'use strict';

import * as BaseSoapClient from 'dbc-node-basesoap-client';

/**
 * Constructs the object of parameters for OpenHoldingStatus holdings request.
 *
 * @param {Object} values Object with the necessary parameters
 * @return {Promise}
 */
function getHolding(client, values) {
  const params = {
    lookupRecord: {
      responderId: values.responderId,
      pid: values.pid
    }
  };
  return client.request('holdings', params, null, true);
}

export default function OpenHoldingstatus(config = null) {
  if (!config || !config.wsdl) {
    throw new Error('Expected config object but got null or no wsdl provided');
  }
  const holdingsClient = BaseSoapClient.client(config.wsdl, {}, '');

  return {
    getHolding: getHolding.bind(null, holdingsClient)
  };
}
