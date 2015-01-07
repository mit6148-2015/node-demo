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

/* GET /photos/123 */
router.get('/photos/:id', function(req, res) {
  var photoId = req.param('id');  // photoId = 500
  console.log(photoId);
  // fakedb[photoId] = ? undefined
  res.render('photo', { url: fakedb[photoId] });
});

/* a page to add a new photo */
/* GET /photos/new */
router.get('/upload', function(req, res) {
  res.render('new-photo', {});
});

/* POST /photos */
router.post('/photos', function(req, res) {
  // 1. read the submitted url
  var submittedUrl = req.body['submitted-url'];
  // 2. store it.
  fakedb[counter] = submittedUrl;
  res.redirect('/photos/' + (counter++));
});

module.exports = router;
