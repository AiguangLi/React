import React from 'react'  //jsx中必须引入react

export default function RenderStrings(props) {
    console.log(props)

    const lists = props.strings.map(item => <li>{item}</li>)

    return lists
}
