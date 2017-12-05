let contextSample = require('../context-sample.json').context;

export default context => {
  for (let key1 in contextSample) {
    if (typeof context[key1] !== 'object') {
      throw `Auth-config problem: ${key1} is not an object in the context`;
    }
    for (let key2 in contextSample[key1]) {
      if (typeof context[key1][key2] === 'undefined') {
        throw `Auth-config problem: missing ${key2} in context.${key1}`;
      }
    }
  }
};
