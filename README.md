# Palles Gavebod

[![GitHub tag](https://img.shields.io/github/tag/DBCDK/pallesgavebod.svg?style=flat-square)](https://github.com/DBCDK/pallesgavebod)
[![David](https://img.shields.io/david/DBCDK/pallesgavebod.svg?style=flat-square)](https://david-dm.org/DBCDK/pallesgavebod#info=dependencies)
[![David](https://img.shields.io/david/dev/DBCDK/pallesgavebod.svg?style=flat-square)](https://david-dm.org/DBCDK/pallesgavebod#info=devDependencies)
[![Build Status](https://travis-ci.org/DBCDK/pallesgavebod.svg?branch=master)](https://travis-ci.org/DBCDK/pallesgavebod)
[![Coverage Status](https://coveralls.io/repos/DBCDK/pallesgavebod/badge.svg?branch=master&service=github)](https://coveralls.io/github/DBCDK/pallesgavebod?branch=master)
[![Code Climate](https://codeclimate.com/github/DBCDK/pallesgavebod/badges/gpa.svg)](https://codeclimate.com/github/DBCDK/pallesgavebod)

Next generation Palles Gavebod

As default the application will load on localhost:8080. Se a running example on [pg.demo.dbc.dk](https://pg.demo.dbc.dk) or [ddbmobil.demo.dbc.dk](https://ddbmobil.demo.dbc.dk)

## How to install and run the application
```bash
// Build and install the application
git clone https://github.com/DBCDK/pallesgavebod.git
npm install
npm run build

// create config file
mv config.example.js config.js

// fill out the blanks in the config file. 
// NB! a lot of the services are restricted by DBC

// Start the application
 npm run serve
```

## Environment Varibles
The following environment variables can be used to override default settings in the application

- __EMAIL_REDIRECT__  
Used when a user creates a new account. The value given in `EMAIL_REDIRECT` will be used as basepath in the link that'll appear in the confirmation email sent to the user.
Typically you'll want the value in `EMAIL_REDIRECT` to be the same as the basepath for the given site the user is signing up at. I.e pg.demo.dbc.dk.  
  
  The default value is `localhost`

- __KAFKA_TOPIC__  
(inherited from [dbc-node-logger](https://www.npmjs.com/package/dbc-node-logger))  
This defines which topic in Kafka the log messages should be associated with 

- __KAFKA_HOST__  
(inherited from [dbc-node-logger](https://www.npmjs.com/package/dbc-node-logger))  
String that defines the Zookeeper connectionstring. Should be defined as `host:port`. see [winston-kafka-transport](https://www.npmjs.com/package/winston-kafka-transport) and [dbc-node-logger](https://www.npmjs.com/package/dbc-node-logger) 

- __NEW_RELIC_APP_NAME__  
This variable is used to configure the name with which the application should appear in New Relic but also elsewhere.
Currently this value is also used to identify the application in logs and appended to secrets used in Redis.  
  
  The default value is `app_name`

- __NODE_APPLICATION__  
Use this varialbe to let the application how stylesheets are compiled and which jade templates are used.
Currently two values are used to control compiling of SASS and delivering of templates:
  - `pg` Should be used when building Palles Gavebod
  - `ddbmobil` Should be used when building Mobil Søg
  
  The default value is `pg`

- __PORT__  
Defines which portnumber the application should use when bootinh up.
If `PORT` is undefined the application will be accecsible at port 8080 (i.e. localhost:8080)  
  
  The default value is `8080`

## New Relic
As New Relic is used by DBC A/S this application requires New Relic to be configured.  
If you want to run the application but can't provide a New Relic configuration you can start the application with `NEW_RELIC_NO_CONFIG_FILE=true` which will throw an error but wont crash your application.

## Testing

### Unit tests
Unit tests are placed with the modules and components in a __tests__ folder
to run the tests: `npm run test`

### Selenium tests
The selenium tests (found in the /selenium directory) are integration tests, and mainly run in a chrome instance using ChromeDriver.
to run tests: `npm run selenium`

If a SauceLabs account is available, you can set ENV variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` and then enable it in `selenium_test.js`

