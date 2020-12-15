
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

## 问题

```js
ReactDOM.render(h1, 'app')
```

这种写法会导致浏览器控制台报错：`Target container is not a DOM element.`
这是因为`'app'`是一个字符串，而ReactDOM.reader方法的第二个参数需要的是DOM元素，因此需要使用如下方式：

```js
ReactDOM.render(h1, document.getElementById('app'))
```
