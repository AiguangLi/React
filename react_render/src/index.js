import React from 'react'
import ReactDOM from 'react-dom'

// 创建虚拟DOM组件
// 参数1：创建元素的类型，即html标签名称
// 参数2：元素的属性，对象，可以为null
// 参数3，...：子组件
// <h1 id="h1" title="这是h1">这是一个H1</h1>
const h1 = React.createElement('h1', {id: 'h1', title: '这是h1'}, '这是一个H1')

// 元素嵌套，将h1当作div1的子节点
const div1 = React.createElement('div', {id: 'div1', title: '这是div1'}, '这是一个DIV', h1)

const div2 = <div id="div2" title="这是jsx的div2">
    这是jsx的div2
    <h2>这是jsx嵌套的h2</h2>
</div>

// 使用ReactDOM将元素渲染到页面上，需要使用document.getElementById()获取容器节点
ReactDOM.render(div2, document.getElementById('app'))
