#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os

times = int(os.getenv("TIMES",100))

auth = {
  "token_type": "bearer",
  "access_token": "766b5b95d196b6472ee5248ddd0b14ce8286a0ee",
  "expires_in": 2592000
}

token = auth['access_token']
url = "http://platformbe-p01.dbc.dk:8080/v0/work"
#url = "http://localhost:8080/v0/test"


for i in range(times):
    print """curl -sSL -w "\\nCURL HTTPCODE=%%{http_code} SECS=%%{time_total}\\n" -H "Authorization: Bearer %s" -H "Content-Type: application/json" -X GET -d '{ "pids": ["870970-basis:22629344"], "fields": ["dcTitle", "title", "collection", "subjectDBCF", "hasReview", "coverUrlFull", "workType"], "timings":true}' "%s"
""" % (token, url)
