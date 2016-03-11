'use strict';
require('babel/register');
const openAgency = require('./services/OpenAgency/client.js');
const entitySuggest = require('./services/EntitySuggest/client.js');


function functionName(fun) {
  let ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}

function logTest(clientFunction, requestTransformer, responseTransformer,
                 request, transformedRequest, response, transformedResponse) {
  console.log('// START RECORD TEST'); // eslint-disable-line
  console.log(['\'use strict\';', // eslint-disable-line
               'import {expect} from \'chai\';',
               '',
               'describe(\'Test Transformers used with client "' + functionName(clientFunction)+ '"\', () => {',
               '',
               '  it(\'Testing requestTransformer "' + functionName(requestTransformer) + '"\', (done) => {',
               '    let requestTransformer = ' + functionName(requestTransformer) + ';',
               '    let requestTransformerInput = ' + JSON.stringify(request) + ';',
               '    let requestTransformeroutput = ' + JSON.stringify(transformedRequest) + ';',
               '',
               '    expect(requestTransformer(requestTransformerInput)).to.equal(requestTransformeroutput);',
               '    done();',
               '  });',
               '',
               '  it(\'Testing responseTransformer "' + functionName(responseTransformer) + '"\', (done) => {',
               '    let responseTransformer = ' + functionName(responseTransformer) + ';',
               '    let responseTransformerInput = ' + JSON.stringify(response) + ';',
               '    let responseTransformeroutput = ' + JSON.stringify(transformedResponse) + ';',
               '',
               '    expect(responseTransformer(responseTransformerInput)).to.equal(responseTransformeroutput);',
               '    done();',
               '  });',
               '});'].join('\n'));

  console.log('// END RECORD TEST'); // eslint-disable-line
}


function genericTransformer(requestTransformer, responseTransformer, clientFunction) {

  return function(request, config, record) {
    if (record === undefined) { // eslint-disable-line
      record = false;
    }

    let client = clientFunction(config);
    let transformedRequest = requestTransformer(request);
    let response = client(transformedRequest);

    return response.then((result) => {

      let transformedResponse = responseTransformer(result);
      if (record === true) {
        logTest(clientFunction, requestTransformer, responseTransformer,
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

function oaRequestTransformer(query) {
  return {query: query};
}

function oaResponseTransformer(response) {
  return JSON.stringify(response.pickupAgency);
}

// split

let oa_config = {
  wsdl: 'http://openagency.addi.dk/2.22/?wsdl/openagency.wsdl',
  libraryType: 'Folkebibliotek'
};


let oaTransformer = genericTransformer(oaRequestTransformer, oaResponseTransformer, oa_func);
// let response = oaTransformer('gentofte', oa_config, true);
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
  endpoint: 'http://xptest.dbc.dk/ms/entity-suggest/v1/'
};


let esTransformer = genericTransformer(esRequestTransformer, esResponseTransformer, esFunc);
let esResponse = esTransformer('hest', es_config, true);
// let esResponse = esTransformer('gentofte', es_config);

esResponse.then(function(result) {
  console.log(result); // eslint-disable-line
}, function(err) {
  console.log(err); // eslint-disable-line
});
