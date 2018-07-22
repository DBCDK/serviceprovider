const configs = require('../knexfile.js');
const knex = require('knex');

exports.knex = knex(configs[process.env.NODE_ENV || 'development']);
