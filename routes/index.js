var express = require('express');
var router = express.Router();
var db = require('../tools/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    data : "Hello World"
  });
});

router.post('/login', function(req, res, next) {
  // console.log(req.body.username);
  let userData = {
    name : encodeURIComponent(req.body.username.trim()),
    password:encodeURIComponent(req.body.password.trim())
  };

  db.query(`Select password from users where name like "${userData.name}"`,function(err,rows,fields){
    if(err) throw err;
    if(rows.length < 1){
      res.json({
        status:true,
        message:"User not exist"
      });
    }
    if(rows[0].password === userData.password){
      res.json({
        status:true,
        message:"Redirecting"
      });
    }
    else {
      res.json({
        status:false,
        message : "Your credential is wrong"
      });  
    }
  });
});

module.exports = router;