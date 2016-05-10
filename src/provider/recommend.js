'use strict';
/**
 * User transformer.
 */
import {requestPromise} from '../services/requestPromise.js';

// TODO
// old recommend code should be removed

/*
function createFilter(request){
  // "filter":["phrase.type:bog"]
  // rec.collectionIdentifier:150031-sted
}
*/

function getLimit(request) {
  var maxresults = 10;
  if (!isNaN(request.limit)) {
    let limit = Math.round(request.limit);
    let minlimit = 0;
    let maxlimit = 10000;
    if (limit >= minlimit && limit < maxlimit) {
      // TODO should throw error on invalid limit
      maxresults = limit;
    } // eslint-disable-line no-unused-vars
  }
  return maxresults;
}

export default (request, context) => { // eslint-disable-line no-unused-vars
//   {
//     "filter": [
//         "870970"
//     ],
//     "recommender": "popular",
//     "likes": [],
//     "limit": 10
// }

  // first version only support popular
  if (!request || request.recommender !== 'popular') {
    return new Promise(resolve => {
      return resolve({statusCode: 501,
                      error: 'only popular implemented'});
    });
  }
  var maxresults = 0;
  try {
    maxresults = getLimit(request);
  }
  catch (err) {
    // console.log(JSON.stringify(err, null, 4));
    throw err;
  }
  // console.log("SP REQUEST", JSON.stringify(request,null,4));
  let paramsPost = {
    // TODO: url take from context
    uri: 'https://xptest.dbc.dk/ms/recommend-pop/v1',
    method: 'POST',
    json: {
      like: [], // TODO!!
      maxresults: maxresults
    }
  };
  return requestPromise(paramsPost).then(body => {
    // TODO: should use call to call requestPromise to support
    // testing, timing etc.
    // Rasmus needs to explain
    // console.log("SERVICE RESPONSE", JSON.stringify(body, null, 4));
    var result = [];
    if (body.result) {
      for (let i = 0; i < body.result.length; ++i) {
	let o = body.result[i]; // eslint-disable-line indent
	let pid = o[0]; // eslint-disable-line indent
	let r = o[1]; // eslint-disable-line indent
	r.pid = pid; // eslint-disable-line indent
	result.push(r); // eslint-disable-line indent
      }
    }
    return {statusCode: 200, data: result};
  });
};
