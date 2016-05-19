// # Quick start guide to the open platform
//
// This introduction to getting started with the open platform is online on:
// [https://openplatform.dbc.dk/v0/guide.html#id:secret](https://openplatform.dbc.dk/v0/guide.html#id:secret). 
//
// It is written as a literate JavaScript 
// [source file](https://openplatform.dbc.dk/v0/guide.js),
// that can be executed directly in the browser.
// Use your client id/secret in the url, and open the browser console
// to see the result of the examples.
//
//

// # Authentication
//
// In order to use the API, we need to acquire an `access_token`.
// 
// For this we need various credentials: 
//
// - `client_id` - identifies app and library
// - `client_secret` - password connected with the `client_id`
// - `user_id` - library user id (often consisting of 10 digits), or `@` for anonymous user
// - `user_password` - typically the pin for the library user, or just `@` for anonymous users
// 

// The `access_token` is retrieved through at HTTP-POST request:

var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://auth.dbc.dk/oauth/token');
xhr.setRequestHeader('Authorization', 
    'Basic ' + btoa(client_id() + ':' + client_secret()));
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('grant_type=password' +
    '&username=' + user_id() + 
    '&password=' + user_password());


// All the following examples assumes that we have an `access_token`.

onXHR(xhr, function(result) { withAccessToken(result.access_token)});
function withAccessToken(access_token) {

// # Example of api-usage

};
// # Boilerplate code
// 
// This guide is written as a literate JavaScript program,
// to make sure that all examples works.
//
// The utility functions used above, is therefore implemented here
// for completeness.

// This example code assumes that the credentials are supplied in 
// the url-hash;

function client_id() { return location.hash.split(':')[0].slice(1); }
function client_secret() { return location.hash.split(':')[1]; }
function user_id() { return location.hash.split(':')[2] || '@'; }
function user_password() { return location.hash.split(':')[3] || '@'; }

if(client_id() === 'id' || !client_secret()) {
  throw 'Please use your client_id and client_secret in the url';
}

function onXHR(xhr, callback) {
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      var result = xhr.response;
      try {
        result = JSON.parse(result);
      } catch(e) {
      }
      console.log(xhr.responseURL, result);
      if(callback && xhr.status === 200) {
        callback(result);
      }
    }
  }
}
