var express = require('express');
var router = express.Router();
var now = new Date();
var year = now.getFullYear();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('competition', {year: now.getFullYear()});
});

module.exports = router;
