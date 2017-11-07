#!/bin/bash

export TIMES=1
export URL='http://localhost:8080/v1/'

export JOBS=1
export PRE=''


export ENDPOINT='search'
export REQUEST='{ "q": "hest", "fields": ["title"], "timings":true}'
make-test.sh

export ENDPOINT='work'
export REQUEST='{ "pids": ["870970-basis:22629344"], "fields": ["title" ], "timings":true}'
export NAME='-simple'
make-test.sh
export NAME=''

export ENDPOINT='work'
export REQUEST='{ "pids": ["870970-basis:22629344"], "fields": ["title", "collection" ], "timings":true}'
export NAME='-collection'
make-test.sh
export NAME=''

export ENDPOINT='work'
export REQUEST='{ "pids": ["870970-basis:22629344"], "fields": ["title", "coverUrlFull"], "timings":true}'
export NAME='-coverurl'
make-test.sh
export NAME=''

export ENDPOINT='suggest'
export REQUEST='{ "q": "hest", "type": "subject", "timings":true}'
export NAME='-subject'
make-test.sh
export NAME=''

export ENDPOINT='suggest'
export REQUEST='{ "q": "hest", "type": "creator", "timings":true}'
export NAME='-creator'
make-test.sh
export NAME=''

export ENDPOINT='suggest'
export REQUEST='{ "q": "køge", "type": "library", "timings":true}'
export NAME='-library'
make-test.sh
export NAME=''

export ENDPOINT='suggest'
export REQUEST='{ "q": "harry", "type": "title", "timings":true}'
export NAME='-title'
make-test.sh
export NAME=''

export ENDPOINT='facets'
export REQUEST='{"q" : "harry", "timings":true}'
make-test.sh

export ENDPOINT='libraries'
export REQUEST='{"agencyIds": ["717500"], "fields": ["agencyId", "orderParameters"], "timings":true}'
make-test.sh

export ENDPOINT='recommend'
export REQUEST='{"like":["870970-basis:45488713", "870970-basis:28643713", "870970-basis:29494940", "870970-basis:29386404", "870970-basis:28429576"], "limit":10, "timings":true}'
make-test.sh

export ENDPOINT='rank'
export REQUEST='{"pids":["870970-basis:28511663", "870970-basis:29754519", "870970-basis:29060835", "870970-basis:28567057", "870970-basis:28043872", "870970-basis:28709994", "870970-basis:29319006", "870970-basis:27266428", "870970-basis:28724683", "874310-katalog:DBB0019369", "870970-basis:26923530", "870970-basis:29974861", "870970-basis:28456433", "870970-basis:28902239", "870970-basis:45188981"], "like":["870970-basis:45488713", "870970-basis:28643713", "870970-basis:29494940", "870970-basis:29386404", "870970-basis:28429576"], "timings":true}'
make-test.sh

# export ENDPOINT='availability'
# export REQUEST='{"pid": "870970-basis:51989252", "timings":true}'
# ./make-test.sh

# export ENDPOINT='news'
# export REQUEST='{"fields": ["title", "changed", "nid", "field_ding_news_list_image"], "timings":true}'
# ./make-test.sh

# export ENDPOINT='events'
# export REQUEST='{"fields": ["title", "changed", "nid", "field_ding_event_title_image"], "timings":true}'
# ./make-test.sh

export ENDPOINT='order'
export REQUEST='{"pids": ["870970-basis:28126727"], "expires": "2016-08-01", "library": "DK-100451", "timings":true}'
make-test.sh

export ENDPOINT='renew'
export REQUEST='{ "loanId": "NCIPMDAxOXw5OTAwfHw5OTAwLnx8", "timings":true}'
make-test.sh

