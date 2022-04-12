const express = require('express');
const app = express();
const countriesRoute = require('./countries');
const userRoute = require('./users');
const pageRoute = require('./pages')

/* GET home page. */
app.use('/', pageRoute);

// Get countrys route
app.use('/countries', countriesRoute);

// Get countrys route
app.use('/users', userRoute);

module.exports = app;
