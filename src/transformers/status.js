// Return the status from the service platform
//
// Partial implementation / in progress, see #875
//
const {log} = require('../utils.js');
const {version} = require('../../package.json');

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
  suggest: onlyUrl
};

export default async (request, context) => {
  const data = {version, endOfServiceDate: '0000-00-00T00:00:00Z'};
  let services = Object.keys(serviceChecks);
  if (Array.isArray(request.fields)) {
    services = services.filter(s => request.fields.includes(s));
  }

  const results = await Promise.all(
    services.map(async endpoint =>
      serviceChecks[endpoint]({
        endpoint,
        request,
        context,
        url: context.data.services[endpoint]
      })
    )
  );

  for (const i in services) {
    data[services[i]] = results[i];
  }

  return {statusCode: 200, data};
};
