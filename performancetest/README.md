Performance test tools
======================

A few quick and dirty tools for performance testing. The idea is this:

* use a generator to build curl requests
* execute these with bash, parallel or ...
* parse the output into statistics

You are expected to tweak at least the generator.

Example using some python to generate curl-lines, parallel to execute
them with 10 threads and the analyzer to get the stats:

```
./generate.py|parallel -j 10|./analyze.py
```

Example of serial execution:
```
./generate.py|bash|./analyze.py
```

The output from curl should return pairs of lines with

* response in json (with timings): ```{..."timings":{"total":1007,"external":1005}}```
* curl output: ```CURL HTTPCODE=200 SECS=1,048```

The analyzer will handle both comma and dot in SECS.

