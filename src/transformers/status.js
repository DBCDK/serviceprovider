import getOrderPolicy from './getOrderPolicy';
import openformatTransformer from './openformat';

// Return the status from the service platform
//
// Partial implementation / in progress, see #875
//
const {log} = require('../utils.js');
const {version} = require('../../package.json');
const _ = require('lodash');
const {knex} = require('../knex.js');

async function checkPhpService({context, endpoint, url}) {
  let result;
  try {
    result = await context.request(url + '?HowRU', {});
  } catch (e) {
    result = e;
  }
  return result === 'Gr8'
    ? {
        url,
        ok: true
      }
    : {
        url,
        ok: false,
        error: String(result)
      };
}

async function checkOpenOrder({context, endpoint, url}) {
  let result;
  try {
    result = await getOrderPolicy(
      {pids: ['870970-basis:25775481']},
      context,
      790900
    );
  } catch (e) {
    result = e;
  }
  return result.statusCode === 200
    ? {
        url,
        ok: true
      }
    : {
        url,
        ok: false,
        error: String(result)
      };
}

async function checkOpenformat({context, endpoint, url}) {
  const result = await openformatTransformer(
    {fields: ['shelf'], pids: ['870970-basis:25775481']},
    context
  );

  return result.statusCode === 200
    ? {
        url,
        ok: true
      }
    : {
        url,
        ok: false,
        error: String(result)
      };
}

async function onlyUrl({context, endpoint, url}) {
  return {url};
}

async function performanceStat({request, context}) {
  let before, after;
  try {
    before = request.before ? new Date(request.before) : new Date();
    after = request.after ? new Date(request.after) : +before - 60 * 1000;
    if (before < after) {
      throw new Error();
    }
  } catch (e) {
    throw {
      statusCode: 400,
      error: 'Invalid after/before parameters, must be dates, and ordered'
    };
  }

  const username = context.data.performance.username;
  const password = context.data.performance.password;
  let url = context.data.services.performance;
  const query = {
    size: 0,

    query: {
      bool: {
        must: [
          {
            match_all: {}
          },
          {
            match_phrase: {
              msg: {
                query: 'transformer-done'
              }
            }
          },
          {
            match_phrase: {
              app: {
                query: 'serviceprovider'
              }
            }
          },
          {
            range: {
              '@timestamp': {
                gte: +after,
                lte: +before,
                format: 'epoch_millis'
              }
            }
          }
        ],
        filter: [],
        should: [],
        must_not: []
      }
    },
    aggs: {
      version: {
        terms: {
          field: 'version.keyword'
        },
        aggs: {
          endpoints: {
            terms: {
              field: 'name.keyword'
            },
            aggs: {
              external: {
                percentiles: {
                  field: 'timings.external'
                }
              },
              total: {
                percentiles: {
                  field: 'timings.total'
                }
              }
            }
          }
        }
      }
    }
  };

  const r = await context.request(`${url}_search`, {
    method: 'POST',
    auth: {
      pass: password,
      user: username
    },
    json: query
  });
  if (r.error) {
    throw {
      statusCode: 500,
      error: r.error.type
    };
  }

  console.log('########## r', r);

  const result = [];
  for (const serviceVersion of r.aggregations.version.buckets) {
    for (const bucket of serviceVersion.endpoints.buckets) {
      result.push({
        endpoint: bucket.key,
        version: serviceVersion.key,
        count: bucket.doc_count,
        underlyingServices: _.mapValues(bucket.external.values, Math.round),
        total: _.mapValues(bucket.total.values, Math.round)
      });
    }
  }
  result.sort((a, b) => b.count - a.count);
  return result;
}

const serviceChecks = {
  openagency: checkPhpService,
  openholdingstatus: checkPhpService,
  openorder: checkOpenOrder,
  openformat: checkOpenformat,
  opensearch: checkPhpService,
  openuserstatus: checkPhpService,
  moreinfo: checkPhpService,
  ddbcmsapi: onlyUrl,
  recommend: async ({context, endpoint, url}) => {
    let result;
    try {
      result = JSON.parse(
        await context.request(url.replace(/[^/]*[/]?$/, 'status'), {})
      );
    } catch (e) {
      result = e;
    }
    return Object.assign(
      {url},
      result.ok ? {ok: true} : {error: JSON.stringify(result)}
    );
  },
  communityservice: onlyUrl,
  storage: async ({context}) => {
    let ok = true;
    try {
      await knex.raw('SELECT 1;');
    } catch (e) {
      ok = false;
    }
    return {
      ok,
      user: context.get('storage.user'),
      client: context.get('app.clientId')
    };
  },
  suggest: async ({context, endpoint, url}) => {
    let result;
    try {
      result = JSON.parse(await context.request(url + 'status', {}));
    } catch (e) {
      result = e;
    }
    return Object.assign(
      {url},
      result.ok ? {ok: true} : {error: JSON.stringify(result)}
    );
  },
  performance: performanceStat
};

module.exports = async (request, context) => {
  const data = {version, endOfServiceDate: '0000-00-00T00:00:00Z'};
  let checks = Object.keys(serviceChecks);
  if (Array.isArray(request.fields)) {
    checks = checks.filter(s => request.fields.includes(s));
  }

  try {
    const results = await Promise.all(
      checks.map(async endpoint =>
        serviceChecks[endpoint]({
          endpoint,
          context,
          url: context.data.services[endpoint],
          request
        })
      )
    );

    for (const i in checks) {
      data[checks[i]] = results[i];
    }

    return {statusCode: 200, data};
  } catch (e) {
    if (e.statusCode && e.error) {
      return e;
    }
    throw e;
  }
};
