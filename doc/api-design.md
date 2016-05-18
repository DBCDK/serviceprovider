**This document is a draft in progress.**
It contains ideas for design, and it is not decided, nor fully implemented yet.

The documentation is moved into README.md as it is finalised

See also the API-documentation on https://openplatform.dbc.dk, and `spec.yaml`, `README.md`, and `work-context.jsonld` in this directory. 

----

# Transports

- SocketCluster (WebSockets) - send the request over websocket, and gets a result back, - the event is the endpoint name, the data is the parameters, and the result comes through the callback, when using the socketcluster-client (available for JavaScript, iOS and Android from https://github.com/socketcluster/.). Notice: the result received by socketcluster are decycled, so you need to call `require("cycle").retrocycle(result)`.

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
    
# Notes about API endpoints

**The authoritative API-specification is in `spec.yml`, documentation has been migrated into that file**

Generated documentation from the specification can be seen in the running serviceprovider (http://localhost:8080/ locally, or TODO:url-for-public-endpoint)

These are possible extra endpoints, maybe implemented later:

## `/unknown endpoints` (maybe later)

community services/profile etc. needed by biblo.

## `/batch` (maybe later)  

several queries in one http-request, needed on non-socket clients for efficiency

request:

```json
[{"endpoint": "work", "pid": "870970-basis:12345678"},
 {"endpoint": "work", "pid": "870970-basis:24284565"},
 {"endpoint": "suggest", "type": "subject", "q": "hej"},
 "..."]
```

response:
```json
[{"dc
 {"title": "Harry Potter", "...":"..."},
 {"title": "Danmark", "...":"..."},
 [{"term":"..."}, "..."]
 "..."]
```

## `/ddbcms` (not implemented, use news, events, and libraries instead) 

(keeping documentation of the api-ideas here, as it might be useful to add this endpoint later on, to have a general way to get info from the cms)

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
"..."
```

It just returns the result from the ddbcms-service.


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
