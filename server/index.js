var express = require('express');
var app = express();
var router = require('./routes/index.js');

app.use('/', router);
