'use strict';
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
export default function genericTransformer(requestTransformer, responseTransformer, clientFunction) {

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
