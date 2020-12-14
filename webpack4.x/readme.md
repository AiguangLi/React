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

此时在package.json会增加devDependencies的一个依赖，即`webpack-dev-server`，需要在package.json中的scripts增加dev属性，指向webpack-dev-server(见最终的package.json)。
在dev属性对应的其实是打包命令，可以指定一些参数，如`--open {浏览器名称}`可以完成打包后使用指定的浏览器打开页面；`--port {端口号}`可以修改默认的端口号(8080)；`--progress`显示打包进度。
具体可参考[webpack官网](https://webpack.js.org/configuration/dev-server/)。

之后就可以使用`npm run dev`运行项目并在更改后实时打包(当前验证5.x版本不支持webpack-dev-server)。
监听模式下会在内存中生成一个main.js文件(需要修改index.html的js执行目录为/main.js)，从而减少了从磁盘访问造成调试时间加长。

## 安装html-webpack-plugin将html文件缓存在内存中

main.js通过webpack-dev-server已经生成在内存中，提高了访问效率，但访问页面还需要指定html的路径，如下所示：
`http://localhost:8080/src/index.html`
这同样会导致访问效率变慢且不便调试。因此需要使用`html-webpack-plugin`插件将html文件进行打包。
使用如下命令：

```shell
cnpm i html-webpack-plugin@4.1.0 -D
```

即可安装`html-webpack-plugin`插件，本项目的版本为4.1.0（注意不同版本的webpack对html-webpack-plugin的版本要求不同）。安装完成后，需要在`webpack.config.js`中增加对应的配置项。
此时，index.html中不再需要引用main.js，`html-webpack-plugin`会自动在body中插入main.js文件。

## 问题

* 5.x版本的webpack-dev-server不兼容的问题，将版本降为4.x版本，这里以4.43.0为例，命令如下：

```shell
npm i webpack@4.43.0 -D
npm i webpack@4.43.0 -g (全局安装用这个命令)
```

* 运行npm run dev提示错误：`Error: Cannot find module 'webpack-cli/bin/config-yargs'`
原因是webpack-cli与web-dev-server版本不兼容导致，将webpack-cli版本降级即可（原先是4.2.0，降为3.1.2）。

```shell
npm i webpack-cli@3.1.2 -D
npm i webpack-cli@3.1.2 -g (全局安装用这个命令)
```

