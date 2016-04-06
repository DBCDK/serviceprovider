'use strict';
const fs = require('fs');
const fpath = require('path');
const utils = require('./utils.js');


function writeTestToFile(path, content) {
  fs.writeFileSync(path, content, 'utf8');
  console.log('Test written to ' + path); // eslint-disable-line
}

function test2Str(type, transformerName, raw, transformed) {

  return ['  it(\'Testing output of ' + type + 'Transformer "' + transformerName + '"\', (done) => {',
          '',
          '    let ' + type + 'TransformerInput = ' + JSON.stringify(raw) + ';',
          '    let ' + type + 'TransformerOutput = ' + JSON.stringify(transformed) + ';',
          '',
          '    expect(' + transformerName + '(' + type + 'TransformerInput)).to.equal(' + type + 'TransformerOutput);',
          '    done();',
          '  });',
          '',
          ''].join('\n');

}


export default function createTest(clientFunction, requestTransformer, responseTransformer,
                                   request, transformedRequest, response, transformedResponse, path, description) {

  if (utils.isDir(fpath.dirname(path)) === false) {
    utils.die('Test directory ' + fpath.dirname(path) + ' dosn\'t exist');
  }

  var cf_name = utils.functionName(clientFunction);
  var reqt_name = utils.functionName(requestTransformer);
  var rept_name = utils.functionName(responseTransformer);

  if (!fs.existsSync(path)) {

    if (description === 'undefined') {
      description = 'Test Transformers (' + reqt_name + ' and ' + rept_name + ') used with client "' + cf_name + '"';
    }

    let content = ['\'use strict\';',
                   'import {expect} from \'chai\';',
                   '',
                   '// PLEASE INSERT NECESSARY REQUIRES FOR THE FOLLOWING FUNCTIONS: ',
                   '// ' + cf_name,
                   '// ' + reqt_name,
                   '// ' + rept_name,
                   '',
                   'describe(\'' + description + '\', () => {',
                   '',
                   ''].join('\n') +
                   test2Str('request', reqt_name, request, transformedRequest) +
                   test2Str('response', rept_name, response, transformedResponse) +
                   ['});'].join('\n');

    writeTestToFile(path, content);
  }
  else {

    let newContent = fs.readFileSync(path, 'utf8');
    let contentSplit = newContent.split(/(\/\/(\/|[\s\S])*\/\/.*)/);
    contentSplit[1] += '\n// ' + cf_name + '\n// ' + reqt_name +'\n// ' + rept_name;
    newContent = contentSplit.join('');

    contentSplit = newContent.split('\n');
    contentSplit[contentSplit.length - 2] += '\n' +
      test2Str('request', reqt_name, request, transformedRequest) +
      test2Str('response', rept_name, response, transformedResponse);

    newContent = contentSplit.join('\n');
    writeTestToFile(path, newContent);
  }
}
