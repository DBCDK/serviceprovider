'use strict';

import * as BaseSoapClient from 'dbc-node-basesoap-client';

function getOpenAgency(client, values) {

  return values.id.map((val) => {
    return client.request('findLibrary', {
      agencyId: val
    }, {}, true);
  });
}

function getAgencyBranches(client, values) {

  return values.id.map((val) => {
    return client.request('pickupAgencyList', {
      agencyId: val
    }, {}, true);
  });
}

function searchOpenAgency(client, libraryType, values) {
  let params = {
    anyField: '?' + values.query + '?',
    libraryType: libraryType,
    pickupAllowed: 1
  };

  return client.request('findLibrary', params, {}, true);
}

function getOpenSearchProfile(client, params) {
  return client.request('openSearchProfileRequest', {
    agencyId: params.agencyId,
    profileName: params.profileName,
    profileVersion: 3,
    outputType: 'xml'
  }, {}, true);
}

/**
 * Setting the necessary parameters for the client to be usable.
 * The wsdl is only set if wsdl is null to allow setting it through
 * environment variables.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */
export default function OpenAgencyClient(config) {
  const libraryType = config.libraryType;
  const client = BaseSoapClient.client(config.wsdl, {});

  return {
    getOpenAgency: getOpenAgency.bind(null, client),
    getAgencyBranches: getAgencyBranches.bind(null, client),
    getOpenSearchProfile: getOpenSearchProfile.bind(null, client),
    searchOpenAgency: searchOpenAgency.bind(null, client, libraryType)
  };
}
