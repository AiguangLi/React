# react 实例 5：表单

## NavLink

NavLink 是特殊的导航标记，当当前路由匹配时会自动给样式加上 active 属性以高亮导航

## 表单 ref

ref 是 react 引用 DOM 的一种特殊方式，通过该方式可以直接拿到 dom 元素的引用，但是推荐尽量少用这种方式。

```js
// 创建ref引用
username = React.createRef();

// 获取ref引用的最新值
this.username.current.value;

//虚拟DOM绑定
<input
	ref={this.username}
	type="text"
	className="form-control"
	id="username"
	aria-describedby="usernameHelp"
></input>;
```

## 拦截表单的默认提交行为

默认表单点击提交按钮时会重新请求资源，因此需要使用 e.preventDefault()方法拦截默认的提交行为。

```jsx

handleSubmit = e => {
	e.preventDefault();
};

//render方法内
<form onClick={this.handleSubmit}>
```

## 受控元素

类似 input 这类的 html 元素，本身具备自己的属性，如 value，此时若将 value 与类组件的 state 绑定后，则自身的属性无法再控制（输入内容无法回显），
需要通过类组件进行控制回显。此类元素称之为受控元素。React 中没有类似 Vue 的双向绑定，因此需要在 onChange 方法中更新 state 内容才可以回显。

```js
handleOnChange = e => {
	const currentTarget = e.currentTarget;
	const { account } = this.state;
	account[currentTarget.name] = currentTarget.value;
	this.setState({ account });
};
```
