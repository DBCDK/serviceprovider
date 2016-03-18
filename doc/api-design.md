**This document is a draft in progress.**
This is ideas for design, and it is not decided, nor fully implemented yet.
During the next months, this document will converge towards the released implementation.

# API structure

__Requests__ to the API consist of the _endpoint name_, and a JSON object of _parameters_.

Parameters are general across endpoints:

- `access_token` is the access token when needed
- `offset` for paginated results, such as search result.
- `limit` for paginated results, - number of results per page.
- `pretty` determines whether the JSON should be prettyprinted when serialising.
- `callback` is the callback name when doing a jsonp request on the HTTP-transport

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


# Transports

There are several transports:

- HTTP POST requests - the _parameters_ are posted as a JSON object (`Content-Type: application/json`) to an url, given by the `endpoint name`. Supports CORS.
- HTTP GET requests - similar to HTTP-POST requests with same url, but the _parameters_ are given as url-parameters. This is a quick way to try out / experiment with the API. Parameters are parsed as JSON(if possible) and otherwise used as strings. Url-parameters can also be used in POST-requests to override values.
- SocketCluster (WebSockets) - send the request over websocket, and gets a result back, - the event is the endpoint name, the data is the parameters, and the result comes through the callback, when using the socketcluster-client (available for JavaScript, iOS and Android from https://github.com/socketcluster/.).

# Auth

Authentication using OAuth 2. 

The authentification server is called Smaug, and lives in another repository: https://github.com/dbcdk/smaug/.

In the first version it will support logins via "Resource Owner Password Credentials" for users, and "Client Credentials" for anonymous access.

TODO clarify/document details.

# API endpoints

- `/search` opensearch - collectionType: manifest | work-1 (if "collection" in fields) - default-fields: those from "briefDisplay" format + collection - maybe: limit search to books available on given library
- `/work` pid + fields -> metadata - information the creative work - default-fields: dkabm, brief, relations
- `/suggest` - library-suggestions, different kinds of search query suggestions,
- `/order` - create/update/delete an order 
- `/availability` - holdings - limit holding check to certain libraries
- `/recommend` - maybe possibility to limit results to materials available at the current library.
- `/facets`
- `/user` - user status, including arrived loans, orders, etc.
- `/renew`
- `/news`
- `/events`
- `/libraries`
- `/batch` several queries in one http-request, for efficient-non-socket queries

- NB: we probably dummy `/order` service for testing

# Bibliographic Data Model

Bibliographic objects are returned from both the `/work` and `/search` endpoints. 
They are identified by a *pid*, - an example would be "775100-katalog:29372365".

The bibliographic object is represented as a JSON-object with fields from:

- BriefDisplay - ¿Where is this format documented? - Probably encoded in object with keys such as `title`, `creator`, `workType`, `titleFull` ...
- DKABM - defined on biblstandard.dk. Probably encoded in object with keys such as `acIdentifier`, `dcLanguage` or `dcLanguageISO639-2`, or `dcTitleFull`, (assuming there are no namespace-collisions of types, otherwise we need to rethink mapping into object).
- Relations - http://danbib.dk/index.php?doc=broend3_relationer - probably encoded in object with keys such as `relIsPartOfManifestation`, `relDiscusses`, ... 
- `collection` list of pids in same "værk" within opensearch search
- moreInfo - covers as url and dataurl, - as `coverUrlXXX` or `coverDataUrlXXX` where `XXX` is one of `42`, `117`, `207`, `500`, `Thumbnail` or `Full`, ie. `coverUrl42`.

Each key present in the json-object, should contain an array of values. Example: if the bibliographic xml-object contains:


```xml
<dc:subject xsi:type="dkdcplus:DBCN">for 7 år</dc:subject>
<dc:subject xsi:type="dkdcplus:DBCN">for 8 år</dc:subject>
<dcterms:audience>børnematerialer</dcterms:audience>
<dc:title>Danmark</dc:title>
```

it would map to json like:

```json
{ "dcSubjectDBCN": ["for 7 år", "for 8 år"],
  "dctermsAudience": ["børnematerialer"],
  "dcTitle": ["Danmark"]}
```

This encoding is both easy to work directly with in client code, and will also be a JSON-LD encoding, when adding an `@context` with a _link_ to a general context description and an `@id` with the id of the object - which makes the endpoint deliver proper linked data. 

In the example above, the `@id` would be something like `https://serviceprovider.dbc.dk/v0/work/870970-basis:05941261`, and the relevant subset of the context, would be something in the line of:

```json
{ "dc": "http://purl.org/dc/elements/1.1/",
  "dkdcplus": "http://biblstandard.dk/abm/namespace/dkdcplus/",
  "dcterms": "http://purl.org/dc/terms/1.1/" ,
  "dcSubjectDBCN": 
  { "@id": "dc:subject",
    "@type": "dkdcplus:DBCN"},
  "dctermsAudience": "dcterms:audience",
  "dcTitle": "dc:title"}
```

# Priorities of features
    
1. Must:
    - `Smaug` - openauth login - password-credentials and client-credential
    - `/availability`
    - `/libraries` - list of libraries - geocoordinates - opening times - address/tel - html-info
    - `/order`
    - `/renew`
    - `/search - work-1 with collection
    - `/user` - lånerstatus (hjemkomne, bestillinger, udestående) - unique id for agency/user combination
    - `/work` - DKABM, Relations, BriefDisplay, `coverUrlXXX`
2. Must/should:
    - `/events`
    - `/facets`
    - `/news`
    - `/suggest` - title, subject, creator
3. Should:
    - `Smaug` - automatiseret oprettelse af nye apps/klient-tokens/ids.
    - `/libraries` - adgang til data fra DDB-cms, eller
    - `/recommend`
    - `/search` - manifest (without collection)
    - `/suggest` - library
    - `/user` - birthyear
    - `/work` - `collection`, `coverDataUrlXXX`
    - `/?` - community services - needed by Biblo
4. Should/nice-to-have:
    - `/work` - værk-resultat som JSON-Linked-Data, lavthængende frugt: hvis mapningen fra DKABM etc. til json udføres korrekt, er dette sansynligvist trivielt / næsten gratis at implementere.
    - `/recommend` - mulighed for at afgrænse anbefalinger til materialer der har forside - mulighed for at afgrænse anbefalinger til materialer der er hjemme på et givet bibliotek
    - `/search` - mulighed for at afgrænse søgning til materialer der har forside - mulighed for at afgrænse søgning til materialer der er hjemme på et givet bibliotek
    - `/batch` - send flere api-forespørgsler gennem en enkelt http-request
    - `/order` - bestilling af flere eksemplarer af samme materiale
    - `/user` - profil-service, ie. mulighed for at gemme data tilknyttet til user, (kommer måske til at eksistere via community service)
    - adgang til elektroniske resourcer
5. Nice-to-have:
    - `Smaug` - Login-flow hvor cpr/pin ikke eksponeres til app - Understøttelse af andre loginmetoder (wayf, nemid, etc).  - Granuleret adgangsstyring: kun-brugerid, read-only, full
    - `/availability` - fysisk placering på biblioteket via intelligent materialestyring, for biblioteker der understøtter dette
    - `/user` - mulighed for at sende besked til bruger via email/sms/...
    - `/libraries` - opmarkeret kort over biblioteket, hvis eksistrer (ie ims, wagner etc. integration)
    - `/?` tidsbestilling af biblioteksresourcer (computere etc.)
    - `/?` spørgetjeneste
    - GraphQL-like søgning
    - streaming søgeresultater
    - Egentligt linked-data endpoint
    
# old notes
## Notes for the concrete API design


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

List of transforms: getOpenSearchBriefDisplayList getOpenSearchWorkBriefDisplay getOpenSearchFacets getOpenSearchResultList getOpenSearchFacetTerms getOpenSearchWork getCoverImage getPersonalRecommendations getRecommendations commentOnGroupPost createGroup createGroupPost createProfile deleteGroupPost getGroup getGroupPost getProfile joinGroup leaveGroup saveLike loginProfile logoutProfile queryGroups resetLikes updateGroup updateGroupPost updateProfile verifyEmail getPopSuggestions cancelOrder getUserStatus renewLoan updateOrder getFilterGuides getOrderPolicy placeOrder holdingStatus getMultiOpenAgency getOpenAgency getPickupAgencyList searchOpenAgency getEventById getEventList getNewsById getNewsList deleteLikesFromMobilSoegProfile findMobilSoegProfile isMobilSoegUserLoggedIn savePickupAgencyToMobilSoegProfile saveLikeToMobilSoegProfile getAllAffiliates getEntitySuggestions checkBorrower checkBorrowerAndSaveToProfile


## Random thoughts/ideas, perhaps for later.

- swagger autogenerate server-code..
- look into graphql, and possibilities to use some of this...
- parameters
    - `fields` which keys should be in the returned object.
    - `envelope` specifies whether to have the envelope explicit, or implicit (with status code on HTTP). 
- response
    - paging information
    - information about rate limit when applicable/implemented
- APIs that update state, returns the new state.
- The can also be transferred through HTTP without explicit envelope: the HTTP-status-code is `statusCode`, the HTTP-content is either the `data` (if `statusCode` is 200) or else the `errors`, and some of the HTTP-headers correspond to additional parameters like API-quota/rate-limit, pagination (and the envelope properties is named to match the HTTP-header-names).
- transport `dbc-node-serviceprovider-socketclient` - JavaScript API, that uses the WebSockets transport, with HTTP-POSTs as fallback. this is also how Mobilsoeg and Biblo talks with the service.
