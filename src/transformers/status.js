// Return the status from the service platform
//
// Partial implementation / in progress, see #875
//
const {log} = require('../utils.js');
const {version} = require('../../package.json');
const _ = require('lodash');

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

async function onlyUrl({context, endpoint, url}) {
  return {url};
}

async function performanceStat({request, context}) {
  const isoWeek = request.week;

  if (!isoWeek.match(/\d\d\d\d-W\d\d/)) {
    throw {
      statusCode: 400,
      error: 'Invalid week parameter, should be formatted like: 2018-W15'
    };
  }
  const week = isoWeek.replace('-W', '.');

  const baseUrl = context.data.services.performance;
  const username = context.data.performance.username;
  const password = context.data.performance.password;
  const url = baseUrl + 'prod_ux-' + week + '/';

  const query = {
    size: 0,
    query: {
      match: {
        msg: 'transformer-done'
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

  const r = await context.request(`${url}/_search`, {
    method: 'POST',
    auth: {
      pass: password,
      user: username
    },
    json: query
  });
  if (r.error) {
    if (r.error.type === 'index_not_found_exception') {
      throw {
        statusCode: 404,
        error: 'No statistics available for week ' + isoWeek
      };
    } else {
      throw {
        statusCode: 500,
        error: r.error.type
      };
    }
  }

  const result = [];
  for (const serviceVersion of r.aggregations.version.buckets) {
    for (const bucket of serviceVersion.endpoints.buckets) {
      result.push({
        week: week.replace('.', '-W'),
        endpoint: bucket.key,
        version: serviceVersion.key,
        count: bucket.doc_count,
        underlyingServices: _.mapValues(bucket.external.values, Math.round),
        total: _.mapValues(bucket.total.values, Math.round)
      });
    }
  }
  return result;
}

const serviceChecks = {
  openagency: checkPhpService,
  openholdingstatus: checkPhpService,
  openorder: checkPhpService,
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

export default async (request, context) => {
  const data = {version, endOfServiceDate: '0000-00-00T00:00:00Z'};
  let checks = Object.keys(serviceChecks);
  if (Array.isArray(request.fields)) {
    checks = checks.filter(s => request.fields.includes(s));
  }
  if (!request.week) {
    checks = checks.filter(s => s !== 'performance');
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
