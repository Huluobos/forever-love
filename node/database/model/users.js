/**
 * 用户 登录 新增
 */
var mongoose = require('mongoose');

    var users = new mongoose.Schema({
        userName:{ //昵称
            type:String
        },
        uId:{ //登录账号 登录凭证
            type:String,
        },
        pwd:{ //密码
            type:String,
            default:"123"
        },
        sex:{ //性别
            type:Boolean,
            default:true //  true代表男 ，false 代表 女
        },
        loginTime:{ //登录时间
            type:String,
            default:""
        }
    },{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("users",users)