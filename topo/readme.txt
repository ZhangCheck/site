release:发布版 (做了js,css压缩)
src:源码

运行环境：安装nodejs

端口配置：
    server.js第一行: "var PORT=3002;"
    grunt_index_server.bat第二行："start http://localhost:3002/index.html"

启动web服务：
    windows: 运行grunt_index_server.bat
    lunix:   cd到release或Src目录,运行"node server"

查看网页:
    网址:http://localhost:3002/index.html