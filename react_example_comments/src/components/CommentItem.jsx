import React from 'react'

/**
 * 评论列表条目组件
 * props: {id, nickname, content}
 */
export default function CommentItem(props) {
    return <div>
        <h1>{props.nickname}</h1>
        <p>{props.content}</p>
    </div>
}
