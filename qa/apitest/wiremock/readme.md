Usage
=====

This is a simple prototype for wiremocking the services used by the
SP.

To record services, first generate a setup file from the config:

```
./geturl.pl < ../.././node_modules/@dbcdk/dbc-config/configs/mobilsoeg.config.js|./gen.py > setup.sh
```

Start the wiremock servers with this:
```
bash setup.sh
```

And setup the environment before starting the node server:
```
grep '^export' SOMEPATH/setup.sh|bash
[start server]
```

When first used, the wiremock servers will record calls. Next time the
same calls will be replayed from the files stored under mappings.

TODO
====

* The perl must be replaced by python.

* Not all servers seems to be injectable (openuserstatus and
openholdingstatus).


