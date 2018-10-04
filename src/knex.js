const config = process.env.PG_CONNECTION_STRING
  ? {
      client: 'pg',
      connection: process.env.PG_CONNECTION_STRING,
      pool: {min: 1, max: 1}
    }
  : {
      client: 'sqlite3',
      connection: {
        filename: `${__dirname}/../serviceprovider.sqlite3`
      }
    };

const knex = require('knex')(config);
module.exports = {knex};
