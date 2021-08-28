// routes
// import all controllers
// export all routes to our main server index.js file
const router = require('express').Router();

router.get('/', function (req, res) {
  res.send('hello world');
});

router.get('/test', function (req, res) {
  res.send('ITS ALL WORKING!');
});

module.exports = router;
