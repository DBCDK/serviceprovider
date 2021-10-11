const config = {
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING
};

const knex = require('knex')(config);
module.exports = {knex};
