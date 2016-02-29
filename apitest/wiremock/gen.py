#!/usr/bin/python
# -*- coding: utf-8 -*-


from __future__ import division
import sys

def wiremock_string( wiremockpath, host, port ):
    #url="http:"
    return "java -jar %s --port %s --proxy-all=%s --record-mappings --verbose" % (wiremockpath, port, host)

wiremock = "/home/cbo/serviceprovider/trunk/apitest/wiremock/wiremock-1.57-standalone.jar"
if __name__ == "__main__":
    for line in sys.stdin:
        l = line.split()
        #print ">>>", l
        if not len(l) == 4:
            # ignore line
            continue

        # http://xptest.dbc.dk /ms/recommend-meta/v1 RECOMMEND_META_SERVICE_URL 9906
        host = l[0] # http://xptest.dbc.dk
        url = l[1]  # /ms/recommend-meta/v1
        env = l[2]  # MOREINFO_SERVICE_URL
        port = l[3] # 9900
        print "###",host, url, env, port, "###"
        dirname = env
        print "mkdir -p", dirname
        ws = wiremock_string(wiremock, host, port)
        print "(cd %s && nohup %s > nohup.out)&" % (dirname,ws)
        # export OPENAGENCY_SERVICE_URL='http://localhost:9901/2.24/?wsdl'
        # TODO: https fix!
        mockurl=host.replace(host, "http://localhost:"+port)
        print "export %s='%s'" % (env,mockurl+url)
