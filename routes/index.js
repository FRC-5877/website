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

router.post('/', function(req, res, next) {
  console.log(req.body);
  if(req.body && req.body.fname && req.body.email && req.body.subj) {
    server.send({
      text:    "New Contact Request from Website\nName: " + req.body.fname + "\nEmail: " + req.body.email + "\nSubject: " + req.body.subj + "\nMessage: " + req.body.mssg, 
      from:    "Do Not Reply <donotreply@team5877.com>", 
      to:      "Contact <contact@team5877.com>",
      subject: "Contact from Website"
    }, function(err, message) {
      console.log(err || message);
      res.send(1);
    });
  } else {
    res.send(0);
  }
});

module.exports = router;
