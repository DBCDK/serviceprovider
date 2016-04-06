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
- `fields` which keys should be in the returned object.

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

In the first version it will support logins via "Resource Owner Password Credentials".

TODO clarify/document details.

# API endpoints

Endpoints sorted alphabetical. Numbers in parenthesis reflect that they are secondery, or tertiary priority, as mentioned in the prioritisation later in this document.

## `/availability` 

Whether a material can be ordered / are available from the library.
Only contains info from DBCs services, so no "opstillingsdata fra intelligent-materialestyring" or similar.

--- 

Request:
```json
{ "id": "870970-basis:24284565",
  "fields": ["700400", "710100", "710100"]}
```
Fields is optional, with defaulting to branches of current logged-in agency.


Response:
```json
{ TODO:NEEDS_EXAMPLE
  ...}
```

`...` represents that it returns the data of openholding and openpolicy, so essentially json of the data they return. (Tilgængelighed + dato + orderable).


## `/ddbcms` (2.) 

Access to news, events, library-details unavailable from openagency, etc. 
This info comes from the APIs outside our control.

This webservice just proxies local DDBCMS instance(based on the agency for the logged in user).

----

Request:
```json
{ "path": "getContentList",
  "query": { "type": "ding_event" } }
```

NB: `agency`, and `key` is appended to the `query` by the ServiceProvider.

Response:
```json
{ TODO:NEEDS_EXAMPLE
  ...}
```

It just returns the result from the ddbcms-service.

----

NOTE: where is the api for the DDBCMS specified? 

## `/facets` (2.)

Get a list of facets from a search

----

Request:
```json
{ "q": "danmark",
  "fields": ["creator", "subject", "type"],
  "limit": 2 }
```

Response:
```json
{ "creator":
  [{ "term": "nordisk ministerråd", "frequency": 2708},
   { "term": "nordisk råd", "frequency": 2463}],
  "subject":
  [{ "term": "danmark", "frequency": 188792},
   { "term": "historie", "frequency": 19867}],
  "type":
  [{ "term": "avisartikel", "frequency": 83786},
   { "term": "tidsskriftsartikel", "frequency": 77618}]}
```

## `/libraries` 

Request:
```json
{ "fields": ["branchId", "city", "longitude", "latitude"]}
```

Response:
```json
[ {"branchId": "700401", "city": "Flensburg", "longitude": "54.4801716", "latitude": "9.0467115"},
  {"branchId": "710104", "city": "København N", "longitude": "55.680887", "latitude": "12.573619"},
  "..."  ]
```

The response comes from openagency, and has the possible fields from there. The result list has duplicate removed.

----

Request:
```json
{ "branchIds": ["700401", "710104"],
  "fields": ["branchId", "city", "longitude", "latitude"]}
```

Response:
```json
[ {"branchId": "700401", "city": "Flensburg", "longitude": "54.4801716", "latitude": "9.0467115"},
  {"branchId": "710104", "city": "København N", "longitude": "55.680887", "latitude": "12.573619"},
  "..."  ]
```
----

Mapping from OpenAgency xml to json, happens in a similar way to how we map bibliographic objects to json, but with no `oa`-prefix.

## `/order` 

- create/update/delete an order , NB: delete, expires
- NB: we probably need dummy user for `/order` service for test/development

## `/recommend` (3.)

- maybe possibility to limit results to materials available at the current library.

- req: filter(optional), profil(optional), pids
- result: title, creator, weight, pids, fromPid

## `/renew`

## `/search` 

search result

----

Request:
```json
{ "q": "harry AND potter",
  "fields": ["id", "dcTitle", "collection", "dcSubjectDBCF", "relHasAdaptation", "coverUrlFull"],
  "sort": "default",
  "offset": 1,
  "limit": 2 }
```

If `fields` are omitted, it will return those that easily comes from opensearch, ie DKABM-fields, collection, relations. And not coverUrls etc.

TODO: figure out if opensearch can return both BriefDisplay and DKABM, in that case fields from BriefDisplay is also included by default in search, - as that is also fast.

Later version of the api might also have an option to switch between manifest and work-1.

Response:
```json
[{"id": ["300185-katalog:100562332"],
  "dcTitle": ["Harry Potter og Fønixordenen DVD"],
  "coverUrlFull": ["//..."]},
 {"id": ["870970-basis:51989252"],
  "dcTitle": ["Harry Potter og de vises sten"],
  "collection": ["300185-katalog:100562332", "870970-basis:51989252", "870971-forfweb:86203219", 
                 "870970-basis:24284514", "870970-basis:24284565", "..."],
  "dcSubjectDBCF": ["fantasy", "magi", "troldmænd"],
  "relHasAdaption": ["870970-basis:27123279", "870970-basis:27963390"],
  "coverUrlFull": ["//..."]}]
```

