import openHoldingStatus from './openHoldingStatus';
import getOrderPolicy from './getOrderPolicy';
import {log} from '../utils.js';
import _ from 'lodash';

async function availability(request, context) {
  const [openHoldingStatusRes, getOrderPolicyRes] = await Promise.all([
    openHoldingStatus(request, context),
    getOrderPolicy({pids: [request.pid]}, context)
  ]);

  if (openHoldingStatusRes.statusCode !== 200) {
    return {
      unavailable: 'openHoldingStatus error: ' + openHoldingStatusRes.error
    };
  }
  if (getOrderPolicyRes.statusCode !== 200) {
    return {unavailable: 'getOrderPolicy error: ' + getOrderPolicyRes.error};
  }

  const data = {
    willLend: false,
    orderPossible: true
  };

  if (_.has(openHoldingStatusRes, 'data.willLend')) {
    Object.assign(data, openHoldingStatusRes.data);
  }

  if (getOrderPolicyRes.data.orderPossible === 'false') {
    data.orderPossible = false;
  }

  return data;
}

export default async (request, context) => {
  try {
    const data = await Promise.all(
      request.pids.map(pid => availability({pid}, context))
    );
    return {statusCode: 200, data: data};
  } catch (e) {
    return {statusCode: 500, error: e.message};
  }
};
