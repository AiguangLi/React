import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav class="navbar navbar-dark bg-primary">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						Navbar
					</a>
				</div>
			</nav>
		);
	}
}

export default NavBar;
