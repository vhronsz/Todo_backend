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
  if(req.body.username.length < 1 || req.body.password.length < 1)
  {
    res.json({
      status:false,
      message:"Username or Password cannot be empty"
    });
  }

  let userData = {
    name : encodeURIComponent(req.body.username.trim()),
    password:encodeURIComponent(req.body.password.trim())
  };
  
  db.query(`Select password from users where name like "${userData.name}"`,function(err,rows,fields){
    if(err) throw err;
    if(rows.length === 0){
      console.log("MASUK");
      res.json({
        status:false,
        message:"User not exist"
      });
    }
    else if(rows[0].password === userData.password){
      let user = rows[0];
      res.json({
        status:true,
        user : user
      });
    }
    else {
      res.json({
        status:false,
        message : "Your credential is wrong"
      });  
    }

  })
});

module.exports = router;