## `/suggest` 

Suggestion for library, title, creator, or subject
----

Request:
```json
{ "q": "harry pot",
  "type": "title",
  "fields": ["term", "id", "creator", "type"],
  "limit": 2 }
```

Response:
```json
[ { "term": "Harry Potter og Hemmelighedernes Kammer",
    "id": "870970-basis:22375733",
    "creator": "Joanne K. Rowling",
    "type": "book"},
  { "term": "Harry Potter og fangen fra Azkaban",
    "id": "870970-basis:22639862",
    "creator": "Joanne K. Rowling",
    "type": "book" }]
```

----

Request:
```json
{ "q": "harry",
  "type": "creator",
  "limit": 2 }
```

Response:
```json
[ { "term": "Harry Nilsson"},
  { "term": "Harry Belafonte"}]
```

----

Request:
```json
{ "q": "køge",
  "type": "library",
  "fields": ["term", "væsensnavn", "adresse", "id", "postnr", "geolokation", "navn", "bibliotekstype", "by"],
  "limit": 1 }
```

Response:
```json
[ { "væsensnavn": "KøgeBibliotekerne",
    "adresse": "Kirkestræde 18",
    "id": "725900",
    "postnr": "4600",
    "geolokation": 
    { "lat": 55.45783460000001,
      "lng": 12.1822443 },
    "navn": "Køge Bibliotek",
    "bibliotekstype": "Folkebibliotek",
    "by": "Køge",
    "str": "Køge Bibliotek, Køge"}]
```




## `/user` 

- user status, including arrived loans, orders, etc.

## `/work` 

Request:
```json
{ "id": "870970-basis:51989252",
  "fields": ["dcTitle", "collection", "dcSubjectDBCF", "relHasAdaptation", "coverUrlFull"]}
```

If `fields` are omitted, it will return those that easily comes from getinfo, ie DKABM-fields, relations. And not collection, coverUrls etc.

Response:
```json
{ "dcTitle": ["Harry Potter og de vises sten"],
  "collection": ["300185-katalog:100562332", "870970-basis:51989252", "870971-forfweb:86203219", 
                 "870970-basis:24284514", "870970-basis:24284565", "..."],
  "dcSubjectDBCF": ["fantasy", "magi", "troldmænd"],
  "relHasAdaption": ["870970-basis:27123279", "870970-basis:27963390"],
  "coverUrlFull": ["//..."]}
```

## `/?` 

community services etc. needed by biblo

## `/batch` (later)  several queries in one http-request, for efficient-non-socket queries

# Bibliographic Data Model

Bibliographic objects are returned from both the `/work` and `/search` endpoints. 
They are identified by a *id*, - an example would be "775100-katalog:29372365".

The bibliographic object is represented as a JSON-object with fields from:

- `id` - ie. identifier from opensearch.
- BriefDisplay - ¿Where is this format documented? - Probably encoded in object with keys such as `title`, `creator`, `workType`, `titleFull` .... Evt. just identifier, if not easy to get together with dkabm from opensearch
- DKABM - defined on biblstandard.dk. Probably encoded in object with keys such as `acIdentifier`, `dcLanguage` or `dcLanguageISO639-2`, or `dcTitleFull`, (assuming there are no namespace-collisions of types, otherwise we need to rethink mapping into object).
- Relations - http://danbib.dk/index.php?doc=broend3_relationer - probably encoded in object with keys such as `relIsPartOfManifestation`, `relDiscusses`, ... 
- `collection` list of ids in same "værk" within opensearch search
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
    - `/order` - +orderId (krav i første-udgave)
    - `/renew` (agencyid, loan-id, userid) open user status
    - `/search` - work-1 with collection
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
    - `envelope` specifies whether to have the envelope explicit, or implicit (with status code on HTTP). 
- response
    - paging information
    - information about rate limit when applicable/implemented
- APIs that update state, returns the new state.
- The can also be transferred through HTTP without explicit envelope: the HTTP-status-code is `statusCode`, the HTTP-content is either the `data` (if `statusCode` is 200) or else the `errors`, and some of the HTTP-headers correspond to additional parameters like API-quota/rate-limit, pagination (and the envelope properties is named to match the HTTP-header-names).
- transport `dbc-node-serviceprovider-socketclient` - JavaScript API, that uses the WebSockets transport, with HTTP-POSTs as fallback. this is also how Mobilsoeg and Biblo talks with the service.
