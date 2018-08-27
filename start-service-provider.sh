#!/usr/bin/env bash
PORT=3333 node src/smaug/minismaug.js -f context-sample.json & sleep 2
SMAUG=http://localhost:3333 MOCK_FILE=apitest/mockdata.json SWAGGER_HTTP=true TEST_DEV=true node src/main.js & sleep 10

