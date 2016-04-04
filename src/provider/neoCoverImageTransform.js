'use strict';

import genericTransformer from '../genericTransformer.js';
import Transform from 'jsonpath-object-transform';
import moreInfoClient from '../services/MoreInfo/client';

function getImagesFromResponse(result) {
  var template = {
    images: ['$.identifierInformation..coverImage.*', {
      url: '$..$value',
      size: '$..imageSize',
      format: '$..imageFormat'
    }]
  };

  var transformed = Transform(result, template);
  transformed.images = transformed.images.map((imgObj) => {
    imgObj.url = imgObj.url.replace('http:', '');
    return imgObj;
  });

  return transformed;
}

function requestTransform(request, data) { // eslint-disable-line no-unused-vars
  let identifiers = [];
  data.forEach((pid) => {
    try {
      const faust = pid.split(':').pop();
      identifiers.push(faust);
    }
    catch(e) { // eslint-disable-line
    }
  });
  return this.callServiceClient('moreinfo', 'getMoreInfoResult', {identifiers});
}

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

function responseTransform(response, identifiers) { // eslint-disable-line no-unused-vars
  let result = checkResponse(response) || getImagesFromResponse(response);
  return {
    identifiers,
    result
  };
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

let transformer = function() {
  let that = {};

  that.requestTransform = function(request, context) { // eslint-disable-line no-unused-vars
    let pid = request[0].pid;
    let pid_obj = pidSplitter(pid);
    let params = {};
    params.identifier = [];
    let identifier = {};
    identifier.localIdentifier = pid_obj.localid;
    identifier.libraryCode = pid_obj.agency;
    params.identifier.push(identifier);
    return params;
  };

  that.responseTransform = function(response, context) { // eslint-disable-line no-unused-vars
    return new Promise((request, resolve) => {
      return resolve({});
    });
  };

  that.moreInfoFunc = function(context) {
    let neoContext = context.libdata.config.provider.services.moreinfo;
    let client = moreInfoClient(neoContext);

    return function(request, local_context) { // eslint-disable-line no-unused-vars
      return client.getMoreInfoResultNeo(request);
    };
  };

  return that;
};

export default function coverImageTransformer() {
  let cit = transformer();
  return genericTransformer(cit.requestTransform, cit.responseTransform, cit.moreInfoFunc);
}
