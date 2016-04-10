'use strict';
const fs = require('fs');
const fpath = require('path');
const utils = require('./utils.js');


function writeTestToFile(path, content) {
  fs.writeFileSync(path, content, 'utf8');
  console.log('Test written to ' + path); // eslint-disable-line
}


function padJSON(preString, content, char, padLength) {
  let newContent = preString + JSON.stringify(content, null, 4) + ';';
  return Array(padLength + 1).join(char) + newContent.split('\n').join('\n' + Array(padLength + 1).join(char));
}


function test2Str(type, transformerName, raw, transformed, context, state) {

  let pre = ['',
             '  it(\'Testing output of ' + type + 'Transformer "' + transformerName + '"\', (done) => {',
             '',
             '    let ' + type + 'TransformerInput = ' + JSON.stringify(raw) + ';',
             '    let ' + type + 'TransformerOutput = JSON.stringify(' + JSON.stringify(transformed) + ');',
             padJSON('let context = ', context, ' ', 4),
             padJSON('let state = ', state, ' ', 4),
             ''].join('\n');

  let call = '    let actualOutput = JSON.stringify(' + transformerName + '(' + type + 'TransformerInput, context, state).transformedRequest);';

  if (type === 'response') {
    call = '    let actualOutput = JSON.stringify(' + transformerName + '(' + type + 'TransformerInput, context, state));';
  }
  let post = ['    expect(actualOutput).to.equal(' + type + 'TransformerOutput);',
          '    done();',
          '  });',
          ''].join('\n');
  return pre + call + '\n' + post;
}

export default function createTest(clientFunction, requestTransformer, responseTransformer,
                                   request, transformedRequest, response, transformedResponse,
                                   context, clientState,
                                   path, description) {

  if (utils.isDir(fpath.dirname(path)) === false) {
    utils.die('Test directory ' + fpath.dirname(path) + ' dosn\'t exist');
  }

  if (typeof clientState === 'undefined') {
    clientState = {};
  }


  var cf_name = utils.functionName(clientFunction);
  var reqt_name = utils.functionName(requestTransformer);
  var rept_name = utils.functionName(responseTransformer);

  if (!fs.existsSync(path)) {

    if (description === 'undefined') {
      description = 'Test Transformers (' + reqt_name + ' and ' + rept_name + ') used with client "' + cf_name + '"';
    }

    let content = ['/*eslint-disable */',
                   '\'use strict\';',
                   'import {expect} from \'chai\';',
                   '',
                   '// PLEASE INSERT NECESSARY IMPORTS FOR THE FOLLOWING FUNCTIONS: ',
                   '// ' + cf_name,
                   '// ' + reqt_name,
                   '// ' + rept_name,
                   '',
                   'describe(\'' + description + '\', () => {',
                   '',
                   ''].join('\n') +
                   test2Str('request', reqt_name, request, transformedRequest, context, {}) +
                   test2Str('response', rept_name, response, transformedResponse, context, clientState) +
                   ['});',
                    '/*eslint-enable */'].join('\n');

    writeTestToFile(path, content + '\n');
  }
  else {

    let fileContent = fs.readFileSync(path, 'utf8');
    let contentSplit = fileContent.split(/(\/\/ PLEASE [\s\S]+?)\n\n/);
    contentSplit[1] += '\n// ' + cf_name + '\n// ' + reqt_name +'\n// ' + rept_name + '\n\n';
    fileContent = contentSplit.join('');
    contentSplit = fileContent.split('\n');
    contentSplit[contentSplit.length - 4] += '\n' +
      test2Str('request', reqt_name, request, transformedRequest, context, {}) +
      test2Str('response', rept_name, response, transformedResponse, context, clientState);
    fileContent = contentSplit.join('\n');
    writeTestToFile(path, fileContent + '\n');
  }
}
