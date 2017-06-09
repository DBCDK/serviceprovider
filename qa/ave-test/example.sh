#!/bin/sh

export URL='http://platformbe-p01.dbc.dk:8080/v1/'
export TOKEN='766b5b95d196b6472ee5248ddd0b14ce8286a0ee'

export ENDPOINT='search'
#export REQUEST='{ "q": "hest", "fields": ["title"], "createTest":true, "pretty":true}'

export REQUEST='
{ 
"q": "hest", 
"fields": ["title"], 
"createTest":true, "pretty":true
}'


curl -sSL -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" -X GET -d "$REQUEST" $URL$ENDPOINT

