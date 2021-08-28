var express = require('express');
var app = express();
var router = require('./routes/index.js');
const port = process.env.PORT || 3000;
const morgan = require('morgan');

app.use(express.static(__dirname + '/../dist/'));
app.use(morgan('dev'));
app.use('/', router);

app.listen(port, () => {
  console.log('server is running');
});
