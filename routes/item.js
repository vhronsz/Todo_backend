var express = require('express');
var db = require("../tools/db");
var router = express.Router();

router.get("/",function(req,res,next){
    let user = req.body.user;

    db.query
    (
        `SELECT action.name as action,sections.id,users.name FROM action join sections on action.section_id = sections.id join users on sections.user_id = users.id 
        where users.id = ${user.id}`,
        function(err,rows,fields){
            if(err)throw err;
            console.log(rows);
            res.json({
                rows
            });
        }
    );
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
  