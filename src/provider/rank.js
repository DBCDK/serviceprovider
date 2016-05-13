'use strict';
/**
 * User transformer.
 */

// TODO

function createRequestParameters(request) {
  //console.log('createRequestParameters 1');
  const uri = 'http://xp-p02.dbc.dk/rank';
  // console.log('createRequestParameters 3');
  let paramsPost = {
    // TODO: url take from context
    uri: uri,
    method: 'POST',
    json: {
      like: [],
      set: [],
      //dislike: [],
      //known: [],
      //discard: [],
      maxresults: request.limit
    }
  };
  //console.log('createRequestParameters 3');
  for (var prop of ['like', 'dislike', 'known', 'discard']) {
    //console.log('check:', prop);
    if (request.hasOwnProperty(prop)) {
      //console.log('has it:', prop);
      paramsPost.json[prop] = request[prop];
    } else {
      //console.log('NOT has it:', prop);
    }
  }
  //console.log('createRequestParameters 4');
  let pids = 'pids';
  if (request.hasOwnProperty(pids)) {
    paramsPost.json.set = request[pids];
  }
  //console.log(JSON.stringify(paramsPost, null, 4));
  return [uri, paramsPost];
}


export default (request, context) => { // eslint-disable-line no-unused-vars
  //console.log('RANK SP REQUEST', JSON.stringify(request, null, 4));
  try {
    let [uri, params] = createRequestParameters(request);
    // console.log('SP REQUEST', JSON.stringify(request,null,4));
    return context.request(uri, params).then(body => {
      // console.log('SERVICE RESPONSE', JSON.stringify(body, null, 4));
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
