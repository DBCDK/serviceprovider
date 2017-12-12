<img src="http://www.dbc.dk/logo.png" alt="DBC" title="DBC" align="right">

# ServiceProvider / DBC Open Platform

<!--[![GitHub tag](https://img.shields.io/github/tag/DBCDK/serviceprovider.svg?style=flat-square)](https://github.com/DBCDK/serviceprovider)-->
[![David](https://img.shields.io/david/DBCDK/serviceprovider.svg?style=flat-square)](https://david-dm.org/DBCDK/serviceprovider#info=dependencies)
[![David](https://img.shields.io/david/dev/DBCDK/serviceprovider.svg?style=flat-square)](https://david-dm.org/DBCDK/serviceprovider#info=devDependencies)
[![Build Status](https://travis-ci.org/DBCDK/serviceprovider.svg?branch=master)](https://travis-ci.org/DBCDK/serviceprovider)
[![bitHound Code](https://www.bithound.io/github/DBCDK/serviceprovider/badges/code.svg)](https://www.bithound.io/github/DBCDK/serviceprovider)
[![Coverage Status](https://coveralls.io/repos/github/DBCDK/serviceprovider/badge.svg?branch=master)](https://coveralls.io/github/DBCDK/serviceprovider?branch=master)

The [ServiceProvider](https://github.com/dbcdk/serviceprovider) or [DBC Open Platform](https://openplatform.dbc.dk) is the API for the danish public libraries.

- [ServiceProvider / DBC Open Platform](#serviceprovider--dbc-open-platform)
- [Getting Started](#getting-started)
    - [Installing / Running](#installing--running)
    - [Code Structure](#code-structure)
- [Configuration](#configuration)
    - [Environment Variables](#environment-variables)
    - [Authorisation](#authorisation)
- [Design](#design)
    - [API Structure](#api-structure)
    - [Transports](#transports)
    - [Bibliographic Data Model](#bibliographic-data-model)
- [Testing](#testing)
    - [API-Test](#api-test)
    - [Automatic Unit Test Creation](#automatic-unit-test-creation)

The ServiceProvider provides access to DBCs services. The purpose is to make a unified, easy-to-use way to access the different bibliographic APIs. The serviceprovider works as a gateway to other services, and does not include the actual search/database/etc. logic.

Issue-tracking, and development, happens fully open on github. The project is licensed under GNU AGPL.

# Getting started

The API is available on https://openplatform.dbc.dk/. This also include API-documentation, and a guide to getting started using the API. 

**IMPORTANT** the serviceprovider only works on DBCs internal network as it serves as the gateway to the services. 

You can still run the service provider, with tests and mockdata, but it will not be fully functional without the underlying services.

## Installing / Running

First install dependencies

    # Get / install the expected version of node
    source nvm.sh
    nvm install
    
    # Optionally clean dependencies
    #rm -rf node_modules
    
    # Install dependencies
    npm install

And then you can start the server with mock-data with `./start-service-provider.sh`, - or start a development version with:

    # Optionally start a local minimal authorisation server
    # - which just sends the specified context, and ignores token
    PORT=3000 node src/smaug/minismaug.js -f context.json
    
    # Start autorestarting developement server.
    # The SMAUG environment is the authentication server,
    # if you do not run it locally, use another url.
    # (examples could be `http://platform-i01:3000` or 
    # `http://smaug.m.dbc.antistof.dk:3000` if you have
    # access to these)

    SMAUG=http://localhost:3000 npm run start

By default the ServiceProvider will run on port 8080 on localhost.

If you then open a browser to `localhost:8080`, you will see the API-documentation, - and you can now also send requests to the API, for example:

```bash
curl -H "Authorization: Bearer qwerty" -H "Content-Type: application/json" -d '{"q": "ost", "fields": ["title","pid"]}' http://localhost:8080/v1/search

curl -H "Authorization: Bearer qwerty"  "http://localhost:8080/v1/search?q=ost&fields=title,pid"
```

## Code Structure

Overview of files and directories:

- `doc/` - documentation, guide, and schema/specification of the API and bibliographic data model.
- `src/` - the source code
    - `app.js` - the main code entrypoint
    - `transformers/` - the code that transforms requests/data to/from the different services, and exposes them in the api.
    - `smaug/` - simple authentification server used during test and development
- `qa/apitest/`, `ave-test/`, `performancetest/`, `add_imports_to_tests.py`, `mocktest.sh`, `siegetestendpoints.txt` - various testing
- `static/` contains a swagger-ui, symlinks to guide, client-api, etc. This is served staticly. We are using a recent snapshot of `github:swagger-api:swagger-ui:dist/` as the stable swagger-ui release (as of May 2016) has a bug, with regard to `boolean` thet breaks the documentation.
- `client/` - implementation and build script for the browser JavaScript client library.

# Configuration

Configuration is passed through environment variables, and retrieved from the authorisation server.

## Environment Variables

The following environment variables can be used to override default settings in the application.

- __LOG_LEVEL__
Is either `TRACE` `DEBUG`,  `INFO`, `WARN`, `ERROR` or `OFF`

- __APP_NAME__
This variable is used to configure the name with which the application should appear in log.

  The default value is `app_name`

- __PORT__
Defines which port number the application should use.
If `PORT` is undefined the application will be accessible at port 8080 (i.e. localhost:8080)

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

- __SMAUG__
Url of the authorisation server we use.

- __TEST_DEV__
Boolean flag whether to support createTest parameter. If TEST_DEV is set, and a query is send with the extra parameter createTest set to a name, then this will be used to create a unit test. If the name is "random", and random name will be choosen, if the name is "mockfile", then the mock data will be written instead.

- __MOCK_FILE__
Filename for mock file to use instead of backend services. 
If a mock file is specified, then the behaviour of the `createTest` parameter is to write a the latest mock-data to the mock file to be used for testing, instead of creating a new unit test.

- __SWAGGER_HTTP__
Include http as allowed scheme in swagger, this is useful when developing locally.


## Authorisation

Authorisation is done using OAuth 2. 

The authorisation server is called Smaug, and lives in another repository: https://github.com/dbcdk/smaug/. This also documents the API for gettin
g a token.

The first version only support logins via "Resource Owner Password Credentials".

The ServiceProvider depends on a authorisation server, to serve the configuration.
A sample context without passwords is included in the repository: `context-sample.json`, and that one can also be used for building / running tests when outside of DBCs network.

You can run a local authorisation server, `minismaug` as described in the getting started guide above.

# Design

The ServiceProvider, is based on [MobilSøg](https://github.com/DBCDK/mobilsoeg), with client code removed, and unified APIs / redesigned APIs.

## API Structure

__Requests__ to the API consist of the _endpoint name_, and a JSON object of _parameters_.

Parameters are general across endpoints:

- `access_token` is the access token when needed
- `fields` which keys should be in the returned object(s).
- `pretty` determines whether the JSON should be prettyprinted when serialising.
- `timings` enable some timing statistics in envelope
- `callback` is the callback name when doing a jsonp request on the HTTP-transport
- `offset` for paginated results, such as search result.
- `limit` for paginated results, - number of results per page.

__Responses__ are returned within an envelope, as a JSON object with the following properties:

- `statusCode` contains the status of the request, ie `200` if it went ok.
- `data` contains the actual response, if applicable
- `error` contains an error, if applicable

To make sure it arrives to all kinds of clients(including jsonp), the HTTP-request itself usually suceeds(200), and the status of the api request is contained within the envelope.

__The API__ is documented using OpenAPI 2.0 Specification (swagger), and the generated documentation can be seen on https://openplatform.dbc.dk/. The swagger specification is generated from a simpler `doc/spec.yaml` in the github repository.

The generated documentation is exposed at `/v1/`. The HTTP-API is exposed as `/v1/$ENDPOINT-NAME`. 

The production API runs ssl-only (HTTPS/WSS).

English is the main language for naming of methods, as well as API-documentation.
We will try to minimise the amount of library jargon, in order to make the API more accessible for developers without domain knowledge.

## Transports

There are several transports:

- HTTP POST requests - the _parameters_ are posted as a JSON object (`Content-Type: application/json`) to an url, given by the `endpoint name`.
- HTTP GET requests - similar to HTTP-POST requests with same url, but the _parameters_ are given as url-parameters. This is a quick way to try out / experiment with the API. Parameters are parsed as JSON(if possible) and otherwise used as strings. Url-parameters can also be used in POST-requests to override values.
- WebSockets - enable us to overcome the limited number of parallel HTTP-requests per domain in web browsers. There is a simple browser JavaScript client api `client/`, and the [guide](https://openplatform.dbc.dk/v1/guide.html) describes how it is used.


## Bibliographic Data Model

Bibliographic objects are returned from both the `/work` and `/search` endpoints. 
They are identified by a *id*, - an example would be "775100-katalog:29372365".

The bibliographic object is represented as a JSON-object with fields from:

- BriefDisplay from opensearch
- DKABM - defined on biblstandard.dk
- Relations - http://danbib.dk/index.php?doc=broend3_relationer
- `collection` list of ids in same "værk" within opensearch search
- `collectionDetails` - list BriefDisplay of collection elements
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

Note: a source for creator types of dkdcplus is danmarc, i.e. http://www.kat-format.dk/danMARC2/Danmarc2.bilagJ.htm
# Testing

We use different kinds of tests:

- Unit tests are placed with the modules and components in a `__tests__` folder. Use `npm run test` to run the tests.
    - Manually written unit tests
    - Snapshot testing of transformers: There are many autogenerated unit tests, that verifies that the transformer returns the expected response, given the mocked data from the services.
- Style checking with eslint. *travis*
- Validation of generated swagger specification. *travis*
- Semi-manual browser testing of the JavaScript browser client API (run `guide.js`, check that console-output is as expected), - tested in IE11, Edge, Mobile Safari (iOS browser), Firefox, Firefox Mobile, Chromium, Mobile Chrome, and Android 4.4 browsers.

The tests marked with *travis*, are executed automatically on [travis](https://travis-ci.org/DBCDK/serviceprovider/).

## Autogenerated snapshot unit tests for transformers.

We have automated the creation of snapshot unit tests for the transformers. If you are running in dev-mode, and send a request with an `createTest=filename` parameter, it will automatically create a unitTest for the given requests.

There is a script: `node util/autotest.js` that can be used to regenerate the unit tests. Running it without parameters will print usage.
Make sure to start `npm run dev` first, and also to run `npm run prettier` afterwards.

The unit tests `*.auto.js` are known to be easily be regenerated with:

```
node util/autotest.sh recreate src/transformer/__test__/*.auto.js
```

If you find/create another test that can easily be regenerated, please make sure it has the `.auto.js` suffix.

Then there are other snapshot tests that require a bit more work to regenerate. Each of these can be recreated with `node util/autotest.sh recreate $FILENAME.js`, with the following caveats depending on the test:

- `libraries*` needs to be recreated individually on a newly started dev-server, as the mock data otherwise will be missed due to caching.
- `user*` needs credential for a logged in user, and the test needs to be cleaned up afterwards:
    - `id` is the hash of login-credentials, and needs to be the hash of the mock-data instead. I.e. fix expected value of `id` to be the actual value, when running the test.
    - You probably want to anonymise you email/name/... in both mock data an expected result.
- `order*` depends on logged-in user as well as various states of orders.
- `events`/`news` needs a proper ddbcms endpoint in config.


When creating snapshot unit test, logins/passwords/etc is automatically removed in the mocked data. This is the reason why some regeneration of tests may require manual intervention.

The code for the automatic test creation can be seen in `saveTest(..)` within `src/provider/caller.js`.

Remember to check that the result of the request is as expected, as that will be included in the unit test as mock data.
