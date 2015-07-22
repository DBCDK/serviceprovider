'use strict';

module.exports.provider = {};

module.exports.provider.services = {
  popsuggest: {
    endpoint: 'http://xp-p01.dbc.dk:8016/',
    profile: ''
  },
  opensuggest: {
    endpoint: 'http://opensuggestion.addi.dk/1.0'
  },
  recommend: {
    endpoint: 'http://xp-p01:8017/recommend'
  },
  opensearch: {
    wsdl: 'http://opensearch.addi.dk/3.2/opensearch.wsdl',
    agency: '',
		profile: '',
		objectFormat: 'briefDisplay'
  },
  moreinfo: {
    wsdl: 'http://moreinfo.addi.dk/2.1/moreinfo.wsdl',
    user: '',
    group: '',
    password: ''
  }
};

module.exports.provider.cache = {
  store: process.env.CACHE_STORE || 'memory',
  ttl: 3600
};

module.exports.newrelic = false;