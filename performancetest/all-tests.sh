#!/bin/bash

export TIMES=1000
#export URL='http://xp-p02.dbc.dk:3000/v0/'
export URL='http://localhost:3000/v0/'
export ACCESS_TOKEN='64141bea42b72443ce3848455f5960e1438fb434'
#export URL='http://localhost:8080/v0/'
#export ACCESS_TOKEN='766b5b95d196b6472ee5248ddd0b14ce8286a0ee'
export JOBS=1
export PRE='local-'


export ENDPOINT='search'
export REQUEST='{ "q": "hest", "fields": ["title"], "timings":true}'
./make-test.sh

export ENDPOINT='work'
export REQUEST='{ "pids": ["870970-basis:22629344"], "fields": ["title" ], "timings":true}'
export NAME='-simple'
./make-test.sh
export NAME=''

export ENDPOINT='work'
export REQUEST='{ "pids": ["870970-basis:22629344"], "fields": ["title", "collection" ], "timings":true}'
export NAME='-collection'
./make-test.sh
export NAME=''

export ENDPOINT='work'
export REQUEST='{ "pids": ["870970-basis:22629344"], "fields": ["title", "coverUrlFull"], "timings":true}'
export NAME='-coverurl'
./make-test.sh
export NAME=''

export ENDPOINT='suggest'
export REQUEST='{ "q": "hest", "type": "subject", "timings":true}'
./make-test.sh

export ENDPOINT='facets'
export REQUEST='{"q" : "harry", "timings":true}'
./make-test.sh

export ENDPOINT='libraries'
export REQUEST='{"agencyIds": ["717500"], "fields": ["agencyId", "orderParameters"], "timings":true}'
./make-test.sh






