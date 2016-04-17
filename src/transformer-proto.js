'use strict';
require('babel/register');
// const fs = require('fs');
// const poman = require('./provider/Provider.js');
const entsuggest = require('./services/EntitySuggest/client.js');


var config = {
  url: 'http://xptest.dbc.dk/ms/entity-suggest/v1/'
};

var entclient = entsuggest(config);

var response = entclient.getSubjectSuggestions({query: 'hest'});

response.then(function(result) {
  console.log('promise fulfilled eller noget'); // eslint-disable-line
  console.log(JSON.stringify(result.response.suggestions, null, 4)); // eslint-disable-line
}, function(err) {
  // Error: "It broke"
  console.log(err); // eslint-disable-line
});


// console.log( JSON.stringify(response.response.suggestions, null, 4));
// fs.watch('/tmp/heynode.txt', function(){
//	     console.log('Holy smokes! Something happened!');
// });
// console.log("let's roll!");
