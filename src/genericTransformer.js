'use strict';
const createTest = require('./createTest.js');
const utils = require('./utils.js');
/**
 * Generic transformer function designed to build a specific transformer.
 * The Returned transformer is a function that takes two arguments:
 * request and context. If the context contains a field called
 * createTest that is set to true, the input/output of the
 * request/response transformers are recorded, and dumped as tests.
 * Apart from the createTest field, the context must also define a
 * createTestPath which is the path where the test will be dumped.
 * An optional createTestDescription can be present in the context,
 * and if provided will be used instead of the default.
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

export default function genericTransformer(requestTransformer, responseTransformer, clientFunction) {

  return function(request, context) {
    let client = clientFunction(context);
    let {transformedRequest, state} = requestTransformer(request, context, {});
    let clientResponse = client(transformedRequest, context, state);

    return clientResponse.response.then((result) => {

      let transformedResponse = responseTransformer(result, context, clientResponse.state);
      if (context.createTest === true) {

        if (context.createTestPath === 'undefined') {
          utils.die('Need testPath in context when creating test (context.createTest is true)');
        }
        createTest(clientFunction, requestTransformer, responseTransformer,
                   request, transformedRequest, result, transformedResponse,
                   context, clientResponse.state,
                   context.createTestPath, context.createTestDescription);
      }
      return transformedResponse;

    }, (err) => {
      console.log(err); // eslint-disable-line
    });
  };
}
