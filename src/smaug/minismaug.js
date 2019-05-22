require('babel-register');

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var log = require('../utils').log;
var minimist = require('minimist');

const app = express();
app.use(bodyParser.json());

const args = minimist(process.argv.slice(2));

if (typeof args.f === 'undefined') {
  log.error('missing argument -f');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(args.f, 'utf8'));

var port = process.env.PORT || 3333; // eslint-disable-line no-process-env

const configurations = {};

app.get('/configuration', (req, res) => {
  let c = configurations[req.query.token] || {};
  res.send(JSON.stringify({...config.context, ...c}, null, 2));
});

app.put('/configuration', (req, res) => {
  if (!req.query.token) {
    throw new Error('Missing token');
  }
  configurations[req.query.token] = req.body;

  res.send('OK');
});

app.listen(port, () => {
  log.info('Started mini-smaug', {port: port});
});
