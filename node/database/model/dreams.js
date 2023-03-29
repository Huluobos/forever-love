/**
 * 愿望清单列表 dreams.js
 */

var mongoose = require('mongoose');
var {timeAlls,timeTrans} = require('../../utils/time');
var dreams = new mongoose.Schema({
    uId:{ type:String},//创建人
    createTime:{ type:Number,default: new Date().getTime()},//创建时间
    destroyTime:{ type:Number, default:'0'},//完成时间
    dreamTitle:{ type:String,default:''},//愿望标题
    dreamDetail:{ type:String,default:''},//愿望内容
    isEnd:{type:Boolean, default:false },//是否关闭愿望 （愿望是否达成）
    isLong:{ type:Boolean,default:false},//是否为长期愿望 （长期愿望可以装进抽奖机）
    longCount:{  type:Number,  default:0},//长期愿望的完成次数
    longHistory:{ type:String, default:''},//长期愿望的完成历史记录 (json, 字段为 time(完成时间),uid(完成人))
},{versionKey:false});    //设置取消上传数据库带有的版本号
module.exports = mongoose.model("dreams",dreams)