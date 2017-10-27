import openHoldingStatus from './openHoldingStatus';
import getOrderPolicy from './getOrderPolicy';
import {log} from '../utils.js';
import _ from 'lodash';

export default (request, context) => {

  const promises = [
    openHoldingStatus(request, context),
    getOrderPolicy({pids: [request.pid]}, context)
  ];

  return Promise.all(promises).then(body => {
    // We now know there are two returned promises in body!
    console.log('req', request);
    console.log('body', body);
    console.log('context', context);
    const openHoldingStatusRes = body[0];
    const getOrderPolicyRes = body[1];

    const data = {
      holdingStatus: {
        willLend: false,
        expectedDelivery: null
      },
      orderPossible: true
    };
    let statusCode = openHoldingStatusRes.statusCode ? openHoldingStatusRes.statusCode : 500;
    if ((statusCode === 200 || statusCode === 500) && getOrderPolicyRes.statusCode) {
      statusCode = getOrderPolicyRes.statusCode;
    }
    if (_.has(openHoldingStatusRes, 'data.willLend')) {
      data.holdingStatus = openHoldingStatusRes.data;
    }

    if (getOrderPolicyRes.data.orderPossible === 'false') {
      data.orderPossible = false;
    }

    return {statusCode: statusCode, data};
  });
};
