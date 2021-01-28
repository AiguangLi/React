import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from '@/components/navbar';
import GoodsIndex from '@/pages/goods/goodsIndex';
import GoodsDetail from '@/pages/goods/goodsDetail';
import CartController from '@/pages/cartController';
import OrderController from '@/pages/orderController';
import UserIndex from '@/pages/users/userIndex';
import LoginForm from '@/pages/users/loginForm';
import RegisterForm from '@/pages/users/registerForm';
import NotFound from '@/pages/notFound';
import AddGoodsForm from '@/pages/goods/addGoodsForm';
import EditGoodsForm from '@/pages/goods/editGoodsForm';
import PostIndex from '@/pages/posts/postIndex';

const App = () => {
	const routers = [
		{ path: '/goods', name: '商品' },
		{ path: '/cart', name: '购物车' },
		{ path: '/orders', name: '订单' },
		{ path: '/posts', name: '文章' },
		{ path: '/users', name: '个人中心' },
	];
	return (
		<Router>
			<div>
				<NavBar routers={routers}></NavBar>
				<Switch>
					<Route path="/posts">
						<PostIndex />
					</Route>
					<Route
						path="/goods/edit/:id"
						render={props => <EditGoodsForm {...props} />}
					></Route>
					<Route path="/goods/add" render={props => <AddGoodsForm {...props} />}></Route>
					<Route path="/goods/:id" render={props => <GoodsDetail {...props} />}></Route>
					<Route path="/goods">
						<GoodsIndex />
					</Route>
					<Route path="/cart">
						<CartController />
					</Route>
					<Route path="/users" render={props => <UserIndex {...props} />}></Route>
					<Route path="/login">
						<LoginForm />
					</Route>
					<Route path="/register">
						<RegisterForm />
					</Route>
					<Route path="/orders" render={props => <OrderController {...props} />}></Route>
					<Route path="/not-found">
						<NotFound />
					</Route>
					<Redirect from="/" to="/cart" />
					<Redirect to="/not-found" />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
