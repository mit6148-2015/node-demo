var express = require('express');
var router = express.Router();

var fakedb = {
  1: 'http://6.470.scripts.mit.edu/2015/css/img/logo.svg'
};

var counter = 2;

/* GET / -- homepage */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
