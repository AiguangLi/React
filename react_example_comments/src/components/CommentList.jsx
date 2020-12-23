import React from 'react'
import CommentItem from '@/components/CommentItem'

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
        const styles = {
            title: {color: 'red', fontSize: '20px', fontWeight: 20, textAlign: 'center'}
        }
        return <div>
            <h1 style={styles.title}>评论列表</h1>
            {this.state.commentList.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}
        </div>
    }
}