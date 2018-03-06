/**
 *
 * @param {PlainObject} request
 * @param {Context} context
 * @returns {Promise}
 */
export default async function getRecommendations(params, context) {
  const request = {};
  for (const key of [
    'like',
    'dislike',
    'offset',
    'limit',
    'ignore',
    'filters',
    'boosters'
  ]) {
    if (key) {
      request[key] = params[key];
    }
  }

  const result = await context.request(
    context.get('services.recommend', true),
    {
      method: 'post',
      json: request
    }
  );
  if (result.response) {
    return {statusCode: 200, data: result.response};
  }
  return {statusCode: result.statusCode, error: result.value};
}
