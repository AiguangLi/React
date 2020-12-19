import React from 'react'
import ReactDOM from 'react-dom'

import RenderStrings from '@/components/RenderStrings'

function Hello(props) {
    const div2 =  <div id={props.id} title={props.title}>
        {props.title}
        <h2>{props.desc}</h2>
        <RenderStrings strings={['1', '2', '3']}></RenderStrings>
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
