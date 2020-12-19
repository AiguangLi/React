
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

当一些路径很长时，需要指定路径可能导致不便，此时可以使用路径别名替代，例如使用@符号替换src目录。
在`webpack.config.js`文件的`resolve`节点增加`alias`别名参数即可：

```js
    resolve: {
        extensions: ['.js', '.jsx', '.json'],  //引入自定义组件时，可以忽略js,jsx或json文件的后缀名
        alias: {
            '@': path.join(__dirname, './src') //使用@符号替换src目录
        }
    }
```
