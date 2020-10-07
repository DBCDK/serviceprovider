import { pick, identity } from 'lodash';

/**
 *
 * @param {PlainObject} request
 * @param {Context} context
 * @returns {Promise}
 */
export default async function getRecommendations(params, context) {
  let request = {};
  for (const key of [
    'like',
    'dislike',
    'offset',
    'limit',
    'ignore',
    'boosters',
    'debug'
  ]) {
    if (key) {
      request[key] = params[key];
    }
  }

  // set debugMode status (if debug, some debug-props will be returned in the)
  const isDebugMode = params['debug'];

  const result = await context.request(
    context.get('services.recommend', true),
    {
      method: 'post',
      json: request
    }
  );

  if (result.response) {
    // const data = result.response.map(
    //   ({ pid, value, work, title, creator, reader, seed }) => ({
    //     pid,
    //     val: value,
    //     from: [seed],
    //     'debug-work': isDebugMode && work,
    //     'debug-creator': isDebugMode && creator,
    //     'debug-title': isDebugMode && title,
    //     reader: isDebugMode && reader
    //   })
    // );

    const data = result.response.map(
      ({ pid, value, work, title, creator, reader, seed }) => {
        // basic props (always returned)
        const obj = {
          pid,
          val: value,
          from: [seed]
        };

        // debug props (returned in debug mode)
        const debug = {
          'debug-work': work,
          'debug-creator': creator,
          'debug-title': title,
          reader
        };

        return Object.assign({}, obj, isDebugMode ? debug : {});
      }
    );

    return {
      statusCode: 200,
      // Rewrite new api props to previous api props
      data
    };
  }

  return { statusCode: result.statusCode, error: result.value };
}
