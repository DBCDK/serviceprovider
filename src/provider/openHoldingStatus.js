'use strict';

import _ from 'lodash';

export default (request, context) => {
  let holdingContext = context.data.openholdingstatus;
  let params = {
    authgroupid: holdingContext.authgroupid,
    authpassword: holdingContext.authpassword,
    authid: holdingContext.authid,
    pid: request.pid,
    agency: holdingContext.agency
  };

  let soap = `
 <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:open="http://oss.dbc.dk/ns/openholdingstatus">
   <soapenv:Header/>
   <soapenv:Body>
      <open:holdingsRequest>
         <open:authentication>
            <open:groupIdAut>${params.authgroupid}</open:groupIdAut>
            <open:passwordAut>${params.authpassword}</open:passwordAut>
            <open:userIdAut>${params.authid}</open:userIdAut>
         </open:authentication>
         <open:lookupRecord>
            <open:responderId>${params.agency}</open:responderId>
            <open:pid>${params.pid}</open:pid>
         </open:lookupRecord>
         <open:outputType>json</open:outputType>
      </open:holdingsRequest>
   </soapenv:Body>
</soapenv:Envelope>`;

  return context.call('openholdingstatus', soap).then(body => {
    body = JSON.parse(body).holdingsResponse.responder;
    let data = {willLend: false};
    if (body && body.length > 0) {
      if (_.has(body[0], 'willLend.$')) {
        data.willLend = body[0].willLend.$;
      }
      if (_.has(body[0], 'expectedDelivery.$')) {
        data.expectedDelivery = body[0].expectedDelivery.$;
      }
    }

    // set willLend as boolean:
    data.willLend = data.willLend === 'true' ? true : false;
    return {statusCode: 200, data: data};
  });
};
