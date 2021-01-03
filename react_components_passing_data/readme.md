# react 实例 2：组件之间的数据传递方法

## React 中如果 render 需要返回多个同级组件时，可以使用 React.Fragment 包裹

```js
ReactDOM.render(
	<React.Fragment>
		<NavBar></NavBar>
		<Cart></Cart>
	</React.Fragment>,

	document.getElementById('app')
);
```
