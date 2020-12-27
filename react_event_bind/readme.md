
# react按钮事件绑定

## 最简单的方式：在组件里使用onClick属性绑定实例方法

注意，在JSX中的属性都是驼峰写法，而html是全部小写的。

```js
    render() {
        return <div>
            <h1 className='title'>评论列表</h1>
            <button className='btn btn-primary' onClick={this.buttonClick}>按钮</button>
            {this.state.commentList.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}
        </div>
    }

    buttonClick() {
        alert('按钮点击了')
    }
```

## 使用箭头函数，这种方式的好处是可以进行参数传递

```js
    render() {
        return <div>
            <h1 className='title'>评论列表</h1>
            <button className='btn btn-primary' onClick={() => { this.buttonClick('hello') }}>按钮</button>
            {this.state.commentList.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}
        </div>
    }

    buttonClick(msg) {
        alert('按钮点击了, msg: ' + msg)
    }
```

## 推荐写法：实例方法使用箭头函数，并赋给实例属性

```js
    render() {
        return <div>
            <h1 className='title'>评论列表</h1>
            <button className='btn btn-primary' onClick={() => {this.buttonClick('Hello React')}}>按钮</button>
            {this.state.commentList.map(item => <CommentItem {...item} key={item.id}></CommentItem>)}
        </div>
    }

    buttonClick = (msg) => {
        console.log(this)  //this指向组件本身
        alert('按钮点击了, msg: ' + msg)
    }
```

## 扩展知识

具名函数和箭头函数的区别在于，具名函数的this指针指向调用者本身，而箭头函数的this指向箭头函数外的上下文。例如

```js
    const button = document.getElementById('btn')
    button.onclick = function() {
        console.log(this) //指向button
        this.style.background = 'red'

        setTimeout(function() {
            console.log(this) //指向调用者Window
        }, 2000)
    }

    button.onmouseup = () => {
        console.log('mouse up!')
        console.log(this)  //因是箭头函数，this指向Window
    }   
```
