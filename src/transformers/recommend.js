/**
 *
 * @param {PlainObject} request
 * @param {Context} context
 * @returns {String}
 * @throws {PlainObject}
 */
function getRecommenderUrl(request, context) {
  const urls = context.get('services.recommendurls', true);
  const defaultType = 'default';
  let uri = urls[defaultType];

  if (request.hasOwnProperty('recommender')) {
    if (!urls[request.recommender]) {
      throw {statusCode: 400,
        error: 'unknown or unsupported recommender type'};
    }

    uri = urls[request.recommender];
  }

  return uri;
}

/**
 *
 * @param {PlainObject} request
 * @param {Context} context
 * @returns {Array}
 */
function createRequestParameters(request, context) {
  const paramsPost = {
    method: 'POST',
    json: {
      like: [],
      dislike: [],
      known: [],
      discard: [],
      maxresults: request.limit
    }
  };

  const uri = getRecommenderUrl(request, context);
  const filter = context.get('search.collectionidentifiers');

  if (filter) {
    paramsPost.json.filter = [filter];
  }

  for (const prop of ['like', 'dislike', 'known', 'discard']) {
    if (request.hasOwnProperty(prop)) {
      paramsPost.json[prop] = request[prop];
    }
  }

  return [uri, paramsPost];
}

/**
 *
 * @param {PlainObject} request
 * @param {Context} context
 * @returns {Promise}
 */
export default function getRecommendations(request, context) {
  try {
    const [uri, params] = createRequestParameters(request, context);
    return context.request(uri, params).then(body => {
      let result = [];

      if (Array.isArray(body.result)) {
        result = body.result.map(o => Object.assign(o[1], {pid: o[0]}));
        result.forEach(o => {
          for (const key in o) {
            if (key !== 'val' && !Array.isArray(o[key])) {
              o[key] = [o[key]];
            }
          }
        });
      }

      return {statusCode: 200, data: result};
    });
  }
  catch (err){
    if (err.hasOwnProperty('statusCode')){
      return Promise.resolve(err);
    }
  }

  return Promise.resolve({statusCode: 500, error: 'internal server error'});
}
