/**
 * @file: Libraries transformer, delivers from an internally cached map.
 */

import * as IsilUtils from './utils/isil.utils';
import { log } from '../utils';

const parseString = require('xml2js').parseString;
const stripNS = require('xml2js').processors.stripPrefix;
const util = require('util');

const timeout = 60 * 60 * 1000;
let cache;
let timestamp;

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function parseToJson(xmlResult) {
  //  console.log(xmlResult, 'XML');

  if (isJson(xmlResult)) {
    return xmlResult;
  }
  let resp = {};

  parseString(xmlResult, { trim: true, tagNameProcessors: [stripNS] }, function(
    err,
    result
  ) {
    try {
      resp = result;
    } catch (e) {
      log.error('openformat parse error', { error: String(e) });
      throw 'TUDSE';
    }
  });

  //console.log(util.inspect(resp, { showHidden: false, depth: null }));
  return resp;
}

/**
 * Service response has been parsed from xml to json - check the json result
 * and return the stub to continue from (
 * @param serviceResponse
 * @param serviceRequest
 * @returns {*}
 */
function getStub(serviceResponse, serviceRequest) {
  //console.log(body);
  const responseData = parseToJson(serviceResponse);

  console.log(serviceRequest, 'REQUEST');
  // do something if response is empty
  if (!responseData.Envelope) {
    console.log(serviceRequest);
    //console.log(util.inspect(resp, {showHidden: false, depth: null}))
    throw 'HUND';
  }
  // do something if Fault is set Envelope.Body[0].Fault
  if (responseData.Envelope.Body[0].Fault) {
    throw 'FISK';
  }
  // try to make a stub - an error might be set - do something if so
  const stub = responseData.Envelope.Body[0].serviceResponse[0];
  /*if (stub.error) {
    console.log(stub, 'ERROR STUB');
    throw 'HEST';
  }*/

  return stub;
}

function getOrderParameters(context, agencyId) {
  const soap = `
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://oss.dbc.dk/ns/openagency"><SOAP-ENV:Body>
    <ns1:serviceRequest>
    <ns1:agencyId>${agencyId}</ns1:agencyId>
    <ns1:service>userOrderParameters</ns1:service>
    </ns1:serviceRequest>
    </SOAP-ENV:Body></SOAP-ENV:Envelope>
    `;

  return context.call('openagency', soap).then(body => {
    const result = [];
    let stub;
    stub = getStub(body, soap);
    /* try {
      stub = getStub(body, soap);
    } catch (err) {
      throw 'ZEBRA';
    }
*/
    if (!stub.error) {
      const parameters = stub.userOrderParameters[0].userParameter
        ? stub.userOrderParameters[0].userParameter
        : null;

      const parameterMap = {
        userName: 'name',
        userAddress: 'address',
        userMail: 'email',
        userTelephone: 'phone'
      };

      if (parameters) {
        for (let i = 0; i < parameters.length; ++i) {
          if (parameterMap[parameters[i].userParameterType[0]]) {
            if (parameters[i].parameterRequired[0] === '1') {
              let parameter = parameters[i].userParameterType[0];
              parameter = parameterMap[parameter];
              result.push(parameter);
            }
          }
        }
      }
    }
    console.log(result, 'RESULT 22');
    return Promise.resolve(result);
  });
}

// @TODO fix this iterator
function libraryIterator(val) {
  if (Array.isArray(val)) {
    return val.filter(i => !!i).map(j => j);
  }

  const res = {};
  for (const key2 in val) {
    if (key2 !== '@' && val[key2]) {
      res[key2] = val[key2];
    }
  }

  return res;
}
/*
function libraryIterator(val) {
  if (val.$) {
    return val.$;
  } else if (Array.isArray(val)) {
    return val.filter(i => !!i.$).map(j => j.$);
  }

  const res = {};
  for (const key2 in val) {
    if (key2 !== '@' && val[key2].$) {
      res[key2] = val[key2].$;
    }
  }

  return res;
}
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

function openAgencyPromiseHandler(context, body) {
  let fisk = parseToJson(body);
  console.log(
    //fisk.Envelope.Body[0].findLibraryResponse[0].pickupAgency,
    fisk.Envelope.Body[0],
    'RESPONSE'
  );

  // let badgerfish = JSON.parse(fisk).findLibraryResponse.pickupAgency;
  let badgerfish = fisk.Envelope.Body[0].findLibraryResponse[0].pickupAgency;

  const results = badgerfish.map(library => {
    const result = {};

    Object.keys(library)
      .filter(
        libraryKey =>
          libraryKey !== '@' &&
          libraryKey.indexOf('ncip') !== 0 &&
          library[libraryKey] !== null
      )
      .forEach(key => (result[key] = libraryIterator(library[key])));

    // eslint-disable-next-line no-undefined
    if (result.agencyId === undefined) {
      result.agencyId = result.branchId;
    }

    return result;
  });

  const agencies = {};
  for (let i = 0; i < results.length; ++i) {
    agencies[results[i].agencyId] = true;
  }

  const agencyKeys = Object.keys(agencies);
  const agencyPromises = agencyKeys.map(getOrderParameters.bind(null, context));
  return Promise.all(agencyPromises).then(
    orderParameterPromiseHandler.bind(null, results, agencyKeys)
  );
}

function getLibraries(context) {
  const soap = `<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:open="http://oss.dbc.dk/ns/openagency">
    <soapenv:Header/>
    <soapenv:Body>
    <open:findLibraryRequest>

    </open:findLibraryRequest>
    </soapenv:Body>
    </soapenv:Envelope>`;

  return context
    .call('openagency', soap)
    .then(body => openAgencyPromiseHandler(context, body));
}

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

  return { statusCode: 200, data: libraries };
}

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
