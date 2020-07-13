import {log} from '../utils';

var parseString = require('xml2js').parseString;
var stripNS = require('xml2js').processors.stripPrefix;
const ofFieldMap = {
  lix: 'lix',
  shelfmark: 'ddb_shelfmark',
  shelfmarkPrefix: 'ddb_shelfmark_prefix',
  artesisShelfmark: 'artesis_shelfmark',
  artesisShelfmarkPrefix: 'artesis_shelfmark_prefix',
  artesisShelfmarkExtra: 'artesis_shelfmark_extra'
};

async function callOpenformat(pid, params, context) {
  const url = context.get('services.openformat', true);

  const fields = {};
  params.fields.map(field => (fields[field] = `{${ofFieldMap[field]}}`));

  console.log('fiiiiiiiiiiiiiiiiiiiiiiiiiields', JSON.stringify(fields));

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

    console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZzxmlResult', xmlResult);

    let resp = {};
    parseString(xmlResult, {trim: true, tagNameProcessors: [stripNS]}, function(
      err,
      result
    ) {
      try {
        console.log(
          'reeeeeeeeeeeeeeeeeeeeeeeeeeeeeesult',
          JSON.stringify(result)
        );

        resp =
          result.Envelope.Body[0].formatResponse[0].customDisplay[0].fields[0];
      } catch (e) {
        log.error('openformat parse error', {error: String(e)});
      }
    });

    console.log('RESPPPPPPPPPPPPPPPPP', resp);

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
