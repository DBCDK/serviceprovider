'use strict';
const fs = require('fs');
const fpath = require('path');
const utils = require('./utils.js');


function writeTestToFile(path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) {
      utils.die(err);
    }
    console.log('Test written to ' + path); // eslint-disable-line
  });
}

export default function createTest(clientFunction, requestTransformer, responseTransformer,
                                   request, transformedRequest, response, transformedResponse, path, description) {

  if (utils.isDir(fpath.dirname(path)) === false) {
    utils.die('Test directory ' + fpath.dirname(path) + ' dosn\'t exist');
  }

  var cf_name = utils.functionName(clientFunction);
  var reqt_name = utils.functionName(requestTransformer);
  var rept_name = utils.functionName(responseTransformer);

  if (description === 'undefined') {
    description = 'Test Transformers (' + reqt_name + ' and ' + rept_name + ') used with client "' + cf_name + '"';
  }

  var content = ['\'use strict\';',
                 'import {expect} from \'chai\';',
                 '',
                 '// PLEASE INSERT NECESSARY REQUIRES FOR THE FOLLOWING FUNCTIONS: ',
                 '// ' + cf_name,
                 '// ' + reqt_name,
                 '// ' + rept_name,
                 '',
                 'describe(\'' + description + '\', () => {',
                 '',
                 '  it(\'Testing output of requestTransformer "' + reqt_name + '"\', (done) => {',
                 '',
                 '    let requestTransformerInput = ' + JSON.stringify(request) + ';',
                 '    let requestTransformeroutput = ' + JSON.stringify(transformedRequest) + ';',
                 '',
                 '    expect(' + reqt_name + '(requestTransformerInput)).to.equal(requestTransformeroutput);',
                 '    done();',
                 '  });',
                 '',
                 '  it(\'Testing output of responseTransformer "' + rept_name + '"\', (done) => {',
                 '',
                 '    let responseTransformerInput = ' + JSON.stringify(response) + ';',
                 '    let responseTransformeroutput = ' + JSON.stringify(transformedResponse) + ';',
                 '',
                 '    expect(' + rept_name + '(responseTransformerInput)).to.equal(responseTransformeroutput);',
                 '    done();',
                 '  });',
                 '});'].join('\n');

  writeTestToFile(path, content);
}
