'use strict';
const fs = require('fs');
const fpath = require('path');


function die(string) {
  console.log('ERROR: ' + string); // eslint-disable-line
  throw (string);
}


function writeToFile(path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) {
      die(err);
    }
    console.log('Test written to ' + path); // eslint-disable-line
  });
}


function isDir(path) {
  try {
    let stats = fs.lstatSync(path);
    if (stats.isDirectory()) {
      return true;
    }
  }
    catch (e) {} // eslint-disable-line
  return false;
}


function functionName(fun) {
  let ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}

export default function createTest(clientFunction, requestTransformer, responseTransformer,
                                   request, transformedRequest, response, transformedResponse, path, description) {

  if (isDir(fpath.dirname(path)) === false) {
    die('Test directory ' + fpath.dirname(path) + ' dosn\'t exist');
  }

  var cf_name = functionName(clientFunction);
  var reqt_name = functionName(requestTransformer);
  var rept_name = functionName(responseTransformer);

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

  writeToFile(path, content);
  // console.log('// START RECORD TEST'); // eslint-disable-line
  // console.log(['\'use strict\';', // eslint-disable-line
  //              'import {expect} from \'chai\';',
  //              '// PLEASE INSERT NECESSARY REQUIRES FOR THE FOLLOWING FUNCTIONS: ',
  //              '// ' + cf_name,
  //              '// ' + reqt_name,
  //              '// ' + rept_name,
  //              '',
  //              'describe(\'Test Transformers used with client "' + cf_name + '"\', () => {',
  //              '',
  //              '  it(\'Testing requestTransformer "' + reqt_name + '"\', (done) => {',
  //              '    let requestTransformer = ' + reqt_name + ';',
  //              '    let requestTransformerInput = ' + JSON.stringify(request) + ';',
  //              '    let requestTransformeroutput = ' + JSON.stringify(transformedRequest) + ';',
  //              '',
  //              '    expect(requestTransformer(requestTransformerInput)).to.equal(requestTransformeroutput);',
  //              '    done();',
  //              '  });',
  //              '',
  //              '  it(\'Testing responseTransformer "' + rept_name + '"\', (done) => {',
  //              '    let responseTransformer = ' + rept_name + ';',
  //              '    let responseTransformerInput = ' + JSON.stringify(response) + ';',
  //              '    let responseTransformeroutput = ' + JSON.stringify(transformedResponse) + ';',
  //              '',
  //              '    expect(responseTransformer(responseTransformerInput)).to.equal(responseTransformeroutput);',
  //              '    done();',
  //              '  });',
  //              '});'].join('\n'));

  // console.log('// END RECORD TEST'); // eslint-disable-line
}
