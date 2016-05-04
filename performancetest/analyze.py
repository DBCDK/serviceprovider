#!/usr/bin/python
# -*- coding: utf-8 -*-

from __future__ import division

import re
import sys
import os
import json
import numpy as np

def f(n):
    return int(round(n))
    

def report(name, seq):
    print '===', name, '[ms] ==='
    print "mean:", f(np.mean(seq)), "\tstd dev:", f(np.std(seq))
    print "95%:", f(np.percentile(seq, 95)), "\t99%:", f(np.percentile(seq, 99))
    print "min:", f(min(seq)), "\tmax:", f(max(seq))



if __name__ == "__main__":
    errors = dict()

    total_times = []
    service_times = []
    overhead_times = []
    
    response = None
    curltime_ms = None
    totaltime = None
    externaltime = None
    n = 0
    for line in sys.stdin:
        if line.startswith('{'):
            # assume json response
            response = json.loads(line)
            totaltime = response["timings"]["total"]
            externaltime = response["timings"]["external"]
            continue
        match = re.search(r'CURL HTTPCODE=(\d+) SECS=(\d+[.,]\d+)', line)
        if match:
            n+=1
            print "n:", n
            (httpcode, time) = match.group(1,2)                  
            if not httpcode == "200":
                if not httpcode in errors:
                    errors[ httpcode ] = 1
                else:
                    errors[ httpcode ] += 1
            else:
                time = time.replace(',','.')
                curltime_ms = float(time)*1000
                print "CURL:", curltime_ms
                print "TOTAL SP:", totaltime
                print "EXTERNAL:", externaltime
                overhead = curltime_ms - externaltime
                print "TOTAL OVERHEAD:", overhead
                total_times.append(curltime_ms)
                service_times.append(externaltime)
                overhead_times.append(overhead)
                continue
    if errors:
        print "ERRORS:", errors
    else:
        print "[no errors]"
    print "samples:", len(total_times)
    report("total time", total_times)
    report("webservice time", service_times)
    report("overhead time", overhead_times)
