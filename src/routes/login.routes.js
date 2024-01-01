const { Router } = require('express');
const route = Router();
const { login } = require('../controllers/login.controller');


route.get('/login',login);

module.exports = route;