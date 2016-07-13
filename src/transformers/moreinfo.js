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
 * Tests whether the identifierInformation contains any cover-images.
 * Returns true if any cover-images are contained. False otherwise.
 */
function doIdentifierInformationContainsCoverImages(idInfo) {
  let res = true;
  if (!_.has(idInfo, 'identifierKnown.$')
    || !idInfo.identifierKnown === true
    || !_.has(idInfo, 'coverImage')
    || idInfo.coverImage.length === 0) {
    if (_.has(idInfo, 'identifier.pid.$')) {
      const pid = idInfo.identifier.pid.$;
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
  const res = {};
  if (_.has(x, '@imageSize.$') && _.has(x, '$')) {
    const is = IMAGE_SIZES[x['@imageSize'].$];
    res[is] = [x.$.replace('http:', '')];
  }
  return res;
}

/**
 * Retrieves the cover-urls and image-size from the identifierInformation.
 * Returns the pid and a list of coverimage-urls and imageSizes according to IMAGE_SIZES.
 */
function getCoverUrlsFromIdentifierInformation(idInfo) {
  if (!doIdentifierInformationContainsCoverImages(idInfo)) {
    return {};
  }

  const imageUrlsList = idInfo.coverImage.map(x => getImageSizeAndUrl(x));
  return imageUrlsList.reduce(_.extend, {});
}

/**
 *
 * @param response
 * @return {boolean}
 */
function containsError(response) {
  if (!_.has(response, 'data.moreInfoResponse')) {
    // json invalid?
    log.error('Invalid json');
    return true;
  }

  const miResponse = response.data.moreInfoResponse;

  if (miResponse.error) {
    const errMsg = miResponse.error.$ ? miResponse.error.$ : 'unknown error';
    log.error('Error in response: ' + errMsg);
    return true;
  }

  if (_.has(miResponse, 'requestStatus.statusEnum.$')) {
    const status = miResponse.requestStatus;
    if (status.statusEnum.$ === 'ok') {
      return false;
    } else { // eslint-disable-line no-else-return
      if (_.has(status, 'errorText.$')) {
        log.error('Error in response: ErrorCode: '
          + status.statusEnum.$ + ' ErrorText: '
          + status.errorText.$);
      } else {
        log.error('Error in response: ErrorCode: ' + status.statusEnum.$);
      }
      return true;
    }
  }

  log.error('No statusEnum in response!');

  return true;
}

function createErrorResponse() {
  return {statusCode: 500, error: 'Internal Server Error'};
}

function createResponse(response) {

  if (!response.identifierInformation) {
    log.error('no identifierInformation');
    return createErrorResponse();
  }
  const data = response.identifierInformation.map(idInfo => {
    return getCoverUrlsFromIdentifierInformation(idInfo);
  });

  return {statusCode: 200, data: data};
}

export default (request, context) => {
  const params = {
    action: 'moreInfo',
    authenticationUser: context.get('netpunkt.user'),
    authenticationGroup: context.get('netpunkt.group'),
    authenticationPassword: context.get('netpunkt.password'),
    pidList: request.pids.join('|'),
    // pidList: '775100-katalog:42946400', // javabogen
    // pidList: '870970-basis:28448716', // kadavermarch
    // pidList: '870970-basis:28448716|775100-katalog:42946400',
    // pidList: '', // Gives an error in response!
    outputType: 'json'
  };

  return context.call('moreinfo', params).then(body => {
    if (containsError(body)) {
      return createErrorResponse();
    }
    return createResponse(body.data.moreInfoResponse);
  }, error => {
    const errMsg = 'CoverUrls could not be fetched. Server probably unavailable. Try request again without coverUrls.';
    log.error(errMsg, error);
    return {statusCode: 500, error: errMsg};
  });
};
