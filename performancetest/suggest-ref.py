#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os

times = int(os.getenv("TIMES",100))

for i in range(times):
    print """curl -sSL -w "\\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\\n" -H "Content-Type: Application/json" "http://xptest.dbc.dk/ms/entity-suggest/v1/subject?query=hest"
"""    
