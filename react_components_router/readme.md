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

Link 标签最终渲染为 a 标签，使用 Link 实现路由的跳转。但是相比 a 标签，Link 不会请求已有资源（单页面应用特性），而是增加了一个 onClick 方法拦截的 a 标签的跳转。

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

## 路由参数传递

路由参数通过 props 的 match 进行传递，match 包括了

-   isExact：路由是否精准匹配
-   path：当前匹配的理由规则
-   url：当前路由 URL
-   params： 路由参数对象

使用路由参数时，需要使用 render 属性，并使用箭头函数将 props 携带过去。路由参数如果是可选的，可以加上?。

```jsx
<Route path="/goods/:id" render={props => <GoodsDetail {...props} />}></Route>
<Route
	path="/orders/:year/:month?"
	render={props => <OrderController {...props} />}
></Route>
```

## Switch 分支路由

Switch 组件会从上到下根据路由地址依次检测是否有匹配的规则，若没有就用最后一个规则渲染

## 非首页路由刷新出现 404 问题解决方法

在 webpack.config.js 中增加配置即可：

```js
module.exports = {
	mode: 'development',
	plugins: [htmlPlugin],
	devServer: {
		historyApiFallback: true,
	},
	//...
};
```

可参考：[非首页路由刷新出现 404 问题解决方法](http://echizen.github.io/tech/2016/07-05-webpack-dev-server-react-router-config)

## 嵌套路由

在 app.js 中定义了顶级路由外，如果子页面还有下级导航，可以使用嵌套路由。例如在个人中心下有个人信息和个人收藏路由。可以如下方式实现。
同时需要修改 app.js 的/users 路由匹配方式为精准匹配，属性 isExact={true}。为了下级路由使用相对路径，可以使用 props.match.url 拼接相对路径，

```jsx
class UserIndex extends Component {
	userPagesRoute = [
		{ path: this.props.match.url + '/info', name: '个人信息' },
		{ path: this.props.match.url + '/liked', name: '个人收藏' },
	];
	render() {
		const { url } = this.props.match;
		return (
			<div>
				<h3>User Index</h3>
				<div className="container-fluid">
					<div className="row">
						<SideBar items={this.userPagesRoute} activeItem={this.userPagesRoute[0]} />
					</div>
				</div>
				<Route path={url + '/info'}>
					<UserInfo />
				</Route>
				<Route path={url + '/liked'}>
					<UserLiked />
				</Route>
			</div>
		);
	}
}
```

```jsx
// app.js
// ...
<Route path="/users" isExact={true} render={props => <UserIndex {...props} />}></Route>
```
