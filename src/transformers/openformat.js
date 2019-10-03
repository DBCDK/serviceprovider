import {log} from '../utils';

var parseString = require('xml2js').parseString;
var stripNS = require('xml2js').processors.stripPrefix;

async function callOpenformat(pid, params, context) {
  const url = context.get('services.openformat', true);

  const fields = {};
  params.fields.map(field => (fields[field] = `{${field}}`));

  try {
    const xmlResult = await context.request(url, {
      qs: {
        pid,
        action: 'formatObject',
        outputFormat: JSON.stringify({
          fields
        })
      }
    });

    let resp = {};
    parseString(xmlResult, {trim: true, tagNameProcessors: [stripNS]}, function(
      err,
      result
    ) {
      try {
        resp =
          result.Envelope.Body[0].formatResponse[0].customDisplay[0].fields[0];
      } catch (e) {
        log.error('openformat parse error', {error: String(e)});
      }
    });

    return resp;
  } catch (err) {
    log.error('openformat request error', {error: String(err)});
    return {};
  }
}

async function getOpenformatFields(params, context) {
  // Add fields from request

  // const data = [];
  const data = await Promise.all(
    params.pids.map(pid => callOpenformat(pid, params, context))
  );

  return {
    statusCode: 200,
    data
  };
}

export default (params, context) => {
  return getOpenformatFields(params, context);
};
