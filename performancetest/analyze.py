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


def parseresponse(r):
    """throw if no timings"""
    # assume json response
    response = json.loads(r)
    #print "STR", r
    #print "JSON", response
    result = dict();
    result['spstatus'] = response[u"statusCode"]
    result['sptime'] = None
    result['externaltime'] = None
    if 'timings' in response:
         result['sptime'] = response["timings"]["total"]
         result['externaltime'] = response["timings"]["external"]
    #print ">>>", result
    return result

    
def readlines():
    hips = []
    responselines = []
    #n = 0
    for line in sys.stdin:
        #n +=1
        #print "n", n
        match = re.search(r'CURL HTTPCODE=(\d+) SECS=(\d+[.,]\d+)', line)        
        if match:
            # we have an entry
            (httpcode, time) = match.group(1,2)                  
            time = time.replace(',','.')
            curltime_ms = float(time)*1000            
            response_str = "".join(responselines)
            responselines = []
            hip = {
                'httpstatus': int(httpcode),
                'curltime': curltime_ms,
                'good': False,
                'response': response_str
            }
            try:
                response = parseresponse(response_str)
            except:
                # not json response
                pass
            else:
                hip['spstatus'] = response['spstatus']
                if hip['spstatus'] == 200:
                    hip['good'] = True
                    hip['sptime'] = response['sptime']                    
                    hip['externaltime'] = response['externaltime']

            hips.append(hip)
        else:
            responselines.append(line)
    return hips

if __name__ == "__main__":
    total_times = []
    service_times = []
    overhead_times = []
    errors = dict()
    #readlines()
    #exit(0)

    for x in readlines():
        #print x
        if x['good']:
            overhead = x['curltime'] - x['externaltime']
            total_times.append(x['curltime'])
            service_times.append(x['externaltime'])
            overhead_times.append(overhead)
        else:
            print x['response']
            status = x['httpstatus']
            if 'spstatus' in x:
                status = x['spstatus']
                
            if not status in errors:
                errors[status] = 1
            else:
                errors[status] += 1

 


    if errors:
        print "ERRORS:", errors
    else:
        print "[no errors]"
    print "samples:", len(total_times)
    report("total time", total_times)
    report("webservice time", service_times)
    report("overhead time", overhead_times)

    
