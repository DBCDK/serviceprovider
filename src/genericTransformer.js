'use strict';
require('babel/register');
const openAgency = require('./services/OpenAgency/client.js');
const entitySuggest = require('./services/EntitySuggest/client.js');
const createTest = require('./createTest.js')

/**
 * Generic transformer function designed to build a specific transformer.
 * The Returned transformer is a function that takes two arguments:
 * request and context. If the context contains a field called
 * createTest that is set to true, the input/output of the
 * request/response transformers are recorded, and dumped as tests.
 *
 * @param {function} requestTransformer for transforming request
 *        before it is given to the clientFunction
 * @param {function} responseTransformer for transforming the response
 *        from the clientFunction before it is returned to the caller
 * @param {function} clientFunction Calls the necessary backends with
 *        the request data provided by the requestTransformer
 *
 * @returns
 */
function genericTransformer(requestTransformer, responseTransformer, clientFunction) {

  return function(request, context) {
    let client = clientFunction(context);
    let transformedRequest = requestTransformer(request, context);
    let response = client(transformedRequest);

    return response.then((result) => {

      let transformedResponse = responseTransformer(result, context);      
      if (context.createTest === true) {

        createTest(clientFunction, requestTransformer, responseTransformer,
                   request, transformedRequest, result, transformedResponse);
      }
      return transformedResponse;

    }, (err) => {
      console.log(err); // eslint-disable-line
    });
  };
}

// split
function oa_func(config) {
  let oa_client = openAgency(config);

  return function(request) {
    return oa_client.searchOpenAgency(request);
  };
}

function oaRequestTransformer(query, config) {
  return {query: query};
}

function oaResponseTransformer(response, config) {
  return JSON.stringify(response.pickupAgency);
}

// split

let oa_config = {
  wsdl: 'http://openagency.addi.dk/2.22/?wsdl/openagency.wsdl',
  libraryType: 'Folkebibliotek'
};


let oaTransformer = genericTransformer(oaRequestTransformer, oaResponseTransformer, oa_func);
let oaResponse = oaTransformer('gentofte', oa_config);

oaResponse.then(function(result) {
  console.log(result); // eslint-disable-line
}, function(err) {
  console.log(err); // eslint-disable-line
});

// split

function esFunc(config) {
  let es_client = entitySuggest(config);

  return function(request) {
    return es_client.getSubjectSuggestions(request);
  };
}

function esRequestTransformer(query) {
  return {query: query};
}

function esResponseTransformer(response) {
  return JSON.stringify(response.response.suggestions);
}

// split

let es_config = {
  endpoint: 'http://xptest.dbc.dk/ms/entity-suggest/v1/',
  createTest: true
};


let esTransformer = genericTransformer(esRequestTransformer, esResponseTransformer, esFunc);
let esResponse = esTransformer('gentofte', es_config);

esResponse.then(function(result) {
  console.log(result); // eslint-disable-line
}, function(err) {
  console.log(err); // eslint-disable-line
});
