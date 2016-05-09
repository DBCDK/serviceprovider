'use strict';

export function ddbcms(params, context) {
  let config = context.data.ddbcms;
  params.agency = config.agency;
  params.key = config.password;
  return context.query(config.url + 'content/fetch', params);
}
