'use strict';

let getOrderParameters = (context) => (agencyId) => new Promise(resolve => {
  let soap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://oss.dbc.dk/ns/openagency"><SOAP-ENV:Body>
    <ns1:serviceRequest>
    <ns1:agencyId>${agencyId}</ns1:agencyId>
    <ns1:service>userOrderParameters</ns1:service>
    <ns1:outputType>json</ns1:outputType>
    </ns1:serviceRequest>
    </SOAP-ENV:Body></SOAP-ENV:Envelope>
    `;
  context.call('openagency', soap).then(body => {
    let result = [];
    let parameters = JSON.parse(body)
      .serviceResponse.userOrderParameters.userParameter;
    if (parameters) {
      for (let i = 0; i < parameters.length; ++i) {
        if (parameters[i].parameterRequired.$ === '1') {
          result.push(parameters[i].userParameterType.$);
        }
      }
    }
    resolve(result);
  });
});

export default (params, context) => new Promise((resolve) => {
  let agencies;
  if (Array.isArray(params.agencyIds)) {
    agencies = {};
    for (let i = 0; i < params.agencyIds.length; ++i) {
      agencies[params.agencyIds[i]] = true;
    }
  }
  let branches;
  if (Array.isArray(params.branchIds)) {
    branches = {};
    for (let i = 0; i < params.branchIds.length; ++i) {
      branches[params.branchIds[i]] = true;
    }
  }
  let soap = `<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:open="http://oss.dbc.dk/ns/openagency">
    <soapenv:Header/>
    <soapenv:Body>
    <open:findLibraryRequest>
    <open:outputType>json</open:outputType>
    </open:findLibraryRequest>
    </soapenv:Body>
    </soapenv:Envelope>`;

  context.call('openagency', soap).then(body => {
    let badgerfish = JSON.parse(body).findLibraryResponse.pickupAgency;
    let results = [];
    for (let i = 0; i < badgerfish.length; ++i) {
      let library = badgerfish[i];
      let result = {};
      for (let key in library) {
        if (key !== '@') {
          let val = library[key];
          if (val.$) {
            result[key] = val.$;
          }
          else if (Array.isArray(val)) {
            result[key] = [];
            for (let j = 0; j < val.length; ++j) {
              if (val[j].$) {
                result[key].push(val[j].$);
              }
            }
          }
          else {
            result[key] = {};
            for (let key2 in val) {
              if (key2 !== '@' && val[key2].$) {
                result[key][key2] = val[key2].$;
              }
            }
          }
        }
      }
      if (!agencies || agencies[result.agencyId]) {
        if (!branches || branches[result.branchId]) {
          results.push(result);
        }
      }
    }
    if (!params.fields ||
        (Array.isArray(params.fields) &&
         params.fields.indexOf('orderParameters') !== -1)) {
      if (!agencies) {
        agencies = {};
        for (let i = 0; i < results.length; ++i) {
          agencies[results[i].agencyId] = true;
        }
      }
      agencies = Object.keys(agencies);
      Promise.all(agencies.map(getOrderParameters(context)))
        .then(orderParameters => {
          let agencyOrderParameters = {};
          for (let i = 0; i < agencies.length; ++i) {
            agencyOrderParameters[agencies[i]] = orderParameters[i];
          }
          for (let i = 0; i < results.length; ++i) {
            results[i].orderParameters =
              agencyOrderParameters[results[i].agencyId];
          }
          resolve({statusCode: 200, data: results});
        });
      return;
    }
    resolve({statusCode: 200, data: results});
  });
});
