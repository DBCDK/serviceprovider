require('babel-register');

var express = require('express');
var fs = require('fs');
var log = require('../utils').log;
var minimist = require('minimist');

const app = express();

const args = minimist(process.argv.slice(2));

if (typeof args.f === 'undefined') {
  log.error('missing argument -f');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(args.f, 'utf8'));

var port = process.env.PORT || 3000; // eslint-disable-line no-process-env

app.get('/configuration', (req, res) => {
  res.send(JSON.stringify(config.context, null, 2));
});

app.listen(port, () => {
  log.info('Started mini-smaug', {port: port});
});
