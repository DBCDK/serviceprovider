import {requestType, makeTypeID} from '../requestTypeIdentifier';
import _ from 'lodash';
import {log} from '../utils';

const filePath = __dirname + '/../../doc/work-context.jsonld';
const typeId = makeTypeID(filePath);
const FULL_TEXT_REVIEW = 'Lektørudtalelse';
const REVIEW_CONTENT = 'review';
const REVIEW_ORIGINALLY_MADE_FOR =
  'Materialevurdering oprindeligt udarbejdet til';

/**
 *
 * @param request
 * @returns {*}
 */
function getPids(request) {
  if (!_.has(request, 'pids')) {
    throw new Error('Pid not correctly present in request');
  }
  if (request.pids.length < 1) {
    throw new Error(
      'Illegal number of pids in request - at least one should be present.'
    );
  }
  return request.pids;
}

/**
 *
 * @param context
 * @returns {{agency: *, profile: *}}
 */
function getAndValidateOpensearchContext(context) {
  const searchAgency = context.get('search.agency', true);
  if (!searchAgency) {
    throw new Error('No search agency property present in context');
  }
  const searchProfile = context.get('search.profile', true);
  if (!searchProfile) {
    throw new Error('No search profile property present in context');
  }
  return {agency: searchAgency, profile: searchProfile};
}

const dataObjectRequestTypes = {
  DKABM: 'dkabm',
  BRIEFDISPLAY: 'briefDisplay',
  RELATIONS: 'relations',
  FULLTEXTREVIEWS: 'docbook'
};

/**
 *
 * @param defaultBehaviour
 * @param fields
 * @returns {Array}
 */
function getObjectFormats(defaultBehaviour, fields) {
  const objectFormat = [];

  if (
    defaultBehaviour ||
    fields.some(field => {
      return typeId.isType(field, requestType.BRIEFDISPLAY);
    })
  ) {
    // eslint-disable-line brace-style
    objectFormat.push('briefDisplay');
  }

  if (
    defaultBehaviour ||
    fields.some(field => {
      return typeId.isType(field, requestType.DKABM);
    })
  ) {
    // eslint-disable-line brace-style
    objectFormat.push('dkabm');
  }

  if (
    defaultBehaviour ||
    fields.some(field => {
      return typeId.isType(field, requestType.DOCBOOK);
    })
  ) {
    // eslint-disable-line brace-style
    objectFormat.push('docbook');
  }

  return objectFormat;
}

/**
 *
 * @param defaultBehaviour
 * @param fields
 * @returns {*}
 */
function getRequestRelationData(defaultBehaviour, fields) {
  if (
    defaultBehaviour ||
    fields.some(field => {
      return typeId.isType(field, requestType.RELATIONS);
    })
  ) {
    // eslint-disable-line brace-style
    return 'uri';
  }

  return null;
}

/**
 * Set a trackingId. If a trackingId is set in request - append - if not set it.
 * @param params
 * @param context
 * @return {string}
 */
function getTrackingId(params, context) {
  const clientId = context.get('app.clientId');
  let trackingId = params.trackingId ? `${params.trackingId}:` : '';
  return `${trackingId}DOP:${clientId}`;
}

/**
 *
 * @param request
 * @param context
 * @returns {{action: string, identifier: *, agency: *, profile: *, outputType: string, objectFormat: Array}}
 */
export function requestTransform(request, context) {
  // eslint-disable-line no-unused-vars

  const pids = getPids(request);
  const osContext = getAndValidateOpensearchContext(context);
  const trackingID = getTrackingId(request, context);

  console.log('################ trackingID', trackingID);

  // If no fields were given, default behaviour is to get
  // everything from briefDisplay, dkabm and relations.
  const defaultBehaviour = _.has(request, 'fields') ? false : true;
  const fields = request.fields;

  // Create request params.
  // Only add dkabm, briefDisplay and relations if requested.
  const requestParams = {
    action: 'getObject',
    identifier: pids,
    agency: osContext.agency,
    profile: osContext.profile,
    outputType: 'json',
    trackingId: trackingID,
    objectFormat: getObjectFormats(defaultBehaviour, fields)
  };

  const rels = getRequestRelationData(defaultBehaviour, fields);
  if (rels) {
    requestParams.relationData = rels;
  }

  return requestParams;
}

