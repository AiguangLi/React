import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from '@/components/navbar';
import Goods from '@/pages/goods';
import GoodsDetail from '@/pages/goodsDetail';
import CartController from '@/pages/cart_controller';
import OrderController from '@/pages/order_controller';
import UserIndex from '@/pages/users/user_index';
import NotFound from '@/pages/not_found';

const App = () => {
	const routers = [
		{ path: '/', name: '首页' },
		{ path: '/goods', name: '商品' },
		{ path: '/cart', name: '购物车' },
		{ path: '/orders', name: '订单' },
		{ path: '/users', name: '个人中心' },
	];
	return (
		<Router>
			<div>
				<NavBar routers={routers}></NavBar>
				<Switch>
					<Route path="/goods/:id" render={props => <GoodsDetail {...props} />}></Route>
					<Route path="/goods">
						<Goods />
					</Route>
					<Route path="/cart">
						<CartController />
					</Route>
					<Route path="/users" render={props => <UserIndex {...props} />}></Route>
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
