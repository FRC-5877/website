var express = require('express');
var router = express.Router();
const sendmail = require('sendmail')();

router.get('/', (req, res, next) => {
   res.status(200);
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  if(req.body && req.body.fname && req.body.email && req.body.subj) {
    sendmail({
      html:    "New Contact Request from Website<br>Name: " + req.body.fname + "<br>Email: " + req.body.email + "<br>Subject: " + req.body.subj + "<br>Message: " + req.body.mssg, 
      from:    "Website <contact@team5877.com>",
      to:      "doug@team5877.com, steve@team5877.com",
      subject: "Contact from Website"
    }, function(err, reply) {
      if(!err)
        res.send({code: 1});
      else
        console.log(`ERROR! ${err}`);
    });
  } else {
    res.send({code: 0});
  }
});

module.exports = router;
