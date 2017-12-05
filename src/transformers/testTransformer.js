// this is a transformer used for testing

// motivation: measure
// performance of SP without doing any real work

import {log} from '../utils.js';

export function testTransformer(params, context) {
  // eslint-disable-line no-unused-vars
  log.info('testTransformer called');
  let now = new Date().toString();
  return new Promise(resolve => {
    return resolve({statusCode: 200, data: {date: now}});
  });
}
