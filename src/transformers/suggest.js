/**
 * Retrieve recommendations from suggester service
 *
 * @param {PlainObject} request
 * @param {Context} context
 * @returns {Promise}
 */
export default async function getRecommendations(params, context) {
  const url = context.get('services.suggest', true) + 'suggest';
  const result = JSON.parse(
    await context.request(url, {
      qs: {
        type: params.type || 'all',
        q: params.q,
        count: params.limit || 10
      }
    })
  );
  if (result.response) {
    return {
      statusCode: 200,
      data: result.response.docs.map(o => ({
        term: o.term,
        val: o.weight,
        type: o.type.split(',')
      }))
    };
  }
  return {statusCode: result.statusCode, error: result.value};
}
