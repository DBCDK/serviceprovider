#!/usr/bin/env python
# -*- coding: utf-8 -*-

auth = {
  "token_type": "bearer",
  "access_token": "9eda401aebd68809c4da2861dba7833611960b0f",
  "expires_in": 2592000
}                                                            

token = auth['access_token']
url = "http://platformbe-p01.dbc.dk:8080/v0/work"

for i in range(1100):
    print """curl -sSL -w "\\nCURL HTTPCODE=%%{http_code} SECS=%%{time_total}\\n" -H "Authorization: Bearer %s" -H "Content-Type: application/json" -X GET -d '{ "pids": ["870970-basis:22629344"], "fields": ["dcTitle", "title", "collection", "subjectDBCF", "hasReview", "coverUrlFull", "workType"], "timings":true}' "%s"
""" % (token, url)
