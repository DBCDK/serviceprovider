export function ddbcms(params, context) {
  params.agency = params.agency || context.get('user.agency');
  if (!params.agency || !context.get('services.ddbcmsapi')) {
    throw 'DDBCMS-API not available for the current library. ' +
      'Make sure that DDBCMS-API is running in the relevant DDBCMS deployment ' +
      '(agency: ' +
      params.agency +
      '), ' +
      'and that the ServiceProvider has been configured with the proper url and token.';
  }
  if (params.agency.toUpperCase().startsWith('DK-')) {
    params.agency = params.agency.slice(3);
  }
  return context.query(
    context.get('services.ddbcmsapi') + 'content/fetch',
    params
  );
}

let ddbResponse = result => ({
  statusCode: 200,
  data: result.data.items.map(o =>
    Object.assign(o.fields, o.taxonomy, {nid: o.nid})
  )
});

let ddbRequest = type => (params, context) => {
  if (Array.isArray(params.nids)) {
    return Promise.all(
      params.nids.map(nid => ddbcms({node: nid}, context).then(ddbResponse))
    ).then(result => ({
      statusCode: 200,
      data: result.map(o => o.data[0] || null)
    }));
  }

  return ddbcms(
    {
      type: type,
      amount: typeof params.limit === 'undefined' ? 10 : params.limit,
      skip: typeof params.offset === 'undefined' ? 0 : params.offset,
      agency: params.agency
    },
    context
  ).then(ddbResponse);
};
export const news = ddbRequest('ding_news');
export const events = ddbRequest('ding_event');
export const library = ddbRequest('ding_library');
