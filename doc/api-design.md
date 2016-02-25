This is the intended design and not ratified yet.  This document is in-progress.

# General approach to the API

## API structure

__Requests__ to the API consist of the _endpoint name_, and a JSON object of _parameters_.

Parameters are general across endpoints:

- `access_token` is the access token when needed
- `offset` for paginated results, such as search result.
- `limit` for paginated results, - number of results per page.

__Responses__ are returned within an envelope, usually as a JSON object with the following properties:

- `statusCode` contains the status of the request, ie `200` if it went ok.
- `data` contains the actual response, if applicable
- `error` contains a list of errors, if applicable

__The API__ is specified/documented using OpenAPI 2.0 Specification (swagger). 
See http://swagger.io and https://github.com/OAI/OpenAPI-Specification for more details.
The actual swagger file will be most likely generated from a simpler file.

The generated documentation is exposed at `/v0/`. The WebSocket API is exposed at `/v0/socketcluster`. The HTTP-API is exposed as `/v0/$ENDPOINT-NAME`. 
Version 0 (`/v0`) is the unstable API under development. When the API is finalised, we will change to version 1.

The production API runs ssl-only (HTTPS/WSS).

English is the main language for naming of methods, as well as API-documentation.
We will try to minimise the amount of library jargon, in order to make the API more accessible for developers without domain knowledge.


## Transports

There are several transports:

- HTTP POST requests - the _parameters_ are posted as a JSON object (`Content-Type: application/json`) to an url, given by the `endpoint name`. Supports CORS.
- WebSockets(SocketCluster) - sends an object across WebSocket, with the following properties: __event__ endpoint name (+ "Request"), __data__ parameters, __cid__ request number. Then it gets a response object with the following properties: __event__ endpoint name (+ "Response"), __data__ envelope with response, __cid__ matches the request number.
    - TODO: decide whether to drop Request/Response postfix, - are there a special reason for this.
- `dbc-node-serviceprovider-socketclient` - JavaScript API, that uses the WebSockets transport, with HTTP-POSTs as fallback. this is also how Mobilsoeg and Biblo talks with the service.

## Auth

Authentication using OAuth 2. 

TODO clarify document details.

# Notes for the concrete API design


- http://swagger.io/
- http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api

Below is a brainstorm for categories of api-endpoints, including existing usage in mobilsoeg, and  expected use in first version of biblo:

- user
    - mobilsoeg: `findMobilSoegProfile`? `getPickupAgencyList` `getUserStatus` `savePickupAgencyToMobilSoegProfile` `renewLoan` `isMobilSoegUserLoggedIn`
    - biblo: TBD, ie. borrower check
- search
    - mobilsoeg: `getOpenSearchBriefDisplayList` `getOpenSearchFacets` `getOpenSearchFacetTerms` `getOpenSearchResultList`
    - parameter: single serviceprovider, across different libraries.
- suggest
    - mobilsoeg: `getPopSuggestions`
    - biblo: TBD, ie. entity-suggest
- order
    - mobilsoeg: `cancelOrder` `getOrderPolicy`? `placeOrder` `updateOrder`
    - order book
    - update order (ie. change expiry, and pickup-library)
- work
    - mobilsoeg: `getCoverImage` `getOpenSearchWork` `getOpenSearchBriefDisplay` `getRecomendations` `getHoldingStatus`
    - meta data
    - access to electronic resources, ie. link to fulltext, ereolen, etc., 
- recommendations
    - mobilsoeg: `saveLikeToMobilSoegProfile` `getPersonalRecommendations `also on work`? `deleteLikesFromMobilsoegProfile`
- library (agency/affiliates)
    - mobilsoeg: `getAllAffiliates` `getEventById` `getEventList` `getNewsById` `getNewsList` `getOpenAgency`?
    - opening times, geolocation
- misc apis/notes - forum(biblo), questions(spørgetjeneste etc.)
    - community services (ie. forum) (biblo)
    - questions

# Random thoughts/ideas, perhaps for later.

- swagger autogenerate server-code..
- look into graphql, and possibilities to use some of this...
- parameters
    - `pretty` determines whether the JSON should be prettyprinted when serialising.
    - `fields` which keys should be in the returned object.
    - `callback` is the callback name when doing a jsonp request on the HTTP-transport
    - `envelope` specifies whether to have the envelope explicit, or implicit (with status code on HTTP). 
- response
    - paging information
    - information about rate limit when applicable/implemented
- transport: HTTP GET requests - similar to HTTP-POST requests with same url, but the _parameters_ are given as url-parameters. This is a quick way to try out / experiment with the API.
- APIs that update state, returns the new state.
- The can also be transferred through HTTP without explicit envelope: the HTTP-status-code is `statusCode`, the HTTP-content is either the `data` (if `statusCode` is 200) or else the `errors`, and some of the HTTP-headers correspond to additional parameters like API-quota/rate-limit, pagination (and the envelope properties is named to match the HTTP-header-names).
