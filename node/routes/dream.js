var express = require('express');
var router = express.Router();
var {CusBASE64,ReBASE64} = require("../utils/base64.js"); //加密解密

var dreams = require("../database/model/dreams")
router.post("/",(req,res)=>{
  let {num,name,uId} = req.body
  console.log('num,name,uId: ', num,name,uId);
  dreams.create({num,name,uId},(err,data)=>{
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
        msg: "入库成功",
        ret: true
    })
  })
})

router.post("/add",(req,res)=>{
  let {num,name,uId} = req.body
  console.log('num,name,uId: ', num,name,uId);
  dreams.create({num,name,uId},(err,data)=>{
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
        msg: "入库成功",
        ret: true
    })
  })
})

module.exports = router;
