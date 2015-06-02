'use strict';
let newrelic = require('newrelic');
let express = require('express');
let path = require('path');
let app = express();
let server = require('http').Server(app);
let logger = require('./logger');
let version = require('../package.json').version;
//import QuerySearch from './components/querySearch/querySearch.react';
import QueryField from 'dbc-react-querystring';


// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

// Configure templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../static')));

app.locals.newrelic = newrelic;
app.locals.version = version;
app.locals.env = process.env; // eslint-disable-line no-process-env

app.get('/', function(req, res) {
  res.render('logo');
});

app.get('/autocomplete', function(req, res) {
  res.render('autocomplete');
});

app.get('/querysearch', function(req, res) {
  const search = React.renderToString(<QueryField />);
  res.render('querysearch', {search});
});

// startup server
server.listen(app.get('port'), function() {
  logger.info('Server listening on ' + app.get('port'));
  logger.info({message: 'Versions: ', data: process.versions});
  logger.info(version + ' is up and running');
});
