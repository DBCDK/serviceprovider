const config = {
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
};
const knex = require('knex')(config);
const _ = require('lodash');

/**
 * Will traverse in streaming fashion
 * ie. should not run out of memory
 */
async function traverseAll(callback) {
  let remaining;
  let counter = 0;
  await knex
    .select('*')
    .from('docs')
    .stream(stream => {
      stream.on('data', async data => {
        stream.pause();
        counter++;
        const parsed = parse(data);
        remaining = callback(parsed);
        await remaining;
        stream.resume();
      });
    });
  await remaining;
  console.log('Traversal completed', counter);
}

function parse(result) {
  try {
    return parseJsonDoc(result);
  } catch (e) {
    return parseImg(result);
  }
}
function parseJsonDoc(result) {
  return Object.assign({}, JSON.parse(result.data.toString('utf-8')), {
    _owner: result.owner,
    _type: result.type,
    _id: result.id,
    _version: result.version,
    _client: result.client,
    _created: result.created
  });
}

function parseImg(result) {
  return {
    _data: result.data.toString('latin1'),
    _owner: result.owner,
    _type: result.type,
    _id: result.id,
    _version: result.version,
    _client: result.client,
    _created: result.created
  };
}

async function ninjaUpdate(doc) {
  const result = {
    id: doc._id,
    owner: doc._owner,
    client: doc._client,
    type: doc._type,
    version: doc._version
  };
  const keys = Object.keys(doc).filter(k => !k.startsWith('_'));
  result.data = Buffer.from(
    JSON.stringify(_.fromPairs(keys.map(k => [k, doc[k]]))),
    'utf-8'
  );
  await knex('docs')
    .where('id', result.id)
    .update(result);

  return result;
}

module.exports = {traverseAll, ninjaUpdate, knex};
