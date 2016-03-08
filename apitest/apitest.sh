#!/bin/bash

rm -f test.results.http
IFS=$'\n$'
for line in `cat requests.lst`
do
  printf "\n\n$line \n" >> test.result.http
  curl -H "Content-Type: application/json" \
       -X POST \
       -d "`echo $line | sed -e 's/[^ ]*//'`" \
       "http://localhost:8080/api/`echo $line | sed -e s/' .*//'`" \
       >> test.results.http
done

node sc_apitest.js > test.results.ws

diff -u test.results.http test.expected &&
diff -u test.results.ws test.expected
