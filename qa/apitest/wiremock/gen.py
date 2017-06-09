#!/usr/bin/python
# -*- coding: utf-8 -*-


from __future__ import division
import sys

def wiremock_rec_string( wiremockpath, host, port ):
    #url="http:"
    return "java -jar %s --port %s --proxy-all=%s --record-mappings --verbose" % (wiremockpath, port, host)

def wiremock_play_string( wiremockpath, host, port = None):
    #url="http:"
    return "java -jar %s --port %s --verbose" % (wiremockpath, port)


wiremock = "/home/cbo/serviceprovider/trunk/apitest/wiremock/wiremock-1.57-standalone.jar"

envfile = open('env.sh', 'w')
playfile = open('play.sh', 'w')
recordfile = open('record.sh', 'w')
cleanfile = open('clean.sh', 'w')
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
        recordfile.write("mkdir -p %s\n" % (dirname))
        cleanfile.write("rm -rf %s/__files %s/mappings %s/*.out\n" % (dirname,dirname,dirname))
        wrs = wiremock_rec_string(wiremock, host, port)
        recordfile.write("(cd %s && nohup %s > record.out)&\n" % (dirname,wrs))
        wps = wiremock_play_string(wiremock, host, port)
        playfile.write("(cd %s && nohup %s > play.out)&\n" % (dirname,wps))
        # export OPENAGENCY_SERVICE_URL='http://localhost:9901/2.24/?wsdl'
        # TODO: https fix!
        mockurl=host.replace(host, "http://localhost:"+port)
        envfile.write("export %s='%s'\n" % (env,mockurl+url))
