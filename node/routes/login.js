var express = require('express');
var router = express.Router();
var user = require("../database/model/users")
//登录
// userName uId pwd sex loginTime
router.post("/",(req,res)=>{
  let {uId,pwd} = req.body
  console.log('uId,pwd: ', uId,pwd);
  user.findOne({uId},(err,data)=>{
    if(err){
      res.json({
        data:err,
        code:500,
        msg:"false",
        ret:false
      })
      return
    }else if(!data){
      res.json({
        data:"",
        code:400,
        msg:"该用户不存在，请先添加",
        ret:false
      })
      return
    }else{
      if(data.pwd != pwd){
        res.json({
          data:"",
          code:400,
          msg:"密码错误",
          ret:false
        })
        return
      }else{
        res.json({
          data:data,
          code:200,
          msg:"登录成功",
          ret:true
        })
       return
      }
    }
  })
})

router.post("/add",(req,res)=>{
    let {uId,pwd,userName,sex} = req.body
    user.create({uId,pwd,userName,sex},(err,data)=>{
        if (err) {
          res.json({
              data: err,
              code: 10001,
              msg: "新增用户失败",
              ret: false
          })
        }
        res.json({
            data: data,
            code: 10000,
            msg: "新增用户成功",
            ret: true
        })
      })
  })


module.exports = router;
