var parseString = require('xml2js').parseString;
var stripNS = require('xml2js').processors.stripPrefix;

async function callOpenformat(params, context) {
  const url = context.get('services.openformat', true);

  // Add fields from request
  const fields = {};
  params.fields.map(field => (fields[field] = `{${field}}`));

  const data = [];
  for (var i = 0; i < params.pids.length; i++) {
    const xmlResult = await context.request(url, {
      qs: {
        action: 'formatObject',
        pid: params.pids[i],
        outputFormat: JSON.stringify({
          fields
        })
      }
    });

    parseString(xmlResult, {trim: true, tagNameProcessors: [stripNS]}, function(
      err,
      result
    ) {
      const resp =
        result.Envelope.Body[0].formatResponse[0].customDisplay[0].fields[0];

      if (resp) {
        data.push(resp);
      }
    });
  }

  return {
    statusCode: 200,
    data
  };
}

export default (params, context) => {
  return callOpenformat(params, context);
};
