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

function changeKey(obj, fromKey, toKey) {
  if (obj.hasOwnProperty(fromKey)) {
    obj[toKey] = obj[fromKey];
    delete obj[fromKey];
  }
  return obj;
}

function subjectSuggestRequest(request, context) { // eslint-disable-line no-unused-vars
  changeKey(request, 'q', 'query');
  changeKey(request, 'limit', 'n');
  return request;
}

function subjectSuggestResponse(response, context) { // eslint-disable-line no-unused-vars
  return response;
}

function subjectSuggestFunction(context) {
  let contextCopy = clone(context);
  changeKey(contextCopy, 'entityEndpoint', 'endpoint');
  let client = entitySuggest(contextCopy);
  return (request, localContext) => { // eslint-disable-line no-unused-vars
    return client.getSubjectSuggestions(request);
  };
}

function subjectSuggestTransformer() {
  return genericTransformer(subjectSuggestRequest,
                            subjectSuggestResponse,
                            subjectSuggestFunction);
}


function creatorSuggestRequest(request, context) { // eslint-disable-line no-unused-vars
  changeKey(request, 'q', 'query');
  changeKey(request, 'limit', 'n');
  return request;
}

function creatorSuggestResponse(response, context) { // eslint-disable-line no-unused-vars
  return response;
}

function creatorSuggestFunction(context) {
  let contextCopy = clone(context);
  changeKey(contextCopy, 'entityEndpoint', 'endpoint');
  let client = entitySuggest(contextCopy);
  return (request, localContext) => { // eslint-disable-line no-unused-vars
    return client.getCreatorSuggestions(request);
  };
}

function creatorSuggestTransformer() {
  return genericTransformer(creatorSuggestRequest,
                            creatorSuggestResponse,
                            creatorSuggestFunction);
}


function librarySuggestRequest(request, context) { // eslint-disable-line no-unused-vars
  changeKey(request, 'q', 'query');
  changeKey(request, 'limit', 'n');
  return request;
}

function librarySuggestResponse(response, context) { // eslint-disable-line no-unused-vars
  return response;
}

function librarySuggestFunction(context) {
  let contextCopy = clone(context);
  changeKey(contextCopy, 'entityEndpoint', 'endpoint');
  let client = entitySuggest(contextCopy);
  return (request, localContext) => { // eslint-disable-line no-unused-vars
    return client.getLibrarySuggestions(request);
  };
}

function librarySuggestTransformer() {
  return genericTransformer(librarySuggestRequest,
                            librarySuggestResponse,
                            librarySuggestFunction);
}


function popSuggestRequest(request, context) { // eslint-disable-line no-unused-vars
  changeKey(request, 'q', 'query');
  changeKey(request, 'limit', 'rows');
  return request;
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

function popSuggestTransformer() {
  return genericTransformer(popSuggestRequest,
                            popSuggestResponse,
                            popSuggestFunction);
}


function suggestRequest(request, context) { // eslint-disable-line no-unused-vars
  changeKey(request, 'q', 'query');
  let requestEnvelope = {type: request.type, request: request};
  delete requestEnvelope.request.type;

  if (requestEnvelope.type === 'title') {
    requestEnvelope.request.fields = 'display.title';
    requestEnvelope.request.query = 'display.title:{!complexphrase inOrder=true df=display.title}' +
                                    requestEnvelope.request.query;
  }
  return requestEnvelope;
}

function suggestResponse(response, context) { // eslint-disable-line no-unused-vars
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


function suggestTransformer() {
  return genericTransformer(suggestRequest,
                            suggestResponse,
                            suggestFunction);
}

module.exports.subjectSuggestTransformer = subjectSuggestTransformer;
module.exports.creatorSuggestTransformer = creatorSuggestTransformer;
module.exports.librarySuggestTransformer = librarySuggestTransformer;
module.exports.popSuggestTransformer = popSuggestTransformer;
module.exports.suggestTransformer = suggestTransformer;
