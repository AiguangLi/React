import React from 'react'

class ClassComponent extends React.Component {
    constructor() {
        super()
        
        this.state = {
            msg: '类组件消息'
        }
    }

    render() {
        this.state.msg = '类组件消息被改变了'    

        return <div>这是类组件
            <ul>{this.props.strings.map(item => <li>类组件{item}</li>)}</ul>
            <h4>{this.state.msg}</h4>
        </div>
    }
}

export default ClassComponent