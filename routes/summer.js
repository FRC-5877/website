var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('https://goo.gl/forms/l59yqKPnHbvQelnD2');
});

module.exports = router;
