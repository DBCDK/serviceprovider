#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os

times = int(os.getenv("TIMES",100))

for i in range(times):
    print """curl -s -w "\\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\\n" -P -v -H "Content-Type: Application/json" -d '{"profile": "default","like": [], "maxresults":100}' "xptest.dbc.dk/ms/recommend-pop/v1"
"""    
