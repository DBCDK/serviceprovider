'use strict';

import * as BaseSoapClient from 'dbc-node-basesoap-client';

/**
 * Constructs the objects of parameters for this type of request.
 *
 * @param {Array} an array of one or more identifiers (faust)
 * @return {Promise} A promise is returned
 */
function getMoreInfoResult(client, identifiers) {
  let params = {};
  params.identifier = identifiers.identifiers.map((id) => {
    return {faust: id};
  });

  return client.request('moreInfo', params, null, true);
}

/**
 * Setting the necessary parameters for the client to be usable.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */
export default function MoreInfoClient(config) {
  if (typeof config !== 'object') {
    throw new Error('A config object should be provided');
  }

  if (!config.wsdl) {
    throw new Error('A wsdl should be provided with the given config object');
  }

  if (!config.user || !config.group || !config.password) {
    throw new Error('Authentication user, group and password should be provided with the given config object');
  }

  const defaults = {
    authentication: {
      authenticationUser: config.user,
      authenticationGroup: config.group,
      authenticationPassword: config.password
    }
  };
  const client = BaseSoapClient.client(config.wsdl, defaults, '');

  return {
    getMoreInfoResult: getMoreInfoResult.bind(null, client)
  };
}

