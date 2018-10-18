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
      html:    "New Contact Request from Website\nName: " + req.body.fname + "\nEmail: " + req.body.email + "\nSubject: " + req.body.subj + "\nMessage: " + req.body.mssg, 
      from:    "contact@team5877.com",
      to:      "contact@team5877.com",
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
