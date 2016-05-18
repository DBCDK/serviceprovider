'use strict';

import openHoldingStatus from './openHoldingStatus';
import getOrderPolicy from './getOrderPolicy';
import {log} from '../utils.js';
import _ from 'lodash';

export default (request, context) => {

  let promises = [];
  promises.push(openHoldingStatus(request, context));
  promises.push(getOrderPolicy({pids: [request.pid]}, context));

  return Promise.all(promises).then(body => {
    if (body.length !== 2) {
      log.error('Illegal number of returned promises. Should be 2, but was ' + body.length);
      return {statusCode: 500, error: 'Internal Server Error'};
    }
    // We now know there are two returned promises in body!
    let openHoldingStatusRes = body[0];
    let getOrderPolicyRes = body[1];

    if (!_.has(openHoldingStatusRes, 'data.willLend')) {
      return {statusCode: 200, data: {willLend: false}};
    }

    if (getOrderPolicyRes.data.orderPossible === 'false') {
      openHoldingStatusRes.data.willLend = false;
      delete (openHoldingStatusRes.data.expectedDelivery);
    }

    return openHoldingStatusRes;

  });
};
