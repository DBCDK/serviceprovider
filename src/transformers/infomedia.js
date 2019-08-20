function toFaust(pid) {
  return pid.replace(/\d+-\w+:/, '');
}

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
  const libraryCode = context.get('user.libraryId', true);
  const pid = params.pid;
  if (!access.includes('infomedia')) {
    return {
      statusCode: 403,
      error: 'forbidden'
    };
  }

  // This check will be unnecessary when a proper definition
  // is created. When we want swagger documentation.
  if (!pid) {
    return {
      statusCode: 400,
      error: "Missing param 'pid'"
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
        <uaim:faust>${toFaust(pid)}</uaim:faust>
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
        id: entry.articleIdentifier.$,
        html: entry.imArticle.$
      })
    );
    return {
      statusCode: 200,
      data
    };
  });
}
