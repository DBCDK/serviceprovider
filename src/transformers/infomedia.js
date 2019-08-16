/**
 * Retrieve articles from infomedia service
 *
 * @param {PlainObject} request
 * @param {Context} context
 * @returns {Promise}
 */
export default async function getArticles(params, context) {
  const access = context.get('access', true);
  const userId = context.get('infomedia.userId', true);
  const libraryCode = context.get('infomedia.libraryCode', true);
  const faust = params.faust;
  if (!access.includes('infomedia')) {
    return {
      statusCode: 403,
      error: 'forbidden'
    };
  }

  // This check will be unnecessary when a proper definition
  // is created. When we want swagger documentation.
  if (!faust) {
    return {
      statusCode: 400,
      error: "Missing param 'faust'"
    };
  }

  let soap = `
  <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope"
    xmlns:xml="http://www.w3.org/XML/1998/namespace" 
    xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" 
    xmlns:xs="http://www.w3.org/2001/XMLSchema" 
    xmlns:uaim="http://oss.dbc.dk/ns/useraccessinfomedia" 
    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" 
    xmlns:xmlns="http://www.w3.org/1999/xhtml">
    <SOAP-ENV:Body>
    <uaim:getArticleRequest>
      <uaim:articleIdentifier>
        <uaim:faust>${faust}</uaim:faust>
      </uaim:articleIdentifier>
      <uaim:userId>${userId}</uaim:userId>
      <uaim:libraryCode>${libraryCode}</uaim:libraryCode>
      <uaim:outputType>json</uaim:outputType>
    </uaim:getArticleRequest>
    </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>`;

  return context.call('infomediaservice', soap).then(body => {
    const parsed = JSON.parse(body);

    if (
      !parsed.getArticleResponse ||
      !parsed.getArticleResponse.getArticleResponseDetails
    ) {
      return {statusCode: 200, data: []};
    }

    const data = parsed.getArticleResponse.getArticleResponseDetails.map(
      entry => ({
        html: entry.imArticle.$
      })
    );
    return {
      statusCode: 200,
      data
    };
  });
}
