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

/* a page to view an individual photo */
/* GET /photos/:id */
router.get('/photos/:id', function(req, res) {
  var photoid = req.param('id');
  res.render('photo', { url: fakedb[photoid]});
});

/* a page to add a new photo */
/* GET /photos/new */
router.get('/upload', function(req, res) {
  res.render('new-photo', {});
});

/* POST /photos */
router.post('/photos', function(req, res) {
  var photourl = req.body.url;
  fakedb[counter] = photourl;
  res.redirect('/photos/' + counter++);
});

module.exports = router;
