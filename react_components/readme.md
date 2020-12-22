
# react组件

## 函数式组件

函数式组件使用`function`声明，首字母必须大写，调用时使用如下形式即可：

```js
<Component></Component>
```

函数式组件可以通过props进行传值，可以参考调用RenderStrings组件的形式

## 类组件

类组件使用`class`声明，首字母必须大写，且需要使用`extends`关键字继承`React.Component`，并且需要实现render方法返回React的虚拟DOM元素。
类声明完成后，使用`export default {类名}`导出类即可。如下所示：

```jsx
import React from 'react'

class ClassComponent extends React.Component {
    render() {
        return <div>这是类组件</div>
    }
}

export default ClassComponent

```

## 类组件传参

类组件的参数都会在类组件的props中访问，使用this.props.{对象名}即可。

```js
    render() {
        return <div>这是类组件
            <ul>{this.props.strings.map(item => <li>类组件{item}</li>)}</ul>
        </div>
    }
```

## 引入组件时去掉文件后缀名

将组件独立成jsx文件后，需要使用`export default {组件定义}`导出以便可以引入。默认引入的形式为：

```js
import RenderStrings from './components/RenderStrings.jsx'
```

每次都需要添加后缀名，可以在`webpack.config.js`中增加`resolve`对象配置支持哪些后缀不需要添加。

```js
resolve: {
        extensions: ['.js', '.jsx', '.json']  //引入自定义组件时，可以忽略js,jsx或json文件的后缀名
}
```

此时引入js、jsx时可以不再添加后缀名：

```js
import RenderStrings from './components/RenderStrings'
```

## 使用路径别名

当一些路径很长时，需要指定路径可能导致不便，此时可以使用路径别名替代，例如使用@符号替换src目录。使用路径别名的好处是使用绝对路径，这样文件移动时，引用的其他文件不会找不到
在`webpack.config.js`文件的`resolve`节点增加`alias`别名参数即可：

```js
    resolve: {
        extensions: ['.js', '.jsx', '.json'],  //引入自定义组件时，可以忽略js,jsx或json文件的后缀名
        alias: {
            '@': path.join(__dirname, './src') //使用@符号替换src目录
        }
    }
```

## 注意事项

### props参数只读

不管是函数组件还是类组件的传参都是只读的，不可以进行修改。

### 类组件和函数组件的区别

类组件是有私有数据和生命周期，因此是有状态组件；函数组件没有私有数据和生命周期，因此是无状态组件。
有状态和无状态的根本区别在于是否有this.state，state中的数据是可以被修改的。类组件加载的性能相对偏低。

## 数据区分

props一般是外部传入的，而state的数据为私有数据，一般是从网络加载或者类组件内部定义的。
