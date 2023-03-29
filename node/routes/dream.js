var express = require('express');
var router = express.Router();
var {CusBASE64,ReBASE64} = require("../utils/base64.js"); //加密解密
var dreams = require("../database/model/dreams")
// uId,createTime,destroyTime,dreamTitle,dreamDetail,isEnd,isLong,longCount,longHistory 
router.get("/",(req,res)=>{
  var {uId,isEnd,isLong,}= req.query  
  dreams.find({uId,isEnd,isLong},(err,data)=>{
    if (err) {
      res.json({
          data: err,
          code: 500,
          msg: "false",
          ret: false
      })
    }
    res.json({
        data: data,
        code: 200,
        msg: "success",
        ret: true
    })
  }).sort({'createTime':-1})
  // .skip(page * 1).limit(limit)
})

router.post("/add",(req,res)=>{
  let { uId,dreamTitle,dreamDetail,isLong } = req.body
  dreams.create({uId,dreamTitle,dreamDetail,isLong},(err,data)=>{
    if (err) {
      res.json({
          data: err,
          code: 10001,
          msg: "新增愿望失败",
          ret: false
      })
    }
    res.json({
        data: data,
        code: 10000,
        msg: "新增愿望成功",
        ret: true
    })
  })
})

module.exports = router;
