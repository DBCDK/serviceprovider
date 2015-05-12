'use strict';
require('babel/register');

let newrelic = require('newrelic');
let express = require('express');
let path = require('path');
let app = express();
let server = require('http').Server(app);
let logger = require('./logger');

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

// Configure templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
  res.render('frontpage', {newrelic: newrelic});
});

// startup server
server.listen(app.get('port'), function() {
  logger.info('Server listening on ' + app.get('port'));
  logger.info({message: 'Versions: ', data: process.versions});
});
