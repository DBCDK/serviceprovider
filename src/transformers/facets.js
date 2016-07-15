

import {log} from '../utils.js';

function generateSoap(params, context) {
  const facets = (Array.isArray(params.fields) && params.fields) || ['creator', 'subject', 'language', 'date', 'form'];
  const agency = context.get('search.agency');
  const profile = context.get('search.profile');

  return `<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:open="http://oss.dbc.dk/ns/opensearch">
  <SOAP-ENV:Body>
    <open:searchRequest>
      <open:query>${String(params.q).replace(/</g, '&lt;')}</open:query>
      <open:agency>${agency}</open:agency>
      <open:profile>${profile}</open:profile>
      <open:facets>
        <open:numberOfTerms>${parseInt(params.limit, 10) || 10}</open:numberOfTerms>
        <open:facetSort>count</open:facetSort>
        <open:facetMinCount>1</open:facetMinCount>
        ${facets.map(s =>
  '<open:facetName>facet.' + String(s).replace(/</g, '&lt;') + '</open:facetName>').join('\n        ')
    }
      </open:facets>
      <open:start>1</open:start>
      <open:stepValue>0</open:stepValue>
      <open:outputType>json</open:outputType>
    </open:searchRequest>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`;
}

export default (params, context) => new Promise((resolve) => {
  if (!params.q) {
    return resolve({
      statusCode: 400,
      error: 'missing q parameter'
    });
  }

  const soap = generateSoap(params, context);

  return context.call('opensearch', soap).then(body => {
    try {
      const result = {};
      body = JSON.parse(body).searchResponse;

      if (body.error) {
        return resolve({
          statusCode: 500,
          error: body.error.$
        });
      }

      const facets = ((body.result.facetResult || {}).facet || []);
      facets.forEach(facet => {
        const name = facet.facetName.$.replace('facet.', '');
        if (Array.isArray(facet.facetTerm)) {
          result[name] = facet.facetTerm.map(o => ({
            term: o.term.$,
            frequency: parseInt(o.frequence.$, 10)
          }));
        }
      });
      return resolve({
        statusCode: 200,
        data: result
      });
    }
    catch (e) {
      log.error('response from facet-request', {
        error: e,
        errorString: String(e)
      });
      return resolve({
        statusCode: 400,
        error: 'error fulfilling the request'
      });
    }
  });
});
