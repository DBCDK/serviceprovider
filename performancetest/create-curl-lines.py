#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import socket
#import json

sh = """
export TIMES=1
export URL='http://xp-p02.dbc.dk:3000/v0/'
export ENDPOINT='search'
export ACCESS_TOKEN='64141bea42b72443ce3848455f5960e1438fb434'
export REQUEST='{ "q": "hest", "fields": ["title"], "timings":true}'
"""

# read env
times = int(os.getenv("TIMES"))
url = os.getenv("URL")
endpoint = os.getenv("ENDPOINT")
access_token = os.getenv("ACCESS_TOKEN")
request = os.getenv("REQUEST")
jobs = os.getenv("JOBS")
meta = os.getenv("CREATE_META_ONLY", None)

if meta:
    print "# hostname:", socket.gethostname()
    print "export TIMES=%s" % (times)
    print "export JOBS=%s" % (jobs)
    print "export URL='%s'" % (url)
    print "export ENDPOINT='%s'" % (endpoint)
    print "export ACCESS_TOKEN='%s'" % (access_token)
    print "export REQUEST='%s'" % (request)
#    print "export =%s" % ()
else:
    for i in range(times):
        print """curl -sSL -w "\\nCURL HTTPCODE=%%{http_code} SECS=%%{time_total}\\n" -H "Authorization: Bearer %s" -H "Content-Type: application/json" -X GET -d '%s' "%s"
""" % (access_token, request, url+endpoint)
