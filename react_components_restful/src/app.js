import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import authService from '@/services/auth';

import NavBar from '@/components/navbar';
import GoodsIndex from '@/pages/goods/goodsIndex';
import GoodsDetail from '@/pages/goods/goodsDetail';
import CartController from '@/pages/cartController';
import OrderController from '@/pages/orderController';
import UserIndex from '@/pages/users/userIndex';
import LoginForm from '@/pages/users/loginForm';
import Logout from '@/pages/users/logout';
import RegisterForm from '@/pages/users/registerForm';
import NotFound from '@/pages/notFound';
import AddGoodsForm from '@/pages/goods/addGoodsForm';
import EditGoodsForm from '@/pages/goods/editGoodsForm';
import PostIndex from '@/pages/posts/postIndex';
import EditPostForm from '@/pages/posts/editPostForm';
import AddPostForm from '@/pages/posts/addPostForm';
import ProtectRoute from '@/components/common/protectRoute';

class App extends Component {
	state = { user: null };

	componentDidMount() {
		const user = authService.getCurrentUser();
		this.setState({ user });
	}

	render() {
		const routers = this.getRouters();
		return (
			<Router>
				<div>
					<ToastContainer
						position="top-center"
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<NavBar routers={routers}></NavBar>
					<Switch>
						<Route
							path="/posts/add"
							render={props => <AddPostForm {...props} />}
						></Route>
						<Route
							path={'/posts/edit/:id'}
							render={props => <EditPostForm {...props} />}
						></Route>
						<Route path="/posts" render={props => <PostIndex {...props} />}></Route>
						<ProtectRoute
							path="/goods/edit/:id"
							render={props => <EditGoodsForm {...props} />}
						></ProtectRoute>
						<ProtectRoute
							path="/goods/add"
							render={props => <AddGoodsForm {...props} />}
						></ProtectRoute>
						<Route
							path="/goods/:id"
							render={props => <GoodsDetail {...props} />}
						></Route>
						<Route path="/goods">
							<GoodsIndex />
						</Route>
						<Route path="/logout">
							<Logout />
						</Route>
						<Route path="/cart" render={props => <CartController {...props} />}></Route>
						<Route path="/users" render={props => <UserIndex {...props} />}></Route>
						<Route path="/login" render={props => <LoginForm {...props} />}></Route>
						<Route
							path="/register"
							render={props => <RegisterForm {...props} />}
						></Route>
						<Route
							path="/orders"
							render={props => <OrderController {...props} />}
						></Route>
						<Route path="/not-found">
							<NotFound />
						</Route>
						<Redirect from="/" to="/cart" />
						<Redirect to="/not-found" />
					</Switch>
				</div>
			</Router>
		);
	}

	getRouters = () => {
		const routers = [
			{ path: '/goods', name: '商品' },
			{ path: '/cart', name: '购物车' },
			{ path: '/orders', name: '订单' },
			{ path: '/posts', name: '文章' },
			{ path: '/users', name: '个人中心' },
		];
		if (this.state.user) {
			routers.push({ path: '/logout', name: '退出登录' });
		} else {
			routers.push({ path: '/login', name: '登录' }, { path: '/register', name: '注册' });
		}

		return routers;
	};
}

export default App;
