'use strict';

// TODO
// filter is missing


function createRequestParameters(request, context) {
  let paramsPost = {
    method: 'POST',
    json: {
      like: [],
      dislike: [],
      known: [],
      discard: [],
      maxresults: request.limit
    }
  };
  let filter = context.data.app.collectionidentifiers; 
  if (filter){
    paramsPost.json.filter = [context.data.app.collectionidentifiers];
  }
  let recommenderType = 'default';
  let urls = context.data.recommend.urls;
  let defaultType = 'default';
  let uri = urls[defaultType];
  if (request.hasOwnProperty('recommender')) {
    if (!urls[request.recommender]) {
      throw {statusCode: 400,
             error: 'unknown or unsupported recommender type'};
    }
    recommenderType = request.recommender;
    uri = urls[recommenderType];
  }
  let names = {
    like: 'like',
    dislike: 'dislike',
    known: 'known',
    discard: 'discard'
  };
  for (var prop of ['like', 'dislike', 'known', 'discard']) {
    if (request.hasOwnProperty(prop)) {
      paramsPost.json[names[prop]] = request[prop];
    }
  }
  return [uri, paramsPost];
}


export default (request, context) => { // eslint-disable-line no-unused-vars
  try {
    let [uri, params] = createRequestParameters(request, context);
    return context.request(uri, params).then(body => {
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
