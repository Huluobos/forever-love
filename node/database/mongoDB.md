> 部署位置：119.3.216.3 端口 27017 
## 乌班图系统中 mongoDB版本极低，所以使用的都不太一样。

```

sudo service mongodb start #mongo启动服务
pkill mongod    #关闭mongo服务

mongod -config /路径/mongodb.conf  #配置文件启动mongo服务
netstat -tunlp #查看网络端口情况，看端口27017是否绑定在任意ip地址上

mongo  #启动数据库 shell
mongod -config /etc/mongodb.conf  # 加载config配置

```

 数据库的权限分admin的权限和其他自定义库的权限， 

 当前库名为：zby, 用户名：zby ,密码：zby
 
```
# 添加用户时使用的命令为： (角色分别是dbAdmin\userAdmin)
db.createUser({user:"zby",pwd:"zby",roles:[{role:"dbAdmin",db:"zby"}]});
db.createUser({user:'zby',pwd:'zby', roles:[{role:'userAdmin', db:'zby'}]})
```

# Linux 中 mongo 数据库查询命令
```
show dbs # 查看集合

use dbname # 新建、切换集合

show users # 查看用户列表

show tables # 查看表

db.getCollection("user"); # 新增名为“user”的表

db.User.save({name:'zhangsan',age:21,sex:true}) # “user”表中新增数据

db.User.find() # 查询“user”表中全部的数据

db.jfs.drop() # 删除集合

db.dropDatabase() # 删除库，use*** 后使用

db. 集合名 .remove({ 条件 })  # 删除数据

```