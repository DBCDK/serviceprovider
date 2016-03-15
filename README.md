# ServiceProvider

[![GitHub tag](https://img.shields.io/github/tag/DBCDK/serviceprovider.svg?style=flat-square)](https://github.com/DBCDK/serviceprovider)
[![David](https://img.shields.io/david/DBCDK/serviceprovider.svg?style=flat-square)](https://david-dm.org/DBCDK/serviceprovider#info=dependencies)
[![David](https://img.shields.io/david/dev/DBCDK/serviceprovider.svg?style=flat-square)](https://david-dm.org/DBCDK/serviceprovider#info=devDependencies)
[![Build Status](https://travis-ci.org/DBCDK/serviceprovider.svg?branch=master)](https://travis-ci.org/DBCDK/serviceprovider)
[![Coverage Status](https://coveralls.io/repos/DBCDK/serviceprovider/badge.svg?branch=master&service=github)](https://coveralls.io/github/DBCDK/serviceprovider?branch=master)
[![Code Climate](https://codeclimate.com/github/DBCDK/serviceprovider/badges/gpa.svg)](https://codeclimate.com/github/DBCDK/serviceprovider)

This is the repository for the ServiceProvider, ie. the API from [MobilSøg](https://github.com/DBCDK/mobilsoeg).  It starts out as a copy of the MobilSøg repository, and then the client code will be refactored out, etc.

## Communication with the API

HTTP endpoints can be accesses on `/api/$ENDPOINT_NAME` with the parameters in a post request, ie.: 

    curl -X POST \
         -H "Content-Type: application/json" \
         -d '{"query":"(1q84)","offset":0,"worksPerPage":12,"sort":"rank_frequency"}' \
         http://localhost:8080/api/getOpenSearchResultList

will search for "1q84". 

## Installation / getting it to run

**IMPORTANT** the serviceprovider only runs on DBCs internal network as it serve as the gateway to the services.

The current version depends on the existance for `config.json`, which has the list of internal DBC-services etc. 
These information should be delivered through environment or the authentification server later on.
A sample file without passwords etc. is: `config.json.sample`, and that one can also be used for building / running tests when outside of DBCs network.
The full config for running on the internal network lies in `config.json.nc` and is encrypted (with the password that was also previously used to get access to the config).
The `config.json.sample` is automatically copied to `config.json` on npm install.

### Dependencies

- *siege* is used for load-testing. `apt-get install siege`
- redis, - current version depends assumes a redis server is running for session-storage, - this will be remove later on
- various dependencies in package.json `npm install`

### Building / running it

- `npm run build` uses webpack to build the application
- `npm run dev:remoteprofile` runs the application in dev-mode
- `npm run server` runs the application

By default it will run on port 8080 on localhost.

# Documentation in old readme, ie. needs to be looked through, and merged into above

## Environment Varibles
The following environment variables can be used to override default settings in the application

- __NPM_TOKEN__
Used to download private modules. THIS IS REQUIRED. You can find your npm token in ~/.npmrc
The token has the following format: NPM_TOKEN=“00000000-0000-0000-0000-000000000000”

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

- __NODE_WEB_WORKERS__
Defines how many workers to use. 
  
  The default value is `1`
  
- __NODE_WEB_BROKERS__
Defines how many brokers to use.
  
  The default value is `1`

- __AUTO_REBOOT__
Defines if a worker reboots on crash. (This does not apply to the whole application, just the workers).

  The default value is `true`

## Testing

### Unit tests
Unit tests are placed with the modules and components in a __tests__ folder
to run the tests: `npm run test`

