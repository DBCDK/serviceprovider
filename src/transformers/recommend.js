'use strict';
/**
 * User transformer.
 */

// TODO
// old recommend code should be removed from SP

/*
function createFilter(request){
  // "filter":["phrase.type:bog"]
  // rec.collectionIdentifier:150031-sted
}
*/



/* 
// Examples
'{"recommender":"popular", "limit":10, "timings":true}' 
"http://localhost:8080/v0/recommend"

'{"like":["870970-basis:45488713", "870970-basis:28643713", "870970-basis:29494940", "870970-basis:29386404", "870970-basis:28429576"], "limit":10, "timings":true}' 
"http://localhost:8080/v0/recommend"

*/

function createRequestParameters(request, context) {
  // console.log("createRequestParameters 1");
  // const uris = {
  //   popular: 'https://xptest.dbc.dk/ms/recommend-pop/v1',
  //   default: 'https://xptest.dbc.dk/ms/recommend-cosim/v1'
  // };
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
  //console.log("createRequestParameters 3");
  let urls = context.data.recommend.urls;
  //console.log(JSON.stringify(urls, null, 4));
  //console.log("deafult url:", urls['default']);
  let defaultType = 'default';
  let uri = urls[defaultType];
  //console.log("createRequestParameters 4");
  if (request.hasOwnProperty('recommender')) {
    if (!urls[request.recommender]) {
      // console.log("not in map", request.recommender);
      throw {statusCode: 400,
             error: 'unknown or unsupported recommender type'};
    }
    recommenderType = request.recommender;
    uri = urls[recommenderType];
  }
  // console.log("createRequestParameters 5");
  let names = {
    like: 'like',
    dislike: 'dislike',
    known: 'known',
    discard: 'discard'
  };
  for (var prop of ['like', 'dislike', 'known', 'discard']) {
    // console.log("check:", prop);
    if (request.hasOwnProperty(prop)) {
      // console.log("has it:", prop, " set:", names[prop] );
      paramsPost.json[names[prop]] = request[prop];
    }
  }
  //console.log(JSON.stringify(paramsPost, null, 4));
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
  try {
    let [uri, params] = createRequestParameters(request, context);
    // console.log("SP REQUEST", JSON.stringify(request,null,4));
    return context.request(uri, params).then(body => {
      //console.log("SERVICE RESPONSE", JSON.stringify(body, null, 4));
      var result = [];
      
      if (body.result) {
        for (let i = 0; i < body.result.length; ++i) {
          let o = body.result[i];
          let pid = o[0];
          let r = o[1];
          r.pid = pid;
          result.push(r);
        }
      }
      return {statusCode: 200, data: result};
    });
  } catch (err){
    if (err.hasOwnProperty('statusCode')){
      return Promise.resolve(err);
    }
  }
};