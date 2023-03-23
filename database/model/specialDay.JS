// 特殊的日子
var mongoose = require('mongoose');
var timeTrans = require("../../uitl/time")
var specialDay = new mongoose.Schema({
    uId:{
        type:String
    },
    num:{
        type:Number,
        default:0
    },
    name:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
},{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("specialDay",specialDay)