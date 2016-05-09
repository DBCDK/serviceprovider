'use strict';

export function ddbcms(params, context) {
  let config = context.data.ddbcms;
  params.agency = config.agency;
  params.key = config.password;
  return context.query(config.url + 'content/fetch', params);
}

let ddbResponse = (result) => ({
  statusCode: 200,
  data: result.data.items.map(o => Object.assign(o.fields, {nid: o.nid}))
});

let ddbRequest = (type) => (params, context) => {
  if (Array.isArray(params.nids)) {
    return Promise.all(params.nids.map(nid => ddbcms({node: nid}, context)
          .then(ddbResponse)))
      .then(result => ({
        statusCode: 200,
        data: result.map(o => o.data[0] || null)
      }));
  }

  return ddbcms({
    type: type,
    amount: (typeof params.limit === 'undefined') ? 10 : params.limit,
    skip: (typeof params.offset === 'undefined') ? 0 : params.offset
  }, context).then(ddbResponse);
};
export const news = ddbRequest('ding_news');
export const events = ddbRequest('ding_event');