/**
 *
 * @param result
 * @returns {Function}
 */
function retrieveDkabmFields(result) {
  return function(value, key) {
    const a = [];
    _.forEach(value, function(z) {
      // eslint-disable-line
      const x = {key: key};
      if (_.has(z, '$') && _.has(z, '@')) {
        x.ns = z['@'];
        x.value = z.$;
        if (_.has(z, '@type')) {
          x.type = z['@type'].$;
        }
      }
      if (x.value) {
        a.push(x);
      }
    });

    a.map(X => {
      const identifier = X.ns + ':' + key;
      const field = X.type
        ? typeId.getField(identifier, X.type)
        : typeId.getField(identifier);
      if (result[field]) {
        result[field].push(X.value);
      } else {
        // eslint-disable-line brace-style
        result[field] = [X.value];
      }
    });
  };
}

/**
 * If there is no dkabm-record, and empty object will be returned.
 * @param searchResult
 * @returns {*}
 */
function validateAndGetDkabmRecord(searchResult) {
  if (!_.has(searchResult, 'collection.object')) {
    return {};
  }
  const obj = searchResult.collection.object;
  if (obj.length < 1) {
    return {};
  }
  if (!_.has(obj[0], 'record')) {
    return {};
  }
  const record = obj[0].record; // DKABM-data
  return record;
}

/**
 *
 * @param searchResult
 */
function getDkabmData(searchResult) {
  const record = validateAndGetDkabmRecord(searchResult);

  const result = {};
  _.forOwn(record, retrieveDkabmFields(result));
  return result;
}

/**
 *
 * @param searchResult
 * @returns {{}}
 */
function validateAndGetBriefDisplay(searchResult) {
  if (!_.has(searchResult, 'formattedCollection.briefDisplay.manifestation')) {
    return {};
  }
  const manifestations =
    searchResult.formattedCollection.briefDisplay.manifestation;
  return manifestations.length && manifestations.length > 0
    ? manifestations[0]
    : {};
}

/**
 *
 * @param searchResult
 */
function getBriefDisplayData(searchResult) {
  const briefDisplay = validateAndGetBriefDisplay(searchResult);

  const res = {};
  _.forOwn(briefDisplay, (value, key) => {
    const ns = 'bd';
    const identifier = ns + ':' + key;
    const field = typeId.getField(identifier);
    if ((field === 'pid' && value) || field !== 'pid') {
      res[field] = [];
    }
    if (value) {
      res[field].push(value.$);
    }
  });
  return res;
}

/**
 * If there is no search result or it is empty, an empty array will be returned.
 * @param response
 * @returns {Array}
 */
function validateAndGetSearchResult(response) {
  if (!_.has(response, 'data.searchResponse.result.searchResult')) {
    return [];
  }
  const searchResult = response.data.searchResponse.result.searchResult;
  return searchResult.length && searchResult.length > 0 ? searchResult : [];
}

/**
 * Returns an empty array if no relations or if some property is missing.
 * @param searchResult
 * @returns {*}
 */
function validateAndGetRelations(searchResult) {
  if (!_.has(searchResult, 'collection.object')) {
    // no object return empty list:
    return [];
  }
  const obj = searchResult.collection.object;
  if (!obj.length || obj.length === 0) {
    return [];
  }
  const obj0 = obj[0];
  if (!_.has(obj0, 'relations.relation')) {
    return [];
  }
  return obj0.relations.relation;
}

/**
 *
 * @param searchResult
 */
function getRelationData(searchResult) {
  const relations = validateAndGetRelations(searchResult);

  const res = {};
  _.forEach(relations, relation => {
    if (!_.has(relation, 'relationType.$')) {
      return;
    }
    const field = typeId.getField(relation.relationType.$);
    if (!res[field]) {
      res[field] = [];
    }
    res[field].push(relation.relationUri.$);
  });
  return res;
}

/**
 * Returns an empty array if no full text reviews or if some property is missing.
 * @param searchResult
 * @returns {*}
 */
function validateAndGetFullTextReviews(searchResult) {
  if (!_.has(searchResult, 'collection.object')) {
    // no object return empty list:
    return [];
  }
  const obj = searchResult.collection.object;
  if (!obj.length || obj.length === 0) {
    return [];
  }
  return obj;
}

/**
 * Returns a single item of collection.object
 * @param item
 * @returns {Array}
 */
