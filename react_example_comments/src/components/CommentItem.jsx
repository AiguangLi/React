import React from 'react'

/**
 * 评论列表条目组件
 * props: {id, nickname, content}
 */
export default function CommentItem(props) {

    const styles = {
        box: {border: '1px dashed #ccc', boxShadow: '0 0 10px #cccc', margin: '10px', padding: '10px'},
        nickname: {fontSize: '20px', fontWeight: 10, lineHeight: 0.5},
        content: {fontSize: '14px', fontWeight: 8, lineHeight: 0.5}
    }

    return <div style={styles.box}>
        <h1 style={styles.nickname}>{props.nickname}</h1>
        <p style={styles.content}> {props.content}</p>
    </div>
}
