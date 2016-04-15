import request from 'request';

export default (params, context) => new Promise((resolve, reject) => {
  if(!params.q) {
    return resolve({statusCode: 400, 
                    error: [{error: 'missing q parameter'}]});
  }

  let facets = (Array.isArray(params.fields) && params.fields) || 
                  ['creator', 'subject', 'language', 'date', 'form'];
  let agency = context.libdata.config.agency;
  let profile = context.libdata.kommune;
  let url = context.libdata.config.provider.services.opensearch.wsdl.replace('?wsdl', '');

  let soap = `<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:open="http://oss.dbc.dk/ns/opensearch">
  <SOAP-ENV:Body>
    <open:searchRequest>
      <open:query>${String(params.q).replace(/</g, '&lt;')}</open:query>
      <open:agency>100200</open:agency>
      <open:profile>test</open:profile>
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

  request.post(url, {form: {xml: soap}}, function(err, _, body) {
    if(err) {
      return reject(err);
    }
    let result = {}
    facets = JSON.parse(body).searchResponse.result.facetResult.facet;
    facets.forEach(facet => {
      let name = facet.facetName.$.replace('facet.','');
      if(Array.isArray(facet.facetTerm)) {
        result[name] = facet.facetTerm.map(o => ({ term: o.term.$, frequency: parseInt(o.frequence.$, 10) }));
      }
    });
    resolve({statusCode: 200, data: result});
  });
});
