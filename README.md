# Nodeclub - React


## 介绍

Nodeclub - React是fork自 [Nodeclub(https://github.com/cnodejs/nodeclub/)](https://github.com/cnodejs/nodeclub/) 的项目，  
  
由于原项目的前端使用的是ejs，没有用到三大框架。  
  
所以本仓库特意用react重构前端界面，考虑到社区需要服务端渲染和管理全局数据，所以使用了nextjs和redux。  
  
需要纯净的nextjs框架的同学请戳[这里](https://github.com/zhoushoujian/nextjs)  
  
原项目采用的技术栈：```Nodejs```, ```Express```, ```Mongodb```, ```Redis```, ```ejs```和```less```，典型的MVC架构  

本仓库采用的技术栈：```Nodejs```, ```Express```, ```Mongodb```, ```Redis```, ```React```, ```Redux```, ```nextjs```, ```webpack```和```less```  
  
由于时间和精力有限，本仓库只React化了社区主页和所有导航导航页面，可以使用github快捷登录，但不能注册和使用邮箱登录。  
  
本仓库仅用作技术交流，有兴趣的同学，欢迎加入一起happy哈(我的邮箱：qianchengyimeng@qq.com)。
  
已经react化的前端文件主要存在于```views\components```, ```views\layouts```, ```views\pages```和```views\store```
  
引用原仓库的一句话：  
````Nodeclub是使用 **Node.js** 和 **MongoDB** 开发的社区系统，界面优雅，功能丰富，小巧迅速，已在Node.js 中文技术社区 [CNode(http://cnodejs.org)](http://cnodejs.org) 得到应用，但你完全可以用它搭建自己的社区。````  

## 安装部署

```Windows系统的兼容性已在大部分功能上测试通过```

```shell
1. 安装 `Node.js[必须]` `MongoDB[必须]` `Redis[必须]`
2. 启动 MongoDB 和 Redis
3. `$ npm install` 安装 Nodeclub - React 的依赖包
4. `$ make test` 确保各项服务都正常
5. `$ npm run start`
6. visit `http://localhost:3334`
7. done!
```

## 一点小提示

1. 使用windows的同学用不了make命令

2. 我平时使用的mongodb服务器启动命令： mongod --dbpath db --port=27017

3. 我平时使用的redis服务器启动命令： redis-server

4. 上面两条只是本地调试使用的命令，勿用于生产环境

5. 装不了包的可以尝试用这里的：https://file.zhoushoujian.com/download_file?filePath=/files/cnode/node_modules.7z

6. 本项目启动成功后会发现部分静态资源请求失败,原因是cnode.org社区貌似已不再维护

## License

MIT
