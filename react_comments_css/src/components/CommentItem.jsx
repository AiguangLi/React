import React from 'react'

import itemCss from '@/css/CommentListItem.css'

/**
 * 评论列表条目组件
 * props: {id, nickname, content}
 */
export default function CommentItem(props) {
    return <div className='box'>
        <h1 className='nickname'>{props.nickname}</h1>
        <p className='content'> {props.content}</p>
    </div>
}
