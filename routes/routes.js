var express = require('express');
var router = express.Router();

// Import our models file to the router
var models = require('../models/models');

// Connect to the database over Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos-demo');

/* GET / -- homepage */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET /photos/123 */
router.get('/photos/:id', function(req, res) {
  var photoId = req.param('id');
  models.Photo.findOne({_id: photoId}, function(err, result) {
    console.log(result);
    res.render('photo', { photo: result });
  });
});

/* a page to add a new photo */
/* GET /photos/new */
router.get('/upload', function(req, res) {
  res.render('new-photo', {});
});

/* POST /photos */
router.post('/photos', function(req, res) {
  var newPhoto = new models.Photo({
    caption: req.body['submitted-url'],
    url: req.body['caption']
  });
  newPhoto.save(function(err, result) {
    console.log(result);
    res.redirect('/photos/' + result._id);
  });
});

module.exports = router;