function validateAndGetSingleReview(item) {
  if (
    !_.has(item, 'article.title.$') ||
    item.article.title.$ !== FULL_TEXT_REVIEW
  ) {
    return [];
  }
  if (!_.has(item, 'article.section') || item.article.section.length === 0) {
    return [];
  }
  return Array.isArray(item.article.section)
    ? item.article.section
    : [item.article.section];
}

/**
 * Extract data for full text reviews
 * @param searchResult
 * @returns {Array}
 */
function getFullTextReviewsData(searchResult) {
  const object = validateAndGetFullTextReviews(searchResult);
  const reviews = [];
  _.forEach(object, item => {
    // For each lektør
    const sections = validateAndGetSingleReview(item);
    if (sections.length !== 0) {
      const singleReview = {};
      singleReview.reviewer = {};
      if (_.has(item, 'article.info.author.personname.firstname.$')) {
        singleReview.reviewer.firstname =
          item.article.info.author.personname.firstname.$;
      }
      if (_.has(item, 'article.info.author.personname.surname.$')) {
        singleReview.reviewer.surname =
          item.article.info.author.personname.surname.$;
      }
      if (_.has(item, 'creationDate.$')) {
        singleReview.creationDate = item.creationDate.$;
      }
      singleReview.review = {};
      _.forEach(sections, section => {
        // For each section for one lektør
        let title = REVIEW_CONTENT; // Default title, when no title exists (from reviews from june 2002)
        let para = null;
        _.forEach(section, (info, key) => {
          // For each title, para etc...
          if (_.has(info, '$')) {
            if (key === 'title') {
              title = info.$;
            }
            if (key === 'para') {
              para = info.$;
            }
          }
        });
        if (para !== null) {
          if (
            title === REVIEW_CONTENT &&
            para.search(REVIEW_ORIGINALLY_MADE_FOR) !== -1
          ) {
            // If special review note (originally made for) - then put outside of the singleReview array in 'note'
            singleReview.note = para;
          } else {
            // Else it is a 'normal' review paragraph
            singleReview.review[title] = para;
          }
        }
      });
      if (singleReview.length !== 0) {
        reviews.push(singleReview);
      }
    }
  });
  return reviews.length === 0 ? {} : {fullTextReviews: reviews};
}

/**
 * Transform the response
 * @param response
 * @param context
 * @param params
 * @returns {*}
 */
export function responseTransform(response, context, params) {
  // eslint-disable-line no-unused-vars
  if (_.has(response, 'data.searchResponse.error.$')) {
    const errMsg = 'Error in opensearchGetObject response.';
    log.error(errMsg);
    return {statusCode: 500, error: errMsg};
  }

  const searchResults = validateAndGetSearchResult(response);
  if (searchResults.length === 0) {
    return {};
  }

  const dataObjectsRequested = params.objectFormat;
  if (params.relationData) {
    dataObjectsRequested.push(dataObjectRequestTypes.RELATIONS);
  }

  const data = searchResults.map(searchResult => {
    const dkabmData = dataObjectsRequested.includes(
      dataObjectRequestTypes.DKABM
    )
      ? getDkabmData(searchResult)
      : {};
    const briefDisplayData = dataObjectsRequested.includes(
      dataObjectRequestTypes.BRIEFDISPLAY
    )
      ? getBriefDisplayData(searchResult)
      : {};
    const relationData = dataObjectsRequested.includes(
      dataObjectRequestTypes.RELATIONS
    )
      ? getRelationData(searchResult)
      : {};
    const fullTextReviewsData = dataObjectsRequested.includes(
      dataObjectRequestTypes.FULLTEXTREVIEWS
    )
      ? getFullTextReviewsData(searchResult)
      : {};
    const result = {};
    _.extend(
      result,
      dkabmData,
      briefDisplayData,
      relationData,
      fullTextReviewsData
    );
    return result;
  });
  return {statusCode: 200, data: data};
}

/**
 *
 * @param request
 * @param context
 * @returns {Request|Promise|*|PromiseLike<({statusCode, error}|{}|{statusCode, data}) | never>|Promise<({statusCode, error}|{}|{statusCode, data}) | never>}
 */
export default (request, context) => {
  const params = requestTransform(request, context);
  return context
    .call('opensearch', params)
    .then(body => responseTransform(body, context, params));
};
