'use strict';
require('babel/register');

const openAgency = require('./services/OpenAgency/client.js');
const entitySuggest = require('./services/EntitySuggest/client.js');
const genericTransformer = require('./genericTransformer.js');

// split
function oa_func(config) {
  let oa_client = openAgency(config);

  return function(request) {
    return oa_client.searchOpenAgency(request);
  };
}

function oaRequestTransformer(query, config) { // eslint-disable-line no-unused-vars
  return {query: query};
}

function oaResponseTransformer(response, config) { // eslint-disable-line no-unused-vars
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
  createTest: true,
  createTestPath: '/home/shm/repos/serviceprovider/TESTS/myTest.js',
  createTestDescription: 'foo the bar'
};


let esTransformer = genericTransformer(esRequestTransformer, esResponseTransformer, esFunc);
let esResponse = esTransformer('gentofte', es_config);

esResponse.then(function(result) {
  console.log(result); // eslint-disable-line
}, function(err) {
  console.log(err); // eslint-disable-line
});
