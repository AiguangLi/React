import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

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

export default NavBar;
