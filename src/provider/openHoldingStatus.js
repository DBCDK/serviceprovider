'use strict';


// Takes one pid and a list of agencies in a filter:
// { "pid": "123-hello:456", filter: ["710100", "710118"] }
export default (request, context) => {

  let holdingContext = context.data.openholdingstatus;

  let params = {
    authgroupid: holdingContext.authgroupid,
    authpassword: holdingContext.authpassword,
    authid: holdingContext.authid,
    pid: request.pid,
    agencies: request.fields
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
         ${params.agencies.map(agency => {
           let xml = '<open:lookupRecord><open:responderId>' + agency + '</open:responderId><open:pid>' + request.pid + '</open:pid></open:lookupRecord>';
           return xml;
         }).join('\n')}
         <open:outputType>json</open:outputType>
      </open:holdingsRequest>
   </soapenv:Body>
</soapenv:Envelope>`;

  return context.call('openholdingstatus', soap).then(body => {
    body = JSON.parse(body).holdingsResponse.responder;

    let res = {
      pid: params.pid
    };
    body.forEach(response => {
      let entry = {
        willLend: response.willLend.$,
        expectedDelivery: response.expectedDelivery.$
      };
      res[response.responderId.$] = entry;
    });

    return {statusCode: 200, data: res};
  });
};
