

function createRequestParameters(request, context) {
  // create request parameters from request and context
  const uri = context.get('services.rank');
  const paramsPost = {
    uri: uri,
    method: 'POST',
    json: {
      like: [],
      set: [],
      maxresults: request.limit
    }
  };

  for (const prop of ['like', 'dislike', 'known', 'discard']) {
    if (request.hasOwnProperty(prop)) {
      paramsPost.json[prop] = request[prop];
    }
  }

  const pids = 'pids';
  if (request.hasOwnProperty(pids)) {
    paramsPost.json.set = request[pids];
  }

  return [uri, paramsPost];
}


export default (request, context) => { // eslint-disable-line no-unused-vars
  try {
    const [uri, params] = createRequestParameters(request, context);

    return context.request(uri, params).then(body => {
      let result = [];
      if (Array.isArray(body.result)) {
        result = body.result.map(o => Object.assign(o[1], {pid: o[0]}));
      }

      return {statusCode: 200, data: result};
    });
  }
  catch (err){
    if (err.hasOwnProperty('statusCode')){
      return Promise.resolve(err);
    }
  }

  return Promise.resolve({statusCode: 500, error: 'Internal server error.'});
};
