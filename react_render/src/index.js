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

const news = {
    id: 1,
    title: '这是标题',
    desc: '这是内容描述'
}

// 使用ReactDOM将元素渲染到页面上，需要使用document.getElementById()获取容器节点
ReactDOM.render(<Hello {...news}></Hello>, document.getElementById('app'))
