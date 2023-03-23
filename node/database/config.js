var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://zby:zby@119.3.216.3:27017/zby',{ useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection;
console.log("数据库连接.....")
db.once("open",() => {
    console.log("数据库连接成功")
})

