const express = require('express');
const app = express();
const logger = require('morgan');
const fs = require('fs');
const helmet = require('helmet');
const cors = require('cors');


const loginRoutes = require('./routes/login.routes');

const corsOptions = {
  origin: 'http://http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Si tu aplicación React envía credenciales (cookies, por ejemplo)
};


//Middleware
 app.use(express.json());
 app.use(helmet());
 app.use(cors(corsOptions));
 app.use(express.urlencoded({extended:false}));
 app.use(logger('combined', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
 

 app.get("/", (req, res) => res.json({"test_servifacil": "1.0.0"}));
 app.use("/api/v1/", loginRoutes);
 


 app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Something broke!');
  });

 module.exports = app ;