'use strict';

/**
 * A Transformer for retreiving cover-image-urls from
 * the DBC moreinfo service.
 *
 * The transformer can take a list of pids and returns
 * an object containing pids and coverurl-size-types and coverurls.
 *
 * request:
 *   { "pids": ["pid1", "pid2", .... , "pid_n" ] }
 *
 * response:
 *   {
 *     "pid1": [ "coverUrlFull": "URL", "coverUrl42": "URL", ... ],
 *     "pid2": [ ... ]
 *   }
 */

import _ from 'lodash';
import {log} from '../utils.js';

/**
 * Splits a PID into: type, agencyid and localid.
 * This functionality is needed as long as moreinfo
 * can not accept pids as identifiers.
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
 * Returns a String representing an identifier given a libraryCode and a localIdentifier.
 * Used for lookup in the state-object.
 */
function id2parameter(libCode, localId) {
  return libCode + ':' + localId;
}

/**
 * Retrieves a PID from a state-object, given a libraryCode and a localIdentifier.
 * The state-object must be contain key-values where the keys are constructed
 * from id2parameter with the libraryCode and localIdentifier. The values are the PIDs.
 *
 * This function is needed as long as more-info does not take PIDs as identifiers.
 */
function getPid(libCode, localId, state) {
  let stateId = id2parameter(libCode, localId);
  let pid = state[stateId];
  return pid;
}

/**
 * A const object for looking up image-sizes as returned from moreinfo.
 */
const IMAGE_SIZES = {
  detail_42: 'coverUrl42',
  detail_117: 'coverUrl117',
  detail_207: 'coverUrl207',
  detail_500: 'coverUrl500',
  thumbnail: 'coverUrlThumbnail',
  detail: 'coverUrlFull'
};

/**
 * Detects the value from requestStatus.statusEnum.
 * If the value is an error/errorcode of some kind, or if the property
 * can not be found in the response, an error will be thrown.
 */
function errorCodeInResponse(response) {
  if (!_.has(response, 'requestStatus.statusEnum')) {
    throw {
      name: 'MalformedResponse',
      message: 'Malformed Response. No requestStatus.statusEnum.',
      response: response,
      stack: new Error().stack
    };
  }
  if (response.requestStatus.statusEnum !== 'ok') {
    throw {
      name: 'ErrorResponse',
      message: 'Error returned in response.',
      response: response,
      stack: new Error().stack
    };
  }
}

/**
 * Finds the list of identifierInformation, or throws
 * an error if the property cannot be found or the length is 0.
 */
function getIdentifierInformationList(response) {
  if (!_.has(response, 'identifierInformation')) {
    throw {
      name: 'MalformedResponse',
      message: 'Malformed response. No identifierInformation.',
      response: response,
      stack: new Error().stack
    };
  }

  if (response.identifierInformation.length === 0) {
    throw {
      name: 'EmptyResponse',
      message: 'No identifiers were returned in the response.',
      response: response,
      stack: new Error().stack
    };
  }

  return response.identifierInformation;
}

/**
 * Tests whether the identifierInformation contains any cover-images.
 * Returns true if any cover-images are contained. False otherwise.
 */
function doIdentifierInformationContainsCoverImages(idInfo) {
  let res = true;
  if (!_.has(idInfo, 'identifierKnown')
    || !idInfo.identifierKnown === true
    || !_.has(idInfo, 'coverImage')
    || idInfo.coverImage.length === 0) {
    if (_.has(idInfo, 'identifier.localIdentifier') && _.has(idInfo, 'identifier.libraryCode')) {
      let pid = id2parameter(idInfo.identifier.libraryCode, idInfo.identifier.localIdentifier);
      log.info('Could not find covers for identifier: ' + pid);
    } else { // eslint-disable-line brace-style
      log.info('Could not find covers for unknown identifier: ' + JSON.stringify(idInfo, null, 4));
    }
    res = false;
  }
  return res;
}

/**
 * Returns an object containing { "coverUrlxxx": "URL" }
 * where "coverUrlxxx is one of the values in IMAGE_SIZES
 * and "URL" is the coverImageUrl returned from moreinfo.
 */
function getImageSizeAndUrl(x) {
  let res = {};
  if (_.has(x, 'attributes.imageSize') && _.has(x, '$value')) {
    let is = IMAGE_SIZES[x.attributes.imageSize];
    res[is] = [x.$value.replace('http:', '')];
  }
  return res;
}

/**
 * Retrieves the cover-urls and image-size from the identifierInformation.
 * Returns the pid and a list of coverimage-urls and imageSizes according to IMAGE_SIZES.
 */
function getCoverUrlsFromIdentifierInformation(idInfo, state) {

  if (!doIdentifierInformationContainsCoverImages(idInfo)) {
    return {};
  }

  let pid = getPid(idInfo.identifier.libraryCode, idInfo.identifier.localIdentifier, state);
  let imageUrlsList = idInfo.coverImage.map(x => getImageSizeAndUrl(x));
  let imageUrls = imageUrlsList.reduce(_.extend, {});

  return {pid: pid, urls: imageUrls};
}

/**
 * Writes out the error to log, and returns an error envelope
 */
function handleError(e) {
  let errorEnvelope = {
    statusCode: 500,
    error: 'Internal server error'
  };

  log.error('ERROR: [' + e.name + '] : ' + e.message);
  log.error('Response: ' + JSON.stringify(e.response, null, 0));
  log.error(e.stack);
  log.error('******** END ERROR');
  return errorEnvelope;
}

export function moreInfoRequest(request, context) { // eslint-disable-line no-unused-vars
                                                    // let pids = request[0].pids;
  let pids = request.pids;
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

  return {transformedRequest: params, state: state};
}

export function moreInfoResponse(response, context, state) { // eslint-disable-line no-unused-vars
  // The below should probably be converted to some kind of tests:
  //
  // response.identifierInformation = [];
  // delete response.identifierInformation;
  // delete response.requestStatus.statusEnum;
  // response.identifierInformation[0].identifierKnown = false;
  // delete response.identifierInformation[0].identifier.localIdentifier;
  // delete response.identifierInformation[0].coverImage;
  // response.identifierInformation[0].coverImage = [];
  // console.log('RESP: ' + JSON.stringify(response, null, 4));

  try {
    errorCodeInResponse(response);

    let identifierInformation = getIdentifierInformationList(response);

    let data = identifierInformation.map(idInfo => {
      let {pid: pid, urls: Z} = getCoverUrlsFromIdentifierInformation(idInfo, state);
      if (pid && Z) {
        Z.pid = pid;
      } else { // eslint-disable-line brace-style
        Z = {};
      }
      return Z;
    });
    let envelope = {
      statusCode: 200,
      data: data
    };
    return envelope;
  } catch (e) { // eslint-disable-line brace-style
    let errorEnvelope = handleError(e);
    return errorEnvelope;
  }
}

export default (request, context) => {

  let {transformedRequest: params, state: state} = moreInfoRequest(request, context);

  let req = {
    action: 'moreInfo',
    params: params,
    config: {
      authentication: {
        authenticationUser: context.data.moreinfo.user,
        authenticationGroup: context.data.moreinfo.group,
        authenticationPassword: context.data.moreinfo.password
      }
    }
  };

  return context.basesoap('moreinfo', req).then(body => {
    return moreInfoResponse(body, context, state);
  });
};
