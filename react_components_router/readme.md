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

使用路由参数时，需要使用 render 属性，并使用箭头函数将 props 携带过去。路由参数如果是可选的，可以加上?。但是应当尽量避免使用可选路由参数。

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
若不想在嵌套路由页面显示父级页面，则可以修改 app.js 的/users 路由匹配方式为精准匹配，使用属性 exact。为了下级路由使用相对路径，可以使用 props.match.url 拼接相对路径，

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
<Route path="/users" exact render={props => <UserIndex {...props} />}></Route>
```

## url 参数（Query String）提取

在路由传递的 location 中包含 search 属性，可以从中提取 url 参数，需要使用 query-string 插件。

```shell
cnpm i query-string -S
```

使用时导入 queryString，使用 queryString.parse() 方法就可以解析 url 参数了，
需要注意的是，url 参数都是字符串，因此在有些时候需要转换为需要的数据类型。

## Redirect 跳转

redirect 跳转可以拦截路由，进入指定页面。例如：

-   在末尾匹配不到路由时跳转到 404 页面
-   未登录时跳转到登录页面
-   已登录时访问登录页跳转到首页
-   访问指定页面跳转到其他页面

## 导航实现页面导航

可以使用 props 中的 history 的 push 方法实现页面导航。
如果移除当前页面，则需要使用 replace。可以理解 history 就是历史路由堆栈 r，可以有 push，goBack 和 replace 等方法实现路由。

```js
//返回上一级页面
this.props.history.goBack();
//使用指定页面替换当前页面（当前页面从历史导航记录移除）
this.props.history.replace('/goods');
//前往指定页面（返回时会返回当前页面）
this.props.history.push('/goods');
```
