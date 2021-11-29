var express = require('express');
var router = express.Router();

router.post("/add",function(req,res,next){

    res.json({
        item:{
            "id" : 3,
            "action" : req.body.action
        }
    });
});

router.post("/check",function(req,res,next){
    res.json({
      status:true,
      message:"Task Complete"
    });  
});

module.exports = router;
  