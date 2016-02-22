This is the intended design and not ratified yet.  This document is in-progress.

# General approach to the API

## API structure

__Requests__ to the API consist of the _endpoint name_, and a JSON object of _parameters_.

Parameters are general across endpoints:

- `access_token` is the access token when needed
- `callback` is the callback name when doing a jsonp request on the HTTP-transport
- `envelope` specifies whether to have the envelope explicit, or implicit (with status code on HTTP). Default is `false` with HTTP transport (and not jsonp), and `true` otherwise.
- `pretty` determines whether the JSON should be prettyprinted when serialising.

TODO: brainstorm/decide about other general parameters, ie. pagination, field-limitation, etc.

__Responses__ are returned within an envelope, usually as a JSON object with the following properties:

- `statusCode` contains the status of the request, ie `200` if it went ok.
- `data` contains the actual response, if applicable
- `errors` contains a list of errors, if applicable

TODO: brainstorm/decide about other parameters, ie. API-quota/rate-limit, pagination(=link-header in http) etc.

This can also be transferred through HTTP without explicit envelope: the HTTP-status-code is `statusCode`, the HTTP-content is either the `data` (if `statusCode` is 200) or else the `errors`, and some of the HTTP-headers correspond to additional parameters like API-quota/rate-limit, pagination (and the envelope properties is named to match the HTTP-header-names).

__The API__ is specified/documented using OpenAPI 2.0 Specification (swagger). 
See http://swagger.io and https://github.com/OAI/OpenAPI-Specification for more details.

The generated documentation is exposed at `/v0/`. The WebSocket API is exposed at `/v0/socketcluster`. The HTTP-API is exposed as `/v0/$ENDPOINT-NAME`. 
The `/v0` is the version of the API. Version 0 is the unstable API under development. When the API is finalised, we will change to version 1.

The production API runs ssl-only (HTTPS/WSS).

English is the main language for naming of methods, as well as API-documentation.

## Transports

There are several transports:

- HTTP POST requests - the _parameters_ are posted as a JSON object (`Content-Type: application/json`) to an url, given by the `endpoint name`. Supports CORS.
- HTTP GET requests - similar to HTTP-POST requests with same url, but the _parameters_ are given as url-parameters. This is a quick way to try out / experiment with the API.
- WebSockets(SocketCluster) - sends an object across WebSocket, with the following properties: __event__ endpoint name (+ "Request"), __data__ parameters, __cid__ request number. Then it gets a response object with the following properties: __event__ endpoint name (+ "Response"), __data__ envelope with response, __cid__ matches the request number.
    - TODO: decide whether to drop Request/Response postfix, - are there a special reason for this.
- `dbc-node-serviceprovider-socketclient` - JavaScript API, that uses the WebSockets transport, with HTTP-POSTs as fallback. this is also how Mobilsoeg and Biblo talks with the service.

## Auth

Authentication using OAuth 2. TODO document details.

# Notes for the concrete API design

The actual API-design/specification happens in `api/swagger/swagger.yaml`

TODO: decide on whether to document as POST or GET in swagger.yaml, and whether to autogenerate doc for the other HTTP-method, or just document different transports as above.

APIs that update state, returns the new state.

## Relevant resources to read

- http://swagger.io/
- http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api

## For biblo and old mobilsoeg

- Biblo version April (probably no overlap with existing transforms)
    - borrower check
    - community services (ie. forum)
    - evt. entity suggest
- Biblo version June
    - søg/bestil/anbefalinger/lånerstatus, ie. approx the same functionality as in mobilsoeg
- API in old mobilsoeg (to be restructured)
    - cancelOrder
    - deleteLikesFromMobilSoegProfile
    - findMobilSoegProfile
    - getAllAffiliates
    - getCoverImage
    - getEventById
    - getEventList
    - getNewsById
    - getNewsList
    - getOpenAgency
    - getOpenSearchBriefDisplayList
    - getOpenSearchFacets
    - getOpenSearchFacetTerms
    - getOpenSearchResultList
    - getOpenSearchWork
    - getOpenSearchWorkBriefDisplay
    - getOrderPolicy
    - getPersonalRecommendations
    - getPickupAgencyList
    - getPopSuggestions
    - getRecommendations
    - getUserStatus
    - holdingStatus
    - isMobilSoegUserLoggedIn
    - placeOrder
    - renewLoan
    - saveLikeToMobilSoegProfile
    - savePickupAgencyToMobilSoegProfile
    - updateOrder

## Brainstorm for mobile APP

- minimal
    - library info
        - opening times - location(geo)
        - news
        - events
    - search/work
        - search
        - metadata
        - cover
        - availability at libraries
        - order book | link to online version
    - patron/reservations
        - login
        - patron-status (orders)
        - renew books
        - cancel order
- good
    - likes / remember
        - like/unlike material
        - get list of likes
    - personal recommendations
    - change delivery library for order / user
    - filter search, recommendations etc. to available at given libraries
- extras
    - recommendations based

# Ideas, perhaps for later.

- swagger autogenerate server-code..
- look into graphql, and possibilities to use some of this...
