
# react组件示例

## 列表组件 (CommentList)

列表数据一般从网络获取，因此需要设置为有状态组件，即类组件

## 列表元素组件 (CommentItem)

列表元素组件数据由列表父组件传入，数据不会变更，因此可以设置为函数组件

## 最基础的样式写法是通过js对象

```js
const styles = {
    h1: {color: 'red', fontSize: '14px', fontWeight: 10}
}
```

之后样式中使用...展开即可

```jsx
<h1 style = {styles.h1}></h1>
```

## 也可以将样式对象抽离为js文件，导出js对象使用即可

如styles.js文件：

```js
export default {
    h1: {color: 'red', fontSize: '14px', fontWeight: 10}
}
```

在jsx文件引入js样式对象

```js
import styles from '@/components/styles.js'

<h1 style = {styles.h1}></h1>  //使用和在文件定义js对象相同

```
