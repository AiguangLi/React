import React from 'react'
import CommentItem from '@/components/CommentItem'

import listCss from '@/css/CommentList.scss'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

export default class CommentList extends React.Component {

    constructor() {
        super() 

        this.state = {
            commentList :[
                {id: 1, nickname: '张三', content: '张三的评论'},
                {id: 2, nickname: '李四', content: '李四的评论'},
                {id: 3, nickname: '王五', content: '王五的评论'},
                {id: 4, nickname: '赵六', content: '赵六的评论'},
                {id: 5, nickname: '田七', content: '田七的评论'},
            ]
        }
    }

    render() {
        return <div>
            <h1 className='title'>评论列表</h1>
            <button className='btn btn-primary'>按钮</button>
            {this.state.commentList.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}
        </div>
    }
}