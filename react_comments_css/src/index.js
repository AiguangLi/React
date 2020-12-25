import React from 'react'
import ReactDOM from 'react-dom'

import CommentList from '@/components/CommentList'


// 使用ReactDOM将元素渲染到页面上，需要使用document.getElementById()获取容器节点
ReactDOM.render(<CommentList></CommentList>, document.getElementById('app'))
