var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    data : "Hello World"
  });
});

router.post('/login', function(req, res, next) {
  // console.log(req.body.username);
  res.json({
    status:true,
    message:"Your credential is invalid"
  });  
});

module.exports = router;