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

It depends on a authorisation server to serve the configuration.

You can run a local configuration server, w
The current version depends on the existance for `config.json`, which has the list of internal DBC-services etc.
These information should be delivered through environment or the authentification server later on.
A sample file without passwords etc. is: `context-sample.json`, and that one can also be used for building / running tests when outside of DBCs network.
The full config for running on the internal network lies in `context.json.nc` and is encrypted (with the password that was also previously used to get access to the config).
The `context.json.sample` is automatically copied to `context.json` on npm install.

### Dependencies

- *siege* is used for load-testing. `apt-get install siege`
- redis, - current version depends assumes a redis server is running for session-storage, - this will be remove later on
- various dependencies in package.json `npm install`

### Building / running it

- `PORT=3000 node src/smaug/minismaug.js -f context.json` runs a minimal config-serving authorisation server (which ignores tokens).
- `SMAUG=http://localhost:3000 npm run dev` runs the application in dev-mode. If you have access to another authorisation server, enter that instead of localhost:3000 (examples could be `http://platform-i01:3000` or `http://smaug.m.dbc.antistof.dk:3000`)

By default the ServiceProvider will run on port 8080 on localhost.

Optionally run `mdecrypt context.json.nc`, to decrypt the config.

If you then open a browser to `localhost:8080`, you will see the API-documentation, - and you can now also send requests to the API, for example:

```bash
curl -H "Authorization: Bearer qwerty" -H "Content-Type: application/json" -d '{"q": "ost", "fields": ["title","pid"]}' http://localhost:8080/v0/search
```

# Environment Varibles
The following environment variables can be used to override default settings in the application

- __LOG_LEVEL__
Is either `DEBUG`,  `INFO`, `WARN`, `ERROR` or `OFF`

- __APP_NAME__
This variable is used to configure the name with which the application should appear in logs, and is also appended to secrets used in Redis.

  The default value is `app_name`

- __PORT__
Defines which port number the application should use.
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

- __CONFIG_FILE__
Which config-file to read, default is `./config.json`

- __SMAUG__
Url of the authorisation server we use.

- __TEST_DEV__
Boolean flag whether to support createTest parameter. If TEST_DEV is set, and a query is send with the extra parameter createTest set to true, then this will be used to create a unit test.

- __MOCK_FILE__
Filename for mock file to use instead of backend services. 
If a mock file is specified, then the behaviour of the `createTest` parameter is to write a the latest mock-data to the mock file to be used for testing, instead of creating a new unit test.

- __SWAGGER_HTTP__
Include http as allowed scheme in swagger, this is useful when developing locally.

## Unit tests
Unit tests are placed with the modules and components in a `__tests__` folder
to run the tests: `npm run test`

