/**
 * 愿望清单列表 dreams.js
 */
var mongoose = require('mongoose');
var dreams = new mongoose.Schema({
    uId:{
        type:String
    },
    createTime:{
        type:Date,
        default:Date.now()
    },
    detail:{
        type:String,
        default:''
    },
    isEnd:{
        type:Boolean, //是否关闭愿望 （愿望是否达成）
        default:false
    }
},{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("dreams",dreams)