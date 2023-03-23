/**
 * 用户列表
 */
var mongoose = require('mongoose');
    var users = new mongoose.Schema({
        userName:{
            type:String
        },
        uId:{
            type:String,
        },
        pwd:{
            type:String,
            default:"123"
        },
        sex:{
            type:Boolean,
            default:true //  true代表男 ，false 代表 女
        },
        loginTime:{
            type:String,
            default:""
        }
    },{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("users",users)