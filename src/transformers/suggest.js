'use strict';
/**
 * @file
 * Suggest transformer.
 *
 * Wraps entitysuggest backends, and popsuggest backend.
 *
 */
import {log} from '../utils';

// Supported suggest types
let fMap = {creator: creatorSuggest,
            library: librarySuggest,
            subject: subjectSuggest,
            title: titleSuggest};

/**
 * Default transformer.
 * Wraps the different suggesters and returns suggestiones from the
 * chosen one.
 *
 * @param {Object} params parameters from the user
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 * @api public
 */
export default (params, context) => {
  if (!params.fields) {
    params.fields = ['term'];
  }

  if (!fMap[params.type]) {
    return new Promise(resolve => {
      return resolve({statusCode: 400,
                      error: `Unsupported suggestion type ${params.type}.` +
                      ` Supported types are: ${Object.keys(fMap)}`});
    });
  }

  if (params.limit) {
    params.limit = parseInt(params.limit, 10);
  }

  return fMap[params.type](params, context).then(result => {
    return result;
  });
};

/**
 * Creatorsuggest.
 *
 * @param {Object} params parameters from the user
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 */
function creatorSuggest(params, context) {
  log.debug('creatorsuggest called with ' + params.q);
  let localParams = {query: params.q};
  if (params.limit) {
    localParams.n = params.limit;
  }
  return context.call('suggestcreator', localParams)
    .then(body => {
      return {statusCode: 200, data: body.data.response.suggestions.map((obj) => {
        return {term: obj.suggestion};
      })};
    });
}

/**
 * Librarysuggest.
 *
 * @param {Object} params parameters from the user
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 */
function librarySuggest(params, context) {
  log.debug('librarysuggest called with ' + params.q);
  let libraryType = 'folkebibliotek';
  if (params.librarytype) {
    libraryType = params.librarytype;
  }
  let localParams = {query: params.q, lt: libraryType};
  if (params.limit) {
    localParams.n = params.limit;
  }
  return context.call('suggestlibrary', localParams)
    .then(body => {
      return {statusCode: 200, data: body.data.response.suggestions.map((obj) => {
        obj = obj.suggestion;
        obj.geolokation = obj.geolokation || {};

        return {
          term: obj.navn,
          agencyName: obj['væsensnavn'],
          postalAddress: obj.adresse,
          branchId: obj.id,
          postalCode: obj.postnr,
          geolocation: obj.geolokation && {
            longitude: obj.geolokation.lng,
            latitude: obj.geolokation.lat
          },
          agencyType: obj.bibliotekstype,
          city: obj.by
        };
      })};
    });
}

/**
 * Subjectsuggest.
 *
 * @param {Object} params parameters from the user
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 */
function subjectSuggest(params, context) {
  log.debug('subjectsuggest called with ' + params.q);
  let localParams = {query: params.q, rs: 3};

  if (params.limit) {
    localParams.n = params.limit;
  }

  return context.call('suggestsubject', localParams)
    .then(body => {
      return {statusCode: 200, data: body.data.response.suggestions.map((obj) => {
        return {term: obj.suggestion};
      })};
    });
}

/**
 * Maps keys from pop-suggest backend to serviceprovider api
 * @param {Object} obj pop-suggest response
 * @returns response with mapped keys
 */
function mapTitleKeys(obj) {
  let retObj = {term: obj['display.title'][0], pid: obj.fedoraPid};
  if (obj.hasOwnProperty('display.creator')) {
    retObj.creator = obj['display.creator'][0];
  }
  if (obj.hasOwnProperty('display.workType')) {
    retObj.type = obj['display.workType'][0];
  }
  return retObj;
}

/**
 * Titlesuggest.
 *
 * @param {Object} params parameters from the user
 * @param {Object} context The context object fetched from smaug
 * @returns promise with result
 */
function titleSuggest(params, context) {
  log.debug('titlesuggest called with ' + params.q);
  let queryString = params.q.replace(new RegExp(' ', 'g'), '\\ ');
  let query = '{!complexphrase inOrder=true}display.title:' + queryString+ '*';

  let localParams = {query: query,
                     fields: 'display.title,fedoraPid,display.creator,display.workType',
                     filter: context.get('search.collectionidentifiers')};

  if (params.limit) {
    localParams.rows = params.limit;
  }
  log.debug('popsuggest params', {params: localParams});
  return context.call('suggestpopular', localParams)
    .then(body => {
      return {statusCode: 200, data: body.data.response.docs.map((obj) => {
        return mapTitleKeys(obj);
      })};
    });
}
