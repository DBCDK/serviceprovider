# pallesgavebod

[![GitHub tag](https://img.shields.io/github/tag/DBCDK/pallesgavebod.svg?style=flat-square)](https://github.com/DBCDK/pallesgavebod)
[![David](https://img.shields.io/david/DBCDK/pallesgavebod.svg?style=flat-square)](https://david-dm.org/DBCDK/pallesgavebod#info=dependencies)
[![David](https://img.shields.io/david/dev/DBCDK/pallesgavebod.svg?style=flat-square)](https://david-dm.org/DBCDK/pallesgavebod#info=devDependencies)

Next generation Palles Gavebod

As default the application will load on localhost:8080. Se a running example on [pg.demo.dbc.dk](http://pg.demo.dbc.dk)

## How to install and run the application
```
// Build and install the application
git clone https://github.com/DBCDK/pallesgavebod.git
npm install
npm run build

// create config file
mv config.example.js config.js

// fill out the blanks in the config file. 
// NB! a lot of the services are restricted by DBC

// Start the application
 npm run serve
```

### New Relic
As New Relic is used by DBC A/S this application requires New Relic to be configured.  
If you want to run the application but can't provide a New Relic configuration you can start the application with `NEW_RELIC_NO_CONFIG_FILE=true` which will throw an error but wont crash your application.


## Testing

### Unit tests
Unit tests are placed with the modules and components in a __tests__ folder
to run the tests: `npm run test`

### Selenium tests
The selenium tests (found in the /selenium directory) are integration tests, and mainly run in a chrome instance using ChromeDriver.
to run tests: `npm run selenium`

