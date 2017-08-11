import {workToJSON} from '../requestTypeIdentifier.js';
import {log} from '../utils';
import _ from 'lodash';

function getSoap(agency, profile, q, filterAgency, sort, offset, limit, allObject) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://oss.dbc.dk/ns/opensearch">
  <SOAP-ENV:Body>
    <ns1:searchRequest>
      <ns1:query>${q}${filterAgency && ` AND holdingsitem.agencyId=${filterAgency}` || ''}</ns1:query>
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
    </ns1:searchRequest>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`;
}

export default (params, context) => {
  if (!params.q) {
    return Promise.resolve({statusCode: 400, error: 'missing q parameter'});
  }

  const agency = context.get('search.agency');
  const profile = context.get('search.profile');
  const filterAgency = context.get('search.holdingsitemagencyid') || null;
  const q = params.q.replace(/</g, '&lt;');
  const sort = (params.sort || '').replace(/</g, '&lt;');
  const offset = 1 + (parseInt(params.offset, 10) || 0);
  const limit = parseInt(params.limit, 10) || 10;

  // We make two simultaneous calls to opensearch improve support for multiVolume works
  // The first call only gets the work we searched for, that way we can set the correct PID, title and coverUrl
  // The second call gets all related objects, so you can identify multiVolume works.
  return Promise.all([
    context.call('opensearch', getSoap(agency, profile, q, filterAgency, sort, offset, limit, 0)),
    context.call('opensearch', getSoap(agency, profile, q, filterAgency, sort, offset, limit, 1))
  ]).then(bodies => {
    const responses = bodies.map(body => {
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
      searchResult.forEach(o => { // eslint-disable-line no-loop-func

        try {
          if (!_.get(o, 'collection.object[0].record')) {
            throw 'Parse error: record could not be found on object';
          }
          if (!_.get(o, 'collection.object[0].identifier')) {
            throw 'Parse error: identifier could not be found on object';
          }
          if (!_.get(o, 'formattedCollection.briefDisplay')) {
            throw 'Parse error: briefDisplay could not be found on object';
          }

          let collection = o.collection.object.map(obj => obj.identifier.$);
          let dkabm = o.collection.object[0].record;
          dkabm = workToJSON(dkabm);
          let briefDisplays = [];
          briefDisplays = o.formattedCollection.briefDisplay.manifestation.map(briefDisplay => {
            delete briefDisplay.fedoraPid;
            return workToJSON(briefDisplay, 'bd');
          });

          // here we would call getObject or moreInfo if needed...
          result.push(Object.assign({
            collection: collection,
            collectionDetails: briefDisplays
          }, dkabm, briefDisplays[0]));

        }
        catch (e) {
          parseErrors.push(e);
          log.error(e, {
            collection: o.collection,
            context: context.data,
            OpenSearch: {trackingId: body.statInfo.trackingId.$}
          });
        }
      });

      const response = {statusCode: 200, data: result};

      if (parseErrors.length) {
        response.error = parseErrors;
      }

      return response;
    });

    // Check if either object has failed.
    if (responses[0].statusCode !== 200) {
      return responses[0];
    }

    if (responses[1].statusCode !== 200) {
      return responses[1];
    }

    // For second response, create mapping from all identifiers
    // to corresponding collections
    const identifierToCollection = {};
    responses[1].data.forEach(r => {
      r.collection.forEach(id => {
        identifierToCollection[id] = r;
      });
    });

    // Merge the responses of the two arrays.
    if (responses[0].data && responses[1].data) {
      responses[0].data = responses[0].data.map((responseDetails, idx) => {

        // fetch matching collection from second response
        const id = responseDetails.collection[0];
        const collectionDetails = identifierToCollection[id];

        if (collectionDetails) {
          if (collectionDetails.collection) {
            responseDetails.collection = collectionDetails.collection;
          }

          if (collectionDetails.collectionDetails) {
            responseDetails.collectionDetails = collectionDetails.collectionDetails;
          }
        }

        return responseDetails;
      });
    }
    return responses[0];
  });
};
