var express = require('express');
var db = require('../tools/db');
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
    db.query("Select * from users",function(err,rows,fields){
        if(err) throw err;
        console.log(rows);
    });
    
    res.json({
      status:true,
      message:"Task Complete"
    });  
});

module.exports = router;
  