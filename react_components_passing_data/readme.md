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

## 扩展

### bootstrap 的 container

bootstrap 会有一个 main 区域，这个是内容区，一般会留出导航栏和侧边栏，以及左边栏

```html
<main class="container"></main>
```
