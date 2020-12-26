import React from 'react'

import itemCss from '@/css/CommentListItem.css'

/**
 * 评论列表条目组件
 * props: {id, nickname, content}
 */
export default function CommentItem(props) {
    console.log(itemCss)

    return <div className={itemCss.box}>
        <h1 className={itemCss.nickname}>{props.nickname}</h1>
        <p className={itemCss.content}> {props.content}</p>
    </div>
}
