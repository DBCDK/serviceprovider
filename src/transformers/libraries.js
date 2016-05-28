'use strict';

const timeout = 60*60*1000;
let cache;
let timestamp;

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
    let parameterMap = {
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
    resolve(result);
  });
});

function getLibraries(context) {
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

  return context.call('openagency', soap).then(body => {
    let badgerfish = JSON.parse(body).findLibraryResponse.pickupAgency;
    let results = [];
    for (let i = 0; i < badgerfish.length; ++i) {
      let library = badgerfish[i];
      let result = {};
      for (let key in library) {
        if (key !== '@' && key.slice(0, 4) !== 'ncip') {
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
      results.push(result);
    }

    let agencies = {};
    for (let i = 0; i < results.length; ++i) {
      agencies[results[i].agencyId] = true;
    }
    agencies = Object.keys(agencies);
    return Promise.all(agencies.map(getOrderParameters(context)))
      .then(orderParameters => {
        let agencyOrderParameters = {};
        for (let i = 0; i < agencies.length; ++i) {
          agencyOrderParameters[agencies[i]] = orderParameters[i];
        }
        for (let i = 0; i < results.length; ++i) {
          results[i].orderParameters =
            agencyOrderParameters[results[i].agencyId];
        }
        cache = results;
        timestamp = Date.now();
        return results;
      });
  });
}

export default (params, context) => Promise.resolve(cache ? cache : getLibraries(context)).then(libraries => {
  if (Date.now() - timestamp > timeout) {
    getLibraries(context);
    timestamp = Date.now();
  }

  if (Array.isArray(params.agencyIds)) {
    let agencies = {};
    for (let i = 0; i < params.agencyIds.length; ++i) {
      agencies[params.agencyIds[i]] = true;
    }

    libraries = libraries.filter(o => agencies[o.agencyId]);
  }

  if (Array.isArray(params.branchIds)) {
    let branches = {};
    for (let i = 0; i < params.branchIds.length; ++i) {
      branches[params.branchIds[i]] = true;
    }
    libraries = libraries.filter(o => branches[o.branchId]);
  }

  return {statusCode: 200, data: libraries};
});
