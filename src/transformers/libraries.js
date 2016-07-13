'use strict';

const timeout = 60 * 60 * 1000;
let cache;
let timestamp;

function getOrderParameters(context, agencyId) {
  const soap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://oss.dbc.dk/ns/openagency"><SOAP-ENV:Body>
    <ns1:serviceRequest>
    <ns1:agencyId>${agencyId}</ns1:agencyId>
    <ns1:service>userOrderParameters</ns1:service>
    <ns1:outputType>json</ns1:outputType>
    </ns1:serviceRequest>
    </SOAP-ENV:Body></SOAP-ENV:Envelope>
    `;

  return context.call('openagency', soap).then(body => {
    const result = [];
    const parameters = JSON.parse(body).serviceResponse.userOrderParameters.userParameter;

    const parameterMap = {
      userName: 'name',
      userAddress: 'address',
      userMail: 'email',
      userTelephone: 'phone'
    };

    if (parameters) {
      for (let i = 0; i < parameters.length; ++i) {
        if (parameters[i].parameterRequired.$ === '1') {
          let parameter = parameters[i].userParameterType.$;
          parameter = parameterMap[parameter] || parameter;
          result.push(parameter);
        }
      }
    }

    return Promise.resolve(result);
  });
}

function libraryIterator(val) {
  if (val.$) {
    return val.$;
  }
  else if (Array.isArray(val)) {
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

function orderParameterPromiseHandler(results, agencyKeys, orderParameters) {
  const agencyOrderParameters = {};
  for (let i = 0; i < agencyKeys.length; ++i) {
    agencyOrderParameters[agencyKeys[i]] = orderParameters[i];
  }
  for (let i = 0; i < results.length; ++i) {
    results[i].orderParameters =
      agencyOrderParameters[results[i].agencyId];
  }
  cache = results;
  timestamp = Date.now();
  return results;
}

function openAgencyPromiseHandler(context, badgerfish) {
  const results = badgerfish.map(library => {
    const result = {};

    Object.keys(library)
      .filter(libraryKey => libraryKey !== '@' && libraryKey.indexOf('ncip') !== 0)
      .forEach(key => (result[key] = libraryIterator(library[key])));

    return result;
  });

  const agencies = {};
  for (let i = 0; i < results.length; ++i) {
    agencies[results[i].agencyId] = true;
  }

  const agencyKeys = Object.keys(agencies);
  const agencyPromises = agencyKeys.map(getOrderParameters.bind(null, context));
  return Promise.all(agencyPromises).then(orderParameterPromiseHandler.bind(null, results, agencyKeys));
}

function getLibraries(context) {
  const soap = `<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:open="http://oss.dbc.dk/ns/openagency">
    <soapenv:Header/>
    <soapenv:Body>
    <open:findLibraryRequest>
    <open:outputType>json</open:outputType>
    </open:findLibraryRequest>
    </soapenv:Body>
    </soapenv:Envelope>`;

  return context
    .call('openagency', soap)
    .then(body => openAgencyPromiseHandler(context, JSON.parse(body).findLibraryResponse.pickupAgency));
}

function getLibrariesTransformPromiseHandler(params, context, libraries) {
  if (Date.now() - timestamp > timeout) {
    getLibraries(context);
    timestamp = Date.now();
  }

  if (Array.isArray(params.agencyIds)) {
    const agencies = {};
    for (let i = 0; i < params.agencyIds.length; ++i) {
      agencies[params.agencyIds[i]] = true;
    }

    libraries = libraries.filter(o => agencies[o.agencyId]);
  }

  if (Array.isArray(params.branchIds)) {
    const branches = {};
    for (let i = 0; i < params.branchIds.length; ++i) {
      branches[params.branchIds[i]] = true;
    }
    libraries = libraries.filter(o => branches[o.branchId]);
  }

  return {statusCode: 200, data: libraries};
}

export default function getLibrariesTransform(params, context) {
  let promise;

  if (cache) {
    promise = Promise.resolve(cache);
  }
  else {
    promise = getLibraries(context);
  }

  return promise.then(getLibrariesTransformPromiseHandler.bind(null, params, context));
}
