'use strict';

/**
 * @file
 * Configure and start our server
 */

// loading config etc.
import config from '../config.js';
import uiconfig from '../uiconfig.js';
// newrelic needs to be required the es5 way because we only wants to load new relic if specified in config.js
const newrelic = config.newrelic && require('newrelic') || null;
import {version} from '../package.json';

// loading libraries
import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import path from 'path';
import Logger from 'dbc-node-logger';
import ServiceProvider from 'dbc-node-serviceprovider';
import bodyParser from 'body-parser';
import compression from 'compression';

// loading components
import SearchServer from './components/searchpage/Search.server.js';

const app = express();
const server = http.Server(app);
const socket = socketio.listen(server);
const PRODUCTION = process.env.NODE_ENV === 'production'; // eslint-disable-line no-process-env
const APP_NAME = process.env.NEW_RELIC_APP_NAME || 'app_name'; // eslint-disable-line no-process-env
const logger = new Logger({app_name: APP_NAME, handleExceptions: true});
const expressLoggers = logger.getExpressLoggers();

// settings up our provider
const serviceProvider = ServiceProvider(config.provider).setupSockets(socket);

// Port config
app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env

// Configure templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// setting proxy
app.enable('trust proxy');

let fileHeaders = {};

// settings production specific options
if (PRODUCTION) {
  fileHeaders = {index: false, dotfiles: 'ignore', maxAge: '1d'};
}
else if (newrelic) {
  newrelic.agent_enabled = false;
}

// adding gzip'ing
app.use(compression());

// setting paths
app.use(express.static(path.join(__dirname, '../public'), fileHeaders));
app.use(express.static(path.join(__dirname, '../static'), fileHeaders));

// setting local vars that should be available to our template engine
app.locals.newrelic = newrelic;
app.locals.version = version;
app.locals.production = PRODUCTION;

app.use(expressLoggers.logger);
app.use(expressLoggers.errorLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get(['/', '/search', '/search/*'], (req, res) => {
  const query = req.query || [];
  let properties = SearchServer({query, config: uiconfig});
  properties.config = JSON.stringify(uiconfig);
  res.render('search', properties);
});

app.get('/moreinfo/:restOfPath*', (req, res) => {
  http.get('http://moreinfo.addi.dk/' + req.params.restOfPath, function(response) {
    res.set('Cache-Control', 'max-age=86400,s-maxage=86400');
    response.pipe(res);
  });
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  let loginResponse = serviceProvider.trigger(
    'loginUser', {
      email: email,
      password: password
    }
  );

  Promise.all(loginResponse).then(function (response) {

    const result = response[0];
    const isLoginSuccesful = typeof result.error === 'undefined';
    if (isLoginSuccesful) {
      const accessToken = result.id;
      const ttl = result.ttl;
      const uid = result.userId;
      const redirectUrl = req.body.redirect ? req.body.redirect : '/profile';
      res.cookie('accessToken', accessToken, {maxAge: ttl});
      res.cookie('uid', uid, {maxAge: ttl});
      res.redirect(redirectUrl);
    }
    else {
      res.render('login', {message: {text: 'Din email eller dit password er ikke korrekt', error: true}});
    }
  }, function () {
    throw new Error('Promise rejected');
  });

});

app.get('/confirm', (req, res) => {
  // for email verification flow
  const uid = req.query.uid;
  const token = req.query.token;
  const redirectUrl = req.query.redirect;

  let verifyResponse = serviceProvider.trigger(
    'verifyEmail', {
      uid: uid,
      token: token
    }
  );

  Promise.all(verifyResponse).then(function () {
    res.redirect(redirectUrl);
  }, function () {
    throw new Error('Promise rejected');
  });
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup', (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  const repeatedPassword = req.body.repeatedPassword;

  // validate arguments
  if (email && password && repeatedPassword && (password === repeatedPassword)) {
    let resp = serviceProvider.trigger(
      'createUser', {
        email: email,
        password: password
      }
    );

    Promise.all(resp).then(function () {
      res.render('signup', {message: {text: 'Vi har sendt en bekræftelse-email til dig', error: false}});
    }, function () {
      throw new Error('Promise rejected');
    });
  }
  else {
    // something went wrong..
    res.render('signup', {message: {text: 'Noget gik galt!', error: true}});
  }
});

app.get('/resetpassword', (req, res) => {
  res.render('resetpassword');
});

app.get(['/work', '/work/*'], (req, res) => {
  let id = req.query.id;
  id = '"' + id + '"';
  res.render('work', {id});
});

app.get(['/order', '/order/*'], (req, res) => {
  let query = req.query;
  query = JSON.stringify(query);
  res.render('order', {query});
});

// starting server
server.listen(app.get('port'), () => {
  logger.log('info', 'Server listening on ' + app.get('port'));
  logger.log('info', 'Versions: ', process.versions);
  logger.log('info', version + ' is up and running');
});
