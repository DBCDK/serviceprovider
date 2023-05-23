import openHoldingStatus from './openHoldingStatus';
import getOrderPolicy from './getOrderPolicy';
import {log} from '../utils.js';
import _ from 'lodash';
import openHoldingsService from "./openHoldingsService";

async function localHoldings(request, context) {
  const agency = context.get('search.agency');
  const isil = agency.startsWith('DK-') ? agency : 'DK-' + agency;
  const url = context.get('services.cicero') + isil;

  let username, password;
  try {
    password = context.get(`cicero.${isil}.password`, true);
    username = context.get(`cicero.${isil}.username`, true);
  } catch (e) {
    log.info(`no cicero username/password for agency`, {agency});
    return null;
  }

  let sessionKey;
  try {
    sessionKey = (await context.request(url + '/authentication/login', {
      method: 'POST',
      body: {password, username},
      json: true
    })).sessionKey;
  } catch (e) {
    log.error('cicero auth error', {error: String(e), agency: agency});
    return null;
  }

  let result;
  try {
    const recordId = request.pid.split(':')[1];
    const apiResult = await context.request(
      url + '/catalog/holdings?recordid=' + recordId,
      {
        headers: {
          'X-session': sessionKey
        }
      }
    );
    result = JSON.parse(apiResult)[0].holdings;
  } catch (e) {
    log.error('cicero holdings error', {error: String(e)});
    return null;
  }

  return result;
}

async function availability(request, context) {
  const [
    openHoldingServiceRes,
    getOrderPolicyRes,
    localHoldingsRes
  ] = await Promise.all([
    openHoldingsService(request, context),
    getOrderPolicy({pids: [request.pid]}, context),
    localHoldings(request, context)
  ]);

  if (openHoldingServiceRes.statusCode !== 200) {
    return {
      unavailable: 'openHoldingService error: ' + openHoldingServiceRes.error
    };
  }

  return Object.assign(
    {},
    openHoldingServiceRes.data,
    getOrderPolicyRes.data,
    localHoldingsRes && {
      holdings: localHoldingsRes
    }
  );
}

export default async (request, context) => {
  try {
    const data = await Promise.all(
      request.pids.map(pid =>
        availability({pid, fields: request.fields}, context)
      )
    );
    return {statusCode: 200, data: data};
  } catch (e) {
    return {statusCode: 500, error: e.message};
  }
};
