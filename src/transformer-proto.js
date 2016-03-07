'use strict';
require('babel/register');
const fs = require('fs');
const poman = require('./provider/Provider.js');
const entsuggest = require('./services/EntitySuggest/client.js');


var config = {
    endpoint: 'http://xptest.dbc.dk/ms/entity-suggest/v1/'
};

var entclient = entsuggest(config);

var response = entclient.getSubjectSuggestions({'query': 'hest'});

response.then(function(result){
    console.log( 'promise fulfilled eller noget' );    
    console.log( JSON.stringify(result.response.suggestions,null,4) );  
}, function(err) {
    console.log(err); // Error: "It broke"
});

	    


//

//console.log( JSON.stringify(response.response.suggestions, null, 4));

//fs.watch('/tmp/heynode.txt', function(){
//	     console.log('Holy smokes! Something happened!');
//});

//console.log("let's roll!");
