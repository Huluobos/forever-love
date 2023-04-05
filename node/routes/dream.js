var express = require('express');
var router = express.Router();
var {CusBASE64,ReBASE64} = require("../utils/base64.js"); //加密解密
var dreams = require("../database/model/dreams")
// uId,createTime,destroyTime,dreamTitle,dreamDetail,isEnd,isLong,longCount,longHistory 
router.get("/",(req,res)=>{
  var {uId,isEnd,isLong,}= req.query  
  
  const data = {}
  uId ? data['uId'] = uId  : false
  isEnd ? data['isEnd'] = isEnd  : false
  isLong ? data['isLong'] = isLong  : false

  dreams.find(data,(err,data)=>{
    if (err) {
      res.json({
          data: err,
          code: 500,
          msg: "false",
          ret: false
      })
    }
    if(data.length && data.length>0){
      data.map((item)=>{ 
        item.dreamTitle = ReBASE64(item.dreamTitle)
        item.dreamDetail = ReBASE64(item.dreamDetail)
        return item
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
  const data = {
    uId:uId,
    dreamTitle:CusBASE64(dreamTitle),
    dreamDetail:CusBASE64(dreamDetail),
    isLong:isLong,
  }
  dreams.create(data,(err,data)=>{
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
