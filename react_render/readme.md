
# 初识react

## 首先安装react组件，包括react和react-dom，使用如下命令

```shell
cnpm i react react-dom -S
```

其中`-S (--save)`参数为保存，生产是也会存在，`-D (--dev)`为用于开发环境（一般用于开发工具，如webpack）。
react中的React用于创建组件、管理虚拟DOM和组件的生命周期，ReactDOM用于将组件和虚拟DOM渲染到页面上。

## 在index.js中引入react组件React和ReactDOM

```js
import React from 'react'
import ReactDOM from 'react-dom'
```

其中组件名必须为React和ReactDOM

## 元素嵌套

如果需要使用元素嵌套，可以将某个元素当做另一个元素的子节点，例如把h1当做div1的子节点（注意原则是先构建虚拟DOM树，再使用reader渲染）：

```js
const h1 = React.createElement('h1', {id: 'h1', title: '这是h1'}, '这是一个H1')

// 元素嵌套，将h1当作div1的子节点
const div1 = React.createElement('div', {id: 'div1', title: '这是div1'}, '这是一个DIV', h1)
```

## 使用JSX简化虚拟DOM创建的过程

JSX语法支持像写html一样写虚拟DOM元素，如下所示：

```jsx
const div2 = <div id="div2" title="这是jsx的div2">
    这是jsx的div2
    <h2>这是jsx嵌套的h2</h2>
</div>
```

此时如果直接使用`npm run dev`会发现控制台报错，这是因为webpack并不支持这种JSX语法。需要使用babel来将JSX转换为react的虚拟DOM元素创建代码。

## 安装babel和配置babel

执行如下命令安装babel插件，babel-loader一定要加@7指定版本号，否则下载的是babel8，babel8的配置不同，会提示找不到babel：

```shell
cnpm i babel-core babel-loader@7 babel-plugin-transform-runtime -D
cnpm i babel-preset-env babel-preset-stage-0 -D
```

执行如下命令增加react的JSX语法转换器:

```shell
cnpm i babel-preset-react -D
```

项目目录下增加.babelrc文件，为json格式文件，需要设置`presets`和`plugins`：

```json
{
    "presets": ["env", "stage-0", "react"],
    "plugins": ["transform-runtime"]
}
```

`webpack.config.js`文件增加jsx的规则。

```js
module: { //第三方模块的配置规则
        rules: [ //第三方匹配规则
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}  //exclude，排除node_modules目录，注意node_modules不要加引号
        ]
    }
```

## 内置函数式组件写法

使用`function`生命函数式组件，要求该组件返回一个虚拟DOM元素或者返回`null`（空元素）。之后使用如下方式渲染函数式组件：

```js
ReactDOM.render(<Hello {...news}></Hello>, document.getElementById('app'))
```

函数式组件传值可以使用**属性名=属性值**方式，但推荐使用ES6的...语法展开对象传值:

```js
ReactDOM.render(<Hello id={news.id} title={news.title} desc={news.desc}></Hello>, document.getElementById('app'))
```

## 函数式组件支持嵌套

```js
function RenderStrings() {
    const strings = ['list1', 'list2', 'list3']
    const lists = strings.map(item => <li>{item}</li>)

    return lists
}

function Hello(props) {
    console.log(props);

    const div2 =  <div id={props.id} title={props.title}>
        {props.title}
        <h2>{props.desc}</h2>
        <RenderStrings></RenderStrings>
    </div>

    return div2
}
```

## 问题

* render方法的第二个参数要求是一个dom元素

```js
ReactDOM.render(h1, 'app')
```

这种写法会导致浏览器控制台报错：`Target container is not a DOM element.`
这是因为`'app'`是一个字符串，而ReactDOM.reader方法的第二个参数需要的是DOM元素，因此需要使用如下方式：

```js
ReactDOM.render(h1, document.getElementById('app'))
```

* 出现`Error: Cannot find module 'core-js/library/fn/get-iterator`错误

删除node_modules，使用cnpm install重新安装即可

* babel8的变化

1. 各个包的名字变了，都以@符号开头。这个变化带来2个影响。其一，以前每个包在node_modules目录下都是一个独立的文件夹；现在则在node-modules目录下有个叫“@babel”的目录，这里要安装的所有babel包，都在这个@babel目录下保存。其二，在配置的时候，写法完全变了。
2. 有一些包被彻底废弃。比如在babel7.X版本中用到的babel-preset-stage-0
3. 有一些新的包必须引入进来才可以。

需要注意的是，这些@开头的包，在实用npm安装时，包名必须用引号引住，否则npm会把它当做不可识别的字符。例如:

```shell
　　npm i babel-loader '@babel/core' -D
```

babel-loader没有@符号，所以不需要引号包住；@babel/core则需要用引号包住。其他以此类推
这里小版本号就不要计较了，只要大版本号能对上就都一样。

**各个包的作用如下**
babel-loader：加载器
@babel/core：babel核心包,babel-loader的核心依赖
@babel/preset-env：ES语法分析包
@babel/runtime和@babel/plugin-transform-runtime：babel 编译时只转换语法，几乎可以编译所有时新的 JavaScript 语法，但并不会转化BOM（浏览器）里面不兼容的API。比如 Promise,Set,Symbol,Array.from,async 等等的一些API。这2个包就是来搞定这些api的。
@babel/plugin-proposal-class-properties：用来解析类的属性的。
**配置webpack.config.js**:由于“babel-lodaer”包名字没变，api写法也没变，还是那么写:　

```js
　　{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},//处理高级ES语法的babel_lodaer
```

**添加.babelrc配置文件**，并在该文件中写下如下配置信息

```json
　　  {
    　　　"presets": ["@babel/preset-env"],

   　　　"plugins": ["@babel/plugin-transform-runtime", "@babel/plugin-proposal-class-properties"]
　　  }
```
