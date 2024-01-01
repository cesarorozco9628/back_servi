const dotenv = require('dotenv').config();

module.exports = {
  "development": {
    "username": "cesar",
    "password": "2eeLubMxfANTSRJuLBKO5pbaWUzkTXys",
    "database": "servifacil",
    "host": "dpg-cm88i68cmk4c739100gg-a",
    "port":"5432",
    "dialect": "postgres",
    "logging": false, 
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": { 
    "url":"postgres://cesar:2eeLubMxfANTSRJuLBKO5pbaWUzkTXys@dpg-cm88i68cmk4c739100gg-a.oregon-postgres.render.com/servifacil",
    "dialect": 'postgres',
    "dialectOptions": { 
      "ssl": { 
        "require": true,
        "rejectUnauthorized": false,
      }
    }
  }
}