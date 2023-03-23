/**
 * 愿望清单列表 dreams.js
 */
var mongoose = require('mongoose');
var dreams = new mongoose.Schema({
    uId:{
        type:String
    },
    loginTime:{
        type:Date,
        default:Date.now()
    },
},{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("dreams",dreams)