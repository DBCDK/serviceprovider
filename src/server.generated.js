module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	//import QuerySearch from './components/querySearch/querySearch.react';
	
	var _dbcReactQuerystring = __webpack_require__(/*! dbc-react-querystring */ 1);
	
	var _dbcReactQuerystring2 = _interopRequireDefault(_dbcReactQuerystring);
	
	var newrelic = __webpack_require__(/*! newrelic */ 2);
	var express = __webpack_require__(/*! express */ 3);
	var path = __webpack_require__(/*! path */ 4);
	var app = express();
	var server = __webpack_require__(/*! http */ 5).Server(app);
	var logger = __webpack_require__(/*! ./logger */ 6);
	var version = __webpack_require__(/*! ../package.json */ 10).version;
	
	// Port config
	app.set('port', process.env.PORT || 8080); // eslint-disable-line no-process-env
	
	// Configure templating
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	
	app.use(express['static'](path.join(__dirname, '../public')));
	app.use(express['static'](path.join(__dirname, '../static')));
	
	app.locals.newrelic = newrelic;
	app.locals.version = version;
	app.locals.env = process.env; // eslint-disable-line no-process-env
	
	app.get('/', function (req, res) {
	  res.render('logo');
	});
	
	app.get('/autocomplete', function (req, res) {
	  res.render('autocomplete');
	});
	
	app.get('/querysearch', function (req, res) {
	  var search = React.renderToString(React.createElement(_dbcReactQuerystring2['default'], null));
	  res.render('querysearch', { search: search });
	});
	
	// startup server
	server.listen(app.get('port'), function () {
	  logger.info('Server listening on ' + app.get('port'));
	  logger.info({ message: 'Versions: ', data: process.versions });
	  logger.info(version + ' is up and running');
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/*!****************************************!*\
  !*** external "dbc-react-querystring" ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("dbc-react-querystring");

/***/ },
/* 2 */
/*!***************************!*\
  !*** external "newrelic" ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("newrelic");

/***/ },
/* 3 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("express");

/***/ },
/* 4 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("path");

/***/ },
/* 5 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("http");

/***/ },
/* 6 */
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var winston = __webpack_require__(/*! winston */ 7);
	var os = __webpack_require__(/*! os */ 8);
	
	var logger = new winston.Logger({
	  transports: [new winston.transports.Console({ json: true, timestamp: true, level: 'emerg' })]
	});
	
	logger.setLevels(winston.config.syslog.levels);
	
	if (process.env.NODE_ENV === 'production') {
	  // eslint-disable-line
	  logger.log('info', 'adding syslog');
	  __webpack_require__(/*! winston-syslog */ 9).Syslog; // eslint-disable-line no-unused-expressions
	
	  logger.add(winston.transports.Syslog, {
	    protocol: 'udp4',
	    localhost: os.hostname(),
	    app_name: 'pallesgavebod',
	    json: true,
	    timestamp: true,
	    level: 'emerg'
	  });
	}
	
	module.exports = logger;

/***/ },
/* 7 */
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("winston");

/***/ },
/* 8 */
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("os");

/***/ },
/* 9 */
/*!*********************************!*\
  !*** external "winston-syslog" ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("winston-syslog");

/***/ },
/* 10 */
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"name": "pallesgavebod",
		"version": "0.0.25",
		"description": "Next generation pallesgavebod.dk",
		"main": "src/app.js",
		"scripts": {
			"test": "karma start --single-run=true",
			"test:watch": "karma start",
			"lint:checkstyle": "eslint ./src  -o report.xml -f checkstyle",
			"lint": "eslint ./src",
			"serve": "supervisor --harmony -w src/client,src/views,src/app.js server.js",
			"build": "webpack --progress --colors -p",
			"start:watch": "webpack --progress --colors --watch -d",
			"dev": "parallelshell \"npm run serve -s\" \"npm run start:watch -s\""
		},
		"repository": {
			"type": "git",
			"url": "git+https://github.com/DBCDK/pallesgavebod.git"
		},
		"keywords": [
			"pallesgavebod",
			"dbc"
		],
		"author": "DBCDK",
		"license": "ISC",
		"bugs": {
			"url": "https://github.com/DBCDK/pallesgavebod/issues"
		},
		"homepage": "https://github.com/DBCDK/pallesgavebod#readme",
		"dependencies": {
			"babel": "^5.2.9",
			"babel-core": "^5.2.9",
			"babel-loader": "^5.0.0",
			"dbc-react-querystring": "git://github.com/DBCDK/dbc-react-querystring#develop",
			"express": "^4.12.3",
			"jade": "^1.9.2",
			"newrelic": "^1.18.5",
			"react": "^0.13.2",
			"webpack": "^1.9.10",
			"winston": "^1.0.0",
			"winston-syslog": "^1.1.0"
		},
		"devDependencies": {
			"babel-eslint": "^3.1.1",
			"chai": "^2.3.0",
			"eslint": "^0.21.0",
			"eslint-loader": "^0.11.2",
			"eslint-plugin-react": "^2.2.0",
			"extract-text-webpack-plugin": "^0.8.1",
			"jsdom": "^5.3.0",
			"json-loader": "^0.5.2",
			"karma": "^0.12.35",
			"karma-cli": "0.0.4",
			"karma-junit-reporter": "^0.2.2",
			"karma-mocha": "^0.1.10",
			"karma-mocha-reporter": "^1.0.2",
			"karma-phantomjs-launcher": "^0.2.0",
			"karma-webpack": "^1.5.1",
			"mocha": "^2.2.4",
			"mocha-jenkins-reporter": "^0.1.8",
			"node-libs-browser": "^0.5.2",
			"node-sass": "^3.1.2",
			"parallelshell": "^1.1.1",
			"phantomjs": "^1.9.17",
			"react-tools": "^0.13.2",
			"sass-loader": "^1.0.2",
			"wallaby-webpack": "0.0.4"
		}
	}

/***/ }
/******/ ]);
//# sourceMappingURL=server.generated.js.map