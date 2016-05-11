'use strict';
/**
 * User transformer.
 */
import {requestPromise} from '../services/requestPromise.js';

// TODO
// old recommend code should be removed from SP
// review names with rje: with or without s
// "recommender" should be optional and default to default :)
// in first version, default is recommend-cosim
// request verification!?

/*
function createFilter(request){
  // "filter":["phrase.type:bog"]
  // rec.collectionIdentifier:150031-sted
}
*/

/*
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
*/

function createRequestParameters(request) {
  // console.log("createRequestParameters 1");
  const uris = {
    popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1',
    default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1'
  };
  // console.log("createRequestParameters 3");
  let paramsPost = {
    // TODO: url take from context
    method: 'POST',
    json: {
      like: [], // TODO!!
      dislike: [],
      known: [],
      discard: [],
      maxresults: request.limit // TODO: should we verify requests?
    }
  };
  let recommenderType = 'default';
  let uri = uris[recommenderType];
  // console.log("createRequestParameters 4");
  if (request.hasOwnProperty('recommender')) {
    if (!uris[request.recommender]) {
      // console.log("not in map", request.recommender);
      throw {statusCode: 400,
             error: 'unknown or missing recommender type'};
    }
    recommenderType = request.recommender;
    uri = uris[recommenderType];
  }
  // console.log("createRequestParameters 5");
  let names = {
    likes: 'like',
    dislikes: 'dislike',
    known: 'known',
    discard: 'discard'
  };
  for (var prop of ['likes', 'dislikes', 'known', 'discard']) {
    // console.log("check:", prop);
    if (request.hasOwnProperty(prop)) {
      // console.log("has it:", prop, " set:", names[prop] );
      paramsPost.json[names[prop]] = request[prop];
    }
  }
  // console.log(JSON.stringify(paramsPost, null, 4));
  return [uri, paramsPost];
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

  let [uri, params] = createRequestParameters(request);
  // console.log("SP REQUEST", JSON.stringify(request,null,4));
  return context.request(uri, params).then(body => {
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
