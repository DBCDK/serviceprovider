#!/bin/bash

rm -f test.result*

export API_VERSION=`node -e "console.log(parseInt(require('../package.json').version, 10))"`
IFS=$'\n$'
for line in `cat requests.lst | grep -v "^#"`
do
  printf "\n\n$line\n" >> test.results.http
  curl -H "Content-Type: application/json" \
       -H "Authorization: Bearer qwerty" \
       --silent \
       -X POST \
       --max-time 10 \
       -d "`echo $line | sed -e 's/[^ ]*//'`" \
       "http://localhost:8080/v$API_VERSION/`echo $line | sed -e s/' .*//'`?pretty=true" \
       >> test.results.http
done

# node sc_apitest.js > test.results.ws

diff -u test.expected test.results.http # && diff -u test.results.ws test.expected
