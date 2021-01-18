import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = props => {
	console.log(props);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-primary">
			<div className="container-fluid">
				<Link className="navbar-brand text-light" to="/">
					React Study
				</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						{props.routers.map(route => (
							<li className="nav-item" key={route.path}>
								<Link to={route.path} className="nav-link active text-light">
									{route.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
