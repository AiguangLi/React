import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Goods extends Component {
	render() {
		return (
			<div>
				<h1>Goods</h1>
				<ul>
					<li>
						<Link to="/goods/1">Goods 1</Link>
					</li>
					<li>
						<Link to="/goods/2">Goods 2</Link>
					</li>
					<li>
						<Link to="/goods/23">Goods 3</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Goods;
