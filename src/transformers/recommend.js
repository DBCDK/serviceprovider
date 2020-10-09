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
    'boosters',
    'debug'
  ]) {
    if (key) {
      request[key] = params[key];
    }
  }

  // set debugMode status (if debug, some debug-props will be returned in the)
  const isDebugMode = params.debug;

  const result = await context.request(
    context.get('services.recommend', true),
    {
      method: 'post',
      json: request
    }
  );

  if (result.response) {
    // Rewrite new api props to previous api props
    const data = result.response.map(
      ({pid, value, work, title, creator, reader, seed}) => {
        // basic props (always returned)
        const obj = {
          pid,
          val: value,
          from: [seed]
        };

        // Add debug props, if in debugmode
        if (isDebugMode) {
          obj.debug = {
            'debug-work': work,
            'debug-creator': creator,
            'debug-title': title,
            reader
          };
        }

        return obj;
      }
    );

    return {
      statusCode: 200,
      data
    };
  }

  return {statusCode: result.statusCode, error: result.value};
}
