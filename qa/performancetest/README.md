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


Production example
==================

There are two scripts for use in production:

* prod.sh for running 500 tests for each endpoint

* 1-prod.sh for running 1 test for each endpoint (to see everythoing works etc.)

Botf og these requires a valid ACCESS_TOKEN to be set in the environment.

Use like this:

```
export ACCESS_TOKEN="..."
./1-prod.sh |sh -x
```
This will generate and execute test requests, and analyze the results. The *.result-files will contain the results. 

Example:
```
[no errors]
samples: 500
=== total time [ms] ===
mean: 138       std dev: 57
95%: 162        99%: 334
min: 109        max: 1014
=== webservice time [ms] ===
mean: 117       std dev: 57
95%: 141        99%: 311
min: 91         max: 994
=== overhead time [ms] ===
mean: 21        std dev: 4
95%: 24         99%: 42
min: 16         max: 77
```

