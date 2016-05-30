'use strict';

function createRequestParameters(request, context) {
  // create request parameters from request and context
  const uri = context.get('services.rank');
  let paramsPost = {
    uri: uri,
    method: 'POST',
    json: {
      like: [],
      set: [],
      // these are not mandatory:
      // dislike: [],
      // known: [],
      // discard: [],
      maxresults: request.limit
    }
  };
  for (var prop of ['like', 'dislike', 'known', 'discard']) {
    if (request.hasOwnProperty(prop)) {
      paramsPost.json[prop] = request[prop];
    }
  }
  let pids = 'pids';
  if (request.hasOwnProperty(pids)) {
    paramsPost.json.set = request[pids];
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
