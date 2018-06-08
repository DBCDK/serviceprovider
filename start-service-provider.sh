#!/usr/bin/env bash
PORT=3000 node src/smaug/minismaug.js -f context-sample.json & sleep 2
SMAUG=http://localhost:3000 MOCK_FILE=apitest/mockdata.json SWAGGER_HTTP=true TEST_DEV=true node src/main.js

wait
