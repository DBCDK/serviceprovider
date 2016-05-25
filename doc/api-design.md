This contains old/obsoleted design notes. Temporarily kept here for reference.

Please see `README.md` and https://openplatform.dbc.dk/ for up to date documentation,
- and `spec.yml` and `work-context.jsonld` for specification.

----

# old obsolete notes, might be worth keeping for refernence

----

## Priorities of features
    
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
    - `/recommend` - mulighed for at filtrere , ie. på materialetype, bibliotek, etc. Filtret skulle være en CQL-streng, så det er konsistent med øvrige kald, se også github issue #377.
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
    

## Extra possible endpoints
### `/unknown endpoints` (maybe later)

community services/profile etc. needed by biblo.

### `/batch`

several queries in one http-request, useful on non-socket clients for efficiency

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
