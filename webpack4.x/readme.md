# Webpack用于普通Web项目打包

WebPack版本： 4.43.0

## 第一步，使用npm初始化项目

进入工程目录，运行如下命令：

```shell
npm init -y
```

此时会在项目目录生成一个package.json文件，包括项目基本信息、指定入口文件（webpack 4.x以后约定为index.js）

## 建立src、dist目录

在工程目录下创建src和dist目录，其中src用于存放源码，dist用于存放编译后文件。

## 编写页面文件和js文件

在src目录下新建一个index.html文件和index.js文件。其中index.js为webpack 4.x默认的入口文件。

## 使用npm（或cnpm）安装webpack和webpack-cli，其中webpack的命令如下：

```shell
npm i webpack -D
npm i webpack -g (全局安装用这个命令)
```

安装webpack-cli，命令如下：

```shell
npm i webpack-cli -D
npm i webpack-cli -g (全局安装用这个命令)
```

此时会在package.json文件增加devDependencies属性，指定webpack的版本。

```json
"devDependencies": {
    "webpack": "^5.10.1",
    "webpack-cli": "^4.2.0"
  }
```

## 项目目录下新增webpack.config.js文件，配置打包模式(5.x默认为生产环境)

导出mode属性，其中development为开发模式，production为生产环境

```js
module.exports = {
    mode: 'development'
}
```

## 执行webpack打包命令

```shell
webpack
```

此时会在dist目录下生成main.js文件，即打包后的js文件。如果切换mode会发现打包的开发模式下的js文件还有更多其他信息。

## 开发时自动监听代码变化打包

需要安装webpack-dev-server，命令如下：

```shell
npm i webpack-dev-server -D
npm i webpack-dev-server -g (全局安装用这个命令)
```

此时在package.json会增加devDependencies的一个依赖，即`webpack-dev-server`。
之后就可以使用`npm run dev`运行项目并在更改后实时打包(当前验证5.x版本不支持webpack-dev-server)。
