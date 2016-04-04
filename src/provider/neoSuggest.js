'use strict';
/**
 * @file
 * Suggest Transformers
 *
 * The file contains several transformer functions:
 *
 *  * creatorSuggestTransformer
 *    Returns creator suggestions based on query
 *  * librarySuggestTransformer
 *    Returns library suggestions based on query
 *  * subjectSuggestTransformer
 *    Returns subject suggestions based on query
 *  * popSuggestTransformer
 *    Returns solr documents sorted according to loan count
 *  * suggestTransformer
 *    Transformer bsaed on the above mentioned transformers.
 *    The suggestTransformer supports 4 types of suggestions:
 *    creator, library, subject and title
 */

import {clone} from 'lodash';
import genericTransformer from '../genericTransformer.js';
import entitySuggest from '../services/EntitySuggest/neoClient.js';
import popSuggest from '../services/PopSuggest/client.js';
import utils from '../utils.js';


/**
* Helper function to change key name in an object
*/
function changeKey(obj, fromKey, toKey) {
  if (obj.hasOwnProperty(fromKey)) {
    obj[toKey] = obj[fromKey];
    delete obj[fromKey];
  }
  return obj;
}

/**
* Transformer for subjectSuggest endpoint.
* This transformer calls the entitySuggest client and returns subject
* suggestions
*/
export function subjectSuggestTransformer() {

  function subjectSuggestRequest(request, context) { // eslint-disable-line no-unused-vars
    let clientRequest = {query: request.q, n: request.limit};
    return clientRequest;
  }

  function subjectSuggestResponse(response, context) { // eslint-disable-line no-unused-vars
    return response.response.suggestions.map((obj) => {
      return {str: obj.suggestion};
    });
  }

  function subjectSuggestFunction(context) {
    let contextCopy = clone(context);
    changeKey(contextCopy, 'entityEndpoint', 'endpoint');
    let client = entitySuggest(contextCopy);
    return (request, localContext) => { // eslint-disable-line no-unused-vars
      return client.getSubjectSuggestions(request);
    };
  }

  return genericTransformer(subjectSuggestRequest,
                            subjectSuggestResponse,
                            subjectSuggestFunction);
}


/**
* Transformer for creatorSuggest endpoint.
* This transformer calls the entitySuggest client and returns creator
* suggestions
*/
export function creatorSuggestTransformer() {

  function creatorSuggestRequest(request, context) { // eslint-disable-line no-unused-vars
    let clientRequest = {query: request.q, n: request.limit};
    return clientRequest;
  }

  function creatorSuggestResponse(response, context) { // eslint-disable-line no-unused-vars
    return response.response.suggestions.map((obj) => {
      return {str: obj.suggestion};
    });
  }

  function creatorSuggestFunction(context) {
    let contextCopy = clone(context);
    changeKey(contextCopy, 'entityEndpoint', 'endpoint');
    let client = entitySuggest(contextCopy);
    return (request, localContext) => { // eslint-disable-line no-unused-vars
      return client.getCreatorSuggestions(request);
    };
  }

  return genericTransformer(creatorSuggestRequest,
                            creatorSuggestResponse,
                            creatorSuggestFunction);
}


/**
* Transformer for librarySuggest endpoint.
* This transformer calls the entitySuggest client and returns library
* suggestions
*/
export function librarySuggestTransformer() {

  function librarySuggestRequest(request, context) { // eslint-disable-line no-unused-vars
    let clientRequest = {query: request.q, n: request.limit};
    return clientRequest;
  }


  function librarySuggestResponse(response, context) { // eslint-disable-line no-unused-vars
    return response.response.suggestions.map((obj) => {
      obj.suggestion.str = obj.suggestion.navn + ', ' + obj.suggestion.by;
      return obj.suggestion;
    });
  }

  function librarySuggestFunction(context) {
    let contextCopy = clone(context);
    changeKey(contextCopy, 'entityEndpoint', 'endpoint');
    let client = entitySuggest(contextCopy);
    return (request, localContext) => { // eslint-disable-line no-unused-vars
      return client.getLibrarySuggestions(request);
    };
  }

  return genericTransformer(librarySuggestRequest,
                            librarySuggestResponse,
                            librarySuggestFunction);
}


/**
* Transformer for popSuggest endpoint.
* This transformer calls the popSuggestion client and returns solr
* document suggestions
*/
export function popSuggestTransformer() {

  function popSuggestRequest(request, context) { // eslint-disable-line no-unused-vars
    let clientRequest = {query: request.q, rows: request.limit, fields: request.fields};
    return clientRequest;
  }

  function popSuggestResponse(response, context) { // eslint-disable-line no-unused-vars
    return response;
  }

  function popSuggestFunction(context) {
    let contextCopy = clone(context);
    changeKey(contextCopy, 'popEndpoint', 'endpoint');
    let client = popSuggest(contextCopy);
    return (request, localContext) => { // eslint-disable-line no-unused-vars
      return client.getPopSuggestions(request);
    };
  }

  return genericTransformer(popSuggestRequest,
                            popSuggestResponse,
                            popSuggestFunction);
}


/**
* Transformer for suggest endpoint.
*
* This transformer calls the appropriate suggesttransformer based on
* the type parameter in the request, and returns the fetched
* suggestions.
*
* Available types are: creator, library, subject and title
*/
export function suggestTransformer() {

  let common = {};

  function suggestRequest(request, context) { // eslint-disable-line no-unused-vars

    common.type = request.type;
    let requestEnvelope = {type: request.type,
                           request: {q: request.q,
                                     limit: request.limit}};

    if (requestEnvelope.type === 'title') {
      requestEnvelope.request.fields = 'display.title,fedoraPid,display.creator,display.workType';
      requestEnvelope.request.q = 'display.title:{!complexphrase inOrder=true}' +
                                  requestEnvelope.request.q;
    }
    return requestEnvelope;
  }

  function suggestResponse(response, context) { // eslint-disable-line no-unused-vars
    if (common.type === 'title') {
      response = response.response.docs.map((obj) => {
        let retObj = {str: obj['display.title'][0], id: obj.fedoraPid};
        if (obj.hasOwnProperty('display.creator')) {
          retObj.creator = obj['display.creator'][0];
        }
        if (obj.hasOwnProperty('display.workType')) {
          retObj.type = obj['display.workType'][0];
        }
        return retObj;
      });
    }
    return response;
  }

  function suggestFunction(context) {

    let transformers = {subject: subjectSuggestTransformer(),
                        creator: creatorSuggestTransformer(),
                        library: librarySuggestTransformer(),
                        title: popSuggestTransformer()};

    return (requestEnvelope, localContext) => { // eslint-disable-line no-unused-vars
      if (!transformers.hasOwnProperty(requestEnvelope.type)) {
        utils.die('SuggestFunction "' + requestEnvelope.type + '" is unknown');
      }
      return transformers[requestEnvelope.type](requestEnvelope.request, context);
    };
  }

  return genericTransformer(suggestRequest,
                            suggestResponse,
                            suggestFunction);
}
