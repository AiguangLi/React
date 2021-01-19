import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import indexStyle from '@/css/index.scss';

const NavBar = props => {
	return (
		<nav className={indexStyle.mb30 + ' navbar navbar-expand-lg navbar-light'}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					React Study
				</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						{props.routers.map(route => (
							<li className="nav-item" key={route.path}>
								<NavLink to={route.path} className="nav-link">
									{route.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
