/**
 * @file - handle information from vip. @see openagency.addi.dk
 * Internally (DBC) we use vipcore : http://vipcore.iscrum-vip-prod.svc.cloud.dbc.dk:8080/1.0/api
 * For documentation @see https://dbcjira.atlassian.net/wiki/spaces/IS/pages/884998162/VipCore+API+beskrivelse
 *
 * Bssically this transformer gets ALL pickupagencies and orderparameters from vipcore. When a single
 * library/branch is requested it returns a filtered result of the pickupagencies.
 *
 */

import * as IsilUtils from './utils/isil.utils';

const timeout = 60 * 60 * 1000;
let cache;
let timestamp;

/**
 * Insert orderparameters in the list of pickupagencies.
 *
 * @param results
 *   all the pickupagencies retrieved from vipcore
 * @param agencyKeys
 *    agencyIds of all pickupagencies
 * @param orderParameters
 *    order parameters (eg. userid, username ...) to insert
 * @returns {*}
 */
function orderParameterPromiseHandler(results, agencyKeys, orderParameters) {
  const agencyOrderParameters = {};
  for (let i = 0; i < agencyKeys.length; ++i) {
    agencyOrderParameters[agencyKeys[i]] = orderParameters[i];
  }
  for (let i = 0; i < results.length; ++i) {
    results[i].orderParameters = agencyOrderParameters[results[i].agencyId];
  }
  cache = results;
  timestamp = Date.now();
  return results;
}

/**
 * Do a call to vipcore service endpoint
 * e.g http://vipcore.iscrum-vip-prod.svc.cloud.dbc.dk/1.0/api/service/710100/userOrderParameters/
 * Parse and return orderparamters from service
 *
 * @param context
 * @param agencyId
 * @returns {*}
 */
function getOrderParameters(context, agencyId) {
  const service = context.get('services.openagency');
  const path = `/service/${agencyId}/userOrderParameters/`;
  const api = service + path;

  return context.call(api, {}).then(response => {
    const result = [];

    // @TODO datacheck - service may return an error e.g service_unavailable

    let parameters = response.data.userOrderParameters.userParameter
      ? response.data.userOrderParameters.userParameter
      : null;

    // map selected parameters
    const parameterMap = {
      userName: 'name',
      userAddress: 'address',
      userMail: 'email',
      userTelephone: 'phone'
    };

    if (parameters) {
      for (let i = 0; i < parameters.length; ++i) {
        if (parameters[i].parameterRequired === true) {
          let parameter = parameters[i].userParameterType;
          parameter = parameterMap[parameter] || parameter;
          result.push(parameter);
        }
      }
    }

    return Promise.resolve(result);
  });
}

/**
 * Parse response from findlibrary/all endpoint. Filter out ncip info.
 * Bind getOrderParameters to add order parameters to result.
 * @param context
 * @param response
 * @returns {Promise<unknown[]>}
 */
function openAgencyPromiseHandler(context, response) {
  const results = response.data.pickupAgency.map(library => {
    const result = {};

    // filter out ncip info
    Object.keys(library)
      .filter(
        libraryKey =>
          libraryKey !== '@' &&
          libraryKey.indexOf('ncip') !== 0 &&
          library[libraryKey] !== null
      )
      .forEach(key => (result[key] = library[key]));

    // check if mainagencyid is set - it might not be the case for single branch
    // libraries
    if (!result.agencyId) {
      result.agencyId = result.branchId;
    }

    return result;
  });

  // collect agencyids as keys for getOrderParameters service call
  const agencies = {};
  for (let i = 0; i < results.length; ++i) {
    agencies[results[i].agencyId] = true;
  }
  const agencyKeys = Object.keys(agencies);
  // iterate agencyIds - get orderparameters
  const agencyPromises = agencyKeys.map(getOrderParameters.bind(null, context));
  return Promise.all(agencyPromises).then(
    orderParameterPromiseHandler.bind(null, results, agencyKeys)
  );
}

/**
 * Do a call to findlibrary/all endpoint.
 * @param context
 * @returns {*}
 */
function getLibraries(context) {
  const service = context.get('services.openagency');
  const path = '/findlibrary/all';
  const api = service + path;

  return context
    .call(api, {})
    .then(response => openAgencyPromiseHandler(context, response));
}

/**
 * Handle the request.
 * @param params
 *   May hold one or more branch/agency - ids to filter on
 * @param context
 *   @see context.json
 * @param libraries
 *   a list of pickupagencies - from service or cache
 * @returns {{data, statusCode: number}}
 */
function getLibrariesTransformPromiseHandler(params, context, libraries) {
  if (Date.now() - timestamp > timeout) {
    setTimeout(() => getLibraries(context), 1000);
    timestamp = Date.now();
  }

  if (Array.isArray(params.agencyIds)) {
    const agencies = {};
    for (let i = 0; i < params.agencyIds.length; ++i) {
      agencies[IsilUtils.getIdFromIsil(params.agencyIds[i])] = true;
    }

    libraries = libraries.filter(o => agencies[o.agencyId]);
  }

  if (Array.isArray(params.branchIds)) {
    const branches = {};
    for (let i = 0; i < params.branchIds.length; ++i) {
      branches[IsilUtils.getIdFromIsil(params.branchIds[i])] = true;
    }

    libraries = libraries.filter(o => branches[o.branchId]);
  }

  return {statusCode: 200, data: libraries};
}

/**
 * Entrypoint for this transformer.
 * @param params
 * @param context
 * @returns {Promise<any>}
 */
export default function getLibrariesTransform(params, context) {
  let promise;

  if (cache) {
    promise = Promise.resolve(cache);
  } else {
    promise = getLibraries(context);
  }

  return promise.then(
    getLibrariesTransformPromiseHandler.bind(null, params, context)
  );
}
