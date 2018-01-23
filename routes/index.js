var express = require('express');
var router = express.Router();
var email = require('emailjs');
var now = new Date();
var season = new Date(2018, 6);
var year = now.getFullYear();
var server = email.server.connect({
  hode: 'localhost'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  if(now < season)
    res.render('index-' + year, {year: year});
  else
    res.render('index', {year: year});
});

module.exports = router;
