var express = require('express');
var db = require("../tools/db");
var router = express.Router();

router.post("/",function(req,res,next){
    let user = req.body.user;
    db.query
    (
        `SELECT action.name as action_name,action.id as action_id,sections.id as section_id,sections.name as section_name, action.status as status FROM action join sections on action.section_id = sections.id join users on sections.user_id = users.id 
        where users.id = ${user.id} order by sections.id desc`,
        function(err,rows,fields){
            if(err)throw err;
            let data = [];
            let size = rows[0].section_id;

            for(let i = 1;i<=size;i++){
                data.push(rows.filter((row)=>{
                    return row.section_id === i;
                }));
            }

            res.json({
                data : data
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
    console.log(req.body);
    let item_id = encodeURIComponent(req.body.id);
    db.query(
        `update action set status = "done" where id like '${item_id}'`,function(err,rows,fields){
                if(err){
                    throw(err);
                }
        }
    );
    res.json({
      status:true,
      message:"Task Complete"
    });  
});

module.exports = router;
  