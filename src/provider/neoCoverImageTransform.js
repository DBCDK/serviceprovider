'use strict';

import genericTransformer from '../genericTransformer.js';
import Transform from 'jsonpath-object-transform';
import moreInfoClient from '../services/MoreInfo/client';
import _ from 'lodash';

function checkResponse(response) {
  let error = null;
  let serviceError = '';

  if (response.errorText) {
    serviceError = response.errorText;
  }

  switch (response.requestStatus.statusEnum) {
    case 'ok':
      break;
    case 'authentication_error':
      error = {
        errorcode: 1,
        errormessage: 'Authentication error',
        serviceerror: serviceError
      };
      break;
    case 'error_in_request':
      error = {
        errorcode: 2,
        errormessage: 'Error in request',
        serviceerror: serviceError
      };
      break;
    case 'service_unavailable':
      error = {
        errorcode: 3,
        errormessage: 'Service unavailable',
        serviceerror: serviceError
      };
      break;
    default:
      error = {
        errorcode: 0,
        errormessage: 'Error',
        serviceerror: serviceError
      };
      break;
  }
  return error;
}


function pidSplitter(pid) {
  let pid_array = pid.split(':');
  if (pid_array.length !== 2) {
    throw new Error('Illegal pid: ' + pid);
  }
  let id = {};
  id.localid = pid_array[1];
  let agency_type = pid_array[0].split('-');
  if (agency_type.length !== 2) {
    throw new Error('Illegal agancy/type in pid: ' + pid);
  }
  id.agency = agency_type[0];
  id.type = agency_type[1];
  return id;
}

export default function () {

  function requestTransform(request, context) { // eslint-disable-line no-unused-vars
    let pid = request[0].pid;
    let pid_obj = pidSplitter(pid);
    let params = {};
    params.identifier = [];
    let identifier = {};
    identifier.localIdentifier = pid_obj.localid;
    identifier.libraryCode = pid_obj.agency;
    params.identifier.push(identifier);
    return params;
  }

  function responseTransform(response, context) { // eslint-disable-line no-unused-vars
    return new Promise((request, resolve) => {
    if (!_.has(response, 'requestStatus.statusEnum')) {
      throw "Malformed response: " + response;
    } else {
      console.log("OH YEAH!");
    }

    if (!_.has(response, 'identifierInformation')) {
      throw "Malformed response. Could not find ...'"
    } else {
      console.log("More OH YEAH!");
    }

    if (response.identifierInformation.length === 0) {
      throw "No identifierInformation";
    }
    console.log("Even more OH YEAH!");

    if(response.identifierInformation.length > 1) {
      throw "Too much info in identifierInformation";
    }
    console.log("OH YEAH! ... Again");

    let idInfo = response.identifierInformation[0];

    if(!_.has(idInfo, 'identifierKnown') || !idInfo.identifierKnown === true) {
      // no identifierKnown attribute. should this be the same as 'identifier not known'?
    }

    if(!_.has(idInfo, 'coverImage') || idInfo.coverImage.length === 0) {
      // no coverimages found.
    }

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
      if(_.has(x, 'attributes.imageSize') && _.has(x, '$value')) {
        let is = IMAGE_SIZES[x.attributes.imageSize];
        res[is] = x['$value'].replace('http:', '');
      }
      return res;
    });

    console.log("Y: " + JSON.stringify(Y, null, 4));

      let Z = {};
      Y.forEach(z => {
        _.extend(Z, z);
      });

    console.log("Z: " + JSON.stringify(Z, null, 4));


      return resolve(Z);
    });
  }

  function moreInfoFunc(context) {
    let neoContext = context.libdata.config.provider.services.moreinfo;
    let client = moreInfoClient(neoContext);

    return function (request, local_context) { // eslint-disable-line no-unused-vars
      return client.getMoreInfoResultNeo(request);
    };
  }

  return genericTransformer(requestTransform, responseTransform, moreInfoFunc);
}
