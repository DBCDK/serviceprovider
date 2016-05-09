#!/bin/bash

export BASENAME=$ENDPOINT$NAME-$TIMES-$JOBS

export CREATE=./create-curl-lines.py
export PARALLEL=parallel
export ANALYZE=./analyze.py

export META=$BASENAME.meta
export CURL=$BASENAME.curl.sh
export OUT=$BASENAME.out
export RESULT=$BASENAME.result


#echo create metadata
CREATE_META_ONLY=true $CREATE > $META

#echo create curl lines
$CREATE > $CURL

echo "$PARALLEL -j$JOBS < $CURL > $OUT && $ANALYZE < $OUT> $RESULT"
