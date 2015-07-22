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


## Testing

### Unit tests
Unit tests are placed with the modules and components in a __tests__ folder
to run the tests: `npm run test`

### Selenium tests
The selenium tests (found in the /selenium directory) are integration tests, and mainly run in an phantomjs instance.
to run tests: `npm run selenium`
