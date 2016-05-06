#!/bin/bash

export TIMES=1
export URL='http://xp-p02.dbc.dk:3000/v0/'
export ACCESS_TOKEN='64141bea42b72443ce3848455f5960e1438fb434'
export JOBS=1


export ENDPOINT='search'
export REQUEST='{ "q": "hest", "fields": ["title"], "timings":true}'
./make-test.sh

export ENDPOINT='work'
export REQUEST='{ "pids": ["870970-basis:22629344"], "fields": ["title" ], "timings":true}'
export NAME='-simple'
./make-test.sh

export ENDPOINT='work'
export REQUEST='{ "pids": ["870970-basis:22629344"], "fields": ["dcTitle", "title", "collection", "subjectDBCF", "hasReview", "coverUrlFull", "workType"], "timings":true}'
export NAME='-collection-coverurl'
./make-test.sh

export ENDPOINT='suggest'
export REQUEST='{ "q": "hest", "type": "subject", "timings":true}'
./make-test.sh

export ENDPOINT='facets'
export REQUEST='{"q" : "harry", "timings":true}'
./make-test.sh

export ENDPOINT='libraries'
export REQUEST='{"limit": 10, "agencyIds": ["717500"], "fields": ["agencyId", "orderParameters"], "timings":true}'
./make-test.sh






