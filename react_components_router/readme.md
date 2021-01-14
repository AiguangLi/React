# react 实例 4：路由

## 引入 react-router

react 本身并没有路由，仅仅是一个简单的组件渲染库，如果需要使用路由，需要安装`react-router-dom`

```shell
cnpm i react-router-dom -S
```

在页面中使用 BrowserRouter 组件包裹，在页面路由导航中注册对应的路由和组件。如果是路由只渲染单个组件，
则使用 Switch 分支渲染，这样匹配时只渲染最后匹配的组件。

```jsx
import { BrowserRouter } from 'react-router-dom';

//...
const App = () => {
	const routers = [
		{ path: '/', name: '首页' },
		{ path: '/goods', name: '商品' },
		{ path: '/cart', name: '购物车' },
	];
	return (
		<Router>
			<div>
				<NavBar routers={routers}></NavBar>
				<Switch>
					<Route path="/goods">
						<Goods />
					</Route>
					<Route path="/cart">
						<CartController />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
```

## Link 标签路由跳转

Link 标签最终渲染为 a 标签，使用 Link 实现路由的跳转。

```jsx
import { Link } from 'react-router-dom';

//...
const NavBar = props => {
	return (
		<nav className="navbar navbar-dark bg-primary">
			<div className="container-fluid">
				{props.routers.map(route => (
					<Link to={route.path} className="navbar-brand">
						{route.name}
					</Link>
				))}
			</div>
		</nav>
	);
};
```
