'use strict';

import genericTransformer from '../genericTransformer.js';
import moreInfoClient from '../services/MoreInfo/client';
import _ from 'lodash';

/**
 * Splits a PID into: type, agencyid and localid.
 * @param pid
 * @returns {{}}
 */
function pidSplitter(pid) {
  let pid_array = pid.split(':');
  if (pid_array.length !== 2) {
    throw new Error('Illegal pid: ' + pid);
  }
  let id = {};
  id.localid = pid_array[1];
  let agency_type = pid_array[0].split('-');
  if (agency_type.length !== 2) {
    throw new Error('Illegal agency/type in pid: ' + pid);
  }
  id.agency = agency_type[0];
  id.type = agency_type[1];
  return id;
}

/**
 * Detects the value from requestStatus.statusEnum.
 * If the value is an error/errorcode of some kind, or if the property
 * can not be found in the response, an error will be thrown.
 */
function errorCodeInResponse(response) {
  if (!_.has(response, 'requestStatus.statusEnum')) {
    throw {
      name: "MalformedResponse",
      message: "Malformed Response. No requestStatus.statusEnum.",
      response: response,
      stack: new Error().stack
    }
  }
  if (response.requestStatus.statusEnum !== "ok") {
    throw {
      name: "ErrorResponse",
      message: "Error returned in response.",
      response: response,
      stack: new Error().stack
    }
  }
}

function getIdentifierInformationList(response) {
  if (!_.has(response, 'identifierInformation')) {
    throw {
      name: "MalformedResponse",
      message: "Malformed response. No identifierInformation.",
      response: response,
      stack: new Error().stack
    };
  }

  if (response.identifierInformation.length === 0) {
    throw {
      name: "EmptyResponse",
      message: "No identifiers were returned in the response.",
      response: response,
      stack: new Error().stack
    };
  }

  return response.identifierInformation;
}

function getCoverUrlsFromIdentifierInformation(idInfo, state) {

  if (!_.has(idInfo, 'identifierKnown') || !idInfo.identifierKnown === true || !_.has(idInfo, 'coverImage') || idInfo.coverImage.length === 0) {
    // no identifierKnown attribute. should this be the same as 'identifier not known'?
    if (_.has(idInfo, 'identifier.localIdentifier') && _.has(idInfo, 'identifier.libraryCode')) {
      let pid = idInfo.identifier.libraryCode + ":" + idInfo.identifier.localIdentifier;
      console.log("Could not find covers for identifier: " + pid);
    } else {
      console.log("Could not find covers for unknown identifier: " + JSON.stringify(idInfo, null, 4));
    }
    return {};
  }

  let stateId = id2parameter(idInfo.identifier.libraryCode, idInfo.identifier.localIdentifier);
  let pid = state[stateId];
  console.log("pid: " + JSON.stringify(pid, null, 4));

  // get coverImages:
  let IMAGE_SIZES = {
    "detail_42": "coverUrl42",
    "detail_117": "coverUrl117",
    "detail_207": "coverUrl207",
    "detail_500": "coverUrl500",
    "thumbnail": "coverUrlThumbnail",
    "detail": "coverUrlFull"
  };

  let Y = idInfo.coverImage.map(x => {
    let res = {};
    if (_.has(x, 'attributes.imageSize') && _.has(x, '$value')) {
      let is = IMAGE_SIZES[x.attributes.imageSize];
      res[is] = x['$value'].replace('http:', '');
    }
    return res;
  });

  let Z = {};
  Y.forEach(z => _.extend(Z, z));

  return {pid: pid, urls: Z};
}

function handleError(e) {
  let errorEnvelope = {
    statusCode: 500,
    error: "Internal server error"
  };

  try {
    console.log("ERROR: [" + e.name + "] : " + e.message);
    console.log("Response: " + JSON.stringify(e.response, null, 4));
    console.log(e.stack);
    console.log("******** END ERROR");
  } catch (e) {
    // We dont care about an error here!
  }
  return errorEnvelope;
}

function id2parameter(libCode, localId) {
  return libCode + ":" + localId;
}

/*
 request:
 { "pids": ["pid1", "pid2", .... , "pid_n" ] }

 response
 { "pid1": [ "coverUrlFull": "URL", "coverUrl42": "URL", ... ],
 "pid2": [ ... ]
 }
 */

export default function () {

  function requestTransform(request, context) { // eslint-disable-line no-unused-vars
    let pids = request[0].pids;
    let params = {};
    let state = {};
    params.identifier = pids.map(pid => {
      let pid_obj = pidSplitter(pid);
      let identifier = {};
      identifier.localIdentifier = pid_obj.localid;
      identifier.libraryCode = pid_obj.agency;
      state[id2parameter(identifier.libraryCode, identifier.localIdentifier)] = pid;
      return identifier;
    });

    console.log("PARAMS: " + JSON.stringify(params, null, 4));
    return {transformedRequest: params, state: state};
  }

  function responseTransform(response, context, state) { // eslint-disable-line no-unused-vars
    return new Promise((request, resolve) => {

      /// The below should probably be converted to some kind of tests.
      // response.identifierInformation = [];
      // delete response.identifierInformation;
      // delete response.requestStatus.statusEnum;
      // response.identifierInformation[0].identifierKnown = false;
      // delete response.identifierInformation[0].identifier.localIdentifier;
      // delete response.identifierInformation[0].coverImage;
      // response.identifierInformation[0].coverImage = [];
      // console.log("RESP: " + JSON.stringify(response, null, 4));

      try {
        errorCodeInResponse(response);

        let identifierInformation = getIdentifierInformationList(response);

        let data = {};
        identifierInformation.forEach( (idInfo) => {
          let {pid: pid, urls: Z} = getCoverUrlsFromIdentifierInformation(idInfo, state);
          data[pid] = Z;
        });
        let envelope = {
          "statusCode": 200,
          "data": data
        };
        console.log("RES: " + JSON.stringify(envelope, null, 4));
        return resolve(envelope);
      } catch (e) {
        let errorEnvelope = handleError(e);
        resolve(errorEnvelope);
      }
    });
  }

  function moreInfoFunc(context) {
    let neoContext = context.libdata.config.provider.services.moreinfo;
    console.log("context: " + JSON.stringify(neoContext, null, 4));

    let client = moreInfoClient(neoContext);

    return function (request, local_context, state) { // eslint-disable-line no-unused-vars
      return {response: client.getMoreInfoResultNeo(request), state: state };
    };
  }

  return genericTransformer(requestTransform, responseTransform, moreInfoFunc);
}
