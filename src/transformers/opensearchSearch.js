import {workToJSON} from '../requestTypeIdentifier.js';
import {log} from '../utils';
import {getTrackingId} from '../utils/config';

function getSoap(
  agency,
  profile,
  q,
  filterAgency,
  sort,
  offset,
  limit,
  trackingId,
  allObject
) {
  // @TODO add trackingid here -
  return `<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://oss.dbc.dk/ns/opensearch">
  <SOAP-ENV:Body>
    <ns1:searchRequest>
      <ns1:query>${q}${(filterAgency &&
    ` AND holdingsitem.agencyId=${filterAgency}`) ||
    ''}</ns1:query>
      <ns1:agency>${agency}</ns1:agency>
      <ns1:profile>${profile}</ns1:profile>
      <ns1:start>${offset}</ns1:start>
      <ns1:stepValue>${limit}</ns1:stepValue>
      ${sort ? `<ns1:sort>${sort}</ns1:sort>` : ''}
      <ns1:collectionType>work-1</ns1:collectionType>
      <ns1:allObjects>${allObject}</ns1:allObjects>
      <ns1:objectFormat>briefDisplay</ns1:objectFormat>
      <ns1:objectFormat>dkabm</ns1:objectFormat>
      <ns1:outputType>json</ns1:outputType>
      <ns1:trackingId>${trackingId}</ns1:trackingId>
    </ns1:searchRequest>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`;
}

function assertIdentifier(o) {
  if (!o.identifier) {
    throw 'missing identifier in response from opensearch';
  }
}

function processResponse(body) {
  try {
    body = JSON.parse(body).searchResponse;
    if (body.error) {
      return {
        statusCode: 500,
        error: body.error.$
      };
    }
    body = body.result;

    // let more = body.more.$; // this could be used for paging info later
    let searchResult = body.searchResult || [];
    let result = [];
    const parseErrors = [];
    searchResult.forEach(o => {
      // eslint-disable-line no-loop-func
      let collection = o.collection.object.map(obj => {
        assertIdentifier(obj);
        return obj.identifier.$;
      });
      let dkabm = o.collection.object[0].record;
      dkabm = workToJSON(dkabm);

      let briefDisplays = [];
      if (o.formattedCollection.briefDisplay) {
        briefDisplays = o.formattedCollection.briefDisplay.manifestation.map(
          briefDisplay => {
            assertIdentifier(briefDisplay);
            delete briefDisplay.fedoraPid;
            return workToJSON(briefDisplay, 'bd');
          }
        );
      } else {
        parseErrors.push(
          `Parse error: briefDisplay could not be found on object ${collection}`
        );
        log.error('Parse error: briefDisplay could not be found on object', {
          collection: collection[0],
          context: context.data,
          OpenSearch: {trackingId: body.statInfo.Id.$}
        });
      }

      // here we would call getObject or moreInfo if needed...
      result.push(
        Object.assign(
          {
            collection: collection,
            collectionDetails: briefDisplays
          },
          dkabm,
          briefDisplays[0]
        )
      );
    });

    const response = {
      statusCode: 200,
      data: result,
      // collectionCount: +body.collectionCount.$,
      hitCount: +body.hitCount.$,
      more: body.more.$ === 'true'
    };

    if (parseErrors.length) {
      response.error = parseErrors;
    }

    return response;
  } catch (e) {
    log.error({
      error: String(e),
      searchResponse: body
    });
    return {
      statusCode: 500,
      error: String(e)
    };
  }
}

export default async (params, context) => {
  if (!params.q) {
    return Promise.resolve({statusCode: 400, error: 'missing q parameter'});
  }

  const agency = context.get('search.agency', true);
  const trackingID = getTrackingId(params, context);

  const profile =
    typeof params.profile === 'string' && params.profile.length > 0
      ? params.profile
      : context.get('search.profile', true);
  const filterAgency = context.get('search.holdingsitemagencyid') || null;
  const q = params.q.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const sort = (params.sort || '').replace(/</g, '&lt;');
  const offset = 1 + (parseInt(params.offset, 10) || 0);
  const limit = parseInt(params.limit, 10) || 10;

  // We make two simultaneous calls to opensearch improve support for multiVolume works
  // The first call only gets the work we searched for, that way we can set the correct PID, title and coverUrl
  // The second call gets all related objects, so you can identify multiVolume works.
  const bodies = await Promise.all([
    context.call(
      'opensearch',
      getSoap(
        agency,
        profile,
        q,
        filterAgency,
        sort,
        offset,
        limit,
        trackingID,
        0
      )
    ),
    context.call(
      'opensearch',
      getSoap(
        agency,
        profile,
        q,
        filterAgency,
        sort,
        offset,
        limit,
        trackingID,
        1
      )
    )
  ]);

  const responses = bodies.map(processResponse);

  // Check if either object has failed.
  if (responses[0].statusCode !== 200) {
    return responses[0];
  }

  if (responses[1].statusCode !== 200) {
    return responses[1];
  }

  // Merge the responses of the two arrays.
  if (responses[0].data && responses[1].data) {
    responses[0].data = responses[0].data.map((responseDetails, idx) => {
      const collectionDetails = responses[1].data[idx];

      if (collectionDetails.collection) {
        responseDetails.collection = collectionDetails.collection;
      }

      if (collectionDetails.collectionDetails) {
        responseDetails.collectionDetails = collectionDetails.collectionDetails;
      }

      return responseDetails;
    });
  }
  return responses[0];
};
