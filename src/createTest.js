'use strict';

function functionName(fun) {
  let ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}

export default function createTest(clientFunction, requestTransformer, responseTransformer,
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
