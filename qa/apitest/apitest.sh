#!/bin/bash

TESTNAME=${1:-test}


rm -f $TESTNAME.result*

export API_VERSION=`node -e "console.log(parseInt(require('../../package.json').version, 10))"`
IFS=$'\n$'
for line in `cat $TESTNAME.requests.lst | grep -v "^#"`
do
  printf "\n\n$line\n" >> $TESTNAME.results.http
  curl -H "Content-Type: application/json" \
       -H "Authorization: Bearer qwerty" \
       --silent \
       -X POST \
       --max-time 10 \
       -d "`echo $line | sed -e 's/[^ ]*//'`" \
       "http://localhost:8080/v$API_VERSION/`echo $line | sed -e s/' .*//'`?pretty=true" \
       >> $TESTNAME.results.http
done
echo "" >> $TESTNAME.results.http

node sc_apitest.js $TESTNAME > $TESTNAME.results.ws

# replace dummy user id for mock comparison
perl -pi -e 's/zeEOALqmSuy\+ysfz0zYbna0CgwtrhewG/KbZ0UoBGys8QMLzieTQ5mHZ39ivzulP4/g' $TESTNAME.*

diff -u $TESTNAME.expected $TESTNAME.results.http && diff -u $TESTNAME.results.ws $TESTNAME.expected
