# API-notes

This document has various in-progress notes about the API.

## Notes about needed api for mobile app

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

## References

- https://openapis.org/ / https://github.com/OAI/OpenAPI-Specification / http://swagger.io 
- http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api

## API design notes

Notes for first version of api design doc. Based on

- Documentation API
    - Swagger (major existing tool for this, turns out that this is also used for releated services, ie. dbc-community-service)
    - Documentation in English (decided in leveranceplanen)
- Basic API (mostly based on ex
    - request: endpoint name + json object (most common usage so far. Requirering JSON objec parameter makes it more uniform)
    - response: use envelope (intention with recent service from ux-team)
        - `statusCode` - numeric status code, based on http-responses
            - already used in some mobilsoeg services on errors
            - http-codes makes it easier to map it to http-requests, and making envelope optional
        - `data` - actual response
        - `errors` - list of errors (current practise is mixed, and often using `error` property. Intention is to have error-list. Rename to `errors`
    - pretty-print response by default, option to have it unpretty. (best practise, google for details)
- API access points
    - `dbc-node-serviceprovider-socketclient` (nodejs-api, running through socketcluster or http(fallback), used by biblo etc.)
    - HTTP-api (standard, cross-client/browser, already used by mobilsoeg/biblo)
    - SocketCluster (better performing threading of requests, already used by mobilsoeg/biblo)
    - SSL-only (best practise, google for details)
    - always CORS-support(best way to allow cross-origin requests, needs to be supported for HTML5 apps), and jsonp-option(should be trivial to implement using, just using express-module)
- Auth - TODO, nb: code in openserviceprovider
- API content (used in design notes)
    - Biblo version April
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
- Perspective
    - swagger autogenerate server-code..
    - graphql...
