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

function parseResultElement(e, trackingId) {

  if (!_.get(e, 'collection.object[0].record')) {
    throw ['Parse error: record could not be found on object', e, trackingId];
  }
  if (!_.get(e, 'collection.object[0].identifier')) {
    throw ['Parse error: identifier could not be found on object', e, trackingId];
  }

  const collection = e.collection.object.map(obj => obj.identifier.$);
  if (!_.get(e, 'formattedCollection.briefDisplay')) {
    throw [`Parse error: briefDisplay could not be found on object: ${collection}`, e, trackingId];
  }

  const dkabm = workToJSON(e.collection.object[0].record);
  const briefDisplays = e.formattedCollection.briefDisplay.manifestation.map(briefDisplay => {
    delete briefDisplay.fedoraPid;
    return workToJSON(briefDisplay, 'bd');
  });

  // here we would call getObject or moreInfo if needed...
  return Object.assign({
    collection: collection,
    collectionDetails: briefDisplays
  }, dkabm, briefDisplays[0]);

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

    const osResponse = JSON.parse(bodies[0]).searchResponse;
    const osResponseAllObjects = JSON.parse(bodies[1]).searchResponse;
    const osSearchResult = _.get(osResponse, 'result.searchResult', []);
    const osSearchResultAllObjects = _.get(osResponseAllObjects, 'result.searchResult', []);
    const transformerResult = [];
    const parseErrors = [];

    if (osResponse.error) {
      return {
        statusCode: 500,
        error: osResponse.error.$
      };
    }

    if (osResponseAllObjects.error) {
      return {
        statusCode: 500,
        error: osResponseAllObjects.error.$
      };
    }

    for (let i = 0; i < osSearchResult.length; i++) {
      try {
        const element = parseResultElement(osSearchResult[i], osResponse.result.statInfo.trackingId.$);
        const elementAllObjects = parseResultElement(osSearchResultAllObjects[i], osResponseAllObjects.result.statInfo.trackingId.$);

        if (elementAllObjects) {
          if (elementAllObjects.collection) {
            element.collection = elementAllObjects.collection;
          }
          if (elementAllObjects.collectionDetails) {
            element.collectionDetails = elementAllObjects.collectionDetails;
          }
        }

        transformerResult.push(element);
      } catch (e) {
        parseErrors.push(e[0]);
        log.error(e[0], {
          collection: e[1].collection,
          context: context.data,
          OpenSearch: {trackingId: e[2]}
        });
      }
    }

    const transformerResponse = {statusCode: 200, data: transformerResult};
    if (parseErrors.length) {
      transformerResponse.error = parseErrors;
    }

    return transformerResponse;

  });
};
