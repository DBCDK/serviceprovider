// TODO use postgres on ci/production
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: `${__dirname}/../../serviceprovider.sqlite3`
  }
});
module.exports = {knex};
