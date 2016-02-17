#!/bin/bash
rm test.result

IFS=$'\n$'
for line in `cat requests.lst`
do
  printf "\n\n$line \n" >> test.result
  curl -H "Content-Type: application/json" \
       -X POST \
       -d "[`echo $line | sed -e 's/[^ ]*//'`]" \
       "http://localhost:8080/api/`echo $line | sed -e s/' .*//'`" \
       >> test.result
done
diff -u test.result test.expected
