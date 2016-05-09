Performance test tools
======================

A few quick and dirty tools for performance testing. The idea is this:

* use a generator to build curl requests
* execute these with bash, parallel or ...
* parse the output into statistics

create-curl-lines.py creates curl requests based on environment variables.

The output from execution of curl requests should be pairs of lines with

* response in json (with timings): ```{..."timings":{"total":1007,"external":1005}}```
* curl output: ```CURL HTTPCODE=200 SECS=1,048```

The analyzer--analyze.py--will handle both comma and dot in SECS.

all-tests.sh is an example of a wrapper script that use environment
variables and the script make-test.sh to generate the necessary files
and execution lines to perform a test:

```
./all-tests.sh
```

Will create some files and print lines like:
```
parallel -j8 < search-1000-8.curl.sh > search-1000-8.out && ./analyze.py < search-1000-8.out> search-1000-8.result
```
Corresponding to a test.

The environment variables used are:

* TIMES how many requests should be generated
* URL without endpoint
* ACCESS_TOKEN valid token for Smaug
* JOBS how many jobs to do in parallel

* ENDPOINT name of endpoint
* REQUEST json string
* NAME string to add to filenames (optional)

