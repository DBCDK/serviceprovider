import _ from 'lodash';

function setParams(request, context) {
  const agency = context.get('user.agency', true) || '710100';
  let params = {
    lookup: `${request.pid}@${agency}`
  };
  return params;
}

export default (request, context) => {
  const params = setParams(request, context);
  return context.call('holdingsservice', params).then(body => {
    let data = { willLend: false };

    if (body.data.error && body.data.error.length > 0) {
      if (body.data.error[0].errorMessage === 'item_not_found') {
        return { statusCode: 200, data: data };
      }
      return { statusCode: 500, error: body.data.error[0].errorMessage };
    }
    // no errors found - parse responders
    const responder = body.data.responder || null;

    if (responder && responder.length > 0) {
      if (_.has(responder[0], 'willLend')) {
        data.willLend = responder[0].willLend;
      }
      if (_.has(responder[0], 'expectedDelivery')) {
        data.expectedDelivery = responder[0].expectedDelivery;
      }
    }

    return { statusCode: 200, data: data };
  });
};
