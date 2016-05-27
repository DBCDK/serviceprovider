# ServiceProvider

[![GitHub tag](https://img.shields.io/github/tag/DBCDK/serviceprovider.svg?style=flat-square)](https://github.com/DBCDK/serviceprovider)
[![David](https://img.shields.io/david/DBCDK/serviceprovider.svg?style=flat-square)](https://david-dm.org/DBCDK/serviceprovider#info=dependencies)
[![David](https://img.shields.io/david/dev/DBCDK/serviceprovider.svg?style=flat-square)](https://david-dm.org/DBCDK/serviceprovider#info=devDependencies)
[![Build Status](https://travis-ci.org/DBCDK/serviceprovider.svg?branch=master)](https://travis-ci.org/DBCDK/serviceprovider)
[![Coverage Status](https://coveralls.io/repos/DBCDK/serviceprovider/badge.svg?branch=master&service=github)](https://coveralls.io/github/DBCDK/serviceprovider?branch=master)
[![Code Climate](https://codeclimate.com/github/DBCDK/serviceprovider/badges/gpa.svg)](https://codeclimate.com/github/DBCDK/serviceprovider)

This is the repository for the ServiceProvider, ie. the API from [MobilSøg](https://github.com/DBCDK/mobilsoeg).  It starts out as a copy of the MobilSøg repository, and then the client code will be refactored out, etc.

## Communication with the API

HTTP endpoints can be accesses on `/api/$ENDPOINT_NAME` with the parameters in a post request, i.e.:

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

# Auth

Authentication using OAuth 2. 

The authentification server is called Smaug, and lives in another repository: https://github.com/dbcdk/smaug/. This also documents the API for gettin
g a token.

In the first version it will support logins via "Resource Owner Password Credentials".


# Environment Variables
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
Boolean flag whether to support createTest parameter. If TEST_DEV is set, and a query is send with the extra parameter createTest set to a name, then this will be used to create a unit test. If the name is "random", and random name will be choosen, if the name is "mockfile", then the mock data will be written instead.

- __MOCK_FILE__
Filename for mock file to use instead of backend services. 
If a mock file is specified, then the behaviour of the `createTest` parameter is to write a the latest mock-data to the mock file to be used for testing, instead of creating a new unit test.

- __SWAGGER_HTTP__
Include http as allowed scheme in swagger, this is useful when developing locally.


# Testing
## Unit tests
Unit tests are placed with the modules and components in a `__tests__` folder
to run the tests: `npm run test`

## Api-test

API-test sends a series of requests through HTTP and WebSockets, and checks that the results are as expected. The queries are listed in `apitest/requests.lst`.

You can run it with mock data using `./mocktest.sh`. This starts the ServiceProvider and MiniSmaug in the background, which needs to be killed manually afterwards (quick hack, but it leaving them running also makes it easier to run the code for regenerating the mock data).

To update the mock data, first remove the original mockdata file, and start the ServiceProvider with MOCK_FILE set:

```bash
rm apitest/mockdata.json
SMAUG=http://localhost:3000 MOCK_FILE=apitest/mockdata.json SWAGGER_HTTP=true TEST_DEV=true node src/main.js
```

To generate the mock data, first run the apitest to record the data, and then call somen endpoint with `createTest=mockfile` to write the mock data to disk, ie:

```bash
cd apitest
./apitest.sh
curl 'http://localhost:8080/v0/user?access_token=qwerty&createTest=mockfile'
```

To update the expected result, make sure that the ServiceProvider is running, and then:

```bash
cd apitest
./reset-expected.sh
```
(Remember to check that new expected result is as expected, before committing. `git diff` will list the changes).


There are also various utility scripts for using the apitest during development in the `apitest/` folder.

## Swagger

A swagger specification is generated for the API, and the unit tests checks that it is valid.

# API structure

__Requests__ to the API consist of the _endpoint name_, and a JSON object of _parameters_.

Parameters are general across endpoints:

- `access_token` is the access token when needed
- `offset` for paginated results, such as search result.
- `limit` for paginated results, - number of results per page.
- `pretty` determines whether the JSON should be prettyprinted when serialising.
- `callback` is the callback name when doing a jsonp request on the HTTP-transport
- `fields` which keys should be in the returned object.
- `timings` enable some timing statistics in envelope

__Responses__ are returned within an envelope, as a JSON object with the following properties:

- `statusCode` contains the status of the request, ie `200` if it went ok.
- `data` contains the actual response, if applicable
- `error` contains an error, if applicable

To make sure it arrives to all kinds of clients(including jsonp), the HTTP-request itself usually suceeds(200), and the status of the api request is contained within the envelope.

__The API__ is documented using OpenAPI 2.0 Specification (swagger), and the generated documentation can be seen on https://openplatform.dbc.dk/. The swagger specification is generated from a simpler `doc/spec.yaml` in the github repository.

The generated documentation is exposed at `/v0/`. The HTTP-API is exposed as `/v0/$ENDPOINT-NAME`. 
Version 0 (`/v0`) is the unstable API under development. When the API is finalised, we will change to version 1.

The production API runs ssl-only (HTTPS/WSS).

English is the main language for naming of methods, as well as API-documentation.
We will try to minimise the amount of library jargon, in order to make the API more accessible for developers without domain knowledge.

# Transports

There are several transports:

- HTTP POST requests - the _parameters_ are posted as a JSON object (`Content-Type: application/json`) to an url, given by the `endpoint name`.
- HTTP GET requests - similar to HTTP-POST requests with same url, but the _parameters_ are given as url-parameters. This is a quick way to try out / experiment with the API. Parameters are parsed as JSON(if possible) and otherwise used as strings. Url-parameters can also be used in POST-requests to override values.
- WebSockets. More details will follow.

# Bibliographic Data Model

Bibliographic objects are returned from both the `/work` and `/search` endpoints. 
They are identified by a *id*, - an example would be "775100-katalog:29372365".

The bibliographic object is represented as a JSON-object with fields from:

- BriefDisplay from opensearch
- DKABM - defined on biblstandard.dk
- Relations - http://danbib.dk/index.php?doc=broend3_relationer
- `collection` list of ids in same "værk" within opensearch search
- moreInfo - covers as url and dataurl, - as `coverUrlXXX` or `coverDataUrlXXX` where `XXX` is one of `42`, `117`, `207`, `500`, `Back`, `Thumbnail` or `Full`, ie. `coverUrl42`.

The mapping between keys in the JSON object, and the above sources can be seen in 
https://github.com/DBCDK/serviceprovider/blob/master/doc/work-context.jsonld

Each key present in the json-object, contains a non-empty array of values. Example: if the bibliographic xml-object contains:


```xml
<dc:subject xsi:type="dkdcplus:DBCN">for 7 år</dc:subject>
<dc:subject xsi:type="dkdcplus:DBCN">for 8 år</dc:subject>
<dcterms:audience>børnematerialer</dcterms:audience>
<dc:title>Danmark</dc:title>
```

it would map to json like:

```json
{ "subjectDBCN": ["for 7 år", "for 8 år"],
  "audience": ["børnematerialer"],
  "dcTitle": ["Danmark"]}
```


This encoding is designed both easy to work directly with in client code. It will also be properly encoded linked data, if we add 1) an `@context` with the url of `work-context.jsonld` and 2) an `@id` with the id of the object.

Note: a source for creator types of dkdcplus is danmarc, ie http://www.kat-format.dk/danMARC2/Danmarc2.bilagJ.htm
# Development

Overview of files and directories:

- `apitest/`, `ave-test/`, `performancetest/`, `add_imports_to_tests.py`, `mocktest.sh`, `siegetestendpoints.txt` - various testing
- `doc/` - documentation
- `src/` - the source code
- `static/` contains a swagger-ui, which is used for documentation. Latest swagger-ui release (as of May 2016) has a bug, with regard to `boolean` types, which is why we include a copy of a recent snapshot of `github:swagger-api/swagger-ui:dist/` instead of just installing it from npm.

In the beginning we work directly on the master branch (decided by the xp-team - lots of refactoring is happening at the moment, and it is easier for those new to github, etc.).
Later on this can change into using `ready/...`-branches

Quick notes about how to make changes:

    git clone git@github.com:DBCDK/serviceprovider.git
    
    # ... make local changes test and commit...
    # `git add` the changes, and then 
    git commit
    
    git pull # sync from master branch on github
    # ... merge conflicts, test and commit
    
    git push  # sync to master branch on github

## Building (or rebuilding)

    source nvm.sh
    
    # install node
    nvm install
    
    # optional clean dependencies
    # rm -rf node_modules
    
    # install deps
    npm install
    
    # start, note that it asserts a smaug somewhere
    SMAUG=http://localhost:3000 npm run dev

## Tests

The apitest `npm run apitest` sends a bunch of test-requests to the server, and diff the result with a previous result. The server has to be running during this.

There are also unit tests which is run with `npm test`, and linting, which is run by `npm run lint`, and `npm run lint:checkstyle`.

```
npm run test
npm run lint
npm run lint:checkstyle
```

In addition, the generated swagger-file can be tested with:

```
curl localhost:8080/api/swagger.json | swagger validate
```

## Starting a mini smaug for development

This asserts a working context-file:

```
PORT=3000 node src/smaug/minismaug.js -f context.json&
```

The SP can then be started with:
```
SMAUG=http://localhost:3000 npm run dev
```
