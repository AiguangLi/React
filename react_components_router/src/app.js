import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '@/components/navbar';
import Home from '@/pages/home';
import Goods from '@/pages/goods';
import CartController from '@/pages/cart_controller';

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

export default App;
