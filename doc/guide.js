// # Quick start guide to the open platform
//
// _**Guide in progress, not fully working/done yet.**_
//
// This introduction to getting started with the open platform is online on:
// [https://openplatform.dbc.dk/v0/guide.html#client\_id:client\_secret](https://openplatform.dbc.dk/v0/guide.html#client_id:client_secret). Supply your `client_id` and `client_secret` in the url hash, to make the examples work.
//
// The api-documentation is [https://openplatform.dbc.dk/v0/](https://openplatform.dbc.dk/v0/).
//
// The guide is written as a literate JavaScript
// [source file](https://openplatform.dbc.dk/v0/guide.js),
// that can be executed directly in the browser.
// Open the browser console to see the result of the examples.
//
// # JavaScript API
//
// To use the open platform from a browser, load
// `https://openplatform.dbc.dk/v0/dbc_openplatform.min.js`,
// with a `<script>`-tag, or in a similar way.
// Then the `dbcOpenPlatform` object will be available.
// Do not cache this JavaScript library indefinitely,
// as the underlying implementation may change
// if we change the transport protocol.
//
// This guide assumes familiarity with [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which are used asynchronous JavaScript code.
//
// ## Connecting
//
// First you need to connect to the platform:

dbcOpenPlatform.connect(
    client_id(), client_secret(),
    user_id(), user_password()) // optional
.then(function(token) {

// Notice that the `user_id` consist of "user-id@agency-id".
// You can always check whether you are connected,

console.log('connected:',
    dbcOpenPlatform.connected());

// It also possible to disconnect
// (useful to save power on mobile devices)

dbcOpenPlatform.disconnect()
.then(function() {

// and to reconnect with an existing token

dbcOpenPlatform.connect(token)
.then(function() {

// ## Calling the api
//
// The api exposes the different endpoints as methods
// on the `dbcOpenPlatform` object. For example,
// a search is executed with:

dbcOpenPlatform.search({
    q: 'ost',
    fields: ['title', 'creator', 'pid']})
.then(function(results) {
    console.log('search example', results);
});

// Errors are caught as usual with promises:

dbcOpenPlatform.work({ invalid_parameter: 'foo'})
.catch(function(err) {
    console.log('work error example', err);
});

// By default, successful requests exclude the
// result envelope, - if you want the envelope,
// add `envelope: true` to the request.

dbcOpenPlatform.suggest({
    q: 'jens', type: 'creator',
    timings: true, envelope: true})
.then(function(results) {
    console.log('suggest example', results);
});

// Notice that while suggest just takes a string,
// queries for search and facets
// are expressed as [CQL](http://www.danbib.dk/broend3_soeg).
// This means that searches like `den lille prins` will fail,
// and has to be `den AND lille AND prins` or `"den lille prins"` or ...,
// depending on the desired result.

dbcOpenPlatform.facets({q: '"den lille prins"'})
.then(function(results) {
    console.log('facets example', results);
});

// # OAuth2 Authentication
//
// In order to use the HTTP-API, we need to acquire an `access_token`. 
//
// For this we need various credentials:
//
// - `client_id` - identifies app and library
// - `client_secret` - password connected with the `client_id`
// - `user_id` - library user id (often consisting of 10 digits) followed by an "@" followed by the library agency id, or `@` for anonymous user. The library agency ids can be found via the `libraries` endpoint, through an anonymous user login.
// - `user_password` - typically the pin for the library user, or just `@` for anonymous users
//

// The `access_token` is retrieved with a HTTP-POST request,
// with `client_id` and `client_secret` supplied through basic authentication,
// and `user_id`, `user_password` supplied in the request body.
// In browser JavaScript this can be done with XHR:

var xhr = new XMLHttpRequest();

xhr.open('POST', 'https://auth.dbc.dk/oauth/token');

xhr.setRequestHeader('Authorization', 'Basic ' +
    btoa(client_id() + ':' + client_secret()));

xhr.setRequestHeader('Content-Type',
    'application/x-www-form-urlencoded');

xhr.send('grant_type=password' +
    '&username=' + user_id() +
    '&password=' + user_password());


// This request returns a JSON object,
// which has an `access_token` property on success.
// The rest of this guide assume that we have a valid `access_token`

xhr_promise(xhr).then(function(result) {
    var access_token = result.access_token;

// # GET API
//
// You can also express the entire query in an url,
// which is useful for interactive testing. 
// An example search url is:
// <a id=sample_url>https://openplatform.dbc.dk/v0/search?q=hej&pretty=true&access_token=...</a>
//
// The serviceprovider tries to parse each individual url parameter 
// as a string, and if that fails just use it as a string. This
// makes it possible to add more complex parameters, such as `.../work?pids=["870970-basis:05760755","870970-basis:27648452"]&...`
//
// # POST API
//
// Requests to the API can be sent by POSTing a JSON object
// to the API endpoint:

HTTP_POST('https://openplatform.dbc.dk/v0/suggest',
    { q: 'Steppe', type: 'title',
      access_token: access_token});

HTTP_POST('https://openplatform.dbc.dk/v0/search',
    {q: 'hello', access_token: access_token});

// All of the other APIs also have the same structure
// of sending a JSON object of parameters to the endpoint
// and then getting the result back.
//
// In browser JavaScript, HTTP-POSTing a JSON object
// can be done like this:

function HTTP_POST(url, parameters) {
    xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type',
        'application/json');
    xhr.send(JSON.stringify(parameters));
    return xhr_promise(xhr);
}

// <hr>
// # Support code
//
// The following sections are the utility functions used above. 
// It is implemented here for completeness. 
// Feel free to skip the rest of this file.

// Make sample get-request-url include proper `access_token`:

var link = document.getElementById('sample_url');
link.href = link.innerHTML =
  'https://openplatform.dbc.dk/v0/search?' +
  'q=hej&pretty=true&access_token=' + access_token;

// Close open code blocks. They contain scope for logins / tokens.

}); }); }); });

// The example code assumes that the credentials are supplied in
// the url-hash. Here is a quick hack to extract them from the url:

function client_id() {
  return location.hash.split(':')[0].slice(1); }
function client_secret() {
  return location.hash.split(':')[1]; }
function user_id() {
  return location.hash.split(':')[2] || '@'; }
function user_password() {
  return location.hash.split(':')[3] || '@'; }
if(client_id() === 'id' || !client_secret()) {
  throw 'Please use your client_id' +
    ' and client_secret in the url';
}

// A XMLHttpRequest requires setting event handlers
// to get the result of the request.
// Here is a utility function that does the boilerplate
// code, and transforms the XHR-request into a promise.
// It also logs, and parse the result as JSON
// on the way through.

function xhr_promise(xhr) {
  return new Promise(function(resolve, reject) {
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        console.log(xhr.responseURL, xhr);
        if(xhr.status === 200) {
          var result = xhr.response;
          try {
            result = JSON.parse(result);
          } catch(e) {
          }
          resolve(result);
        } else {
          reject(xhr);
        }
      }
    }
  });
}

// Final note: the code above is written as a tutorial code,
// designed to be simple to read, and get started with,
// rather than proper and correct. It does not follow
// best practices for production code.
