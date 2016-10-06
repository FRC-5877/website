var express = require('express');
var router = express.Router();
var email = require('emailjs');
var server = email.server.connect({
  hode: 'localhost'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
