import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar(props) {
	return (
		<nav className="navbar navbar-dark bg-primary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					购物车
				</a>
				<span className="badge badge-warning text-blue">共{props.totalCount}件商品</span>
			</div>
		</nav>
	);
}

export default NavBar;
