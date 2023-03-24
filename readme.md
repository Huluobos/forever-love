## 防火墙状态

- Ubuntu 在 UFW 防火墙中打开端口  
    ```
    sudo ufw status  //查看防火墙状态：inactive是关闭，active是开启
    sudo ufw enable //开启防火墙
    sudo ufw disable //关闭防火墙
    ufw allow 8001  //开启某个端口
    ```
## 部署注意
- 位置在119.3.216.3 /home/forever 下

- 部署流程：

    > 1、 本地打包： 在app项目 文件夹下执行 npm run build:h5
    > 2、 生成打包文件夹dist后, 将 打包好的 dist\build\h5 文件夹下的 index.html 放到  node 项目中app文件夹下 (不更改任何代码)
    > 3、 将 打包好的 dist\build\h5 文件夹下的 assets、static等文件 放到 node 项目中 public 文件夹下(不更改任何代码)
    > 4、 git 提交至 github
    > 5、 服务器在/home/forever 下拉取代码，
    > 6、 在/home/forever/node 中执行 npm install (可选操作)
    > 5、 使用pm2 部署 （pm2 start bin/www --watch --name forever）

