# react 实例 4：路由

## 引入 react-router

react 本身并没有路由，仅仅是一个简单的组件渲染库，如果需要使用路由，需要安装`react-router-dom`

```shell
cnpm i react-router-dom -S
```

在页面中使用 BrowserRouter 组件包裹

```jsx
import { BrowserRouter } from 'react-router-dom';

//...
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);
```

## 注册路由 Route

在页面路由导航中注册对应的路由和组件。
