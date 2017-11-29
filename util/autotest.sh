#!/bin/bash
export API_VERSION=`node -e "console.log(parseInt(require('../package.json').version, 10))"`
IFS=$'\n$'
for line in `cat ${1-autotest.lst} | grep -v "^#"`
do
  curl -H "Content-Type: application/json" \
       -H "Authorization: Bearer qwerty" \
       --silent \
       -X POST \
       --max-time 10 \
       -d "`echo $line | sed -e 's/[^ ]*//'`" \
       "http://localhost:8080/v$API_VERSION/`echo $line | sed -e s/' .*//'`"
  echo $line
done
