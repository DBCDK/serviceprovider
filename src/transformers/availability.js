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
    const openHoldingStatusRes = body[0];
    const getOrderPolicyRes = body[1];

    const data = {
      holdingStatus: {
        willLend: false,
        expectedDelivery: null
      },
      orderPossible: true
    };
    if (_.has(openHoldingStatusRes, 'data.willLend')) {
      data.holdingStatus = openHoldingStatusRes.data;
    }

    if (getOrderPolicyRes.data.orderPossible === 'false') {
      data.orderPossible = false;
    }

    return {statusCode: 200, data};
  });
};
