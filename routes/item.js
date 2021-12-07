var express = require('express');
var db = require("../tools/db");
var router = express.Router();

router.get("/",function(req,res,next){
    let user = req.body.user;

    db.query
    (
        `select * from sections join users on sections.user_id = users.id`+
        `where user.id like ${user.id}`,function(err,rows,fields){

        });
});

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
  